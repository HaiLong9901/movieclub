import React, { useState } from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Button, TextField, Box, Container, Typography, Alert, AlertTitle } from '@mui/material'
import { useAuth } from '../../contexts/AuthContexts'
import { useNavigate } from 'react-router-dom'

const validationSchema = yup.object({
    email: yup.string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup.string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    confirm: yup.string('Confirm your password')
        .min(8, 'Enter a valid password')
        .required('Password need to be confirmed')
})


function SignUpPage() {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const { signup } = useAuth()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirm: ''
        },
        validationSchema,
        onSubmit: async ({email, password, confirm}) => {
            if(password !== confirm) {
                return setError('Password is not match')
            }
    
            try {
                setError('')
                setLoading(true)
                await signup(email, password)
                navigate('/')
                
            } catch (error) {
                setError('Failed to create an account')
            }
            setLoading(false)
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
                    }}>Signup</Typography>
                    { error && <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {error}
                    </Alert>}
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
                    <Button disabled={loading} color='primary' variant='contained' fullWidth type='submit'>Submit</Button>
                </form>
            </Box>
        </Container>
      )
}

export default SignUpPage