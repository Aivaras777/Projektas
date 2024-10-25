function generateHTML(produktai) {
  html = "";
  for (const produktas of produktai) {
    const foto = produktas.image;
    const pavadinimas = produktas.title;
    const aprasymas = produktas.description;
    const kaina = produktas.price;
    const senaKaina = produktas.oldPrice;
    const kategorija = produktas.category;
    const reitingas = produktas.rating;

    html += ` <div class="produktas">
          <div class="nuotrauka">
           <img
              src="${foto}"
              alt="Nuotrauka"
            />
          </div>
          <div class="info">
            <div class="kategorija">${kategorija}</div>
            <div class="pavadinimas">${pavadinimas}</div>
            <div class="reitingas">${reitingas}</div>
            <div class="aprasymas">
            ${aprasymas}
            </div>
            <div class="kaina">
              <p>${kaina} €<span class="senakaina">${senaKaina} €</span></p>
            </div>
          </div>
        </div>`;
  }
  const kortele = document.querySelector(".produktai-moterims");
  kortele.innerHTML = html;
  const kortele1 = document.querySelector(".produktai-vyrams");
  kortele1.innerHTML = html;
}
