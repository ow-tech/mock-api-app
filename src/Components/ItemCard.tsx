import { Item } from './../types'

interface ItemCardProps {
  item: Item;
  onDelete: (id: number) => void;
  onEdit: (item: Item) => void;
  isEditing: boolean;
}

const ItemCard: React.FC<ItemCardProps> = ({
  item,
  onDelete,
  onEdit,
  isEditing,
}) => {
  return (
    <div className={`p-5 border-4 rounded-xl shadow-lg bg-white transition-all 
        ${isEditing ? "border-[#9eb6ff] bg-[#e0e9ff] scale-105 shadow-2xl" : "border-gray-300"}
        h-[260px] flex flex-col justify-between`}>    
    
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-2 border-b-2 pb-2">
        {item.title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-sm lg:text-base flex-grow line-clamp-3">
        {item.description}
      </p>

      {/* Action Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => onEdit(item)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Edit
        </button>
        <button
          onClick={() => item.id !== undefined && onDelete(item.id)}
          className={`px-4 py-2 bg-red-500 text-white rounded-lg transition 
                  ${
                    isEditing
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-red-600"
                  }`}
          disabled={isEditing}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
