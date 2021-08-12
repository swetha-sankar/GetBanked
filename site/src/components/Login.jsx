import React, { useState } from 'react';
function Login({navigation}){
 const [user, setUser] = useState('');
 const[pass, setPass] = useState('');
 const[loggedIn, setLoggedIn] = useState(false);

 return (
   <div>
     <p>Enter Username </p>
       <p> Enter Password</p>
     <button onClick={() => navigation.navigate('landing')}>
       Login
     </button>
   </div>
 );
}
export default Login;