let cheese = 0

let digging = {
  "dig": 1
}

let clickUpgrades = {
  pickaxes: {
    name: "pickaxes",
    price: 100,
    quantity: 0,
    multiplier: 1
  },
  shovels: {
    name: "shovels",
    price: 200,
    quantity: 0,
    multiplier: 2
  }
};

let automaticUpgrades = {
  rovers: {
    name: "rovers",
    price: 600,
    quantity: 0,
    multiplier: 20
  },
  bulldozers: {
    name: "bulldozers",
    price: 1500,
    quantity: 0,
    multiplier: 40
  }
};

let collectAutoUpgrades = {

}


function mine(playerChoice) {
  let moonDig = digging[playerChoice]
  let cheeseCount = cheese + moonDig
    cheese = cheeseCount
  console.log(cheeseCount);
  if (cheeseCount < digging[playerChoice]){
    cheeseCount = 0
  }
  document.getElementById("cheese-count").innerText = cheeseCount

}

//think this is for a single upgrade -- how to make it for all upgrades?//
function singleUpgrades(upgradeChoice){
  let singUpgrade = automaticUpgrades[upgradeChoice]
  let addUpgrade =  automaticUpgrades + singUpgrade
  if (addUpgrade < automaticUpgrades[upgradeChoice]) {
    addUpgrade = 0
  }

}

function drawClickUpgrades() {
let template = ''
  for (const key in clickUpgrades) {
  if (clickUpgrades.hasOwnProperty(key)) {
    let item = clickUpgrades[key];
    template = /*html*/`
          <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title"></h5>
            <h3 class="card-subtitle mb-2 text-muted">Inventory</h3>
            <h5 class="card-text text-warning text-left ml-3"><strong>Cheese Count: <span id="cheese-count">0</span></strong></h5>
            <h6 class='text-left ml-3'>${item.name}: ${item.quantity}</h6>
            <h6 class='text-left ml-3'>${item.name}: ${item.quantity}</h6>
          </div>
        </div>

    `
  }
  document.getElementById("clickUpgrade").innerHTML = template
}
}

function drawAutomaticUpgrades() {
  let template = ''
  for (const key in automaticUpgrades) {
  if (automaticUpgrades.hasOwnProperty(key)) {
    let item = automaticUpgrades[key];
    template = /*html*/`
            <h6 class='text-left ml-3'>${item.name}: ${item.quantity}</h6>
            <h6 class='text-left ml-3'>${item.name}: ${item.quantity}</h6>
          </div>
        </div>
`
      }
      document.getElementById("autoUpgrade").innerHTML = template
    }
}


// // no idea how to make this work right now //
// function startInterval() {
//   let 

//   let interval = setInterval(drawAutoUpgrades, 3000)
//   setTimeout(function () { cat.dosed = false; clearInterval(interval) }, 10000)
//   cat.dosed = true
// }
drawClickUpgrades()
drawAutomaticUpgrades()