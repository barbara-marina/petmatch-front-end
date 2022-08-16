
import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../contexts/TokenContext"

const PrivateRoute = ({children}) => {
    const {token} = useContext(TokenContext);
    const navigate = useNavigate();

    (!token) && navigate("/");
    
    return children; 
}

export default PrivateRoute;