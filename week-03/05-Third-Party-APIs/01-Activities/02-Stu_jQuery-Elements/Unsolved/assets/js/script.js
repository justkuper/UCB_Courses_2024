// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
// Hint: Visit the documentation https://api.jquery.com/
const rootEl = $("#root");

// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable
const authorEl = $("<p>");
// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"
authorEl.text("~Charles Bukowski");
// TODO: Add the class `plain` to the author element
authorEl.addClass('plain');
// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable
const quoteH1 = $("<h1>");
// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
quoteH1.text('Some people never go crazy. What truly horrible lives they must lead.');
// TODO: Apply the class `fancy` to the quote element
quoteH1.addClass('fancy');
// TODO: Append the author element to the quote element
rootEl.append(quoteH1, authorEl);
// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
