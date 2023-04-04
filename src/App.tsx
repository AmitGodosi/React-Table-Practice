import { Grid } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from "react-router-dom";
import { RoutesNames, RoutesPath } from "./consts/Routes";
import MainPage from "./pages/MainPage/MainPage";

const App = () => {
  // const { isUserLogged } = useSelector((state: any) => state.userDetails)
  const isUserLogged = localStorage.getItem('token');

  return (
    <Grid>
      <Routes>
        <Route path={RoutesPath.LOGIN} element={<MainPage activeTab={RoutesNames.LOGIN} />} />
        <Route path={RoutesPath.INFO} element={<MainPage activeTab={RoutesNames.INFO} />} />
        <Route path="*" element={<Navigate to={!!isUserLogged ? RoutesPath.INFO : RoutesPath.LOGIN} replace />} />
      </Routes>
    </Grid>
  );
};

export default App;
