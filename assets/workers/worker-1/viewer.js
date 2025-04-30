export default {
  async fetch(request) {
    const url = new URL(request.url)
    const func = url.searchParams.get('function')

    const response = await fetch(request)
    const contentType = response.headers.get("content-type") || ""

    if (!contentType.includes("text/html")) {
      return response
    }

    let injector
    if (func === 'iframe') {
      injector = new IframeScriptInjector()
    } else if (func === 'komisi-asibuka-logistics') {
      injector = new KomisiScriptInjector()
    }

    if (injector) {
      return new HTMLRewriter()
        .on("body", injector)
        .transform(response)
    }

    return response
  }
}

class IframeScriptInjector {
  element(element) {
    element.append(
      `<script>
        (() => {
          const q = new URLSearchParams(location.search);
          const t = q.get("title") || "Embedded";
          const s = q.get("short") || "";
          const o = q.get("orientation") || "landscape";
          const r = q.get("id");
          const d = document.getElementById("EmbedContent");
          const a = document.getElementById("EmbedTitle");
          document.title = t;
          a && (a.textContent = t);
          d && d.classList.add(o);
          if (s && r && d) {
            const i = document.createElement("iframe");
            i.src = \`https://\${s}/\${r}\`;
            i.title = t;
            i.style.border = "none";
            i.setAttribute("class", "media");
            i.setAttribute("allowfullscreen", "");
            i.setAttribute("frameborder", "0");
            i.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
            i.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
            d.removeAttribute('hidden');
            d.appendChild(i);
          }
          document.querySelectorAll(".hide-on-embed").forEach(el => el.remove());
          history.replaceState && history.replaceState({}, t, location.origin + location.pathname);
        })();
      </script>`,
      { html: true }
    )
  }
}

class KomisiScriptInjector {
  element(element) {
    element.append(
      `<script>
        (function() {
          const params = new URLSearchParams(window.location.search);
          const embedContainer = document.getElementById('EmbedResult');
          const embedTitle = document.getElementById('EmbedTitle');

          let index = 1;
          let hasAnyData = false;

          // Optionally update document title from the first title
          const mainTitle = params.get('title') || "LAPORAN";
          if (mainTitle) {
            document.title = mainTitle;
            if (embedTitle) {
              embedTitle.textContent = '';
              embedTitle.append(mainTitle);
            }
          }

          while (true) {
            const title = params.get('title' + index);
            const id = params.get('id' + index);
            const gid = params.get('gid' + index);
            if (!title || !id || !gid) break;

            const csvUrl = \`https://docs.google.com/spreadsheets/d/e/\${id}/pub?gid=\${gid}&single=true&output=csv\`;

            fetch(csvUrl)
              .then(res => res.text())
              .then(csv => {
                const rows = csv.trim().split('\\n').map(r => r.split(','));

                // Create title element
                const heading = document.createElement('h2');
                heading.className = 'main-heading';
                heading.textContent = title;

                // Create table container
                const container = document.createElement('div');
                container.className = 'table-container';

                const table = document.createElement('table');
                rows.forEach((row, i) => {
                  const tr = document.createElement('tr');
                  row.forEach(cell => {
                    const cellEl = document.createElement(i === 0 ? 'th' : 'td');
                    cellEl.innerHTML = cell;
                    tr.appendChild(cellEl);
                  });
                  table.appendChild(tr);
                });

                container.appendChild(table);

                if (embedContainer) {
                  embedContainer.appendChild(heading);
                  embedContainer.appendChild(container);
                  embedContainer.removeAttribute('hidden');
                }

              })
              .catch(err => {
                const errMsg = document.createElement('p');
                errMsg.textContent = \`Failed to load data for "\${title}"\`;
                embedContainer && embedContainer.appendChild(errMsg);
                console.error('CSV fetch error:', err);
              });

            hasAnyData = true;
            index++;
          }

          document.querySelectorAll('.hide-on-embed').forEach(el => el.remove());

          if (window.history.replaceState) {
            const cleanUrl = window.location.origin + window.location.pathname;
            window.history.replaceState({}, mainTitle || '', cleanUrl);
          }
        })();
      </script>`,
      { html: true }
    );
  }
}
