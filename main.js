let cheese = 0

let digging = {
  "dig": 1
}

let clickUpgrades = {
  pickaxes: {
    price: 100,
    quantity: 0,
    multiplier: 1
  },
  shovels: {
    price: 200,
    quantity: 0,
    multiplier: 2
  }
};

let automaticUpgrades = {
  rovers: {
    price: 600,
    quantity: 0,
    multiplier: 20
  },
  bulldozers: {
    price: 1500,
    quantity: 0,
    multiplier: 40
  }
};


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


function singleUpgrades(){

}

function autoUpgrades(){
  
}