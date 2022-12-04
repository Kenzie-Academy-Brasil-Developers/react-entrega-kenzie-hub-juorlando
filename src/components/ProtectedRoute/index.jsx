import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const ProtectedRoute = ({user}) => {

    const navigate = useNavigate()

    useEffect(() => {
        
        if(!user){
            navigate("/")
        }

    }, [])

  return (
    <>
      <Outlet />
    </>
  );
};
