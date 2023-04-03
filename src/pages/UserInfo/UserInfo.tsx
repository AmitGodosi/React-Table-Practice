import { useEffect, useMemo } from 'react'
import { API, axiosInstance } from '../../config'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfo } from '../../store/userInfoStore'
import CustomTable from './CustomTable'
import { COLUMN_DATA } from '../../consts'
import { Grid } from '@material-ui/core'
import './UserInfo.scss';

type Props = {};

const UserInfo = (props: Props) => {
	const dispatch = useDispatch();
	const { userInfo }: any = useSelector((state: any) => state.userInfo);

	useEffect(() => {
		const fetchUserInfo = async () => {
			const { data } = await axiosInstance(API.getUserProjects)
			dispatch(setUserInfo({ userInfo: data }))
		}
		fetchUserInfo()
	}, [])

	const columns: any = useMemo(
		() => COLUMN_DATA,
		[]
	)

	return (
		<Grid className='user-info-container'>
			<Grid className='table-wrapper'>
				<CustomTable columns={columns} data={userInfo} />
			</Grid>
		</Grid>
	)
}

export default UserInfo;