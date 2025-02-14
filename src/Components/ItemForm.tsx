import { useState, useEffect } from "react";

import { Item } from './../types'

interface ItemFormProps {
  onSave: (item: Item) => void;
  itemToEdit: Item | null;
  setItemToEdit: React.Dispatch<React.SetStateAction<Item | null>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ItemForm = ({ onSave, itemToEdit, setItemToEdit }: ItemFormProps) => {
  const [title, setTitle] = useState(itemToEdit?.title || "");
  const [description, setDescription] = useState(itemToEdit?.description || "");

  useEffect(() => {
    if (itemToEdit) {
      setTitle(itemToEdit.title);
      setDescription(itemToEdit.description);
    }
  }, [itemToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Title and description cannot be empty.");
      return;
    }
    onSave({ id: itemToEdit?.id ?? Date.now(), title, description });
    setTitle("");
    setDescription("");
    setItemToEdit(null);
  };


  return (
    <form onSubmit={handleSubmit}     className={`p-6 rounded-xl shadow-lg border-4 transition-all duration-300 w-full
      ${itemToEdit ? "bg-[#e0e9ff] border-[#9eb6ff] scale-105 shadow-2xl" : "bg-gray-100 border-gray-300"}`}>
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 mb-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
     <textarea 
  placeholder="Description" 
  value={description} 
  onChange={(e) => setDescription(e.target.value)} 
  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#9eb6ff] outline-none h-32" 
/>
   <button type="submit" 
      className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
      {itemToEdit ? "Update Item" : "Add Item"}
    </button>
    </form>
  );
};

export default ItemForm;
