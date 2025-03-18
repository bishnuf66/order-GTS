const { packageOrder } = require("../services/orderService");

exports.placeOrder = (req, res) => {
  const { selectedItems } = req.body;

  if (!selectedItems || selectedItems.length === 0) {
    return res.status(400).json({ message: "No items selected." });
  }

  const result = packageOrder(selectedItems);
  res.json({ packages: result });
};
