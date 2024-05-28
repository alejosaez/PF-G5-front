import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h1>Inicio de sesión</h1>
      <button onClick={() => loginWithRedirect()}>Iniciar sesión</button>
    </div>
  );
};

export default Login;
