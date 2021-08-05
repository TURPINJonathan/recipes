import React from 'react';

import LoginForm from 'src/components/LoginForm';

const Header = () => (
  <div className="header">
    <h2 className="page-title">oRecipes</h2>
    <LoginForm
      email=""
      password=""
      changeField={(newValue, name) => {
        console.log(`newValue=${newValue}, name=${name}`);
      }}
      handleLogin={() => {
        console.log('soumission du formulaire');
      }}
      handleLogout={() => {
        console.log('handleLogout');
      }}
    />
  </div>
);

export default Header;
