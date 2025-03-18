import React, { useState } from "react";
import sampleItems from "../utils/sampleItems";
import { ItemType } from "../types/ItemsType";

interface ItemListProps {
  onOrderPlaced: (selectedItems: ItemType[]) => void;
}

const ItemList: React.FC<ItemListProps> = ({ onOrderPlaced }) => {
  const [selectedItems, setSelectedItems] = useState<ItemType[]>([]);

  const handleCheckboxChange = (item: ItemType) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((i) => i !== item)
        : [...prevSelected, item]
    );
  };

  const handleSubmit = () => {
    onOrderPlaced(selectedItems);
  };

  return (
    <div>
      <h2>Select Items</h2>
      <ul>
        {sampleItems.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(item)}
              checked={selectedItems.includes(item)}
            />
            {item.name} - ${item.price} - {item.weight}
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Place Order</button>
    </div>
  );
};

export default ItemList;
