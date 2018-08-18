import {history} from '../history.js';

export function unitedFetch (method,url,body, headerInput) {
  let headers = (headerInput ? headerInput
    : {'Accept': 'application/json',
       'Content-Type': 'application/json',
       'Authorization': 'Bearer ' + localStorage.user
      })
  return dispatch =>
    fetch(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/api${url}`, {
      method: method,
      headers: headers,
      body:  JSON.stringify(body)
    })
    .then(response => {
       if(response.status === 401){
         localStorage.removeItem('user');
         history.push('/login');
       }
       return response.json();
    })
    .catch(error => { console.log('request failed', error); });
}
