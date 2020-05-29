import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGAR_PRODUCTOS,
    DESCARGAR_PRODUCTO_EXITO,
    DESCARGAR_PRODUCTO_ERROR
} from '../type';

// Cada reducer tiene su propio state
const initialState = {
     productos:[],
     error: null,
     loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {

        case COMENZAR_DESCARGAR_PRODUCTOS:
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: action.payload 
            };
        case AGREGAR_PRODUCTO_EXITO:
           return {
               ...state,
               loading: false,
               productos: [...state.productos, action.payload]
           };
        case AGREGAR_PRODUCTO_ERROR:
        case DESCARGAR_PRODUCTO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case DESCARGAR_PRODUCTO_EXITO:
            return {
                ...state,
                productos: action.payload,
                loading: false,
                error: null
                
            };

        default:
            return state;
    }
}