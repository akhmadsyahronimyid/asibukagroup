---
layout: default
title: Pages
permalink: /page/
description: Kumpulan artikel statis dari ASIBUKA Blog.
robots: index, follow
keywords: pages, statis, resmi
lang: id
toc: false
---
<h1 class="main-heading" id='EmbedTitle'>{{ page.title }}</h1>
<p class='text-center hide-on-embed'>{{ page.description }}</p>
<div id='EmbedResult'></div>
<div class='hide-on-embed post-containers' itemscope itemtype="https://schema.org/ItemList">
{% for post in site.statics %}
<article class="post-container" itemscope itemtype="https://schema.org/ListItem" itemprop="itemListElement">
<meta itemprop="position" content="{{ forloop.index }}">
<div class="post-image">
<a href="{{ post.url }}" title="{{ post.title }}" itemprop="url">
{% include image-lazy.html src=post.image title=post.title width="1600" height="900" layout="responsive"
%}
</a>
</div>
<div class="post-content">
<h2>
<a href="{{ post.url }}" title="{{ post.title }}" itemprop="name">{{ post.title }}</a>
</h2>
<p class="author">
<strong>Author:</strong> <span itemprop="author" itemtype="https://schema.org/Organization" itemscope><span itemprop="name">{{ post.author }}</span></span>
</p>
<p class="summary" itemprop="description">{{ post.description }}</p>
</div>
</article>
{% endfor %}
</div>
