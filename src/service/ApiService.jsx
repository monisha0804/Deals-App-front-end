import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:1002/profile/add';
const Coupon_API_BASE_URL='http//localhost:1005/coupon/findall';

class ApiService {

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }
    fetchProducts() {
        return axios.get( Coupon_API_BASE_URL);
    }

}

export default new ApiService();