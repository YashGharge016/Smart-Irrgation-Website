document.addEventListener('DOMContentLoaded', function () {
    function checkSunlight() {
        const sunlightPresent = Math.random() > 0.5; // Simulate sunlight presence with a random boolean

        const sunlightAnimation = document.getElementById('sunlightAnimation');
        const sunlightStatus = document.getElementById('sunlightStatus');

        if (sunlightPresent) {
            sunlightAnimation.classList.add('sunlight-present');
            sunlightAnimation.classList.remove('sunlight-absent');
            sunlightStatus.textContent = 'Sunlight Status: Detected';
        } else {
            sunlightAnimation.classList.add('sunlight-absent');
            sunlightAnimation.classList.remove('sunlight-present');
            sunlightStatus.textContent = 'Sunlight Status: Not Detected';
        }
    }

    // Check sunlight status when the page loads
    checkSunlight();
});

// Initialize charts
const ctxTemp = document.getElementById('airTemperatureChart').getContext('2d');
const ctxHumidity = document.getElementById('airHumidityChart').getContext('2d');
const ctxSoil = document.getElementById('soilMoistureChart').getContext('2d');

function getCurrentTime() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}

// Create charts
// Initialize CO2 chart
const ctxCO2 = document.getElementById('co2Chart').getContext('2d');

const co2Chart = new Chart(ctxCO2, {
    type: 'line',
    data: {
        labels: [getCurrentTime()],
        datasets: [{
            label: 'CO2 Percentage (ppm)',
            data: [400], // Placeholder value
            borderColor: '#ff851b',
            backgroundColor: 'rgba(255, 133, 27, 0.2)',
            fill: true,
            pointRadius: 8,
            pointBackgroundColor: '#ff851b',
            borderWidth: 2,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: { color: '#ddd', borderColor: '#ddd', borderDash: [5, 5] },
                title: { display: true, text: 'Time', color: '#333' },
                ticks: { maxRotation: 45, autoSkip: true }
            },
            y: {
                min: 0, max: 2000,
                grid: { color: '#ddd', borderColor: '#ddd', borderDash: [5, 5] },
                title: { display: true, text: 'CO2 Percentage (ppm)', color: '#333' },
                ticks: { callback: value => `${value} ppm` }
            }
        },
        plugins: {
            legend: { display: true, labels: { color: '#333' } },
            tooltip: {
                callbacks: {
                    title: tooltipItems => `Time: ${tooltipItems[0].label}`,
                    label: tooltipItem => `CO2: ${tooltipItem.raw} ppm`
                }
            }
        }
    }
});

const airTemperatureChart = new Chart(ctxTemp, {
    type: 'line',
    data: {
        labels: [getCurrentTime()],
        datasets: [{
            label: 'Air Temperature (°C)',
            data: [50], // Placeholder value
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            fill: true,
            pointRadius: 8,
            pointBackgroundColor: '#007bff',
            borderWidth: 2,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: { color: '#ddd', borderColor: '#ddd', borderDash: [5, 5] },
                title: { display: true, text: 'Time', color: '#333' },
                ticks: { maxRotation: 45, autoSkip: true }
            },
            y: {
                min: 0, max: 100,
                grid: { color: '#ddd', borderColor: '#ddd', borderDash: [5, 5] },
                title: { display: true, text: 'Temperature (°C)', color: '#333' },
                ticks: { callback: value => `${value}°C` }
            }
        },
        plugins: {
            legend: { display: true, labels: { color: '#333' } },
            tooltip: {
                callbacks: {
                    title: tooltipItems => `Time: ${tooltipItems[0].label}`,
                    label: tooltipItem => `Temperature: ${tooltipItem.raw}°C`
                }
            }
        }
    }
});

