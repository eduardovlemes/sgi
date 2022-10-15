export default function ListItems({
  alt,
  src,
  name,
  price,
  description,
  caterer,
  group,
}) {
  return (
    <li className="list-item">
      <img className="item-image" alt={alt} src={src}/>
      <div>
        <h3>{name}</h3>
        <p>R$ {price}</p>
        {/* <p>{description}</p> */}
        <p>{caterer}</p>
        <p>{group}</p>
      </div>
    </li>
  );
}
