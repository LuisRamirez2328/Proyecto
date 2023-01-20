import{Link} from "react-router-dom";
import ListStudent from "../components/atoms/molecula/ListStudents";
import Header from "../components/atoms/header";
function Home(){
    const listStudent =[
        {
            id:1,
            name:"Dario",
        },
        {
            id:2,
            name:"Carlos",
        },
        {
            id:3,
            name:"Pedro",
        },
        {
            id:4,
            name:"Luis",
        },
        {
            id:5,
            name:"Antonio",
        }
    ];
    return(
        <>
        <Header> </Header>
        <ListStudent listStudent={listStudent}></ListStudent>
        <Link to="/login">Inicia sesion</Link>
        </>
    );
}
export default Home;
