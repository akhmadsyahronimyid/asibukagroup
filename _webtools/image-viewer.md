---
layout: static
title: Image Viewer
date: 2025-04-27 00:00:04
permalink: /alat/image/
description: Halaman khusus untuk mengakses gambar melalui Link Khusus dibagikan oleh ASIBUKA.
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgt9dV74ytZI30Wh4Y2YQOVDAA0m8BgANonjfDgdt_HDDIFLVWBtjUbmfxSmJRIBXtqWaUJFHmt2MeCP4uuQxxHMKC5c89KBv67WB97lsQNQ3DZtDG0mJlGuYk2aO0276N21M7su15rfcxXLUVJMW0vzhqYlrVEKp5bcHT9eSke40SZ30JiMxnQn9Ti-hM/s0-rw/image-viewer.jpeg
keywords: image viewer
author: ASIBUKA Group
robots: index, follow
lang: id
comments: true
---
<div id='imagetitle'></div><div id='imageshere'></div>

<blockquote><b>CREDIT</b>: Halaman ini adalah fitur khusus untuk menampilkan berbagai gambar yang dibagikan di ASIBUKA. Fitur di laman ini hanya bisa diakses melalui link tertentu. Jika langsung dibuka, maka laman ini tidak akan menampilkan gambar apapun. Fitur ini dibuat oleh <a id='creditlink' href='https://www.asibuka.com' title='ASIBUKA'>ASIBUKA</a>.</blockquote>

<script>
function getParams(url) {
  const u = new URL(url);
  const p = {};

  for (const [key, value] of u.searchParams) {
    if (!p[key]) p[key] = [];
    p[key].push(value);
  }
  return p;
}

function renderFromURL(url) {
  const p = getParams(url);

  // --- Render Title ---
  if (p.title && p.title[0]) {
    const titleBox = document.getElementById("imagetitle");
    if (titleBox) {
      titleBox.innerHTML = `<h2>${p.title[0]}</h2>`;
    }
  }

  // --- Render Images ---
  const ids   = p.id   || [];
  const imgs  = p.img  || [];
  const files = p.file || [];

  const count = Math.min(ids.length, imgs.length, files.length);
  let html = "";

  for (let i = 0; i < count; i++) {
    html += `
<img lazy="lazy" width="100%" height="auto" title="image"
     src="https://blogger.googleusercontent.com/img/b/${ids[i]}/${imgs[i]}/s0-rw/${files[i]}" />`;
  }

  const imagesBox = document.getElementById("imageshere");
  if (imagesBox) {
    imagesBox.innerHTML = html;
  }

  // --- Clean the URL ---
  history.replaceState(null, "", location.pathname);
}

// Run automatically on load
renderFromURL(location.href);
</script>