import LoginForm from 'components/LoginForm';
import { useEffect } from 'react';

const LoginPage = () => {
  useEffect(() => {
    document.title = 'YourPet | Login';
  });

  return <LoginForm />;
};

export default LoginPage;
