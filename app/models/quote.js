export default class Quote {
  constructor(data) {
    this.author = data.author
    this.body = data.body
  }

  quoteTemplate() {
    return `
    <div class="" id="quote">
			<h6 class="text-red mt-1">${this.body}</h6>
			<p class="text-red mt-3"><span class="author"> &mdash; ${this.author}</span></p>
			<div>
				<button class="btn btn-sm btn-outline-light shadow-lg mt-3" id="next-quote"
					onclick="app.controllers.quoteController.nextQuote()">Change quote<i class="fas fa-arrow-right ml-2"></i></button>
			</div>
			<p class="after-author"> </p>
		</div>
    `
  }
}