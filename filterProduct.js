function paieska(produktai) {
  const paieskosLaukelis = document.querySelector(".search");
  const pasirinkimasRusiavimo = document.querySelector(".rusiavimas");

  function rusiavimas() {
    let filteredProduct = produktai.filter((produktas) =>
      produktas.title
        .toLowerCase()
        .includes(paieskosLaukelis.value.toLowerCase())
    );
    const pasirinktasRusiavimas = pasirinkimasRusiavimo.value;
    if (pasirinktasRusiavimas === "kaina_asc") {
      filteredProduct = filteredProduct.sort((a, b) => b.rating - a.rating);
    } else if (pasirinktasRusiavimas === "kaina_desc") {
      filteredProduct = filteredProduct.sort((a, b) => a.rating - b.rating);
    } else if (pasirinktasRusiavimas === "reitingas_asc") {
      filteredProduct = filteredProduct.sort((a, b) => b.price - a.price);
    } else if (pasirinktasRusiavimas === "reitingas_desc") {
      filteredProduct = filteredProduct.sort((a, b) => a.price - b.price);
    }
    generateHTML(filteredProduct);
  }
  pasirinkimasRusiavimo.addEventListener("change", rusiavimas);
  paieskosLaukelis.addEventListener("input", () => {
    rusiavimas();
  });
  rusiavimas();
}
import generateHTML from "./HTMLgeneration.js";
export default paieska;
