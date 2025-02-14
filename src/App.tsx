import { useState, useEffect } from "react";
import { fetchItems, createItem, updateItem, deleteItem } from "./services/api";
import Layout from "./Components/Layout";
import ItemList from "./Components/ItemList";
import ItemCard from "./Components/ItemCard";
import ItemForm from "./Components/ItemForm";
import { Item } from "./types";


export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [itemToEdit, setItemToEdit] = useState<Item | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Fetch items on initial render
  useEffect(() => {
    const getItems = async () => {
      try {
        const data = await fetchItems();
        setItems(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Failed to get Items."
        );
      }
    };
    getItems();
  }, []);

  const handleSaveItem = async (item: {
    id: number;
    title: string;
    description: string;
  }) => {
    try {
      if (item.id > 0) {
        await updateItem(item as Item);
        setItems((prev) =>
          prev.map((i) => (i.id === item.id ? (item as Item) : i))
        );
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
      setError(
        error instanceof Error ? error.message : "Failed to delete item."
      );
    }
  };

  // Sort items based on sort order
  const sortedItems = [...items].sort((a, b) => {
    return sortOrder === "asc"
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title);
  });

  return (
    <Layout>
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4 border border-red-400">
          {error}
          <button
            onClick={() => setError(null)}
            className="ml-4 text-red-500 font-bold"
          >
            ✖
          </button>
        </div>
      )}

      {/* Sorting Controls */}
     
      <div className="flex justify-between items-center mb-4">
      <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          Sort {sortOrder === "asc" ? "Descending" : "Ascending"}
        </button>
        <h1 className="text-2xl font-bold">Item List</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setIsFormOpen(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add Item
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            
            onDelete={handleDeleteItem}
            isEditing={itemToEdit?.id === item.id}
            onEdit={() => setItemToEdit(item)} 
          />
        ))}
      </div>
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-96">
            <ItemForm
              onSave={handleSaveItem}
              itemToEdit={itemToEdit}
              setItemToEdit={setItemToEdit}
              setIsOpen={setIsFormOpen}
              isOpen={isFormOpen}
            />
          </div>
        </div>
      )}
    </Layout>
  );
}
