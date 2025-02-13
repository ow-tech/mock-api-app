import { useState, useEffect } from "react";

interface Item {
  id: number;
  title: string;
  description: string;
}

interface ItemFormProps {
  onSave: (item: Item) => void;
  itemToEdit: Item | null;
  setItemToEdit: (item: Item | null) => void;
}

const ItemForm = ({ onSave, itemToEdit, setItemToEdit }: ItemFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (itemToEdit) {
      setTitle(itemToEdit.title);
      setDescription(itemToEdit.description);
    }
  }, [itemToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      onSave({ id: itemToEdit ? itemToEdit.id : Date.now(), title, description });
      setTitle("");
      setDescription("");
      setItemToEdit(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}  className={`p-4 rounded-lg shadow-md transition-all duration-300 
      ${itemToEdit ? "bg-yellow-300 border-yellow-500 scale-105" : "bg-gray-200 border-gray-300"}`} >
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 mb-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        className="w-full p-2 mb-2 border rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">
        {itemToEdit ? "Update Item" : "Add Item"}
      </button>
    </form>
  );
};

export default ItemForm;
