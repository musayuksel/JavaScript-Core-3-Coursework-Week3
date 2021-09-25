let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function logOrders(orders) {
  console.log("QTY       ITEM                TOTAL");
  let total = 0;
  orders.forEach(({ itemName, quantity, unitPrice }) => {
    total += unitPrice * quantity;
    console.log(
      `${(quantity + "").padEnd(10, " ")}${itemName.padEnd(20, " ")}${(
        unitPrice * quantity
      ).toFixed(2)}`
    );
  });
  console.log(`Total: ${total.toFixed(2)}`);
}
logOrders(order);
