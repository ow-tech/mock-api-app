import { useState, useEffect } from "react";

interface Item {
    id: number;
    title: string;
    description: string;
  }

  const ItemForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

  return (
    <form  className="p-4 bg-white rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 mb-2 border rounded"
        value={title}
        
      />
      <textarea
        placeholder="Description"
        className="w-full p-2 mb-2 border rounded"
        value={description}
        
      />
    
    </form>
  );

  };
export default ItemForm;