// @ts-ignore
let imageApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 5000
});

let _state = {
	image: ''
}

let _subscribers = {
	image: []
}

function setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class ImageService {
	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getImage() {
		console.log('Retrieving an image')
		imageApi.get()
			.then(res => {
				setState('image', res.data.url)
				console.log(res.data)
			})
	}

	get imageApi() {
		return _state.image
	}

}