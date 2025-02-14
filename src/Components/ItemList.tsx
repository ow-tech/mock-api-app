import ItemCard from "./ItemCard";
import { Item } from './../types'


interface ItemListProps {
  items: Item[];
  onDelete: (id: number) => void;
  onEdit: (item: Item) => void;
  itemToEdit: Item | null;
}

const ItemList: React.FC<ItemListProps> = ({ items, onDelete, onEdit, itemToEdit }) => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4" >
        {items.length > 0 ? (
          items.map((item) => (
            <ItemCard 
              key={item.id} 
              item={item} 
              onDelete={onDelete} 
              onEdit={onEdit} 
              isEditing={itemToEdit?.id === item.id} 
            />
          ))
        ) : (
          <p className="text-gray-600 text-center">No items available.</p>
        )}
      </div>
    );
  };
  
  export default ItemList;
  
