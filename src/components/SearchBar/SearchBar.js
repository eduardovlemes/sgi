export default function SearchBar({ onChange, placeholder, value }) {
  return (
    <div className="search-field">
      <input
      className="search-bar"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
