import axios from 'axios';
const getAccounts = async () => {
    try {
      return await axios.get('http://localhost:8080/account');
    } catch (error) {
      console.error(error);
    }
  };
  

export default getAccounts;