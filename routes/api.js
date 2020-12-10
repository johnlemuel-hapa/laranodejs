const API = '/api';

var api = [
  {
      name : "Users",
      controller : "UserController@getUsers",
      method: "GET",
      pattern: API + "/users"
  },
  {
      name : "User",
      controller : "UserController@getUser",
      method: "GET",
      pattern: API + "/users/{id}"
  }
];
