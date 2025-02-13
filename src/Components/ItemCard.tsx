interface Item {
    id: number;
    title: string;
    description: string;
  }
  
  interface ItemCardProps {
    item: Item;
    onDelete: (id: number) => void;
    onEdit: (item: Item) => void;
    isEditing: boolean;
  }
  
  const ItemCard: React.FC<ItemCardProps> = ({ item, onDelete, onEdit, isEditing }) => {
    return (
        <div className={`p-4 border rounded-lg shadow-md bg-white transition-all 
            ${isEditing ? "border-yellow-400 scale-105" : "border-gray-300"}`} // ✅ Highlight editing item
          >
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <p className="text-gray-600">{item.description}</p>
        <div className="flex justify-between mt-2">
          <button onClick={() => onEdit(item)} className="px-3 py-1 bg-blue-500 text-white rounded">
            Edit
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className={`px-3 py-1 bg-red-500 text-white rounded ${isEditing ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isEditing}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default ItemCard;
  
  
  