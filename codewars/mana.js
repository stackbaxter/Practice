'use strict';

let coloredMana;
let clearMana;
let cost;
let pointsLeft;
let clearCost;
let coloredCost;
let spentSpells = [];
let cCost;
//spell eval function, ideally just pass spell, option and cost
//
function speleval(spell, cost){

  mana = spell.split('');
  coloredMana = mana.filter(function(spell){
    return isNaN(spell);
    });
  clearMana = mana.filter(function (spell){
    return !isNaN(spell);
    });
  clearMana = parseInt(clearMana.join(''));
    console.log('clear mana: '+clearMana);
    console.log('colored mana: '+coloredMana);

// evaluating the cost
  cost = cost.split('');
  clearCost = cost.filter(function(spell){
    return !isNaN(spell);
    });

  clearCost = parseInt(clearCost.join(''));
  console.log(clearCost);

  coloredCost = cost.filter(function(spell){
    return isNaN(spell);
    });

  console.log(coloredCost);
  cCost = cost.length;
  for(let i = 0; i < cost.length; i ++){
    console.log(coloredMana);
    console.log(coloredMana.indexOf(coloredCost[i]));

    if(coloredMana.includes(coloredCost[i]) === false){
      console.log(coloredMana.indexOf(coloredCost[i])+'blah');
         return false;
      }else{

         //slice the spell off the stash NEED to add check of clearcost and clear mana before declaring win
        spentSpells.push(coloredMana.splice(coloredMana.indexOf(coloredCost[i]),1));
        cCost --;
      }
    if ((cCost === 0 && spell.length === 0)&& clearMana >= clearCost){
        return true;
    }else if(coloredMana.length + clearMana >= clearCost){
      console.log("clearmana eval");

      return true;
    }else{return false;}

}
}

function canCast(mana, cost, option) {
  //evaluating the mana
    if(mana === cost){return true;}

    mana = mana.split('');
    coloredMana = mana.filter(spell => isNaN(spell));
    clearMana = mana.filter(spell => !isNaN(spell));
    clearMana = parseInt(clearMana.join(''));
      console.log('clear mana: '+clearMana);
      console.log('colored mana: '+coloredMana);

  //If option, evaluate the option
  if(option){
  speleval(option, cost)

      cCost = coloredOPtion.length;
      option = option.split('');
      let clearOption = option.filter(spell => !isNaN(spell));
      console.log(clearOption);
      let coloredOPtion = option.filter(spell => isNaN(spell));
      console.log(coloredOPtion);
      for(let i = 0; i <= coloredOPtion.length; i ++){
        console.log(coloredOPtion);
          if(coloredOption.includes(coloredCost[i]) === false){
            console.log(coloredMana.indexOf(coloredCost[i])+'blah');
               return false;
            }
             //slice the spell off the stash NEED to add check of clearcost and clear mana before declaring win
        spentSpells.push(coloredMana.splice(coloredMana.indexOf(coloredCost[i]),1));
        cCost --;

      if (cCost === 0){
        if((coloredMana.length + clearMana) >= clearCost){
          return true;
        };
      };
  }

  }



// evaluating the cost
  cost = cost.split('');
  clearCost = cost.filter(function(spell){
    return !isNaN(spell);
  });
  clearCost = parseInt(clearCost.join(''))
  coloredCost = cost.filter(function(spell){
    return isNaN(spell);
  });


    let cCost = coloredCost.length;
    // (pointsLeft = coloredMana.length);

    //comparing the cost and the mana first, to save leftover to add to clear
    for(let i = 0; i <= coloredCost.length; i ++){
    console.log(coloredMana);
    console.log(coloredMana.indexOf(coloredCost[i]));

    if(coloredMana.includes(coloredCost[i]) === false){
      console.log(coloredMana.indexOf(coloredCost[i])+'blah');
         return false;
      }

         //slice the spell off the stash NEED to add check of clearcost and clear mana before declaring win
    spentSpells.push(coloredMana.splice(coloredMana.indexOf(coloredCost[i]),1));
    cCost --;

    if (cCost === 0){
      if((coloredMana.length + clearMana) >= clearCost){
        return true;
      };
    };
}}



  // let coloredMana = mana.slice(1);
  // console.log(coloredMana);




canCast('W', 'W');
