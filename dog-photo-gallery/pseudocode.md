
// <!DOCTYPE html>: This is the doctype declaration, which specifies that the document is an HTML5 document.
// <html>, <head>, <title>, <body>: These are HTML tags that define the structure and content of the webpage. The <head> tag contains metadata about the document, and the <title> tag sets the title of the webpage that appears in the browser's title bar. The <body> tag contains the visible content of the webpage.
// <h1>: This is a heading tag that displays the text "Random Dog Photo Gallery" as the main heading on the webpage.
// <button>: This is a button element with the id attribute set to "fetchButton". It represents a clickable button that triggers an action when clicked.
// <ul>: This is an unordered list element with the id attribute set to "gallery". It will serve as the container for the dog images in the photo gallery.
// <script src="script.js"></script>: This is a script tag that links an external JavaScript file named "script.js" to the HTML file. The JavaScript code written in "script.js" will be executed when the webpage loads.



// async function fetchRandomDogImage() { ... }: This declares an asynchronous function named fetchRandomDogImage. The async keyword indicates that the function will use the await keyword to handle promises. This function is responsible for making the API call to fetch a random dog image and displaying it in the gallery.
// try { ... }: This initiates a try block, which allows us to catch any errors that may occur during the execution of the code inside the block.
// const response = await fetch('https://dog.ceo/api/breeds/image/random');: This line makes an API call to the specified URL using the fetch function. The await keyword indicates that the code should wait until the promise returned by fetch is resolved. The response object is stored in the response variable.
// const data = await response.json();: This line uses the await keyword to wait until the promise returned by response.json() is resolved. It parses the response body as JSON and stores the resulting data in the data variable.
// if (data.status === 'success') { ... }: This checks if the API response has a status property with a value of 'success'. If it does, it means that the API call was successful.
// const listItem = document.createElement('li');: This creates a new list item element (<li>).
// const image = document.createElement('img');: This creates a new image element (<img>).
// image.src = data.message;: This sets the src attribute of the image element to the message property of the data object. The message property contains the URL of the random dog image.
// listItem.appendChild(image);: This appends the image element as a child of the list item element.
// const gallery = document.getElementById('gallery');: This retrieves the gallery element from the DOM using its id attribute.
// gallery.appendChild(listItem);: This appends the list item (with the image) as a child of the gallery element. This adds the dog image to the gallery.
// console.error('Failed to fetch dog image:', data.message);: If the API response has a status other than 'success', this line logs an error message to the console, indicating that the dog image could not be fetched.
// console.error('Error fetching dog image:', error);: This line logs an error message to the console if any error occurs during the API call or parsing of the response.
// const fetchButton = document.getElementById('fetchButton');: This retrieves the fetch button element from the DOM using its id attribute.
// fetchButton.addEventListener('click', () => { ... });: This adds an event listener to the fetchButton element. It listens for the 'click' event, which occurs when the button is clicked by the user. The second argument is an anonymous arrow function that acts as the event handler for the click event.