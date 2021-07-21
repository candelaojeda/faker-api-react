import { useState, useEffect } from "react";

export default function CreditCards() {
  let [data, setData] = useState([]);
  let url = "https://fakerapi.it/api/v1/credit_cards?_quantity=100";

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
            <th>TYPE</th>
            <th>NUMBER</th>
            <th>EXPIRATION</th>
            <th>OWNER</th>
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
    </div>
  );
}
