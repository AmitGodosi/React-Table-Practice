import { useDispatch, useSelector } from 'react-redux'
import { Grid } from "@material-ui/core";
import { AiOutlineLogout } from 'react-icons/ai'
import { logout } from '../../store/userDetailsStore';
import { deleteUserInfo } from '../../store/userInfoStore';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from '../../consts/Routes';
import "./Navbar.scss";

export default function Navbar() {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const { isUserLogged } = useSelector((state: any) => state.userDetails)

    const logoutHandler = () => {
        dispatch(logout());
        dispatch(deleteUserInfo());
        localStorage.removeItem('token');
        navigation(RoutesPath.LOGIN)
    }

    return (
        <Grid className="navbar-container">
            <h4>ZIGIT TASK</h4>
            {isUserLogged && <AiOutlineLogout onClick={logoutHandler} className='icon' size={30} />}
        </Grid>
    );
}