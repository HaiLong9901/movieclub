import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Button, TextField, Box, Container, Typography } from '@mui/material'

const validationSchema = yup.object({
    email: yup.string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup.string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    confirm: yup.string('Confirm your password')
        .min(8, 'Your password is not confirmed')
        .required('You must confirm your password')
})

function SignUpPage() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirm: ''
        },
        validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
      })
      return (
        <Container sx={{
            height: '100vh',
            px: { xs: '1rem', md: '2rem', lg: '5rem'},
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }} className='loginPage'>
            <Box sx={{
                width: { xs: '90%', md: '70%', lg: '50%'},
                height :'50%',
                bgcolor: 'white',
                p: '2rem',
                borderRadius: '.5rem'
            }}>
                <form style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly'
                }} onSubmit={formik.handleSubmit}>
                    <Typography sx={{
                        fontSize: {xs: '2rem', md:'2.5rem', lg: '3rem'},
                        fontWeight: 500,
                        textAlign: 'center'
                    }} variant='h1' component='h3' >Sign Up</Typography>
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
                    <TextField fullWidth
                    id='confirm'
                    name='confirm'
                    label='Confirm password'
                    type='password'
                    value={formik.values.confirm}
                    onChange={formik.handleChange}
                    error={formik.touched.confirm && Boolean(formik.errors.confirm)}
                    helperText={formik.touched.confirm && formik.errors.confirm}
                     />
                    <Button color='primary' variant='contained' fullWidth type='submit'>Submit</Button>
                </form>
            </Box>
        </Container>
      )
}

export default SignUpPage