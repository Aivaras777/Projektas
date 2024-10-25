async function getProductFromApi() {
  const promise = await fetch(
    "https://fakestoreapiserver.reactbd.com/products"
  );
  const response = await promise.json();
  return response;
}
