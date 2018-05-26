import axios from 'axios';
import config from '../config/config.json';

export const SET_DATA = 'SET_DATA';

const dataFetch = (offset = null, data = [], resolver = null) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `https://api.airtable.com/v0/${config.airtable.table}?sort[0][field]=name&sort[0][direction]=asc${ offset ? `&offset=${offset}` : '' }`,
      headers: {
        'Authorization': `Bearer ${config.airtable.key}`
      }
    })
    .then((res) => {
      const newData = [...data, ...res.data.records]
      if (res.data.offset) {
        dataFetch(res.data.offset, newData, resolver || resolve)
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
    return dataFetch().then(data => dispatch(setData(data)));
  };
}
