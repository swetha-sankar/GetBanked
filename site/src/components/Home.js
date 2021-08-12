import React, { useState } from 'react';

function Home() {
 const [data, setData] = useState(0);

 return (
   <div>
     <p>You donated {data} times</p>
     <button onClick={() => setData(data + 1)}>
       Click here and donate a dollar
     </button>
   </div>
 );
}
export default Home;
