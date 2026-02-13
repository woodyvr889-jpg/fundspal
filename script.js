// MEMBER DATABASE
const members = {
  "Grandad Steve": {
    subscriptions: ["VIM (Gorilla Tag Fan Club)", "Ultimate VIM"],
    powerups: ["Double Points Boost", "Priority Access"]
  },
  "Uncle Paul": {
    subscriptions: ["VIM (Gorilla Tag Fan Club)"],
    powerups: ["Double Points Boost"]
  },
  "Nannan": {
    subscriptions: [],
    powerups: []
  }
};

function verifyName() {
  const name = document.getElementById("nameInput").value.trim();
  const loader = document.getElementById("loader");

  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  loader.style.display = "block";

  setTimeout(() => {

    loader.style.display = "none";

    if (!members[name]) {
      alert("Name not found in membership system.");
      return;
    }

    // Hide login screen
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("dashboard").style.display = "block";

    // Display name
    document.getElementById("displayName").innerText = name;

    // Load subscriptions + powerups
    loadProfile(name);

  }, 1500);
}

function loadProfile(name) {
  const profile = members[name];

  const subscriptionSection = document.querySelector(".subscriptions");
  const powerupSection = document.querySelector(".powerups");

  // Clear old cards (except titles)
  subscriptionSection.innerHTML = "<h3>Your Subscriptions</h3>";
  powerupSection.innerHTML = "<h3>Your Power-Ups</h3>";

  // Add subscriptions
  if (profile.subscriptions.length === 0) {
    subscriptionSection.innerHTML += "<p>No active subscriptions.</p>";
  } else {
    profile.subscriptions.forEach(sub => {
      subscriptionSection.innerHTML += `
        <div class="card">
          <h4>${sub}</h4>
          <p>Status: Active</p>
        </div>
      `;
    });
  }

  // Add powerups
  if (profile.powerups.length === 0) {
    powerupSection.innerHTML += "<p>No power-ups unlocked.</p>";
  } else {
    profile.powerups.forEach(power => {
      powerupSection.innerHTML += `
        <div class="card">
          <h4>${power}</h4>
          <p>Unlocked</p>
        </div>
      `;
    });
  }
}
