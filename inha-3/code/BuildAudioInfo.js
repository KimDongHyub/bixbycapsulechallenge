console = require('console');
module.exports.function = function findsound (data) {
  const Data = require("./data/Dataset.js");
  var input = {};
  var Sound = {};

  for(var i = 0; i < Data.length; i++){
    if(Data[i].name == data.name){
      if(Data[i].state == data.state){
      Sound = Data[i].sound;
      }
    }
  }
  
  input.audioItem = Sound;  
  input.category = 'RADIO';
  input.displayName = 'Sound Capsule';
  input.repeatMode = 'ALL';
  
  return input;
}