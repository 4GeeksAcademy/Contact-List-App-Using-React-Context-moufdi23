import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Demo = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="container">
      <h2>Demo Page</h2>
      <p>This demo no longer uses todos. It now shows your contacts.</p>

      <ul className="list-group">
        {store.contacts.map((contact) => (
          <li
            key={contact.id}
            className="list-group-item d-flex justify-content-between"
          >
            <span>{contact.name}</span>

            <Link to={"/edit/" + contact.id} className="btn btn-warning">
              Edit
            </Link>
          </li>
        ))}
      </ul>

      <br />

      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};