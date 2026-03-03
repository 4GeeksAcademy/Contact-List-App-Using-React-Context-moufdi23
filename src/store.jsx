
import { createContext, useReducer } from "react";


export const StoreContext = createContext(null);


export const initialStore = () => {
    return {
        contacts: []
    };
};


export default function storeReducer(store, action = {}) {
    switch (action.type) {
        case "SET_CONTACTS":
            return { ...store, contacts: action.payload };

        default:
            throw new Error("Unknown action type: " + action.type);
    }
}


export const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(storeReducer, initialStore());

    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};