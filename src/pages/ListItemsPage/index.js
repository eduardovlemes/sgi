import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
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
          item.name
            .toLocaleLowerCase()
            .indexOf(expression.toLocaleLowerCase()) !== -1
        ) {
          return item;
        }
      })
    );
  }, [expression, items]);

  return (
    <>
      <Header />
      <div className="page-container">
        <div className="title-search-area">
          <h2>Produtos cadastrados</h2>
          <div className="search-field">
            <SearchBar
              value={expression}
              placeholder="Buscar por produto..."
              onChange={(event) => setExpression(event.target.value)}
            />
          </div>
        </div>
        <ul className="list-container">
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
      <Footer />
    </>
  );
}
