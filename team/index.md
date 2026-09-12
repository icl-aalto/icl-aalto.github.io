---
title: Team
nav:
  order: 1
  tooltip: People in the lab
---

# {% include icon.html icon="fa-solid fa-users" %}Meet the Team

{% include section.html %}

{% assign pi = site.members | where: "role", "principal-investigator" | first %}
<div class="pi-block">
  <a class="pi-photo" href="{{ pi.url | relative_url }}">
    <img src="{{ pi.image | relative_url }}" alt="{{ pi.name }}">
    <span class="member-name">{{ pi.name }}</span>
  </a>
  <div markdown="1">

## Principal Investigator

{{ pi.content | strip_html | truncatewords: 60 }}

{% include button.html type="home-page" link=pi.links.home-page text="Personal page" style="bare" %}
{% include button.html type="google-scholar" link=pi.links.google-scholar style="bare" %}
{% include button.html link=pi.url text="Full bio" icon="fa-solid fa-arrow-right" flip=true style="bare" %}

  </div>
</div>

{% include section.html %}

{% include team-section.html role="postdoc" title="Postdocs" wide=true %}
{% include team-section.html role="phd" title="PhD Students" %}
{% include team-section.html role="intern,research-assistant,visitor" title="Interns, Research Assistants & Visitors" %}
{% include team-section.html role="master" title="Master Thesis Students" nowrap_note=true %}
{% include team-section.html role="alumni" title="Alumni" empty="Our alumni will be listed here." %}
