// Case statement
function chooseFriend(friend) {
  switch(friend) {
    case "Mickey":
      console.log("I am a very famous mouse!");
      break;
    case "Donald":
      console.log("I am a very famous duck!");
      break;
    case "Goofy":
      console.log("I am a very famous dog!");
      break;
    default:
      console.log("Did you forget to choose a friend?");
  }
}

chooseFriend("Mickey");
