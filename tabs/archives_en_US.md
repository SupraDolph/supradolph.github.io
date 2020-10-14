---
title: Archives
type: archives
lang: en_US
# The Archives of posts.
# v2.0

---

<div id="archives" class="pl-xl-2">

{% for post in site.posts %}
  {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
  {% capture pre_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}
  {% if forloop.first %}
    {% assign last_day = "" %}
    {% assign last_month = "" %}
  <span class="lead">{{this_year}}</span>
  <ul class="list-unstyled">
  {% endif %}
  {% if post.lang == page.lang %}

    <li>
      <div>
        {% capture this_day %}{{ post.date | date: "%d" }}{% endcapture %}
        {% capture this_month %}{{ post.date | date: "%b" }}{% endcapture %}
        <span class="date day">{{ this_day }}</span>
        <span class="date month small text-muted">{{ this_month }}</span>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </div>
    </li>
    {% endif %}

  {% if forloop.last %}
  </ul>
  {% elsif this_year != pre_year %}
  </ul>
  <span class="lead">{{pre_year}}</span>
  <ul class="list-unstyled">
    {% assign last_day = "" %}
    {% assign last_month = "" %}
  {% endif %}
{% endfor %}
</div>