/**
 * Created by gerer on 1/31/18.
 */
import React from 'react';

const login = () => {
  return(
    <form action="#" method="POST">
      <label for="username">Username</label>
      <input type ="text" name="username" id ="username"  />
      <br />
      <label for="password">Password</label>
      <input type="password" name="password" id="password"  />
      <br />
      <input type="checkbox" id="saveCredentials" />
      <label for="saveCredentials">Save credentials</label>
      <br />
      <button className="btn waves-effect waves-light center" type="submit" name="action">Okay
      </button>
    </form>
  )
};

export default login;
