import React from 'react';

import LoginForm from 'src/containers/LoginForm';

const Header = () => (
  <div className="header">
    <h2 className="page-title">oRecipes</h2>
    <LoginForm
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
