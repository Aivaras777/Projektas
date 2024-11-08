async function getProductFromApi() {
  const promise = await fetch(
    "https://fakestoreapiserver.reactbd.com/products"
  );
  const response = await promise.json();
  response[19].category = "men";
  return response;
}

export default getProductFromApi;
