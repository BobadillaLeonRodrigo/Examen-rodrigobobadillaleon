/*
Importamos api de la url proporcionada. 
Referencia anterior https://reqres.in/api/users&quot 
Referencia Actual https://reqres.in/api
*/
import axios from "axios";
export const ReqRestApi = axios.create({
    baseURL: `https://reqres.in/api`
});
export default ReqRestApi