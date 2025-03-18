const courierRates = [
    { maxWeight: 200, cost: 5 },
    { maxWeight: 500, cost: 10 },
    { maxWeight: 1000, cost: 15 },
    { maxWeight: 5000, cost: 20 },
  ];
  

  const getCourierCost = (weight) => {
    for (let rate of courierRates) {
      if (weight <= rate.maxWeight) return rate.cost;
    }
    return 20; // Default max cost
  };
  
  const packageOrder = (items) => {
    let packages = [];
    let currentPackage = { items: [], totalWeight: 0, totalPrice: 0 };
  
    // Sort items by price (descending) to optimize packaging
    items.sort((a, b) => b.price - a.price);
  
    for (let item of items) {
      if (currentPackage.totalPrice + item.price > 250) {
        packages.push({
          items: currentPackage.items,
          totalWeight: currentPackage.totalWeight,
          totalPrice: currentPackage.totalPrice,
          courierPrice: getCourierCost(currentPackage.totalWeight),
        });
        currentPackage = { items: [], totalWeight: 0, totalPrice: 0 };
      }
      currentPackage.items.push(item.name);
      currentPackage.totalWeight += item.weight;
      currentPackage.totalPrice += item.price;
    }
  
    if (currentPackage.items.length > 0) {
      packages.push({
        items: currentPackage.items,
        totalWeight: currentPackage.totalWeight,
        totalPrice: currentPackage.totalPrice,
        courierPrice: getCourierCost(currentPackage.totalWeight),
      });
    }
  
    return packages;
  };
  
  module.exports = { packageOrder };
  