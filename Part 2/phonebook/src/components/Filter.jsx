export default function Filter({ search, onFilter }) {
  return (
    <p>
      Search: <input value={search} onChange={onFilter} />{" "}
    </p>
  );
}
