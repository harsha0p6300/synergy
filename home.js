// Function to handle the survey submission
function submitSurvey() {
    const dailyDistance = document.getElementById('daily-distance').value;
    const electricityUse = document.getElementById('electricity-use').value;
    const meatConsumption = document.getElementById('meat-consumption').value;

    if (dailyDistance && electricityUse && meatConsumption) {
        // Calculate emissions based on inputs
        const travelEmissions = dailyDistance * 0.25; // 0.25 kg CO2 per km
        const energyEmissions = electricityUse * 0.5; // 0.5 kg CO2 per kWh
        const dietEmissions = meatConsumption * 1.5; // 1.5 kg CO2 per meal with meat

        const totalEmissions = travelEmissions + energyEmissions + dietEmissions;

        // Show results
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<p>Your total daily CO2 emissions are approximately ${totalEmissions.toFixed(2)} kg CO2.</p>`;
        resultDiv.classList.remove('hidden');

        // Show suggestions based on emissions
        showSuggestions(totalEmissions);
    } else {
        alert("Please fill out all the fields!");
    }
}

// Function to show suggestions based on emissions
function showSuggestions(emissions) {
    const suggestionsList = document.getElementById('suggestions-list');
    suggestionsList.innerHTML = ''; // Clear previous suggestions

    if (emissions > 20) {
        suggestionsList.innerHTML += `<li>Consider walking, biking, or carpooling to reduce travel emissions.</li>`;
    }

    if (emissions > 30) {
        suggestionsList.innerHTML += `<li>Reduce energy consumption by turning off unused appliances or using energy-efficient ones.</li>`;
    }

    if (emissions > 40) {
        suggestionsList.innerHTML += `<li>Opt for plant-based meals to reduce emissions from meat consumption.</li>`;
    }

    document.getElementById('suggestions').classList.remove('hidden');
}
