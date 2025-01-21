import * as React from "react";
import { UserDataContext } from "../../Contexts/UserDataContext";
import './MainPage.css';
import TableComponent from "../../Components/TableComponent/TableComponent";

const MainPage = ()=>{

    const {usersData} = React.useContext(UserDataContext);
    console.log("MainPage",usersData);

    return (
        <div>
            <h1>User Dashboard</h1>
            <TableComponent />
        </div>
    );
}

export default MainPage;