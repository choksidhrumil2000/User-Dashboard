import React,{useState,createContext, useEffect} from 'react';

export const UserDataContext = createContext();

export const UserDataProvider = ({children})=>{

    const [usersData,setUsersData] = useState([]);

    useEffect(()=>{
        try{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((res)=>res.json())
            .then((data)=>setUsersData(data))
        }catch(err){
            alert(err);
        }
    },[]);
    

    console.log("UsersData",usersData);

    return(
        <UserDataContext.Provider value={{usersData,setUsersData}} >
            {children}
        </UserDataContext.Provider>
    );

}