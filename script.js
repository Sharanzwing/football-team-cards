const footballTeam = {
  team: "Portugal",
  year: 1914,
  headCoach: "Roberto Martínez",
  players: [
    {
      name: "Cristiano Ronaldo",
      position: "forward",
      isCaptain: true
    },
    {
      name: "Bruno Fernandes",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Bernardo Silva",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Rúben Dias",
      position: "defender",
      isCaptain: false
    },
    {
      name: "João Cancelo",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Rafael Leão",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Diogo Costa",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Vitinha",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Gonçalo Ramos",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Pepe",
      position: "defender",
      isCaptain: false
    }
  ]
};

// Get DOM elements
const team = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playersSelect = document.getElementById("players");
const playerCards = document.getElementById("player-cards");

team.innerText = footballTeam.team;
year.innerText = footballTeam.year;
headCoach.innerText = footballTeam.headCoach;

function renderPlayerCards(players) {
  playerCards.innerHTML = "";
  
  if (!players || players.length === 0) {
    return;
  }
  
  players.forEach(player => {
    const card = document.createElement("div");
    card.classList.add("player-card");
    
    const nameHeading = document.createElement("h2");
    nameHeading.textContent = player.name;
    
    const positionPara = document.createElement("p");
    positionPara.textContent = `Position: ${player.position}`;
    
    const captainPara = document.createElement("p");
    captainPara.textContent = `Captain: ${player.isCaptain ? "Yes" : "No"}`;
    
    card.appendChild(nameHeading);
    card.appendChild(positionPara);
    
    playerCards.appendChild(card);
  });
}

function filterTeammates() {
  const selectedValue = playersSelect.value;
  
  let filteredPlayers;
  
  if (selectedValue === "all") {
    filteredPlayers = footballTeam.players;
  } else {
    filteredPlayers = footballTeam.players.filter(
      player => player.position === selectedValue
    );
  }
  
  renderPlayerCards(filteredPlayers);
}

playersSelect.addEventListener("change", filterTeammates);

filterTeammates();