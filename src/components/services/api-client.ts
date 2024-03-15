import axios from 'axios';

export default axios.create({
  baseURL:'https://api.rawg.io/api',
    params:{
    key:'9c5f187a0e2b457091c5fb9a073db47a'
  }  
})