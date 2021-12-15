const api = "http://localhost:3500";


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
    return json;
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
    return json;
  }

  export const getUsers = async (access) =>{
    let response = await fetch(`${api}/api/users`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access}`
      }
    });
    let json = await response.json();
    return json;
  }

  export const upDateUser = async(email ,name, password, id, access) =>{
    let response = await fetch(`${api}/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access}`
      },
      body: JSON.stringify({
        email: email,
        name: name,
        password: password
      })
    });

    let json = await response.json();
    return json
  }

  export const deleteUser = async( id, access) =>{
    await fetch(`${api}/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${access}`
      }
    });

  }

 


 
