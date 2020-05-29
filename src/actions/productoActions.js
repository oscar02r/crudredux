import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGAR_PRODUCTOS,
    DESCARGAR_PRODUCTO_EXITO,
    DESCARGAR_PRODUCTO_ERROR
} from '../type';

//Crear nuevos productos

export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto(true));

        try {
          await  clienteAxios.post('/productos', producto);
            dispatch(agregarProductoExito(producto));

            //Alerta correcta
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            );
        } catch (error) {
            dispatch(agregarProductoError(true));
            Swal.fire({
                icon:'error',
                title:'Hubo un error',
                text:'Hubo un error, inteta de nuevo'
            });
        }

    }
}

const agregarProducto = estado =>({
    type: AGREGAR_PRODUCTO,
    payload: estado
});

const agregarProductoExito = producto => ({
    type:AGREGAR_PRODUCTO_EXITO,
    payload: producto 
});

const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});

export function obtenerProductosAction() {

       return async (dispatch) => {
                 dispatch(descargarProductos());
                 try {
                     const respuesta = await clienteAxios.get('/productos');

                     dispatch(descargaProductoExitosa(respuesta.data));
                 } catch (error) {
                     dispatch(descargaProductoError());
                 }
       }
}

const descargarProductos = () =>({
    type: COMENZAR_DESCARGAR_PRODUCTOS,
    payload: true
});

const descargaProductoExitosa = productos => ({
    type: DESCARGAR_PRODUCTO_EXITO,
    payload: productos
});

const descargaProductoError = () => ({
    type: DESCARGAR_PRODUCTO_ERROR,
    payload: true
});