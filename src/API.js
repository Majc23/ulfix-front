const api = "http://localhost:3500";


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

if( localStorage.getItem("acessToken") ){
    token = JSON.parse(localStorage.getItem("acessToken"))
    console.log(token);
}



/*
export const createUser = async (name, email, password) =>{
  let response = await fetch(`${api}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
    })
  });
  let json = await response.json();
  console.log(json);
  console.log('Registro exitoso');
  return json;
}
*/

export const createUser = async (name, email, password) =>{
    let response = await fetch(`${api}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    });
    return response.json();
  }

export const loginUser = async (email, password) =>{
    let response = await fetch(`${api}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    let json = await response.json();
    console.log(json);
    console.log('Inicio seccion exitoso');
    return json;
  }

  export const getUsers = async (access) =>{
    console.log(access);
    let response = await fetch(`${api}/api/users`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access}`
      }
    });
    let json = await response.json();
    console.log(json);
    return json;
  }

 


 