import {
    MOSTRAR_ALERTA,
    OCUTAR_ALERTA
} from '../type';

const initialState = {
    alerta: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case MOSTRAR_ALERTA:
            
            return {
              ...state,
              alerta: action.payload
            };
        case OCUTAR_ALERTA:
            return {
                ...state,
                alerta: null
            };
        default:
            return state;
    }
}