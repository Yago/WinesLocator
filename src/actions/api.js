import axios from 'axios';
import config from '../config/config.json';

export const SET_DATA = 'SET_DATA';

export function setData(data) {
  return {
    type: SET_DATA,
    payload: data,
  };
}

export function getData() {
  return dispatch => {
    axios({
      method: 'get',
      url: `https://api.airtable.com/v0/${config.airtable.table}?maxRecords=300`,
      headers: {
        'Authorization': `Bearer ${config.airtable.key}`
      }
    })
    .then((res) => {
      console.log(res.data.records);
      dispatch(setData(res.data.records));
    })
    .catch((err) => {
      console.log(err);
    });
  };
}
