
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const ContactCard = ({ contact }) => {
    const { dispatch } = useGlobalReducer();

    const deleteContact = async () => {
        
        await fetch(
            `https://playground.4geeks.com/contact/agendas/moufdi23/contacts/${contact.id}`,
            { method: "DELETE" }
        );

        
        const res = await fetch(
            "https://playground.4geeks.com/contact/agendas/moufdi23/contacts"
        );
        const data = await res.json();

        dispatch({
            type: "SET_CONTACTS",
            payload: data.contacts || []
        });
    };

    return (
        <div className="card mb-3 p-3 d-flex flex-row align-items-center">
            <img
                src="https://i.pravatar.cc/100"
                className="rounded-circle me-3"
                width="80"
            />

            <div className="flex-grow-1">
                <h5>{contact.name}</h5>
                <p className="m-0">{contact.email}</p>
                <p className="m-0">{contact.phone}</p>
                <p className="m-0">{contact.address}</p>
            </div>

            <div className="ms-auto">
                <Link to={`/edit/${contact.id}`} className="btn btn-warning me-2">
                    Edit
                </Link>

                <button className="btn btn-danger" onClick={deleteContact}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ContactCard;