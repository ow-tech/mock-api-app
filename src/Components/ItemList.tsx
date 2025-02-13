import ItemCard from './ItemCard';

interface Item {
  id: number;
  title: string;
  description: string;
}

interface ItemListProps {
    items: Item[];
 
  }

  const ItemList = ({ items}: ItemListProps) => {
    return (
      <div className="space-y-2">
        {items.length > 0 ? (
          items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))
        ) : (
          <p className="text-gray-600 text-center">No items available.</p>
        )}
      </div>
    );
  };
  
  export default ItemList;