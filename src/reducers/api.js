import {
  GET_DATA,
} from '../actions/api';

const defaultState = {};

export default function apiReducer(state = defaultState, action) {
  switch (action.type) {

    case GET_DATA:
      return state;

    default: return state;
  }
}
