function generateHTML(produktai) {
  const produktaiMoterims = produktai.filter(
    (produktas) => produktas.category === "women"
  );
  const produktaiVyrams = produktai.filter(
    (produktas) => produktas.category === "men"
  );

  function rodytiZvaigzdutes(skaicius) {
    let zvaigzdutes = "";
    for (let i = 0; i < skaicius; i++) {
      zvaigzdutes += `<i class="bi bi-star-fill star"></i>`;
    }
    return zvaigzdutes;
  }

  function generateProductHTML(produktai, elementas) {
    let html = "";
    for (const produktas of produktai) {
      const foto = produktas.image;
      const pavadinimas = produktas.title;
      const aprasymas = produktas.description;
      const manoAprasymas = "Atrask stilingų drabužių įvairovę.";
      const naujasAprasymas = manoAprasymas + " " + aprasymas;
      const kaina = produktas.price;
      const senaKaina = produktas.oldPrice;
      const kategorija = produktas.category;
      let kategorijaLT;
      switch (kategorija) {
        case "women":
          kategorijaLT = "Moterims";
          break;
        case "men":
          kategorijaLT = "Vyrams";
          break;
        default:
          kategorijaLT = "Nerasta";
      }
      const reitingas = produktas.rating;
      const vertinimas = rodytiZvaigzdutes(reitingas);

      html += `<div class="produktas">
          <div class="nuotrauka">
            <img
              class="ftn"
              src="${foto}"
              alt="Nuotrauka"
              onmouseover="this.style.transform = 'scale(1.2)';" onmouseout="this.style.transform = 'scale(1)';"
            />
            ${
              produktas.isNew ? `<div class="new">Nauja prekė</div>` : ""
            } <!-- Pridėti užapvalintą stačiakampį su animacija -->
          </div>
          <div class="info">
            <div class="kategorija">${kategorijaLT}</div>
            <div class="pavadinimas">
              <a href="#" class="produktasNuoroda" data-id="${
                produktas._id
              }">${pavadinimas}</a>
            </div>
            <div class="reitingas">${vertinimas}</div>
            <div class="aprasymas">
              ${naujasAprasymas}
            </div>
            <div class="kaina">
              <p>${kaina} €<span class="senakaina">${senaKaina} €</span></p>
            </div>
          </div>
        </div>`;
    }

    document.querySelector(elementas).innerHTML = html;

    const nuorodos = document.querySelectorAll(".produktasNuoroda");
    nuorodos.forEach((nuoroda) => {
      nuoroda.removeEventListener("click", atidarytiModalHandler);
      nuoroda.addEventListener("click", atidarytiModalHandler);
    });
  }

  function atidarytiModalHandler(e) {
    e.preventDefault();
    const produktasId = e.target.getAttribute("data-id");
    atidarytiModal(produktasId, produktai);
  }

  function atidarytiModal(produktasId, produktai) {
    const modal = document.getElementById("produktasModal");

    const produktas = produktai.find(
      (p) => String(p._id) === String(produktasId)
    );

    if (!produktas) {
      console.error("Produktas nerastas!");
      return;
    }
    const detalusInformacija = `
      <img class="ftn" src="${produktas.image}" alt="${
      produktas.title
    }" style="width: 100%; max-width: 400px;" onmouseover="this.style.transform = 'scale(1.03)';" onmouseout="this.style.transform = 'scale(1)';"/>
     <h2>${produktas.title}</h2>
     <p> ${rodytiZvaigzdutes(produktas.rating)}</p>
      <p>${produktas.description}</p>
      <p class="kaina"> ${produktas.price} €<span class="senakaina">${
      produktas.oldPrice
    } €</span></p>
      
    `;
    document.getElementById("produktasDetalus").innerHTML = detalusInformacija;

    const idetiIKrepseliBtn = document.getElementById("idetiIKrepseli");
    idetiIKrepseliBtn.addEventListener("click", () => {
      alert(`${produktas.title} pridėta į krepšelį!`);
    });
    modal.style.display = "block";
    const closeBtn = document.querySelector(".close");
    closeBtn.onclick = () => {
      modal.style.display = "none";
    };
    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }

  generateProductHTML(produktaiMoterims, ".produktai-moterims");
  generateProductHTML(produktaiVyrams, ".produktai-vyrams");
}

export default generateHTML;
