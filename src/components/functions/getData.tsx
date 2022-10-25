import axios from "axios"
import DataType from "../../interfaces/dataType"

const errorCallback = () => {
    return (
        console.log('A Callback falhou e não obteve dados\nErro:')
    )
}

export const getData = async (succesCallback: (data: DataType) => void) => {

    try {
        const response = await axios.get('http://localhost:3000/main')
        succesCallback(response.data)
        console.log("Resposta: ", response.data)
    } catch (e) {
        errorCallback()
        console.log(e)
    }

}
