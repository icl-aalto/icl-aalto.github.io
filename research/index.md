---
title: Research
nav:
  order: 2
  tooltip: Research themes and publications
---

# {% include icon.html icon="fa-solid fa-microscope" %}Research

✉ corresponding author · † equal contribution


## Preprints & Under Review

{% include list.html data="citations" component="citation" style="rich" filter="type == 'preprint'" years="false" %}

{% include section.html %}

## Selected Publications

{% include list.html data="citations" component="citation" style="rich" filter="highlight == true and type != 'preprint'" years="false" %}

{% include section.html %}

## Support

Our research is supported by the ELLIS Institute Finland, Aalto University and the Helsinki Institute for Information Technology (HIIT).
We gratefully acknowledge computational resources provided by the Aalto Triton cluster, CSC – IT Center for Science, and the LUMI supercomputer.

<div class="support-logos">
  <a href="https://www.ellisinstitute.fi/" title="ELLIS Institute Finland"><img src="{{ "images/support/ellis-institute-finland.svg" | relative_url }}" alt="ELLIS Institute Finland" class="wide"><span>ELLIS Institute Finland</span></a>
  <a href="https://www.aalto.fi/en" title="Aalto University"><img src="{{ "images/support/aalto.svg" | relative_url }}" alt="Aalto University"><span>Aalto University</span></a>
  <a href="https://www.hiit.fi/" title="HIIT"><img src="{{ "images/support/hiit.svg" | relative_url }}" alt="Helsinki Institute for Information Technology" class="wide"><span>HIIT</span></a>
  <a href="https://scicomp.aalto.fi/triton/" title="Triton cluster, Aalto Scientific Computing"><img src="{{ "images/support/triton-asc.svg" | relative_url }}" alt="Aalto Scientific Computing"><span>Triton (Aalto Scientific Computing)</span></a>
  <a href="https://csc.fi/en/" title="CSC – IT Center for Science"><img src="{{ "images/support/csc.svg" | relative_url }}" alt="CSC – IT Center for Science"><span>CSC</span></a>
  <a href="https://www.lumi-supercomputer.eu/" title="LUMI supercomputer"><img src="{{ "images/support/lumi.png" | relative_url }}" alt="LUMI supercomputer" class="flat"><span>LUMI</span></a>
</div>

{% include section.html %}

## All Publications

{% include search-box.html %}

{% include search-info.html %}

{% include list.html data="citations" component="citation" filter="type != 'preprint'" %}
