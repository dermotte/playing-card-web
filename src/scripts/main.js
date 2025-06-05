const personas = [
  "Bus Driver",
  "Mother with a Small Baby",
  "Sales Agent",
  "High School Student",
  "Delivery Driver (Food/Packages)",
  "Construction Worker",
  "Tour Guide",
  "Healthcare Worker (Home Visit Nurse)",
  "Elderly Person (using a rideshare service)",
  "Long-Haul Truck Driver",
  "Musician/Band (traveling to gigs)",
  "Event Planner",
  "Veterinarian on Emergency Call-Out",
  "Wedding Photographer",
  "Remote Worker traveling to a meetings",
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
  "Motorcycle Scenery Photographer",
  "Scooter Repair Technician",
  "Skateboarder commuting",
  "Roller Skater (Recreational)",
  "Mobility Scooter User",
  "Pilgrim/Religious Walker",
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
  "Adapted Vans (Wheelchair Accessible)",
  "Golf Carts",
  "ATVs (All-Terrain Vehicles)",
  "Snowmobiles",
  "Boats (Sailboats, Motorboats)",
  "Jet Skis",
  "Cable Cars",
  "Rickshaws (Pedal-Powered)",
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
  "Scooters (Electric)",
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
  "Public Transit (Buses, Trams)",
  "Walking",
  "Running",
  "Electric Skateboards",
  "Unicycles",
  "Pedal Boats",
]

function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * personas.length);
    let p = personas[randomIndex];
    const modeIndex = Math.floor(Math.random() * modes.length);
    let m = modes[modeIndex];
    return "You are a " + p + ".<br/>What do you think about " + m + "?";
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

document.getElementById('drawCardButton').addEventListener('click', updateCard);

// Initialize with a random card on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCard();
});