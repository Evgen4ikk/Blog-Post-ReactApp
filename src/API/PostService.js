import axios from 'axios'

export default class PostService {
	static async getAllPosts(limit = 10, page = 1) {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
			params: {
				_limit: limit,
				_page: page
			}
		})
		return response
	}

	static async getById(id) {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
		return response
	}
	
	static async getCommentsById(id) {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
		return response
	}
	static async getAllUsers() {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
		return response
	}
	static async getUsersById(id) {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
		return response
	}
}