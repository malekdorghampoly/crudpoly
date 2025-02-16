import axios from 'axios';

export function getStudents() {
  return axios.get('http://127.0.0.1:8000/api/student/')
    .then(response => response.data)
}

export function deleteStudent(studentId) {
  console.log(studentId);
  return axios.delete('http://127.0.0.1:8000/api/student/' + studentId , {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

export function addStudent(student){
  return axios.post('http://127.0.0.1:8000/api/student/', {
    full_name: student.full_name.value,
    email: student.email.value,
    twitter: student.twitter.value ,
    linkedin: student.linkedin.value ,
    facebook: student.facebook.value ,
    website: student.website.value 
  })
    .then(response=>response.data)
}

export function updateStudent(stuid, student) {
  return axios.put('http://127.0.0.1:8000/api/student/' + stuid , {
    full_name: student.full_name.value,
    email: student.email.value,
    twitter: student.twitter.value ,
    linkedin: student.linkedin.value ,
    facebook: student.facebook.value ,
    website: student.website.value 
  })
   .then(response => response.data)
}

