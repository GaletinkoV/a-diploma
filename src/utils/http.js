import axios from 'axios';

const api = 'https://83de16ae48d6.ngrok.io/v1';

class Http {
	post = async (url, data) => {
		return axios.post(`${api}${url}`, data, this.getHeaders())
			.then((response) => response.data)
	}

	get = async (url) => {
		return axios.get(`${api}${url}`, this.getHeaders())
			.then((response) => response.data);
	}

	getAuthorization = () => {
		const token = localStorage.getItem('token');

		return token ? `Bearer ${token}` : '';
	};

	getHeaders = () => {
		return {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: this.getAuthorization()
			}
		};
	}
}

export default new Http();