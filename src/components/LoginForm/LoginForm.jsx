import { useState } from 'react';
import { TextField, Typography, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { FormBox, FormTitle } from 'common/form/Form.styled';
import {FormButton} from './LoginForm.styled';
import { login } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/selectors';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valide email')
    .required('Email is required'),
  password: yup.string('Enter your password').required('Password is required'),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(login(values))
      resetForm();
    },
  });

  return (
    <>
      <FormBox onSubmit={formik.handleSubmit} component={'form'}>
        <FormTitle component="h2" sx={{textAlign: 'center'}} >
          Login
        </FormTitle>
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
          type={showPassword ? 'text' : 'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment:
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
          }}
        />
        <FormButton type="submit" variant="contained" disabled={isLoading}>
          Login
        </FormButton>
         <Typography component="p" sx={{ textAlign: 'center', mt: '15px', fontSize: '12px'}}>
           If you don't have an account. <NavLink to="/register">Register</NavLink>
        </Typography>
      </FormBox>
    </>
  );
};

export default LoginForm;
