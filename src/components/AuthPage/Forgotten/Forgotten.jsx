import React from "react";
import { Form, Field } from "react-final-form";
import { fieldRequired } from "../../../utils/form-validators";
import AuthContainer from "../../commons/AuthContainer";
import AuthFormHeader from "../../commons/AuthFormHeader";
import AuthFieldInput from "../../ui/AuthFieldInput";
import { InputsWrapper } from "./styled";
import SubmitButton from "../../ui/SubmitButton";
import AuthFormFooter from "../../commons/AuthFormFooter/AuthFormFooter";

const Forgotten = () => {
  const onSubmitEmail = (value) => {
    console.log(value);
  };
  return (
    <Form
      onSubmit={onSubmitEmail}
      render={({ handleSubmit }) => (
        <AuthContainer>
          <AuthFormHeader
            title="Forgot Password"
            subtitle="Please enter your email address. You will receive a link to reset your password via email."
          />
          <InputsWrapper onSubmit={handleSubmit}>
            <Field
              name="email"
              type="email"
              autoComplete="address-line1"
              placeholder="Email"
              validate={fieldRequired}
              render={AuthFieldInput}
              icon="user"
              isShowError={true}
            />
            <SubmitButton type="submit">Submit</SubmitButton>
            <AuthFormFooter
              description="Remember password?"
              linkDescription="Sing In"
              to="/login"
            />
          </InputsWrapper>
        </AuthContainer>
      )}
    />
  );
};

export default Forgotten;