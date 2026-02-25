// Function to load drivers from your Backend API
async function loadF1Data() {
    const gridContainer = document.getElementById('driver-grid');
    
    try {
        // Change this URL to your actual backend endpoint later
        const response = await fetch('https://two5bcnb27-i.onrender.com'); 
        const drivers = await response.json();

        // Clear existing static cards
        gridContainer.innerHTML = '';

        drivers.forEach((driver, index) => {
            const card = `
            <div class="card" style="--team-color: ${driver.team_color}; animation: fadeInUp 0.5s ease forwards ${index * 0.1}s; opacity: 0;">
                </div>
            `;
            gridContainer.innerHTML += card;
        });

        drivers.forEach(driver => {
            const card = `
                <div class="card" style="--team-color: ${driver.team_color};">
                    <div class="team-badge">${driver.team_name}</div>
                    <div class="driver-info">
                        <h2>${driver.name} <span class="number">#${driver.number}</span></h2>
                        <p class="role">${driver.role}</p>
                        <div class="achievements">
                            <ul>
                                <li>🏆 ${driver.achievements}</li>
                            </ul>
                        </div>
                    </div>
                    <button class="view-btn">View Full Career</button>
                </div>
            `;
            gridContainer.innerHTML += card;
        });
    } catch (error) {
        console.error("Connection Failed:", error);
    }
}

// Initialize on page load
window.onload = loadF1Data;