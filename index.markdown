---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

Lot Rossmark is filmmonteur, werkzaam in Amsterdam, Nederland.

<table>
  <thead>
    <tr>
      <th>Year</th>
      <th>Project Name</th>
      <th>Description</th>
      <th>Link</th>
    </tr>
  </thead>
  <tbody>
    {% assign prev_year = "" %}
    {% for entry in site.data.projects %}
    {% for project in entry.projects %}
    <tr>
      {% if entry.year != prev_year %}
      <td>{{ entry.year }}</td>
      {% assign prev_year = entry.year %}
      {% else %}
      <td></td>
      {% endif %}
      <td>{{ project.name }}</td>
      <td>{{ project.description }}</td>
      <td><a href="{{ project.link }}">View Project</a></td>
    </tr>
    {% endfor %}
    {% endfor %}
  </tbody>
</table>

<table>
  <tbody>
    <tr>
      <th>Programma’s</th>
      <td>Avid Media Composer / Adobe Photoshop</td>
    </tr>
    <tr>
      <th>Opleiding</th>
      <td>Nederlandse Filmacademie Amsterdam - Bachelor montage - 2010 - 2014</td>
    </tr>
    <tr>
      <th>Studio</th>
      <td>Rozengracht 105 b8, 1016LV Amsterdam</td>
    </tr>
    <tr>
      <th>Contact</th>
      <td><a href="mailto:lotnana@hotmail.com">mail@lotrossmark.nl</a>
        / +31 (0)6 250 626 58</td>
    </tr>
    <tr>
      <th></th>
      <td>
        <a href="https://www.imdb.com/name/nm6113080/">imdb</a>
      </td>
    </tr>
  </tbody>
</table>
