class Form{
    constructor(){

    }
display(){
  var title =createElement ("h4");
  title.html("Multiplayer Car Racing Game");
  title.position(130,0);
  var input = createInput("Name");
  var button = createButton("Hack Your Acc");
  var greeting = createElement("h3");
  input.position(130,160);
  button.position(200,250);
  button.mousePressed(function(){
      input.hide();
      button.hide();
      var name = input.value();
      playerCount+= 1;
      player.update(name);
      player.updateCount(playerCount);
      greeting.html("Your Acc Hacked "+name );
      greeting.position(130,160);

  })
}

}