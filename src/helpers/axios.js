
import axios from 'axios'


export const AxiosV2 = axios.create({
	baseURL: `${window.API_BASE}/`,
	timeout: 20000,
	withCredentials: true
})



export default AxiosV2