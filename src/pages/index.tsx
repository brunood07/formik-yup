import { Formik } from "formik";
import Link from "next/link";
import {
  Button,
  Container,
  Label,
  Title,
  FormContainer,
  InputContainer,
  ValidationMsg,
} from "../styles/styles";

import { LoginSchema } from "../utils/loginValidation";

export default function Home() {
  return (
    <Container>
      <Title>Formulário</Title>
      <FormContainer>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={() => {}}
          validationSchema={LoginSchema}
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
                  Conectar
                </Button>
                <Link href="/SignIn" passHref>
                  <Button onClick={() => {}}>Cadastrar</Button>
                </Link>
              </InputContainer>
            </form>
          )}
        </Formik>
      </FormContainer>
    </Container>
  );
}
