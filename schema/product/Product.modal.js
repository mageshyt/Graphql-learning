const products = [
  {
    id: "mac",
    name: "Macbook Pro",
    price: 2000,
    description: "Apple laptop",
    reviews: [
      {
        rating: 5,
        comment: "This is the best laptop I have ever used",
      },
    ],
  },
  {
    id: "iphone",
    name: "Iphone 13 Pro",
    price: 1000,
    description: "Apple mobile",
    reviews: [],
  },
];

const getAllProducts = () => {
  console.log(products);
  return products;
};

const getProductByPrice = (min, max) => {
  console.log(min, max);
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
};

const getProductById = (id) => {
  return products.find((product) => product.id === id);
};

const addNewProduct = (id, description, price) => {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
};




const addReviewToProduct = (id, rating, comment) => {
  const product = getProductById(id);
  const newReview = {
    rating,
    comment,
  };

  if (product) {
    product.reviews.push(newReview);
  }

  return newReview;
};

module.exports = {
  getAllProducts,
  getProductByPrice,
  getProductById,
  addNewProduct,
  addReviewToProduct,
};
