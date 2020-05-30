import {
    MOSTRAR_ALERTA,
    OCUTAR_ALERTA
} from '../type';

export function mostrarAlerta(alerta){
    return (dispatch) => {
           dispatch(crearAlerta(alerta));
    }
}

const crearAlerta = (alerta) => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
});

export function ocutarAlertaAction ()  {
    return (dispatch) => {
          dispatch(ocutarAlerta());
    };
 }

 const ocutarAlerta = () => ({
     type: OCUTAR_ALERTA
 });