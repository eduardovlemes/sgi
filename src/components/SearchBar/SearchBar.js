import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar({ onChange, placeholder, value }) {
  return (
    <div>
    <input
      className="search-bar"
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
    <IoSearchOutline size="26" className="search-icon" />
   
    </div>
  );
}
