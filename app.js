// const recipes = [
//     {
//         id: 1,
//         title: "Classic Spaghetti Carbonara",
//         time: 25,
//         difficulty: "easy",
//         description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
//         category: "pasta"
//     },
//     {
//         id: 2,
//         title: "Chicken Tikka Masala",
//         time: 45,
//         difficulty: "medium",
//         description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
//         category: "curry"
//     },
//     {
//         id: 3,
//         title: "Homemade Croissants",
//         time: 180,
//         difficulty: "hard",
//         description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
//         category: "baking"
//     },
//     {
//         id: 4,
//         title: "Greek Salad",
//         time: 15,
//         difficulty: "easy",
//         description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
//         category: "salad"
//     },
//     {
//         id: 5,
//         title: "Beef Wellington",
//         time: 120,
//         difficulty: "hard",
//         description: "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
//         category: "meat"
//     },
//     {
//         id: 6,
//         title: "Vegetable Stir Fry",
//         time: 20,
//         difficulty: "easy",
//         description: "Colorful mixed vegetables cooked quickly in a savory sauce.",
//         category: "vegetarian"
//     },
//     {
//         id: 7,
//         title: "Pad Thai",
//         time: 30,
//         difficulty: "medium",
//         description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
//         category: "noodles"
//     },
//     {
//         id: 8,
//         title: "Margherita Pizza",
//         time: 60,
//         difficulty: "medium",
//         description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
//         category: "pizza"
//     }
// ];

// // DOM Selection
// const recipeContainer = document.querySelector('#recipe-container');

// //create single recipe card
// const createRecipeCard = (recipe) => {
//     return `
//         <div class="recipe-card" data-id="${recipe.id}">
//             <h3>${recipe.title}</h3>
//             <div class="recipe-meta">
//                 <span>⏱️ ${recipe.time} min</span>
//                 <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
//             </div>
//             <p>${recipe.description}</p>
//         </div>
//     `;
// };

// //render recipes to the DOM
// const renderRecipes = (recipesToRender) => {
//     const recipeCardsHTML = recipesToRender
//         .map(createRecipeCard)
//         .join('');
    
//     recipeContainer.innerHTML = recipeCardsHTML;
// };

// // Initialize
// renderRecipes(recipes);
// Your OpenWeatherMap API Key
const API_KEY = 'YOUR_API_KEY_HERE';  // Replace with your actual API key
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data
function getWeather(city) {
    // Build the complete URL
    const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    
    // Make API call using Axios
    axios.get(url)
        .then(function(response) {
            // Success! We got the data
            console.log('Weather Data:', response.data);
            displayWeather(response.data);
        })
        .catch(function(error) {
            // Something went wrong
            console.error('Error fetching weather:', error);
            document.getElementById('weather-display').innerHTML = 
                '<p class="loading">Could not fetch weather data. Please try again.</p>';
        });
}

// Function to display weather data
function displayWeather(data) {
    // Extract the data we need
    const cityName = data.name;
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    
    // Create HTML to display
    const weatherHTML = `
        <div class="weather-info">
            <h2 class="city-name">${cityName}</h2>
            <img src="${iconUrl}" alt="${description}" class="weather-icon">
            <div class="temperature">${temperature}°C</div>
            <p class="description">${description}</p>
        </div>
    `;
    
    // Put it on the page
    document.getElementById('weather-display').innerHTML = weatherHTML;
}

// Call the function when page loads
getWeather('London');