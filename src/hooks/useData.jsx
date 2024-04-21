import { useEffect, useState } from "react"
import axios from "axios"


const useData = () => {
    const [cofeData, setCofeData] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const {data, status} = await axios.get('http://localhost:3000/data');

        if(status === 200){
            setCofeData(data)
        }

    }

    console.log(cofeData);



    return[cofeData]
}

export default useData