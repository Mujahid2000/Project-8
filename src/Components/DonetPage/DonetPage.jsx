// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';

// const DonetPage = () => {
//     const [donetedPage, setDonetedPage] = useState([])
//     const [noFound, setNoFound] =  useState(false)
//     useEffect() =>{
//         const storedItems = JSON.parse(localStorage.getItem('Donet')) || [];
        
//         if(storedItems){
//             setDonetedPage(storedItems)
//         }
//         else{
//             setNoFound('no data found here')
//         }
//     }

//     console.log(donetedPage);
//     return <div>{noFound? <p>{noFound}</p>: <div></div>}</div>;

// };

// export default DonetPage;