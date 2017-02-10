//import { normalize, schema } from 'normalizr'
//import Immutable from 'immutable'
//import adDirectorSchema from './schema'

const dev = true
const authorization = 'Basic ' + btoa('adops:5VUgoHIroKAscJhyPf')
const URL = dev ? 'http://ec2-54-147-204-2.compute-1.amazonaws.com:8000/manager/api/' : 'http://addir.vip.dailymotion.com/manager/api/'

export function apiRequest(bodyObject) {
	const body = JSON.stringify(bodyObject)

	return fetch(URL,
		{
			method: 'POST',
			body,
			headers: {
				'Authorization': authorization,
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		//.then(json => Immutable.fromJS(normalize(json, adDirectorSchema)))
		//.catch(error => console.error(error))
}

export default apiRequest
