---
title: Seminar
nav:
  order: 3
  tooltip: Bi-weekly lab seminar
# 系列的默认信息; 每条报告可以单独覆盖 time / location。留空的不显示。
seminar:
  schedule: ""      # 如 "Every other Thursday"
  time: "15:30-16:30"
  location: ""      # 如 "Room T5, CS Building, Aalto University"
---

# {% include icon.html icon="fa-solid fa-person-chalkboard" %}Seminar

Our bi-weekly lab seminar, where group members present their work and we host invited speakers.
External visitors are welcome; please get in touch if you would like to attend or give a talk.

{% assign info = page.seminar %}
<p class="seminar-facts">
  {% if info.schedule != "" %}<span>{% include icon.html icon="fa-regular fa-calendar" %}{{ info.schedule }}</span>{% endif %}
  {% if info.time != "" %}<span>{% include icon.html icon="fa-regular fa-clock" %}{{ info.time }} (Helsinki time)</span>{% endif %}
  {% if info.location != "" %}<span>{% include icon.html icon="fa-solid fa-location-dot" %}{{ info.location }}</span>{% endif %}
  <span>{% include icon.html icon="fa-regular fa-calendar-plus" %}<a href="{{ "seminars.ics" | relative_url }}">Add to calendar (.ics)</a></span>
</p>

{% assign today = site.time | date: "%Y-%m-%d" %}
{% assign no_talks = "" | split: "," %}
{% assign talks = site.data.seminars | default: no_talks | sort: "date" %}

{% include section.html %}

## Upcoming

<div class="talk-list" id="talks-upcoming">
{% for t in talks %}{% assign d = t.date | date: "%Y-%m-%d" %}{% if d >= today %}{% include seminar-talk.html talk=t %}{% endif %}{% endfor %}
</div>
<p class="talk-empty" id="talks-upcoming-empty" hidden>No upcoming talks scheduled yet.</p>

{% include section.html %}

## Past Talks

<div class="talk-list" id="talks-past">
{% assign past = talks | reverse %}
{% for t in past %}{% assign d = t.date | date: "%Y-%m-%d" %}{% if d < today %}{% include seminar-talk.html talk=t %}{% endif %}{% endfor %}
</div>
<p class="talk-empty" id="talks-past-empty" hidden>No past talks yet.</p>
