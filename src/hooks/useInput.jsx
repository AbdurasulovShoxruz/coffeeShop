import axios from "axios";
import { useState } from "react"

const useInput = () => {
    const [loginData, setLoginData] = useState({
        name: '',
        email: '',
        password: '',
        rePassword: ''
      });

        const loginHandler = (e) => {
            const name = e.target.name;
            const value = e.target.value;

            setLoginData((prev) => {
                return{...prev, [name]: value}
            })
        }

        const submitHandler = async () => {
            const response = await axios.post('http://localhost:3000/data')
        }

        console.log(loginHandler);

        return[loginHandler, loginData, submitHandler]
}

export default useInput