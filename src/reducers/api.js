import {
  SET_DATA,
} from '../actions/api';

const defaultState = {
  data: [],
};

export default function apiReducer(state = defaultState, action) {
  switch (action.type) {

    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default: return state;
  }
}
