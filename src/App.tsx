import  React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/routes';
import { UserAuthProvider } from './context/userAuthContext';
import { generateToken } from './firebase/firebaseConfig';

interface IAppProps {
}

const App: React.FC<IAppProps> = (props) => {
  useEffect(() => {
  
generateToken();

}, [])
  return (
        <UserAuthProvider>

    <RouterProvider router={router}/>
        </UserAuthProvider>

  )
};

export default App;
