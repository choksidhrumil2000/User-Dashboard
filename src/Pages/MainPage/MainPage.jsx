import * as React from "react";
import { UserDataContext } from "../../Contexts/UserDataContext";
import './MainPage.css';
import TableComponent from "../../Components/TableComponent/TableComponent";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button } from "@mui/material";
import FormModal from "../../Modals/FormModal/FormModal";

const MainPage = ()=>{

    const {usersData} = React.useContext(UserDataContext);
    const [open,setOpen] = React.useState(false);

    function handleAddUser(){
        setOpen(true);
    }

    function handleClose(){
        setOpen(false);
    }

    return (
        <div>
            <h1 style={{textAlign:'center'}}>User Dashboard</h1>
            <Button compnent="button" variant="contained" color="primary" onClick={handleAddUser} className="add-btn" ><PersonAddIcon sx={{marginRight:'5px'}} />Add user</Button>
            <FormModal open={open} onClose={handleClose} title="Add User" />
            <TableComponent />
        </div>
    );
}

export default MainPage;