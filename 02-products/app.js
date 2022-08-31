// Courseapi.com
// JavaScript Store Product
// JavaSCript Store Single Product
const url = "https://course-api.com/javascript-store-products";
// console.log(url);

const productsDOM = document.querySelector(".products-center");

const fetchProducts = async () => {
  productsDOM.innerHTML = `<div class="loading></div>"`;
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    // displayProducts(data)
    return data;
    // console.log(data);
  } catch (error) {
    // console.log(error);
    productsDOM.innerHTML = `<p class="error">There Was an Error</p>`;
  }
};
fetchProducts();

const displayProducts = (list) => {
  // console.log(list);
  const productList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 100;
      return `<a class="single-product" href="product.html?id${id}">
            <img
              src="${img}"
              class="single-product-img img"
              alt="${title}/"
            />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$${formatPrice}</span>
            </footer>
          </a>`;
    })
    .join("");
  productsDOM.innerHTML = `<div class="products-container">${productList}</div>`;
};

const start = async () => {
  // console.log(fetchProducts());
  const data = await fetchProducts();
  displayProducts(data);
};

start();
