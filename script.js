// ==========================
// MEMBER LIST (Alphabetical)
// ==========================

const members = {
  "Dad": {},
  "Grandad Darren": {},
  "Grandad Steve": {},
  "Grandma Jean": {},
  "James": {},
  "Mum": {},
  "Nannan": {},
  "Uncle Paul": {}
};

// ==========================
// MEMBERSHIP DATABASE
// true = has membership
// false = does not
// ==========================

const memberships = {
  "Dad": {
    VIM: true,
    UltimateVIM: false
  },
  "Grandad Darren": {
    VIM: false,
    UltimateVIM: false
  },
  "Grandad Steve": {
    VIM: true,
    UltimateVIM: true
  },
  "Grandma Jean": {
    VIM: false,
    UltimateVIM: false
  },
  "James": {
    VIM: true,
    UltimateVIM: true
  },
  "Mum": {
    VIM: false,
    UltimateVIM: false
  },
  "Nannan": {
    VIM: false,
    UltimateVIM: false
  },
  "Uncle Paul": {
    VIM: true,
    UltimateVIM: false
  }
};

// ==========================
// LOGIN FUNCTION
// ==========================

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
      alert("Name not found in system.");
      return;
    }

    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("displayName").innerText = name;

    loadMemberships(name);

  }, 1200);
}

// ==========================
// LOAD MEMBERSHIPS
// ==========================

function loadMemberships(name) {

  const subscriptionSection = document.querySelector(".subscriptions");
  subscriptionSection.innerHTML = "<h3>Your Subscriptions</h3>";

  const userMemberships = memberships[name];

  let hasAny = false;

  for (let key in userMemberships) {

    if (userMemberships[key] === true) {

      hasAny = true;

      subscriptionSection.innerHTML += `
        <div class="card">
          <h4>${key}</h4>
          <p>Status: Active</p>
        </div>
      `;
    }
  }

  if (!hasAny) {
    subscriptionSection.innerHTML += "<p>No active memberships.</p>";
  }
}
