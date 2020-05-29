import React from 'react';
import Swal from 'sweetalert2';
import { Link} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { borrarProductoAction } from '../actions/productoActions';

const Producto = ({producto}) => {
    const {nombre, precio, id} = producto;
    
    const dispatch = useDispatch();
    const confirmarEliminarProducto = id =>{

        Swal.fire({
            title: 'Estas seguro?',
            text: "Un producto que se elimina no se puede recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si eliminar!'
          }).then((result) => {
            if (result.value) {
              dispatch(borrarProductoAction(id));
              
            }
          })
    }

    return ( 
        <tr>
            <td>{ nombre }</td>
            <td> <span className="font-weight-bold"> $ { precio }</span></td>
            <td className="acciones">
                <Link to={ `/productos/editar/${id}`} className="btn btn-primary mr-2" >
                  Editar
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => confirmarEliminarProducto(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
     );
}
 
export default Producto;