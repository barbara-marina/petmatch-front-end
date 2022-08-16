import {BrowserRouter, Route, Routes} from "react-router-dom"
import { TokenProvider } from "./../../contexts/TokenContext";
import { UserProvider } from "./../../contexts/UserContext";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Home from "../Home";
import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";
import TypeSelect from "../TypeSelect";
import UserPage from "../UserPage";
import Chats from "../Chats";

export default function App() {

    return (
        <UserProvider>
            <TokenProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<TypeSelect/>}/>
                        <Route path="/sign-in/:type" element={<LoginForm/>}/>
                        <Route path="/sign-up/:type" element={<RegisterForm/>}/>
                        <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>}/>
                        <Route path="/user" element={<PrivateRoute><UserPage/></PrivateRoute>}/>
                        <Route path="/chats" element={<PrivateRoute><Chats/></PrivateRoute>}/>
                    </Routes>
                </BrowserRouter>
            </TokenProvider>
        </UserProvider>
    );
}