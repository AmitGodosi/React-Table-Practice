import { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import { API, axiosInstance } from '../../config';
import { useDispatch } from 'react-redux/es/exports';
import { setUserDetails } from '../../store/userDetailsStore';
import { useNavigate } from "react-router-dom";
import { RoutesPath } from '../../consts/Routes';
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import './Login..scss'

type Props = {}

const Login = (props: Props) => {
    const [emailErrorMessage, setEmailErrorMessage] = useState<string>('')
    const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('')
    const [emailValue, setEmailValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const passwordPattern = /^(?=.*\d)(?=.*[A-Z])[a-zA-Z\d]{8,}$/;

    const loginHandler = async (e: any) => {
        e.preventDefault()
        setIsLoading(true)
        if (!emailErrorMessage && !passwordErrorMessage) {
            try {
                const userDetails = {
                    username: emailValue,
                    password: passwordValue
                }
                const { data } = await axiosInstance.post(API.getUserDetailsAPI, userDetails)
                dispatch(setUserDetails({ isUserLogged: true, userDetails: data?.[0] }))
                localStorage.setItem('token', data?.[0]?.token)
                navigate(RoutesPath.INFO);
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
            }
        }
    }

    useEffect(() => {
        setEmailErrorMessage(validateEmail(emailValue) || emailValue === '' ? '' : 'invalid email address')
    }, [emailValue])

    useEffect(() => {
        setPasswordErrorMessage(passwordPattern.test(passwordValue) || passwordValue === '' ? '' : 'Password must be 8 characters or more and contain at least one number and one capital letter. Only English letters allowed.')
    }, [passwordValue])

    const validateEmail = (email: string) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(String(email).toLowerCase());
    }

    return (
        <Grid className='login-conatiner'>
            <Grid className="login-section">
                <h2 className="title">Sign in</h2>
                <Grid className="fields-container">
                    <Grid className="field">
                        <input onChange={(e: any) => setEmailValue(e?.target?.value)} placeholder='Username' className='input' type='email' required />
                        <p>{emailErrorMessage}</p>
                    </Grid>
                    <Grid className="field">
                        <input onChange={(e: any) => setPasswordValue(e?.target?.value)} placeholder='Password' className='input' type='password' pattern="(?=.*\d)(?=.*[A-Z])[a-zA-Z\d]{8,}" required />
                        <p>{passwordErrorMessage}</p>
                    </Grid>
                </Grid>
                <button className='login-button' onClick={loginHandler}>{isLoading ? <AiOutlineLoading3Quarters /> : 'LOGIN'}</button>
            </Grid>
        </Grid>
    )
}

export default Login;