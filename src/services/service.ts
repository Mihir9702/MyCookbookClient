import axios, { AxiosRequestHeaders } from 'axios'
import { url } from './url'

interface Headers extends AxiosRequestHeaders {
	Authorization: string | any
}

export const get = (route: string) => {
	const token = localStorage.getItem('token')

	return axios.get(`${url}${route}`, {
		headers: <Headers>{
			'Content-Type': 'application/json',
			Authorization: token,
		},
	})
}

export const post = (route: string, body: unknown) => {
	const token = localStorage.getItem('token')

	return axios.post(`${url}${route}`, body, {
		headers: <Headers>{
			'Content-Type': 'application/json',
			Authorization: token,
		},
	})
}
