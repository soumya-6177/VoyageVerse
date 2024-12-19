// Replace this with your Unsplash API Access Key
const UNSPLASH_ACCESS_KEY = "bntc9aEjzUlCbrYh0tBdsCTK4hL4o8yOm_3DpZfTi-E";

// Function to fetch places based on query
async function fetchPlaces(query = "london") {
    const API_URL = `https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${UNSPLASH_ACCESS_KEY}`;
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayPlaces(data.results);
    } catch (error) {
        console.error("Error fetching data from Unsplash API:", error);
        displayError("Failed to load data. Please try again later.");
    }
}

// Function to display places
function displayPlaces(places) {
    const placesContainer = document.getElementById("places");
    placesContainer.innerHTML = ""; // Clear previous results

    if (places.length === 0) {
        placesContainer.innerHTML = "<p>No results found. Try searching for something else!</p>";
        return;
    }

    places.forEach(place => {
        const placeCard = document.createElement("div");
        placeCard.classList.add("place-card");

        placeCard.innerHTML = `
        
        <div class="dabba">
          
        <img src="${place.urls.small}" alt="${place.alt_description}">
          
              
        <p>${place.alt_description || "Beautiful Place"}</p>
              
        </div>
          
      `;
        placesContainer.appendChild(placeCard);
    });
}

// Function to display error message
function displayError(message) {
    const placesContainer = document.getElementById("places");
    placesContainer.innerHTML = `<p>${message}</p>`;
}

// Event listener for user search
document.getElementById("search-button").addEventListener("click", () => {
    const searchQuery = document.getElementById("search-input").value.trim();
    if (searchQuery) {
        fetchPlaces(searchQuery); // Pass the user input to fetchPlaces
    } else {
        alert("Please enter a search term!");
    }
});

// Initial fetch to display default results
fetchPlaces();
