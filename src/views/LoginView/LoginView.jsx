import React, { useState, useEffect, useContext } from "react";
import Box from "../../components/Box/Box";
import { Input } from "@material-ui/core";
import Form from "../../components/Form/Form";
import FormField from "../../components/FormField/FormField";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { useDataApi } from "../../utils/hooks";
import { UserApi } from "../../utils/api";
import UserStore from "../../stores/UserStore";
import { observable } from "mobx";
import { observer } from "mobx-react-lite";

const LoginView = () => {
  return (
    <>
      <Box className="login-view">
        <LoginForm />
      </Box>
    </>
  );
};

const _loginForm = () => {
  const user = useContext(UserStore);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginIntent, setLoginIntent] = useState(false);

  useEffect(() => {
    if (!loginIntent) {
      return;
    }
    console.log('wtf');
    (async () => {
      await user.login(email, password);
    })();
  }, [loginIntent])

  const handleSubmit = () => {
    setLoginIntent(true);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField title="דואר אלקטרוני">
        <Input value={email} onChange={event => setEmail(event.target.value)} dir="ltr" />
      </FormField>
      <FormField title="סיסמה">
        <Input
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          dir="ltr"
        />
      </FormField>
      <SubmitButton>התחבר</SubmitButton>
    </Form>
  );
};

const LoginForm = observer(_loginForm);
export default LoginView;
