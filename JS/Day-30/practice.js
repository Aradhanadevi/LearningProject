let lunches = []

function addLunchToEnd(lunches, lunchItem){

  console.log(lunchItem + " added to the end of the lunch menu.");

  lunches.push(lunchItem);

  return lunches;
}

function addLunchToStart(lunches, lunchItem){
  console.log(lunchItem + " added to the start of the lunch menu.");

  lunches.unshift(lunchItem)

  return lunches;
}

function removeLastLunch (lunches){
  if(lunches.length == 0){
    console.log("No lunches to remove.");
    return lunches;
  }

  let removed = lunches.pop();

  console.log(removed + " removed from the end of the lunch menu.");

  
  
  return lunches;
}
function removeFirstLunch (lunches){
  if(lunches.length == 0){
    console.log("No lunches to remove.");
    return lunches;
  }

  console.log(lunches[0] + " removed from the start of the lunch menu.");

  lunches.shift();

  return lunches;

}

function getRandomLunch(lunches){
  let randomNo = Math.random() * (lunches.length);
  randomNo = Math.trunc(randomNo);
  if( lunches.length === 0){
    console.log("No lunches available.");
    return lunches;
  }
  console.log("Randomly selected lunch: " +lunches[randomNo]);
}

function showLunchMenu(lunches){
    if(lunches.length == 0){
    console.log("The menu is empty.");
    return lunches;
  }
  let menue = lunches.join(", ");
  console.log("Menu items: " + menue) 

}