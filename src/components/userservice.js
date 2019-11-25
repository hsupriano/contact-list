
import axios from "axios";

class Service {
  getUser() {
    return axios.get("https://reqres.in/api/users?page=2");
  }
}

var svc = new Service();

export default svc;
 



           




