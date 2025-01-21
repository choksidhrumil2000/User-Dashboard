import * as React from "react";
import { UserDataContext } from "../../Contexts/UserDataContext";
import './MainPage.css';
import TableComponent from "../../Components/TableComponent/TableComponent";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button, Snackbar } from "@mui/material";
import FormModal from "../../Modals/FormModal/FormModal";

const MainPage = ()=>{

    const vertical = "top";
    const horizontal = "right";

    const {usersData} = React.useContext(UserDataContext);
    const [open,setOpen] = React.useState(false);
    const [snackbarOpen,setSnackbarOpen] = React.useState(false);
    const [message,setMessage] = React.useState('');

    function handleAddUser(){
        setOpen(true);
    }

    function handleClose(){
        setOpen(false);
        setSnackbarOpen(true);
    }
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSnackbarOpen(false);
      };
    

    return (
        <div>
        <h1 style={{textAlign:'center'}}>User Dashboard</h1>
        {
        
        (usersData.length !== 0)?(<div>
            
            <Button compnent="button" variant="contained" color="primary" onClick={handleAddUser} className="add-btn" ><PersonAddIcon sx={{marginRight:'5px'}} />Add user</Button>
            <FormModal open={open} onClose={handleClose} title="Add User" setMessage={setMessage} setSnackbarOpen={setSnackbarOpen} />
            <TableComponent />
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={snackbarOpen}
                onClose={handleCloseSnackbar}
                autoHideDuration={3000}
                message={message}
                key={vertical + horizontal}
            />
        </div>):(<div className='no-data-div'>No Data Fetched!!!</div>)
        }
            
    </div> 
    );
}

export default MainPage;