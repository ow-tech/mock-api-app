import { useState } from "react";
import { Item } from './../types'

interface ItemCardProps {
  item: Item;
  isEditing: boolean;
  onEdit: () => void;
  onUpdate: (updatedItem: Item) => void;
  onDelete: (id: number) => void;
  onCancelEdit: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({
  item,
  onDelete,
  onEdit,
  isEditing,
  onUpdate,
  onCancelEdit 
}) => {

  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);


  const handleUpdate = () => {
    onUpdate({ ...item, title, description });
  };


  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
    {isEditing ? (
      <>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </>
    ) : (
      <>
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-600">{item.description}</p>
      </>
    )}

<div className="flex justify-between text-sm mt-4 border-t pt-2">
        {isEditing ? (
          <>
            <span 
              onClick={handleUpdate} 
              className="cursor-pointer text-green-600 hover:text-green-700 hover:underline"
            >
              Update
            </span>
            <span 
              onClick={onCancelEdit} 
              className="cursor-pointer text-gray-500 hover:text-gray-600 hover:underline"
            >
              Cancel
            </span>
          </>
        ) : (
          <>
            <span 
              onClick={onEdit} 
              className="cursor-pointer text-blue-600 hover:text-blue-700 hover:underline"
            >
              Edit
            </span>
            <span 
              onClick={() => onDelete(item.id)} 
              className="cursor-pointer text-red-500 hover:text-red-600 hover:underline"
            >
              Delete
            </span>
          </>
        )}
      </div>
  </div>
  );
};

export default ItemCard;
