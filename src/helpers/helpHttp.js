import axios from 'axios';

export const helpHttp = () => {
	const postData = async (data) => {
		try {
			const response = await axios.post('http://localhost:3004/users', data);
			console.log('Data saved to server:', response.data);
			return response.data;
		} catch (error) {
			console.error('Error saving data:', error);
		}
	};

	const deleteData = async (id) => {
		try {
			const response = await axios.delete(`http://localhost:3004/users/${id}`);
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	return {
		postData,
		deleteData,
	};
};
