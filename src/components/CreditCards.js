import { useState, useEffect } from "react";

export default function CreditCards() {
  let [data, setData] = useState([]);
  let url = "https://fakerapi.it/api/v1/credit_cards?_quantity=50";
  let [creditCard, setCreditCards] = useState(1);
  let [amountCreditCardsPerPage, setAmountCreditCradsPerPage] = useState(10);

  const creditsCards = [];
  for (let i = 1; i < Math.ceil(data.length / amountCreditCardsPerPage); i++) {
    creditsCards.push(i);
  }

  const indexOfLastCreditCard = creditCard * amountCreditCardsPerPage;
  const indexOfFirstCreditCard =
    indexOfLastCreditCard - amountCreditCardsPerPage;
  const actuallyItem = data.slice(
    indexOfFirstCreditCard,
    indexOfLastCreditCard
  );

  const pagesNumber = creditsCards.map((number) => {
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
            <th style={tableHead}>TYPE</th>
            <th style={tableHead}>NUMBER</th>
            <th style={tableHead}>EXPIRATION</th>
            <th style={tableHead}>OWNER</th>
          </tr>
        </thead>
        <tbody>
          {data.map((card) => (
            <tr key={card.number}>
              <td>{card.type}</td>
              <td>{card.number}</td>
              <td>{card.expiration}</td>
              <td>{card.owner}</td>
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
const tableHead = {
  width: "365px",
};
