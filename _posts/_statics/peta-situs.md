---
layout: static
title: Peta Situs
date: 2025-04-02 00:00:01
permalink: /page/peta-situs/
description: Laman yang menampilkan semua postingan dari ASIBUKA Group. Silahkan temukan artikel yang anda butuhkan disini.
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzW-PWjlR79NJm2tMHjQTpDd0uNG3_np5RfsauBbOgVGAWeSBIQ301aNDABD49cux3utQriwWuhU-N-5b8WrFKq4AB6uiu1ZEQ7M3diAp0JV3zr8myt7GAkSilsKeh6nAh_XKphudlX-kSgfAvLwVgb584cezbmwcD5AZgpAKTn3ZP51pKZ3sGiBpQ5cU/s0-rw/peta-situs.jpeg
keywords: sitemap, peta situs
robots: index, follow
lang: id
author: ASIBUKA Group
---
<div class='table-container hide-on-print'>
<table id='sitemap'>
  <thead>
    <tr>
      <th>Judul</th>
      <th>Penulis</th>
      <th>Tanggal</th>
      <th>Kategori</th>
      <th>Tags</th>
    </tr>
  </thead>
  <tbody>
    {% assign excluded_collections = "data, asibuka-logistics, drafts, private" | split: ", " %}
    
    {% assign custom_docs = "" | split: "" %}
    
    {% for collection in site.collections %}
      {% unless excluded_collections contains collection.label or collection.label == "posts" %}
        {% assign custom_docs = custom_docs | concat: collection.docs %}
      {% endunless %}
    {% endfor %}

    {% assign all_docs = site.posts | concat: custom_docs %}
    
    {% assign all_docs = all_docs | sort: "date" | reverse %}
    
    {% for post in all_docs %}
      {% if post.title and post.search != false %}
        <tr>
          <td><a href='{{ post.url }}' title='{{ post.title }}'>{{ post.title }}</a></td>
          <td>{{ post.author | default: "Unknown" }}</td>
          <td>{{ post.date | date: "%B %d, %Y" }}</td>
          <td>{{ post.categories | join: ", " }}</td>
          <td>{{ post.tags | join: ", " }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>
</div>