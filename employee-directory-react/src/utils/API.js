import axios from "axios";

export default{
    getRandomPeople: function(){
        return axios.get("https://randomuser.me/api/?results=20&inc=name,email,gender,registered,cell")
    }
};