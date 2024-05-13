// Make a new page with a text input and a button. When the button is clicked, a fetch query is sent to the agify API with the name entered in the input. When the request is finished display the result in a new div on the page. Keep the the past requests on the page by creating a new div each time you make an API call.

// Function to create a new div element
function createDiv(className) {
    const div = document.createElement('div');
    if (className) {
        div.classList.add(className);
    }
    return div;
}

// Function to fetch data from Cat Facts API
async function fetchCatFact() {
    const response = await fetch('https://cat-fact.herokuapp.com/facts/random');
    const data = await response.json();
    return data.text; // Extract the 'text' property
}

// Function to display result in a new div
async function displayCatFact() {
    try {
        const fact = await fetchCatFact();
        const resultsContainer = document.getElementById('resultsContainer');

        // Create a new div for displaying result
        const resultDiv = createDiv('result');
        resultDiv.textContent = fact;

        // Add the new div to the container
        resultsContainer.appendChild(resultDiv);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Error fetching data. Please try again later.');
    }
}

// Event listener for button click
document.getElementById('submitButton').addEventListener('click', displayCatFact);