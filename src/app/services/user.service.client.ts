export class UserServiceClient {

  findUserById(userId) {
    return fetch('http://localhost:4000/api/user/' + userId)
      .then(response => response.json());
  }

  updateUser(user) {
    return fetch('http://localhost:4000/api/profile',
      {
        method: 'put',
        body: JSON.stringify(user),
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }
  findUserByName(username) {
    return fetch('http://localhost:4000/api/user/' + username)
      .then(response => response.json());
  }

  profile() {
    return fetch('http://localhost:4000/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  logout() {
    return fetch('http://localhost:4000/api/logout',
      {
        method: 'post',
        credentials: 'include'
      });
  }

  createUser(username, password, userType) {
    const user = {
      username: username,
      password: password,
      role: userType
    };
    return fetch('http://localhost:4000/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  login(username, password, userType) {
    const user = {
      username: username,
      password: password,
      userType: userType
    };
    return fetch('http://localhost:4000/api/login', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  checkUserStatus() {
    const url = 'http://localhost:4000/api/session/get/user';
    return fetch(url,
      {credentials: 'include'})
      .then((res) =>  {
        if (res.status === 200) {
          return true;
        }
        return false;

      });
  }

  // checkUserStatus() {
  //   const url = 'http://localhost:4000/api/session/get/user';
  //   if (fetch (url, {
  //     credentials: 'include', // include, same-origin, *omit
  //     method: 'GET',
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   })) {
  //
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
