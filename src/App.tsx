import { Grid } from "@material-ui/core";
import { Routes, Route, Navigate } from 'react-router-dom';
import { RoutesNames, RoutesPath } from "./components/consts/Routes";
import MainPage from "./components/pages/MainPage";

const App = () => {
	const isUserLogged = false;
	return (
		<Grid>
			<Routes>
				<Route path={RoutesPath.LOGIN} element={<MainPage activeTab={RoutesNames.LOGIN} />} />
				<Route path={RoutesPath.INFO} element={<MainPage activeTab={RoutesNames.INFO} />} />
				<Route path="*" element={<Navigate to={isUserLogged ? RoutesPath.INFO : RoutesPath.LOGIN} replace />} />
			</Routes>
		</Grid>
	);
}

export default App;