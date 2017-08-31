---
layout: page
permalink: /news/
title: News
description: Updates from Solo Press
---

<ul class="post-list">
{% for post in site.news reversed %}
    <li>
        <h2><a class="poem-title" href="{{ news.url | prepend: site.baseurl }}">{{ news.title }}</a></h2>
        <p class="post-meta">{{ news.date | date: '%B %-d, %Y — %H:%M' }}</p>
      </li>
{% endfor %}
</ul>