const airHumidityChart = new Chart(ctxHumidity, {
    type: 'line',
    data: {
        labels: [getCurrentTime()],
        datasets: [{
            label: 'Air Humidity (%)',
            data: [75], // Placeholder value
            borderColor: '#28a745',
            backgroundColor: 'rgba(40, 167, 69, 0.2)',
            fill: true,
            pointRadius: 8,
            pointBackgroundColor: '#28a745',
            borderWidth: 2,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: { color: '#ddd', borderColor: '#ddd', borderDash: [5, 5] },
                title: { display: true, text: 'Time', color: '#333' },
                ticks: { maxRotation: 45, autoSkip: true }
            },
            y: {
                min: 0, max: 100,
                grid: { color: '#ddd', borderColor: '#ddd', borderDash: [5, 5] },
                title: { display: true, text: 'Humidity (%)', color: '#333' },
                ticks: { callback: value => `${value}%` }
            }
        },
        plugins: {
            legend: { display: true, labels: { color: '#333' } },
            tooltip: {
                callbacks: {
                    title: tooltipItems => `Time: ${tooltipItems[0].label}`,
                    label: tooltipItem => `Humidity: ${tooltipItem.raw}%`
                }
            }
        }
    }
});

const soilMoistureChart = new Chart(ctxSoil, {
    type: 'line',
    data: {
        labels: [getCurrentTime()],
        datasets: [{
            label: 'Soil Moisture (%)',
            data: [30], // Placeholder value
            borderColor: '#dc3545',
            backgroundColor: 'rgba(220, 53, 69, 0.2)',
            fill: true,
            pointRadius: 8,
            pointBackgroundColor: '#dc3545',
            borderWidth: 2,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: { color: '#ddd', borderColor: '#ddd', borderDash: [5, 5] },
                title: { display: true, text: 'Time', color: '#333' },
                ticks: { maxRotation: 45, autoSkip: true }
            },
            y: {
                min: 0, max: 100,
                grid: { color: '#ddd', borderColor: '#ddd', borderDash: [5, 5] },
                title: { display: true, text: 'Soil Moisture (%)', color: '#333' },
                ticks: { callback: value => `${value}%` }
            }
        },
        plugins: {
            legend: { display: true, labels: { color: '#333' } },
            tooltip: {
                callbacks: {
                    title: tooltipItems => `Time: ${tooltipItems[0].label}`,
                    label: tooltipItem => `Soil Moisture: ${tooltipItem.raw}%`
                }
            }
        }
    }
});

// Function to fetch and update data
async function fetchData() {
    try {
        // Fetch data from your hardware API
        const response = await fetch('/api/your-hardware-endpoint'); // Replace with actual API endpoint
        const data = await response.json();

        // Update charts with real data
        const now = getCurrentTime();
        const { temperature, humidity, soilMoisture, co2 } = data;

        airTemperatureChart.data.datasets[0].data = [temperature];
        airTemperatureChart.data.labels = [now];
        airTemperatureChart.update();

        airHumidityChart.data.datasets[0].data = [humidity];
        airHumidityChart.data.labels = [now];
        airHumidityChart.update();

        soilMoistureChart.data.datasets[0].data = [soilMoisture];
        soilMoistureChart.data.labels = [now];
        soilMoistureChart.update();

        co2Chart.data.datasets[0].data = [co2];
        co2Chart.data.labels = [now];
        co2Chart.update();

        document.getElementById('currentTemperature').textContent = `Current Temperature: ${temperature}°C`;
        document.getElementById('currentHumidity').textContent = `Current Humidity: ${humidity}%`;
        document.getElementById('currentSoilMoisture').textContent = `Current Soil Moisture: ${soilMoisture}%`;
        document.getElementById('currentCO2').textContent = `Current CO2 Percentage: ${co2} ppm`;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Initial data fetch
fetchData();
// Update data every minute
setInterval(fetchData, 60000);
document.addEventListener('DOMContentLoaded', function () {
    const splashScreen = document.getElementById('splashScreen');

    // Function to hide the splash screen
    function hideSplashScreen() {
        splashScreen.classList.add('fade-out');
    }

    // Check if the splash screen should be shown
    if (!sessionStorage.getItem('splashShown')) {
        // Show splash screen if it's the first visit
        setTimeout(hideSplashScreen, 2000); // Adjust time as needed
        sessionStorage.setItem('splashShown', 'true'); // Mark splash screen as shown
    } else {
        // Hide splash screen immediately if not the first visit
        hideSplashScreen();
    }
});
