function chooseFriend(friend) {
  var message = "";
  switch(friend) {
    case "Mickey":
      message = "I am a very famous mouse!";
      break;
    case "Donald":
      message = "I am a very famous duck!";
      break;
    case "Goofy":
      message = "I am a very famous dog!";
      break;
    default:
      message = "Did you forget to choose a friend?";
  }
  console.log(message);
}
