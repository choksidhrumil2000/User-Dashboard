import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './TableComponent.css';
import { UserDataContext } from '../../Contexts/UserDataContext';
import { useContext, useState } from 'react';
import FormModal from '../../Modals/FormModal/FormModal';

export default function TableComponent(){

    const { usersData,setUsersData } = useContext(UserDataContext);

    const [open,setOpen] = useState(false);
    const [editData,setEditData] = useState(null);

    function handleEdit(data){
        setOpen(true);
        setEditData(data);
    }

    function handleClose(){
        setOpen(false);
    }

    function handleDelete(id){
        const updatedUsersData = usersData.filter((item)=>item.id!==id);
        setUsersData(updatedUsersData);
    }
    
    return (
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell className='table-head-col' >ID</TableCell>
            <TableCell  className='table-head-col'align="center">Name</TableCell>
            <TableCell  className='table-head-col'align="center">UserName</TableCell>
            <TableCell className='table-head-col' align="center">Email</TableCell>
            <TableCell className='table-head-col' align="center">Company</TableCell>
            <TableCell className='table-head-col' align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.username}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.company.name}</TableCell>
              <TableCell className='action-btns'>
                <EditIcon onClick={()=>handleEdit(row)} />
                <DeleteIcon onClick={()=>handleDelete(row.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <FormModal open={open} onClose={handleClose} title="Edit User" data={editData} />
    </div>
    ); 
}