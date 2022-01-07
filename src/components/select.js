export default function Select({books, setTitle, title}) {
  return (
    <select
      onChange={(e) => setTitle(e.target.value)}
      value={title}
      className="border border-inherit border-zinc-900 px-5 py-1 text-sm mr-2"
    >
      {books.data.map((book) => (
        <option value={book.title}>{book.title}</option>
      ))}
    </select>
  );
}
