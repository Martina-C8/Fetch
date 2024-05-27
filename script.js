// Define the endpoint
const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem";

// Perform the fetch request
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Get the eminemSection div
        const eminemSection = document.getElementById('eminemSection');

        // Clear any existing content
        eminemSection.innerHTML = '';

        // Loop through the data and create elements for each song
        data.data.forEach(song => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col mb-4';
            
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';

            const img = document.createElement('img');
            img.src = song.album.cover_medium;
            img.className = 'card-img-top';
            img.alt = song.title;

            const cardBodyDiv = document.createElement('div');
            cardBodyDiv.className = 'card-body';

            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.innerText = song.title;

            const cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerText = song.artist.name;

            const cardLink = document.createElement('a');
            cardLink.href = song.link;
            cardLink.className = 'btn btn-primary';
            cardLink.innerText = 'Listen on Deezer';

            // Append elements to the DOM
            cardBodyDiv.appendChild(cardTitle);
            cardBodyDiv.appendChild(cardText);
            cardBodyDiv.appendChild(cardLink);
            cardDiv.appendChild(img);
            cardDiv.appendChild(cardBodyDiv);
            colDiv.appendChild(cardDiv);
            eminemSection.appendChild(colDiv);
        });

        // Make the section visible
        document.getElementById('eminem').classList.remove('d-none');
    })
    .catch(error => {
        // Handle any errors
        console.error('There has been a problem with your fetch operation:', error);
    });