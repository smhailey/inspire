export default class Quote {
  constructor(data) {
    this.author = data.quote.author
    this.body = data.quote.body
  }

  quoteTemplate() {
    return `
    <div class="" id="quote">
			<h6 class="text-white mt-1">${this.body}</h6>
			<p class="text-red mt-3"><span class="author"> &mdash; ${this.author}</span></p>
		</div>
    `
  }
}