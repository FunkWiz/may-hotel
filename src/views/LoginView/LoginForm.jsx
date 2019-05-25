import React from 'react'
import { Input } from "@material-ui/core";
import Form from "../../components/Form/Form";
import FormField from "../../components/FormField/FormField";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import UserStore from "../../stores/UserStore";
import { Redirect } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            email: 'david@gmail.com',
            password: '123456789'
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const context = this.context;
        await context.login(this.state.email, this.state.password);
        this.setState({ isLoggedIn: true });
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const context = this.context;
        if (context.isLoggedIn) return <Redirect to="/" />;

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormField title="דואר אלקטרוני">
                    <Input value={this.state.email} name="email" onChange={this.handleInputChange} dir="ltr" />
                </FormField>
                <FormField title="סיסמה">
                    <Input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        dir="ltr"
                    />
                </FormField>
                <SubmitButton>התחבר</SubmitButton>
            </Form>
        );
    }
}

LoginForm.contextType = UserStore;

export default LoginForm;