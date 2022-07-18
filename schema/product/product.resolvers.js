const {
  getAllProducts,
  getProductByPrice,
  getProductById,
  addNewProduct,
  addReviewToProduct,
} = require("../product/Product.modal");

module.exports = {
  Query: {
    products: async () => {
      return await getAllProducts();
    },
    productsByPrice: async (parent, args) => {
      return getProductByPrice(args.minPrice, args.maxPrice);
    },
    productById: async (parent, args) => {
      return await getProductById(args.id);
    },
  },
  Mutation: {
    addNewProductMutation: async (parent, args) => {
      return addNewProduct(args.id, args.description, args.price);
    },
    addReviewsMutation: async (_, args) => {
      return addReviewToProduct(args.id, args.rating, args.comment);
    },
  },
};
