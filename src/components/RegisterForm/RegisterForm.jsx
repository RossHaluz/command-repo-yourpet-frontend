import { useState } from 'react';
import {
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { FormBox, FormTitle } from 'common/form/Form.styled';
import { FormButton } from './RegisterForm.styled';
import { register } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/selectors';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valide email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(3, 'Password should be of minimum 3 characters length ')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Confirm password is required'),
});

const RegisteForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = e => {
    e.preventDefault();
  };

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(show => !show);
  const handleMouseDownConfirmPassword = e => {
    e.preventDefault();
  };

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: ({ email, password }, { resetForm }) => {
      dispatch(register({ email, password }));

      resetForm();
    },
  });

  return (
    <>
      <FormBox onSubmit={formik.handleSubmit}>
        <FormTitle component="h2" sx={{ textAlign: 'center' }}>
          Registration
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
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
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
            ),
          }}
        />

        <TextField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
          type={showConfirmPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownConfirmPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <FormButton type="submit" variant="contained" disabled={isLoading}>
          Registration
        </FormButton>
        <Typography
          component="p"
          sx={{ textAlign: 'center', mt: '15px', fontSize: '12px' }}
        >
          If tou have an account. <NavLink to="/login">Login</NavLink>
        </Typography>
      </FormBox>
    </>
  );
};

export default RegisteForm;
