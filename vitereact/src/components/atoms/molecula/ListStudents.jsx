import Title from "../Title";
import Widge from "../widge";
function ListStudent({listStudent}) {
    return ( 
        <>
        <Title msn="Lista de alumnos de 4B"></Title>
        {
            listStudent.map(itemStudents => (
                <Widge item={itemStudents}> </Widge>
            )
            )
        }
        </>
     );
}

export default ListStudent;