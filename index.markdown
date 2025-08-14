---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<p>Lot Rossmark is filmmonteur, werkzaam in Amsterdam, Nederland.</p>

<table>
  <thead>
    <tr>
      <th>Jaar</th>
      <th>Titel</th>
      <th>Producent</th>
      <th>Filmtype</th>
      <th>Regisseur</th>
    </tr>
  </thead>
  <tbody>
    {% assign prev_year = "" %}
    {% for entry in site.data.projects %}
      {% assign year = entry[0] %}
      {% for project in entry[1] %}
        <tr>
          <td>
            {% if year != prev_year %}
              <strong>{{ year }}</strong>
              {% assign prev_year = year %}
            {% endif %}
          </td>
          <td>
            {{ project.titel }}
            {% if project.goudenkalf == true %}
              <img src="{{ site.baseurl }}/assets/goudenkalf2.png" title="Gouden Kalf" />
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
      <th>Links</th>
      <td>
        <img src="{{ site.baseurl }}/assets/imdb.png" alt="IMDB" />
        <a href="https://www.imdb.com/name/nm6113080/">imdb</a>
      </td>
    </tr>

  </tbody>
</table>
