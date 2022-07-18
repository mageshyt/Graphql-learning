const orders = [
  {
    date: "2022-02-17",
    total: 2000,
    items: [
      {
        product: {
          id: "mac",
        },
        quantity: 1,
      },
    ],
  },
];

const getAllOrders = () => {
  return orders;
};

module.exports = {
  getAllOrders,
};
