//Create a <button>, when clicked the json's contentn is loaded with a fetch('your-json-file.json'), then dynamically generate a <ul> list containing each rule in a <li>.

async function logPoem() {
    const testResponse = await fetch("data.json");
    const testPoem = await testResponse.json();
    console.log(testPoem);
}

logPoem();

function createDiv(type, parent, content, className) {
    const newDiv = document.createElement(type);
    if (content != null) {
        newDiv.innerHTML = content;
    }
    if (className != null) {
        newDiv.classList.add(className);
    }
    parent.appendChild(newDiv);
    return newDiv;
}

const poem = document.getElementById("poemContainer");

function displayPoem() {
    let blockList = createDiv("ul", poem, "", "poemblock");

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            data.robert_frost.forEach(line => {
                let poemLine = createDiv('li', blockList, "", "poemline");
                poemLine.textContent = line;
                blockList.appendChild(poemLine);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

        blockList.style.listStyle = "none";
}

document.getElementById('button').addEventListener("click", displayPoem);

            