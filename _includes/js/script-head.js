{% if page.is_amp %}
<link rel="dns-prefetch" href="https://cdn.ampproject.org/">
<link rel="preload" as="script" href="https://cdn.ampproject.org/v0.js">
<script async src="https://cdn.ampproject.org/v0.js"></script>
<link rel="preload" as="script" href="https://cdn.ampproject.org/v0/amp-ad-0.1.js">
<script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
<link rel="preload" as="script" href="https://cdn.ampproject.org/v0/amp-bind-0.1.js">
<script async='async' custom-element='amp-bind' src='https://cdn.ampproject.org/v0/amp-bind-0.1.js'></script>
<link rel="preload" as="script" href="https://cdn.ampproject.org/v0/amp-form-0.1.js">
<script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
<link rel="preload" as="script" href="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js">
<script async custom-element="amp-auto-ads" src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"></script>
{% if content contains "amp-iframe" %}
<link rel="preload" as="script" href="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></link>
<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
{% endif %}
{% if content contains "amp-accordion"%}
<script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"></script>
{% endif %}
{% else %}
{% if page.url contains "/search" %}
<link rel="dns-prefetch" href="https://unpkg.com">
<link rel="preload" as="script" href="https://unpkg.com/lunr@2.3.9/lunr.js">
<script src="https://unpkg.com/lunr@2.3.9/lunr.js"></script>
{% endif %}
<script>!(function(c,u,f){function s(n,t,e,o){N?z(n,t):(1<(e=e===f?s.lazy:e)&&(o=n,S.push(n=function(){o&&(o(),o=f)},e)),(e?q:S).push(n,Math.max(e?350:0,t)))}function r(n){return"string"==typeof(n=n||{})?{id:n}:n}function a(t,n,e,o){l(n.split(" "),function(n){(o||c)[t+"EventListener"](n,e||i)})}function l(n,t){n.map(t)}function d(n,t){l(D.call(n.attributes),function(n){t(n.name,n.value)})}function p(n,t,e,o,i,c){if(i=I.createElement(n),e&&a(w,b,e,i),t)for(c in t)i[j](c,t[c]);return o&&I.head.appendChild(i),i}function h(n,t){return D.call((t||I).querySelectorAll(n))}function m(o,n){l(h("source,img",o),m),d(o,function(n,t,e){(e=y.exec(n))&&o[j](e[1],t)}),"string"==typeof n&&(o.className+=" "+n),o[b]&&o[b]()}function n(n,t,e){s(function(o){l(o=h(n||"script[type=deferjs]"),function(n,e){n[A]&&(e={},d(n,function(n,t){n!=C&&(e[n==A?"href":n]=t)}),e.as=g,e.rel="preload",p(v,e,f,c))}),(function i(n,e,t){(n=o[k]())&&(e={},d(n,function(n,t){n!=C&&(e[n]=t)}),t=e[A]&&!("async"in e),(e=p(g,e)).text=n.text,n.parentNode.replaceChild(e,n),t?a(w,b+" error",i,e):i())})()},t,e)}function i(n,t){for(t=N?(a(e,o),q):(a(e,x),N=s,q[0]&&a(w,o),S);t[0];)z(t[k](),t[k]())}var y=/^data-(.+)/,v="link",g="script",b="load",t="pageshow",w="add",e="remove",o="touchstart mousemove mousedown keydown wheel",x="on"+t in c?t:b,j="setAttribute",k="shift",A="src",C="type",E=c.IntersectionObserver,I=c.document,N=/p/.test(I.readyState),S=[],q=[],z=c.setTimeout,D=S.slice;s.all=n,s.dom=function(n,t,i,c,r){s(function(e){function o(n){c&&!1===c(n)||m(n,i)}e=E?new E(function(n){l(n,function(n,t){n.isIntersecting&&(e.unobserve(t=n.target),o(t))})},r):f,l(h(n||"[data-src]"),function(n){n[u]||(n[u]=s,e?e.observe(n):o(n))})},t,!1)},s.css=function(n,t,e,o,i){(t=r(t)).href=n,t.rel="stylesheet",s(function(){p(v,t,o,c)},e,i)},s.js=function(n,t,e,o,i){(t=r(t)).src=n,s(function(){p(g,t,o,c)},e,i)},s.reveal=m,c[u]=s,N||a(w,x),n()})(this,"Defer");</script>
{% endif %}