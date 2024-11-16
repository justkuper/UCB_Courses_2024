const shoppingFormEl = $('#shopping-form');
const shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event) {
  // Prevent the default behavior
  event.preventDefault();

  // Get the input value
  const inputEl = $('#shopping-input');
  const item = inputEl.val().trim();

  // Print the input value to the shopping list
  shoppingListEl.append(`<li>${item}</li>`);

  // Clear the input field
  inputEl.val('');
}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', handleFormSubmit);