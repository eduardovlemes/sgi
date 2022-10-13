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
    <li>
      <img alt={alt} src={src} width={250}/>
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{description}</p>
        <p>{caterer}</p>
        <p>{group}</p>
      </div>
    </li>
  );
}
