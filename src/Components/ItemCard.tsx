interface Item {
    id: number;
    title: string;
    description: string;
  }
  
  interface ItemCardProps {
    item: Item;
   
  }
  
  const ItemCard = ({ item }: ItemCardProps) => {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <p className="text-gray-600">{item.description}</p>
        <div className="mt-2 flex justify-end space-x-2">
       
        </div>
      </div>
    );
  };
  
  export default ItemCard;
  