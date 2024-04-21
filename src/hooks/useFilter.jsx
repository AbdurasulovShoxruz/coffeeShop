// import { useEffect, useState } from 'react'
// import {data} from '../data.js'

// const useFilter = () => {
//     const [inputData, setInputData] = useState(
//         {
//             originalData: [...data],
//             sortedData: [...data],
//             search: '',
//             filter: 'all',
//         }
//     );

//     useEffect(() => {
//         filterData()
//     }, [
//         inputData.search,
//     ])

    
//     const filterData = () => {
//         let tempData = [...inputData.originalData];
//         tempData = tempData.filter((cofe) => 
//             cofe.name.toLowerCase().includes(inputData.search.toLowerCase())
//         );

//         setInputData((prev) => {
//             return{...prev, sortedData: tempData}
//         })
//     }


//     const inputHandler = (e) => {
//         const name = e.target.name; 
//         const value = e.target.value; 
    
//         setInputData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };
    
      
//         console.log(inputData);
    
//     return[inputData, inputHandler, filterData]
// }

// export default useFilter

// import { useEffect, useState } from 'react';
// import { data } from '../data.js';

// const useFilter = () => {
//     const [inputData, setInputData] = useState({
//         originalData: [...data],
//         sortedData: [],
//         search: '',
//         filter: 'all',
//     });

//     useEffect(() => {
//         filterData();
//     }, [inputData.search]);

//     const filterData = () => {
//         let tempData = [...inputData.originalData];
//         tempData = tempData.filter((cofe) =>
//           cofe.name.toLowerCase().includes(inputData.search)
//         );
//         if (inputData.filter !== "all") {
//             tempData = tempData.filter(
//               (cofe) => cofe.filter === inputData.filter
//             );}





//         setInputData((prev) => ({
//             ...prev,
//             sortedData: tempData,
//         }));
//     };

//     const inputHandler = (e) => {
//         const { name, value } = e.target;
//         setInputData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     console.log(inputData);

//     return [inputData, inputHandler, filterData];
// };

// export default useFilter;
