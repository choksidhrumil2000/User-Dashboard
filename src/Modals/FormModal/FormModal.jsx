import React, { useContext, useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { UserDataContext } from '../../Contexts/UserDataContext';

export default function FormModal({open,onClose,title,data}){

    const {usersData,setUsersData} = useContext(UserDataContext); 

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    company:'',
  });
  const [errors, setErrors] = useState({
    name: '',
    username:'',
    email: '',
    company:'',
  });

  useEffect(()=>{
    if(data){
        console.log(data);
        setFormData({
            ...formData,
            name:data.name,
            username:data.username,
            email:data.email,
            company:data.company.name
        });
      }
    
  },[data]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length > 10) {
      newErrors.username = 'Username must be less than 10 characters';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.company) {
      newErrors.company = 'CompanyName is Required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    let temp_data = null;
    if (validate()) {
      // Handle form submission
      if(title === 'Add User'){
        const obj = {
            'id':usersData[usersData.length-1].id+1,
            'name':formData.name,
            'username':formData.username,
            'email':formData.email,
            'company':{
                'name':formData.company,
            }
        }
        temp_data = [...usersData,obj];
      }else if(title === 'Edit User'){
        usersData[data.id-1].name = formData.name;
        usersData[data.id-1].username = formData.username;
        usersData[data.id-1].email = formData.email;
        usersData[data.id-1].company.name = formData.company;
        temp_data = JSON.parse(JSON.stringify(usersData));
      }
      setUsersData(temp_data);
      console.log('Form submitted:', formData);
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.username}
          helperText={errors.username}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.company}
          helperText={errors.company}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
