---
layout: default
---

<div class="table-container">
<table>
  <tbody>
    {% assign prev_year = "" %}
    {% for entry in site.data.projects %}
      {% assign year = entry[0] %}
      {% for project in entry[1] %}
        <tr>
          <th align="right" width="15%">
            {% if year != prev_year %}
              {{ year }}
              {% assign prev_year = year %}
            {% endif %}
          </th>
          <td>
            {{ project.titel }}
            {% if project.goudenkalf == true %}
              <img src="assets/goudenkalf2.png" title="Gouden Kalf" />
            {% endif %}
          </td>
          <td>
            {{ project.producent }}
          </td>
          <td>
            {{ project.type }}
          </td>
          <td>
            {{ project.regisseur }}
          </td>
        </tr>
      {% endfor %}
    {% endfor %}
  </tbody>
</table>
</div>

<div class="table-container">
<table>
  <tbody>
    <tr>
      <th align="right" width="30%">Programma’s</th>
      <td>Avid Media Composer / Adobe Photoshop</td>
    </tr>
    <tr>
      <th align="right">Opleiding</th>
      <td>Nederlandse Filmacademie Amsterdam - Bachelor montage - 2010 - 2014</td>
    </tr>
    <tr>
      <th align="right">Studio</th>
      <td>Rozengracht 105 b8, 1016LV Amsterdam</td>
    </tr>
    <tr>
      <th align="right">Contact</th>
      <td><a href="mail@lotrossmark.nl">mail@lotrossmark.nl</a>
        / +31 (0)6 250 626 58</td>
    </tr>
    <tr>
      <th align="right">Links</th>
      <td>
        <img src="assets/imdb.png" alt="IMDB" />
        <a href="https://www.imdb.com/name/nm6113080/">imdb</a>
      </td>
    </tr>

  </tbody>
</table>
</div>
