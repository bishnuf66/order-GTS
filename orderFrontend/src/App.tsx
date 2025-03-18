import { useState } from "react";
import ItemList from "./components/ItemList";
import PackageDisplay from "./components/PackageDisplay";
import { placeOrder } from "./services/apiService";
import { ItemType } from "./types/ItemsType";

const App = () => {
  const [packages, setPackages] = useState([]);

  const handleOrderPlaced = async (selectedItems: ItemType[]) => {
    const result = await placeOrder(selectedItems);
    setPackages(result.packages);
  };

  return (
    <div>
      <ItemList onOrderPlaced={handleOrderPlaced} />
      <PackageDisplay packages={packages} />
    </div>
  );
};

export default App;
