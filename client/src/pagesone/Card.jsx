import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function BasicExample({data}) {
    const{name,email,password,_id}=data
  return (
    <div>
   <table>
      <tr>
       <th> Name : {name} </th>
      </tr>
      <tr>
        <th>Email : {email}</th>
        </tr>
        <tr>
       <th> Password : {password}</th>
        </tr>
        </table>
        
       <Link to={`/update/${_id}`}><Button variant="primary">Update</Button></Link> 
       </div>
   
  );
}

export default BasicExample;