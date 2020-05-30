import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editarProductoAction } from '../actions/productoActions';

const EditarProducto = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [ producto, guadarProducto ] = useState({
      nombre:'',
      precio: ''
    });
    //const dispatch = useDispatch();
    const productoEditar = useSelector( state => state.productos.productoeditar );

    useEffect(() => {
      guadarProducto( productoEditar );
    }, [productoEditar]);

  

    const { nombre, precio } = producto;
    
    


    const submitFormulario = e => {
          e.preventDefault();
         dispatch( editarProductoAction(producto));
         history.push('/');
    }

    const onChangeFormulario = e => {
          guadarProducto({
             ...producto,
             [e.target.name]: e.target.value
          });
    }

    return ( 
        <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center">Editar Producto</h2>
            <form
              onSubmit={submitFormulario}
            >
                <div className="form-group">
                    <label htmlFor="">Nombre Producto</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Nombre Producto"
                      name="nombre"
                      value={nombre}
                      onChange={onChangeFormulario}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="">Precio</label>
                    <input 
                      type="number"
                      className="form-control"
                      placeholder="Precio Producto"
                      name="precio"
                      value={precio}
                      onChange={onChangeFormulario}
                    />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >Guardar Cambios</button>
            </form>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default EditarProducto;