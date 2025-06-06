const personas = [
  "Bus Driver",
  "Mother with a Small Baby",
  "Sales Agent",
  "High School Student",
  "Delivery Driver (Food/Packages)",
  "Construction Worker",
  "Tour Guide",
  "Home Visit Nurse",
  "Elderly Person (using a rideshare service)",
  "Long-Haul Truck Driver",
  "Musician/Band (traveling to gigs)",
  "Event Planner",
  "Veterinarian on Emergency Call-Out",
  "Wedding Photographer",
  "Remote Worker traveling to a meeting",
  "Agricultural Worker walking to the fields",
  "Moving Company Employee",
  "Ride-Share Driver",
  "Commuter Train Conductor",
  "Space Tourism Passenger",
  "Bike Messenger",
  "Food Delivery Rider on E-bike",
  "Motorcycle Courier",
  "Bike Tour Guide",
  "Urban Commuter on bicycle",
  "Long-Distance Cyclist",
  "Foot Patrol Police Officer",
  "Mail Carrier (Walking Route)",
  "Park Ranger",
  "Construction Worker commuting to work",
  "Camera Person for Film Production",
  "Real Estate Agent showing Properties",
  "Dog Walker",
  "Hiking Guide",
  "Motorcycle Tourist",
  "Scooter Repair Technician",
  "Skateboarder",
  "Roller Skater",
  "Mobility Scooter User",
  "Pilgrim/Religious Walker",
  "Taxi Driver",
  "Farmer",
  "Donald Trump",
  "Elon Musk",
]

const modes = [
  "Wheelchairs (Manual & Powered)",
  "Hand Bikes",
  "Old People with Rollators",
  "Cabriolets",
  "Horse-Drawn Carriages",
  "Segways",
  "Monocycles",
  "Vintage Cars (Restored)",
  "Camping Vans",
  "Golf Carts",
  "ATVs (All-Terrain Vehicles)",
  "Snowmobiles",
  "Sailboats",
  "Jet Skis",
  "Cable Cars",
  "Rickshaws",
  "Tuk-Tuks",
  "Hovercrafts",
  "Ziplines",
  "E-Bikes",
  "Going by Train",
  "Pedestrians",
  "Cyclists",
  "SUVs",
  "Pick-Up Trucks",
  "Gravel Bikers",
  "Hikers",
  "Motorcycles",
  "Electric Scooters",
  "Skateboarders",
  "Roller Skaters",
  "Mobility Scooter Users",
  "Long-Haul Truckers",
  "Tour Buses",
  "School Buses",
  "Ferries",
  "Kayaks/Canoes",
  "Spacecraft Passengers",
  "Hot Air Balloon Riders",
  "Compact Cars",
  "Helicopters",
  "Short Distance Air Travel",
  "Carpooling",
  "Car Rentals",
  "Ride-Sharing Services",
  "Public Transit",
  "Walking",
  "Running",
  "Electric Skateboards",
  "Unicycles",
  "Pedal Boats",
]



let personas_order = [];
let personas_idx = 0;

let modes_order = [];
let modes_idx = 0;

let templates_idx = 0;

function getRandomCard() {
    let p = personas[personas_order[personas_idx]];
    personas_idx = (personas_idx+1)%personas_order.length
    let m = modes[modes_order[modes_idx]];
    modes_idx = (modes_idx+1)%modes_order.length
    const templates = [
        `Channel your inner ${p}.<br/>Deliver a one-sentence quote on ${m}.` ,
        `Role: ${p}. Topic: ${m}. One-sentence quote please.` ,
        `As a ${p}, give us a one-sentence quote on ${m}.` ,
    ]
    let result = templates[templates_idx++%templates.length] 
    return result;
}

function updateCard() {
    const cardElement = document.getElementById('playingCard');
    cardElement.classList.add('fade-out');

    setTimeout(() => {
        cardElement.innerHTML = getRandomCard();
        cardElement.classList.remove('fade-out');
        cardElement.classList.add('fade-in');
    }, 300); // Duration of fade-out animation

    setTimeout(() => {
        cardElement.classList.remove('fade-in');
    }, 600); // Duration of fade-in animation
}

/**
 * Shuffles an array of numbers from 0 to n-1 in random order.
 *
 * @param {number} n The upper bound of the range of numbers to shuffle (exclusive).
 * @returns {number[]} An array containing the numbers from 0 to n-1 in random order.
 */
function shuffle(n) {
  const arr = Array.from({ length: n }, (_, i) => i); // Create an array from 0 to n-1
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index from 0 to i
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements at index i and j
  }
  return arr;
}

// init code
personas_order = shuffle(personas.length)
personas_idx = 0
modes_order = shuffle(modes.length)
modes_idx = 0

document.getElementById('drawCardButton').addEventListener('click', updateCard);

// Initialize with a random card on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCard();
});