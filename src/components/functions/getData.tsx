import axios from "axios"
import { SetStateAction } from "react"
import DataType from "../../interfaces/dataType"

export const getData = async (setData: React.Dispatch<SetStateAction<{} | DataType>>) => {

    try {
        const response = await axios.get('http://localhost:3000/main')
        setData(response.data)
        console.log("Resposta: ", response.data)
    } catch (e) {
        console.log(e)
    }

}
