import React, { useState } from 'react';
import TestApi from './TestApi'

function Home() {
 const [data, setData] = useState(0);

 return (
   <div>
     <p>You've invested $ {data} </p>
     <button onClick={() => setData(data + 1)}>
       Click here and invest a dollar
     </button>
   </div>
 );
}
export default Home;
