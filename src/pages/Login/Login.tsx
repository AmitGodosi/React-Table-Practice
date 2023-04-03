import { useRef } from 'react'
import { Grid } from '@material-ui/core';
import { API, axiosInstance } from '../../config';
import { useDispatch } from 'react-redux/es/exports';
import { setUserDetails } from '../../store/userDetailsStore';
import { useNavigate } from "react-router-dom";
import './Login..scss'
import { RoutesPath } from '../../consts/Routes';

type Props = {}

const Login = (props: Props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const usernameRef: any = useRef()
    const passwordRef: any = useRef()

    const loginHandler = async (e: any) => {
        e.preventDefault()
        try {
            const userDetails = {
                username: usernameRef.current.value,
                password: passwordRef.current.value
            }
            const { data } = await axiosInstance.post(API.getUserDetailsAPI, userDetails)
            dispatch(setUserDetails({ isUserLogged: true, userDetails: data?.[0] }))
            localStorage.setItem('token', data?.[0]?.token)
            navigate(RoutesPath.INFO);
        } catch (error) {
            console.log(e)
        }
    }

    return (
        <Grid className='login-conatiner'>
            <Grid className="login-section">
                <h2 className="title">Sign in</h2>
                <Grid className="fields-container">
                    <Grid className="field">
                        <input ref={usernameRef} placeholder='Username' className='input' />
                    </Grid>
                    <Grid className="field">
                        <input ref={passwordRef} placeholder='Password' className='input' type='password' />
                    </Grid>
                </Grid>
                <button className='login-button' onClick={loginHandler}>LOGIN</button>
            </Grid>
        </Grid>
    )
}

export default Login;