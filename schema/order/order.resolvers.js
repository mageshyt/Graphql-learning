const { getAllOrders } = require("./Order.modal");

module.exports = {
  Query: {
    products: async () => {
      console.log("GraphQL query: products");
      return await getAllOrders();
    },
  },
};
