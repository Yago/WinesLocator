import {
  SET_DATA,
  SET_GRAPES,
} from '../actions/api';

const defaultState = {
  data: [],
  grapes: [],
};

export default function apiReducer(state = defaultState, action) {
  switch (action.type) {

    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case SET_GRAPES:
      return {
        ...state,
        grapes: action.payload,
      };

    default: return state;
  }
}
