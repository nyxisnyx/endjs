/*Publish a web page that shows a random quote from an available Web Service, from the Quotes serving website: https://thatsthespir.it

The web service sits at this URL: https://thatsthespir.it/api. It is called the endpoint".

Steps
Send a request to a remote server via javascript using async/await and try/catch.
Treat the answer :
If the request failed, show an error message to the user.
if the request succeed, transform a JSON response into Html, injected in the DOM.
Make a button to generate another random quote.
Make it look good via CSS (inspiration).
Publish it as a GitHub Page
When it works, share the link on your startup's discord channel.
Bonus
Use the agify API to guess the age of the authors
Implement loader wihle the request is pending*/


//Fetch data
async function fetchQuote() {
    const response = await fetch('https://thatsthespir.it/api');
    const data = await response.json();
    return data;
}


//Create div
function createDiv(className) {
    const div = document.createElement('div');
    if (className) {
        div.classList.add(className);
    }
    return div;
}

//Display result
async function displayQuote() {
    try {
        const qt = await fetchQuote();
        const resultsContainer = document.getElementById('resultsContainer');

        quoteAlready = document.getElementById('quoteText');
        authorAlready = document.getElementById('quoteAuthor');

        if (quoteAlready) {
            //delete
            quoteAlready.remove()
            authorAlready.remove()
        }

        // Create a new div for displaying result
        const resultDiv = createDiv('result');
        resultDiv.textContent = qt.quote;
        resultDiv.setAttribute("id", "quoteText");

        const quoteAttrib = createDiv('author');
        quoteAttrib.textContent = qt.author;
        quoteAttrib.setAttribute("id", "quoteAuthor");

        // Add the new div to the container
        resultsContainer.appendChild(resultDiv);
        resultsContainer.appendChild(quoteAttrib);

        
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Error fetching data. Please try again later.');
    }
}

window.onload = () => {
    displayQuote();
}


// Event listener for button click
document.getElementById('submitButton').addEventListener('click', displayQuote);