import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import ContactCard from "../components/ContactCard";
import { Link } from "react-router-dom";

export const Home = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        const loadContacts = async () => {
            try {
                
                const res = await fetch(
                    "https://playground.4geeks.com/contact/agendas/moufdi23/contacts"
                );

                
                if (res.status === 404) {
                    await fetch(
                        "https://playground.4geeks.com/contact/agendas/moufdi23",
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: "{}"
                        }
                    );

                    
                    const res2 = await fetch(
                        "https://playground.4geeks.com/contact/agendas/moufdi23/contacts"
                    );
                    const data2 = await res2.json();

                    dispatch({
                        type: "SET_CONTACTS",
                        payload: data2.contacts || []
                    });

                    return; 
                }

                
                const data = await res.json();
                dispatch({
                    type: "SET_CONTACTS",
                    payload: data.contacts || []
                });

            } catch (err) {
                console.error(err);
            }
        };

        loadContacts();
    }, []);

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1>Contact List</h1>
                <Link to="/add" className="btn btn-success">Add New Contact</Link>
            </div>

            {store.contacts.length === 0 ? (
                <p>No contacts yet.</p>
            ) : (
                store.contacts.map(contact => (
                    <ContactCard key={contact.id} contact={contact} />
                ))
            )}
        </div>
    );
};