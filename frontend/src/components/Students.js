import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getStudents } from '../services/StudentService';
import "../App.css";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
   let mounted = true;
   getStudents().then(data => {
       if(mounted) {
         setStudents(data)
       }
     })
   return () => mounted = false;
 }, [])

  return(
   <div className="container-fluid side-container">
   <div className="row side-row" >
    <p id="before-table"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
        <thead>
            <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Twitter</th>
            <th>LinkedIn</th>
            <th>Facebook</th>
            <th>Website</th>
            </tr>
        </thead>
        <tbody>
            {students.map((stu) =>

              <tr key={stu.email}>
              <td>{stu.full_name}</td>
              <td>{stu.email}</td>
              <td>{stu.twitter || 'N/A'}</td>
              <td>{stu.linkedin || 'N/A'}</td>
              <td>{stu.facebook || 'N/A'}</td>
              <td>{stu.website || 'N/A'}</td>
              </tr>)}

        </tbody>
    </Table>
    </div>
  </div>
  );
};

export default Students;