import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("E-mail inválido").required("Required"),
  password: Yup.string().required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});