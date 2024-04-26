
import axios from "axios";


const PERSONAS_REST_API_URL= "http://localhost:8080/personas";

class PersonasService{
    getPersonas(){
        return axios.get(PERSONAS_REST_API_URL);
    }
}

export default new PersonasService();