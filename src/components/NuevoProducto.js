import React from "react";
import { crearNuevoProductoAction } from '../actions/productoActions';
import { useDispatch, useSelector } from 'react-redux';

const NuevoProducto = () => {

// Utilizar use dispatch y te crea una funcion
const dispath = useDispatch();

//Mandar a llamar el action de productoAction
const agregarProducto = () => dispath(crearNuevoProductoAction());

const submitNuevoProducto = e => {
  e.preventDefault();
  agregarProducto();
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
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="">Precio</label>
                    <input 
                      type="number"
                      className="form-control"
                      placeholder="Precio Producto"
                      name="precio"
                    />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >Agregar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
