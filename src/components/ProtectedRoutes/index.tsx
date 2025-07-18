import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
    import {useAuthState} from "react-firebase-hooks/auth"
import { getAuth } from 'firebase/auth';


const ProtectedRoute: React.FC = () => {
 const auth = getAuth();
 const [user , loading]= useAuthState(auth);
 const location = useLocation()



  if (loading) {
    return <div>Loding.....</div>
  }
    return (
        user ? (<Outlet/>): (
            <Navigate to = "/login" state = {{ from: location }}/>
)
  );
};

export default ProtectedRoute;
