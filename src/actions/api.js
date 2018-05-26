import axios from 'axios';
import config from '../config/config.json';

export const SET_DATA = 'SET_DATA';
export const SET_GRAPES = 'SET_GRAPES';

const airtableFetch = (type, offset = null, data = [], resolver = null) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `https://api.airtable.com/v0/${config.airtable.table}/${type}?sort[0][field]=${ type === 'variety' ? 'type' : 'name' }&sort[0][direction]=asc${ offset ? `&offset=${offset}` : '' }`,
      headers: {
        'Authorization': `Bearer ${config.airtable.key}`
      }
    })
    .then((res) => {
      const newData = [...data, ...res.data.records]
      if (res.data.offset) {
        airtableFetch(type, res.data.offset, newData, resolver || resolve)
      } else {
        resolver(newData);
      }
    })
    .catch((err) => {
      reject(err);
    });
  });
}

export function setData(data) {
  return {
    type: SET_DATA,
    payload: data,
  };
}

export function getData() {
  return dispatch => {
    return airtableFetch('vineyards').then(data => dispatch(setData(data)));
  };
}

export function setGrapes(data) {
  return {
    type: SET_GRAPES,
    payload: data,
  };
}

export function getGrapes() {
  return dispatch => {
    return airtableFetch('variety').then(data => dispatch(setGrapes(data)));
  };
}
