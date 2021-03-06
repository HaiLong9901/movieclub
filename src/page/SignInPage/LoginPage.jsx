import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Button, TextField, Box, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const validationSchema = yup.object({
    email: yup.string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup.string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required')
})

function LoginPage() {
  const formik = useFormik({
    initialValues: {
        email: '',
        password: ''
    },
    validationSchema,
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2))
    }
  })
  return (
    <Container sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        
    }} className='loginPage'>
        <Box sx={{
            width: {xs: '90%', md: '70%', lg: '50%'},
            height: '60%',
            p: '2rem',
            bgcolor: 'white',
            borderRadius: '.5rem'
        }} >
            <form style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
            }} onSubmit={formik.handleSubmit}>
                <Typography sx={{
                    fontSize: { xs: '2.5rem', md: '3rem'},
                    textAlign: 'center',
                    fontWeight: 500,
                    color: 'primary.blueColor'
                }}>Login</Typography>
                <TextField fullWidth
                id='email'
                name='email'
                label='Email'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                 />
                <TextField fullWidth
                id='password'
                name='password'
                label='Password'
                type='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                 />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <Link style={{
                        color: '#034c65',
                        textDecoration: 'none',
                        fontStyle: 'italic'
                    }} to='/user/signup'>Sign up / </Link>
                    <Link style={{
                        color: '#034c65',
                        textDecoration: 'none',
                        fontStyle: 'italic'
                    }} to='/user/forgetPass'> Forget password</Link>
                </Box>
                <Button color='primary' variant='contained' fullWidth type='submit'>Submit</Button>
            </form>
        </Box>
    </Container>
  )
}

export default LoginPage