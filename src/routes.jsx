import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import { Layout } from "./pages/Layout.jsx";
import { Home } from "./pages/Home.jsx";
import { AddContact } from "./pages/AddContact.jsx";
import { Demo } from "./pages/Demo.jsx";
import { Single } from "./pages/Single.jsx";   

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
            <Route index element={<Home />} />
            <Route path="add" element={<AddContact />} />
            <Route path="edit/:id" element={<AddContact />} />
            <Route path="demo" element={<Demo />} />
            <Route path="single/:theId" element={<Single />} />   
        </Route>
    )
);