import { Button, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { FormLogin } from './LoginForm.styled';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valide email')
    .required('Email is required'),
  password: yup.string('Enter your password').required('Password is required'),
});

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <>
      <FormLogin onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </FormLogin>
      <Typography component="p" sx={{ textAlign: 'center', mt: '15px' }}>
        If you don't have an account. <NavLink to="/register">Register</NavLink>
      </Typography>
    </>
  );
};

export default LoginForm;
