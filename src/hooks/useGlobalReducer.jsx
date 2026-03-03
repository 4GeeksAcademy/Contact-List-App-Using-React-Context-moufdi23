
import { useContext } from "react";
import { StoreContext } from "../store.jsx";

export default function useGlobalReducer() {
    const { store, dispatch } = useContext(StoreContext);
    return { store, dispatch };
}