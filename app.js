// Function to load drivers from your Backend API
async function loadF1Data() {
    const gridContainer = document.getElementById('driver-grid');
    
    try {
        // Change this URL to your actual backend endpoint later
        const response = await fetch('http://localhost:5000/api/drivers'); 
        const drivers = await response.json();

        // Clear existing static cards
        gridContainer.innerHTML = '';

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
        console.error("Error fetching F1 data:", error);
        gridContainer.innerHTML = "<p>Failed to load the 2026 Grid. Check your Backend connection.</p>";
    }
}

// Initialize on page load
window.onload = loadF1Data;