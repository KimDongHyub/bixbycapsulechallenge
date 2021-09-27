module.exports.function = function getdata (name, state) {
  const Data = require("./data/Dataset.js");
  let Animalname, Animalstate;
  
  for(var i = 0; i < Data.length; i++){
    if(Data[i].name == String(name)){
      if(Data[i].state == String(state)){
        Animalname = Data[i].name;
        Animalstate = Data[i].state;
      }
    }
  }
       
  return {
    name : Animalname,
    state : Animalstate
  }
}
