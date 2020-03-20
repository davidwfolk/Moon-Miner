let cheese = 0

let digging = {
  "dig": 1
}
//NOTE fix values //
let clickUpgrades = {
  pickaxes: {
    name: "pickaxes",
    price: 1,
    quantity: 0,
    multiplier: 10
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
    price: 5,
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
      console.log(automaticUpgrades[autoUpgradeChoice].quantity);
}
drawAutomaticUpgrades()
}

//this will calculate the modifier of the cheese from each clickUpgrade
function calcSingleUpgrade () {

  for (const key in clickUpgrades) {
    cheese += clickUpgrades[key].modifier * clickUpgrades[key].quantity
} 
}

//this will calculate the automatic modifier of the cheese from each AutomaticUpgrade
function calcAutoUpgrade () {

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