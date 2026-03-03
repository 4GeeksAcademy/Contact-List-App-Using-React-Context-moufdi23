import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";   
import useGlobalReducer from "../hooks/useGlobalReducer";

export const AddContact = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();
    const { id } = useParams();

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    useEffect(() => {
        if (id) {
            const contact = store.contacts.find((c) => c.id == id);
            if (contact) {
                setForm({
                    name: contact.name,
                    email: contact.email,
                    phone: contact.phone,
                    address: contact.address
                });
            }
        }
    }, [id, store.contacts]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (id) {
            await fetch(`https://playground.4geeks.com/contact/agendas/moufdi23/contacts/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });
        } else {
            await fetch("https://playground.4geeks.com/contact/agendas/moufdi23/contacts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });
        }

        const res = await fetch("https://playground.4geeks.com/contact/agendas/moufdi23/contacts");
        const data = await res.json();

        dispatch({
            type: "SET_CONTACTS",
            payload: data.contacts || []
        });

        navigate("/");
    };

    return (
        <div className="container mt-4">
            <h1>{id ? "Edit Contact" : "Add Contact"}</h1>

            <form onSubmit={handleSubmit} className="mt-3">
                <label>Name</label>
                <input
                    className="form-control mb-2"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <label>Email</label>
                <input
                    className="form-control mb-2"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <label>Phone</label>
                <input
                    className="form-control mb-2"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />

                <label>Address</label>
                <input
                    className="form-control mb-3"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                />

                <button className="btn btn-primary w-100">
                    {id ? "Update Contact" : "Save Contact"}
                </button>

                
                <div className="text-center mt-3">
                    <Link to="/" className="text-secondary">
                        or go back to contacts
                    </Link>
                </div>

            </form>
        </div>
    );
};
