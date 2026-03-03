
import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Single = () => {
    const { store } = useGlobalReducer();
    const { theId } = useParams();

    const contact = store.contacts.find(c => c.id == theId);

    return (
        <div className="container text-center mt-4">
            <h1 className="display-4">
                {contact ? contact.name : "Contact Not Found"}
            </h1>

            {contact && (
                <>
                    <p><strong>Email:</strong> {contact.email}</p>
                    <p><strong>Phone:</strong> {contact.phone}</p>
                    <p><strong>Address:</strong> {contact.address}</p>
                </>
            )}

            <hr className="my-4" />

            <Link to="/">
                <button className="btn btn-primary btn-lg">
                    Back home
                </button>
            </Link>
        </div>
    );
};