import {Link} from 'react-router-dom';
import marvel from '../../assets/imgs/marvel.svg'

function FormLogin() {
    return (
        <div class="login">
            <img src={marvel} alt="Logo" width="100" height="100"/>
         <form action="">
          <input type="text"></input>
          <input type="password"></input>
          <button>Inicia sesion</button>
         <Link to="/register">Registro</Link>
          </form>

        </div>
      );
}

export default FormLogin;