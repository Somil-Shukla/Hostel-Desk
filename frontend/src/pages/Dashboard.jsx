import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Complaint from "./Complaint";
import WardenComplaints from "./WardenComplaint";
import { GetAuthHeader } from "../testing/Headers";
import baseUrl from "../service";

function Dashboard() {
  const [userType, setUserType] = useState(null);

  
  useEffect(() => {
   
    const fetchUserType = async () => {
      try {
        const response = await fetch(`${baseUrl}/userType`, {
          method: "GET",
          headers: GetAuthHeader(),
        });

        if (response.ok) {
          const data = await response.json();
          setUserType(data.userType);
        } else {
          console.error('Failed to fetch user type');
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchUserType();
  }, []); 

  return (
    <>
      <Navbar />
      {userType === "student" ? <Complaint /> : null}
      {userType === "warden" ? <WardenComplaints /> : null}
    </>
  );
}

export default Dashboard;
