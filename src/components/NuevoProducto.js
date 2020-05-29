import React, { useState } from "react";
import { crearNuevoProductoAction } from '../actions/productoActions';
import { useDispatch, useSelector } from 'react-redux';

const NuevoProducto = ({history}) => {

  const [ nombre, guardarNombre ] = useState('');
  const [ precio, guardarPrecio ] = useState(0);

  // Utilizar use dispatch y te crea una funcion
  const dispath = useDispatch(); 

  //Accediendo al state de productos
  const cargando = useSelector( state => state.productos.loading );
  const error = useSelector(state => state.productos.error);

  //Mandar a llamar el action de productoAction
  const agregarProducto = (producto) => dispath(crearNuevoProductoAction(producto));
  
  const submitNuevoProducto = e => {
    e.preventDefault();
    if ( nombre.trim() === '' || precio <= 0 ) {
      console.log('Error');
      return;
    }
    agregarProducto({
      nombre,
      precio
    });

    history.push('/');
  }


  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center">Agregar Nuevo Producto</h2>
            <form onSubmit= {submitNuevoProducto} >
                <div className="form-group">
                    <label htmlFor="">Nombre Producto</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Nombre Producto"
                      name="nombre"
                      value={nombre}
                      onChange={e => guardarNombre(e.target.value)}
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
                      onChange={e => guardarPrecio(Number(e.target.value))}
                    />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >Agregar</button>
            </form>
            { cargando ? <p>Cargando....</p> : null }
            { error ? <p className="alert alert-danger p2 text-center mt-5"> Hubo un error </p> : null }
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
