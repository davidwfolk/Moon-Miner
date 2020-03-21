let cheese = 0

let autoCheese = 0

let digging = {
  "dig": 1
}
//NOTE fix values //
let clickUpgrades = {
  pickaxes: {
    name: "pickaxes",
    price: 25,
    quantity: 0,
    multiplier: 1
  },
  shovels: {
    name: "shovels",
    price: 50,
    quantity: 0,
    multiplier: 2
  }
};

let automaticUpgrades = {
  rovers: {
    name: "rovers",
    price: 250,
    quantity: 0,
    multiplier: 20
  },
  bulldozers: {
    name: "bulldozers",
    price: 500,
    quantity: 0,
    multiplier: 40
  }
};

let collectAutoUpgrades = {

}


function mine(playerChoice) {
  let moonDig = digging[playerChoice]
  cheese += moonDig

   calcSingleUpgrade()
   console.log(cheese);
  // @ts-ignore
  document.getElementById("cheese-count").innerText = cheese
}

//this is to purchase a single clickUpgrade -- need to increase the quantity of item purchased by 1//
function purchaseSingleUpgrades(upgradeChoice){
  let purchSing = clickUpgrades[upgradeChoice]
  let buySing = purchSing + clickUpgrades[upgradeChoice].quantity
    if (cheese >= clickUpgrades[upgradeChoice].price) {
      clickUpgrades[upgradeChoice].quantity ++
      cheese -= clickUpgrades[upgradeChoice].price
      clickUpgrades[upgradeChoice].price += 50
      console.log(clickUpgrades[upgradeChoice].quantity);
    }

    drawClickUpgrades()

}

//this is to purhase the automaticUpgrades -- need to increase the quantity of item purchased
function purchaseAutoUpgrades(autoUpgradeChoice) {
  let purchSing = automaticUpgrades[autoUpgradeChoice]
  let buySing = purchSing + automaticUpgrades[autoUpgradeChoice].quantity
    if (cheese >= automaticUpgrades[autoUpgradeChoice].price) {
      automaticUpgrades[autoUpgradeChoice].quantity ++
      cheese -= automaticUpgrades[autoUpgradeChoice].price
      automaticUpgrades[autoUpgradeChoice].price += 200
      console.log(automaticUpgrades[autoUpgradeChoice].quantity);
}
drawAutomaticUpgrades()
}

//this will calculate the modifier of the cheese from each clickUpgrade
function calcSingleUpgrade () {

  for (const key in clickUpgrades) {
    
    cheese += clickUpgrades[key].multiplier * clickUpgrades[key].quantity

} 
}

//this will calculate the automatic multiplier of the cheese from each AutomaticUpgrade - add quantity after 3 seconds
function calcAutoUpgrade () {
  for (let key in automaticUpgrades) {
   cheese += automaticUpgrades[key].multiplier * automaticUpgrades[key].quantity
}
  // @ts-ignore
  document.getElementById("cheese-count").innerText = cheese
}

// no idea how to make this work right now //
    function startInterval() {
      let collectionInterval = setInterval(calcAutoUpgrade, 3000);

}

function drawClickUpgrades() {
let template = ''
  for (const key in clickUpgrades) {
  if (clickUpgrades.hasOwnProperty(key)) {
    let item = clickUpgrades[key];
    template += /*html*/`
            <h6 class='text-left ml-1'>${item.name}: ${item.quantity} Extra Cheese: ${item.multiplier * item.quantity}</h6>

    `
  }
  document.getElementById("clickUpgrade").innerHTML = template
}
drawPickAxeUpgradePrice()
drawShovelsUpgradePrice()
totalCheeseX()
}

function drawAutomaticUpgrades() {
  let template = ''
  for (const key in automaticUpgrades) {
  if (automaticUpgrades.hasOwnProperty(key)) {
    let item = automaticUpgrades[key];
    template += /*html*/`
            <h6 class='text-left ml-1'>${item.name}: ${item.quantity} Extra Cheese: ${item.multiplier * item.quantity}</h6>
`
      }
      document.getElementById("autoUpgrade").innerHTML = template
    }
    drawRoversUpgradePrice()
    drawBullDozersUpgradePrice()
    CheesePerSec()
}

function drawPickAxeUpgradePrice() {
  let singlePowerup = clickUpgrades.pickaxes.price
  // @ts-ignore
  document.getElementById("pickaxes-price").innerText = singlePowerup
}

function drawShovelsUpgradePrice() {
  let singlePowerup = clickUpgrades.shovels.price
  // @ts-ignore
  document.getElementById("shovels-price").innerText = singlePowerup
}

function drawRoversUpgradePrice() {
  let singlePowerup = automaticUpgrades.rovers.price
  // @ts-ignore
  document.getElementById("rovers-price").innerText = singlePowerup
}

function drawBullDozersUpgradePrice() {
  let singlePowerup = automaticUpgrades.bulldozers.price
  // @ts-ignore
  document.getElementById("bulldozers-price").innerText = singlePowerup
}

function totalCheeseX () {
  let totalCheese = (clickUpgrades.pickaxes.quantity * clickUpgrades.pickaxes.multiplier) + (clickUpgrades.shovels.quantity * clickUpgrades.shovels.multiplier)
    // @ts-ignore
    document.getElementById("tcm").innerText = totalCheese
}

function CheesePerSec () {
  let cheesePS = (automaticUpgrades.rovers.quantity * automaticUpgrades.rovers.multiplier) + (automaticUpgrades.bulldozers.quantity * automaticUpgrades.bulldozers.multiplier)
  // @ts-ignore
  document.getElementById("autoCheese").innerText = cheesePS
}

drawClickUpgrades()
drawAutomaticUpgrades()
startInterval()



//why is the totalCheeseX zero?