function calculateTotalCost(cart) {
    let totalCost = 0;
  
    for (let item of cart) {
      totalCost += item.price * item.quantity;
    }
  
    return totalCost;
  }
  
  // Example usage:
  const shoppingCart = [
    { name: 'Shirt', price: 200, quantity: 4 },
    { name: 'Jeans', price: 1000, quantity: 1 },
    { name: 'Shoes', price: 5000, quantity: 1 }
  ];
  
  const totalCost = calculateTotalCost(shoppingCart);
  console.log("Total cost:", totalCost);