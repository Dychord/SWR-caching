import { Routes, Route } from "react-router-dom";
import Fetch from "../Fetch";
import Clear from "../Clear";

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Fetch />} />
            <Route path="/clear" element={<Clear />} />
        </Routes>
    );
}

export default Routing;
