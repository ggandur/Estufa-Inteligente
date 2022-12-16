import axios from "axios";
import DataType from "../../interfaces/dataType";

const requestURL = "http://200.235.85.72/";

const errorCallback = () => {
  return console.log("A Callback falhou e não obteve dados\nErro:");
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const getData = async (succesCallback: (data: DataType) => void) => {
  while (true) {
    try {
      const response = await axios.get(requestURL);
      succesCallback(response.data);
      console.log("Resposta: ", response.data);
    } catch (e) {
      errorCallback();
      console.log(e);
    }
    await sleep(1000);
  }
};
