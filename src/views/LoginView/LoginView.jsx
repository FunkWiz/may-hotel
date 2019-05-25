import React, { useState, useEffect, useContext } from "react";
import Box from "../../components/Box/Box";
import LoginForm from "./LoginForm";

const LoginView = () => {
  return (
    <>
      <Box className="login-view">
        <LoginForm />
      </Box>
    </>
  );
};


export default LoginView;
