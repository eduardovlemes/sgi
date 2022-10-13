import { useEffect, useState } from "react";
import ListItems from "../../components/ListItems/ListItems";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function ListItemsPage() {
  const [items, setItems] = useState([]);
  const [filterByName, setFilterByName] = useState(items);
  const [expression, setExpression] = useState("");

  useEffect(() => {
    async function getItems() {
      await fetch("http://localhost:3001/items")
        .then((response) => response.json())
        .then((dataItemsServer) => {
          setItems(dataItemsServer);
        });
    }
    getItems();
  }, []);

  useEffect(() => {
    setFilterByName(
      items.filter((item) => {
        if (
          item.name.toLocaleLowerCase().indexOf(expression.toLocaleLowerCase()) !== -1
        ) {
          return item;
        }
      })
    );
  }, [expression, items]);

  return (
    <>
      <div>
        <div>
          <SearchBar
            value={expression}
            placeholder="Buscar por produto.."
            onChange={(event) => setExpression(event.target.value)}
          />
          <h2>Produtos cadastrados</h2>
        </div>
        <ul>
          {filterByName.map((item) => {
            return (
              <ListItems
                key={item.id}
                alt={item.name}
                src={item.urlImage}
                name={item.name}
                price={item.price}
                description={item.description}
                caterer={item.caterer}
                group={item.group}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}
