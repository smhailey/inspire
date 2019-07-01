import Quote from "../../models/quote.js";

// @ts-ignore
const quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 5000
});

let _state = {
	quote: {}
}

let _subscribers = {
	quote: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class QuoteService {
	get Quote() {
		return _state.quote
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getQuote() {
		console.log('Retrieving a quote')
		quoteApi.get().then(res => {
			_setState('quote', new Quote(res.data))
			console.log(res.data)
		})
	}
}
