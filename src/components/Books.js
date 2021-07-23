import { useEffect, useState } from "react";

export default function Books() {
  let [data, setData] = useState([]);
  let url = "https://fakerapi.it/api/v1/books?_quantity=50";

  let [book, setBook] = useState(1);
  let [amountBookPerPage, setAmountBookPerPage] = useState(20);

  const books = [];
  for (let i = 1; i < Math.ceil(data.length / amountBookPerPage); i++) {
    books.push(i);
  }

  const indexOfLastBook = book * amountBookPerPage;
  const indexOfFirstBook = indexOfLastBook - amountBookPerPage;
  const actuallyItem = data.slice(indexOfFirstBook, indexOfLastBook);

  const pagesNumber = books.map((number) => {
    return (
      <li key={number} id={number}>
        {number}
      </li>
    );
  });

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
      <table>
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
              <td>
                <a href={book.image} target="_blank" rel="noreferrer">
                  {book.image}
                </a>
              </td>
              <td>{book.published}</td>
              <td>{book.publisher}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav className="nav-pagination">
        <ul className="ul-pagination">{pagesNumber}</ul>
      </nav>
    </div>
  );
}
