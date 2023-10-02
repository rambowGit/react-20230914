export function Tab({ title, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {title}
    </button>
  );
}
