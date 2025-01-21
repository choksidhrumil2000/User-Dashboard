import React, { useState, createContext, useEffect } from "react";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          // Handle HTTP errors
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data from the response
        const data = await response.json();
        setUsersData(data);
      } catch (error) {
        // Handle network errors or errors thrown above
        console.error("There was a problem with the fetch operation:", error);
        alert(error);
      }
    }
    fetchData();
  }, []);

  return (
    <UserDataContext.Provider value={{ usersData, setUsersData }}>
      {children}
    </UserDataContext.Provider>
  );
};
