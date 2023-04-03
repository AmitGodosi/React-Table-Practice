import { Component } from 'react'
import { Grid } from '@material-ui/core';
import { RoutesNames } from '../../consts/Routes';
import Navbar from '../../components/Navbar/Navbar';
import Login from '../Login/Login';
import './MainPage.scss'
import UserInfo from '../UserInfo/UserInfo';

type Props = {
	activeTab: string;
}

export default class MainPage extends Component<Props> {
	renderPageContent() {
		const { activeTab } = this.props;
		const { LOGIN, INFO } = RoutesNames;

		return {
			[LOGIN]: () => <Login />,
			[INFO]: () => <UserInfo />
		}[activeTab]();
	}

	render() {
		return (
			<Grid className="main-page-container">
				<Grid className='navbar'>
					<Navbar />
				</Grid>
				<Grid className="page-content">{this.renderPageContent()}</Grid>
			</Grid>
		)
	}
}