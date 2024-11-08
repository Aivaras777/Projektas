async function main() {
  const produktai = await getProductFromApi();
  generateHTML(produktai);
  paieska(produktai);
}
main();

const zodziai = document.querySelectorAll(".zodziai span");
let index = 0;

function keistiZodzius() {
  zodziai[index].classList.add("active");
  setTimeout(() => {
    zodziai[index].classList.remove("active");
    index = (index + 1) % zodziai.length;
    keistiZodzius();
  }, 1500);
}

keistiZodzius();

import getProductFromApi from "./api.js";
import generateHTML from "./HTMLgeneration.js";
import paieska from "./filterProduct.js";
