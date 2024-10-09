import { Routes, Route } from "react-router-dom";
import Fetch from "../Fetch";
import Clear from "../Clear";
import Comments from "../Comments";
import Login from "../Login";
import Register from "../Register";
import Home from "../Home";

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/fetch" element={<Fetch />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/clear" element={<Clear />} />
            <Route path="/comments" element={<Comments />} />
        </Routes>
    );
}

export default Routing;
