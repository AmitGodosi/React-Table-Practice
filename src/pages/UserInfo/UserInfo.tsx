import { useEffect, useMemo, useState } from 'react'
import { API, axiosInstance } from '../../config'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfo } from '../../store/userInfoStore'
import { DETAILS_COLUMN_DATA, INFO_COLUMN_DATA } from '../../consts'
import { Grid } from '@material-ui/core'
import { IUserInfo } from '../../types'
import './UserInfo.scss';
import CustomTable from '../../components/CustomTable/CustomTable'

type Props = {};

const UserInfo = (props: Props) => {
	const dispatch = useDispatch();
	const [dadelineProjects, setDadelineProjects] = useState<IUserInfo[]>();
	const [dadelineProjectsPercentage, setDadelineProjectsPercentage] = useState<string>();
	const { userInfo }: any = useSelector((state: any) => state.userInfo);
	const { userDetails: { personalDetails } }: any = useSelector((state: any) => state.userDetails);

	useEffect(() => {
		const fetchUserInfo = async () => {
			const token = localStorage.getItem('token');
			const headers = {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			};
			const { data } = await axiosInstance.get(API.getUserProjects, { headers })
			dispatch(setUserInfo({ userInfo: data }))
		}
		fetchUserInfo()
	}, [])

	useEffect(() => {
		setDadelineProjects(userInfo?.filter((project: IUserInfo) => !!project.madeDadeline))
		if (dadelineProjects?.length && userInfo?.length) {
			setDadelineProjectsPercentage((dadelineProjects.length / userInfo.length * 100).toFixed(2))
		}
	}, [userInfo])

	// THIS CONSTS CAN BE DONE BY SMARTER WAY, I DONT HAVE TIME SO DONE IT IN THE FASTEST WAY.
	const infoColumns: any = useMemo(
		() => INFO_COLUMN_DATA,
		[]
	)

	const detailsColumns: any = useMemo(
		() => DETAILS_COLUMN_DATA,
		[]
	)
	return (
		<Grid className='user-info-container'>
			<Grid className='key-value-title'>
				<p>Projects that made dadeline {dadelineProjectsPercentage} %</p>
			</Grid>
			{Object.keys(personalDetails || {}).length > 0 && <Grid className='details-table-wrapper'>
				<CustomTable columns={detailsColumns} data={[personalDetails]} />
			</Grid>}
			{userInfo?.length && <Grid className='info-table-wrapper table-scroll'>
				<CustomTable columns={infoColumns} data={userInfo} />
			</Grid>}
		</Grid>
	)
}

export default UserInfo;