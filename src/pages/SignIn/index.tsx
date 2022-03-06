import { Formik } from "formik";
import Link from "next/link";

import { SignInSchema } from "../../utils/signinValidation";
import {
  Container,
  Title,
  FormContainer,
  InputContainer,
  Label,
  ValidationMsg,
  Button,
} from "./styles";

export default function SignIn() {
  return (
    <Container>
      <Title>Formulário</Title>
      <FormContainer>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          onSubmit={() => {}}
          validationSchema={SignInSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <InputContainer>
                <Label>First Name:</Label>
                <input
                  name="First Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  placeholder="John"
                />
                {errors.firstName && touched.firstName ? (
                  <ValidationMsg>{errors.firstName}</ValidationMsg>
                ) : null}
                <Label>Last Name:</Label>
                <input
                  name="Last Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  placeholder="Doe"
                />
                {errors.lastName && touched.lastName ? (
                  <ValidationMsg>{errors.lastName}</ValidationMsg>
                ) : null}
                <Label>Email:</Label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="example@example.com"
                />
                {errors.email && touched.email ? (
                  <ValidationMsg>{errors.email}</ValidationMsg>
                ) : null}
                <Label>Password:</Label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password ? (
                  <ValidationMsg>{errors.password}</ValidationMsg>
                ) : null}
                <Button type="submit" disabled={isSubmitting}>
                  Cadastrar
                </Button>
                <Link href="/" passHref>
                  <Button onClick={() => {}}>Cancelar</Button>
                </Link>
              </InputContainer>
            </form>
          )}
        </Formik>
      </FormContainer>
    </Container>
  );
}
