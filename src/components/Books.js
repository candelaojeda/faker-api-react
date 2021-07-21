import { useEffect, useState } from "react";

function Books() {
  let [data, setData] = useState([]);
  let url = "https://fakerapi.it/api/v1/books?_quantity=10";

  useEffect(
    function () {
      fetch(url)
        .then((res) => res.json())
        .then((json) => setData(json.data));
    },
    [url]
  );

  if (!data.length) {
    return null;
  }
  return (
    <div>
      <table className="table-book">
        <thead>
          <tr>
            <th>TITLE</th>
            <th>AUTHOR</th>
            <th>GENRE</th>
            <th>DESCRIPTION</th>
            <th>ISBN</th>
            <th>IMAGE</th>
            <th>PUBLISHED</th>
            <th>PUSBLISHER</th>
          </tr>
        </thead>
        <tbody>
          {data.map((book) => (
            <tr key={book.isbn}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.description}</td>
              <td>{book.isbn}</td>
              <td>{book.image}</td>
              <td>{book.published}</td>
              <td>{book.publisher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Books;
