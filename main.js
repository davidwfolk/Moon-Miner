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

//this is to purchase a single clickUpgrade -- need to increase the quantity of item purchased by 1//
function purchaseSingleUpgrades(upgradeChoice){


}

//this is to purhase the automaticUpgrades -- need to increase the quantity of item purchased
function purchaseAutoUpgrades(autoUpgradeChoice) {

}

//this will calculate the modifier of the cheese from each clickUpgrade
function calcSingleUpgrade (calcChoice) {

}

//this will calculate the automatic modifieer of the cheese from each AutomaticUpgrade
function calcAutoUpgrade (autoCalcChoise) {

}


function drawClickUpgrades() {
let template = ''
  for (const key in clickUpgrades) {
  if (clickUpgrades.hasOwnProperty(key)) {
    let item = clickUpgrades[key];
    template += /*html*/`
            <h6 class='text-left ml-3'>${item.name}: ${item.quantity}</h6>

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
    template += /*html*/`
            <h6 class='text-left ml-3'>${item.name}: ${item.quantity}</h6>
`
      }
      document.getElementById("autoUpgrade").innerHTML = template
    }
}


// no idea how to make this work right now //
  function startInterval() {
    //  setInterval(collectAutoUpgrades, 3000);
}
drawClickUpgrades()
drawAutomaticUpgrades()