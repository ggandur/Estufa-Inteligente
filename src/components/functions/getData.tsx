import axios from "axios"
import DataType from "../../interfaces/dataType"

export const getData = async (sucessCallback: (data: DataType) => void) => {

    try {
        const response = await axios.get('http://localhost:3000/main')
        sucessCallback(response.data)
        console.log("Resposta: ", response.data)
    } catch (e) {
        console.log(e)
    }

}
