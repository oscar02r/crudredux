import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGAR_PRODUCTOS,
    DESCARGAR_PRODUCTO_EXITO,
    DESCARGAR_PRODUCTO_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    COMENZANDO_EDICION_PRODUCTO,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR,

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

export function borrarProductoAction (id) {

    return async (dispatch) => {
         dispatch(obtenerProductoEliminar(id));

         try {
             await clienteAxios.delete(`/productos/${id}`);
             dispatch(eliminarProductoExito());

             Swal.fire(
                'Elimidando!',
                'El producto fue eliminado correctamente.',
                'success'
              )
         } catch (error) {
           dispatch(eliminarProductoError());
         }
    }
}

const obtenerProductoEliminar = id => ({
    type:OBTENER_PRODUCTO_ELIMINAR,
    payload: id
});

const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
});

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
});

export function obtenerProductoEditar (producto) {
       return (dispatch) => {
           dispatch(obtenerProductoEditarAction(producto));
       }
}

const obtenerProductoEditarAction = producto => ({
    type:OBTENER_PRODUCTO_EDITAR,
    payload: producto
});

export function editarProductoAction(producto) {
       return async (dispatch) => {
           dispatch(editarProducto());
           try {
               await clienteAxios.put(`/productos/${producto.id}`, producto);
               dispatch(editarProductoExito(producto));
           } catch (error) {
             dispatch(editarProductoError());
           }
       };
}

const editarProducto = () =>({
     type: COMENZANDO_EDICION_PRODUCTO
});

const editarProductoExito = producto => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto
});

const editarProductoError = () =>({
    type:PRODUCTO_EDITADO_ERROR,
    payload: true
});
