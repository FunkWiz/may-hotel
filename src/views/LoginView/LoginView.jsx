import React, { useState } from "react";
import Box from "../../components/Box/Box";
import { Input } from "@material-ui/core";
import Form from "../../components/Form/Form";
import FormField from "../../components/FormField/FormField";

const LoginView = () => {
  return (
    <>
      <Box className="login-view">
        <LoginForm />
      </Box>
    </>
  );
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Form>
      <FormField title="דואר אלקטרוני">
        <Input value={email} onChange={event => setEmail(event.target.value)} dir="ltr"/>
      </FormField>
      <FormField title="סיסמה">
        <Input
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          dir="ltr"
        />
      </FormField>
    </Form>
  );
};
export default LoginView;
