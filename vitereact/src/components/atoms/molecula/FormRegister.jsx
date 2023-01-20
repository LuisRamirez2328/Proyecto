import { useNavigate } from "react-router-dom";
import "../../../assets/style/FormRegister.css";
function FormRegister() {
    const navigate =useNavigate()
    const handlerClick = (e)=>{
    e.preventDefault();
    navigate("/")
    }
    return ( 
        <form>
            <label className="caption"htmlFor="name"></label>
            <input type="text" id="name"></input>
            <label  className="caption"> Usuario
                <input type="text"></input>
            </label>
            <label  className="caption"> Contraseña
                <input type="password"></input>
            </label>
     <button onClick={handlerClick}>Registro</button>
        </form>
     );
}

export default FormRegister;