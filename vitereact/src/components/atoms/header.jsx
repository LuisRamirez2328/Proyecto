import Logo from '../../assets/react.svg'
import'../../assets/style/header.css'
function header(){
    return(
        <header> 
            <img src={Logo} alt="Logo de la empresa"/>
            <h1> Programacion Web</h1>
        </header>

    );
}
export default header;