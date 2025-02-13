import { useState, useEffect } from "react";
import { fetchItems, createItem, updateItem, deleteItem } from "./services/api";
import Layout from "./Components/Layout";
import ItemList from "./Components/ItemList";
import ItemForm from "./Components/ItemForm";

interface Item {
  id: number;
  title: string;
  description: string;
}

export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [itemToEdit, setItemToEdit] = useState<Item | null>(null);

  // Fetch items on initial render
  useEffect(() => {
    const getItems = async () => {
      try {
        const data = await fetchItems();
        setItems(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    getItems();
  }, []);

  // Handle Add / Update Item
  const handleSaveItem = async (item: Item) => {
    try {
      if (itemToEdit) {
        await updateItem(item);
        setItems((prev) => prev.map((i) => (i.id === item.id ? item : i)));
        setItemToEdit(null);
      } else {
        const newItem = await createItem(item);
        setItems((prev) => [...prev, newItem]);
      }
    } catch (error) {
      console.error("Error saving item:", error);
    }
  };

  // Handle Delete Item
  const handleDeleteItem = async (id: number) => {
    try {
      await deleteItem(id);
      setItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {/* Item List (Takes 2 Columns on md/lg screens) */}
        <div className="md:col-span-2">
          <ItemList
            items={items}
            onDelete={handleDeleteItem}
            onEdit={setItemToEdit}
            itemToEdit={itemToEdit}
          />
        </div>

        {/* Form (Always on Right Side for md/lg) */}
        <div className="md:col-span-1 sticky top-4 self-start">
          <ItemForm
            onSave={handleSaveItem}
            itemToEdit={itemToEdit}
            setItemToEdit={setItemToEdit}
          />
        </div>
      </div>
    </Layout>
  );
}
