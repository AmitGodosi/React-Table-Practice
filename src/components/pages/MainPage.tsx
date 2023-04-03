import { Component } from 'react'
import { Grid } from '@material-ui/core';
import { RoutesNames } from '../consts/Routes';
import Login from './Login';
import Info from './Info';

type Props = {
	activeTab: string;
}

export default class MainPage extends Component<Props> {
	renderPageContent() {
		const { activeTab } = this.props;
		const { LOGIN, INFO} = RoutesNames;

		return {
			[LOGIN]: () => <Login />,
			[INFO]: () => <Info />
		}[activeTab]();
	}

	render() {
		return (
			<Grid className="main-page-container">
				<Grid className="PageContent">{this.renderPageContent()}</Grid>
			</Grid>
		)
	}
}