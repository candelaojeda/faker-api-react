import { useEffect, useState } from "react";

export default function Users() {
  let [data, setData] = useState([]);
  let url = "https://fakerapi.it/api/v1/users?_quantity=100";

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
            <th>UUID</th>
            <th>FIRSTNAME</th>
            <th>LASTNAME</th>
            <th>USERNAME</th>
            <th>PASSWORD</th>
            <th>EMAIL</th>
            <th>IP</th>
            <th>MACADDRESS</th>
            <th>WEBSITE</th>
            <th>IMAGE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.ip}>
              <td>{user.uuid}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>{user.ip}</td>
              <td>{user.macAddress}</td>
              <td>
                <a href={user.website} target="_blank" rel="noreferrer">
                  {user.website}
                </a>
              </td>
              <td>
                <a href={user.image} target="_blank" rel="noreferrer">
                  {user.image}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
