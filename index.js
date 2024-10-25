async function main() {
  const produktai = await getProductFromApi();
  generateHTML(produktai);
}
main();

const menu = document.querySelector(".nav");
const content = document.querySelector(".content");

menu.addEventListener("click", () => {
  content.scrollTo({
    top: menu.offsetHeight,
    behavior: "smooth",
  });
});
