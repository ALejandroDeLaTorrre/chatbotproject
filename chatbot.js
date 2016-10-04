var responses = {
  "how are you" : "I am good how are you",
  "what is your name" : "My name is Little light",
  "how old are you" : "I am 1754 year's old",
  "what time is it" : "I think its time for you to get a watch",
  "hello" : "Hi there",

}

function askQuestion() {
  var input = document.getElementById("input").value;
  input = input.toLowerCase();
  var giveresponse = responses[input]
  if (giveresponse == undefined){
    var fallBackResponse = ["Sorry i didnt quite get that.", ""]
    var rand = Math.floor((Math.random() * fallBackResponse.length));
    var fallBack = fallBackResponse[rand]
    document.getElementById("chat-area").textContent += input + ": " + fallBack + " ";
  }
  else {
      document.getElementById("chat-area").textContent += input + ": " + giveresponse + " ";
  }
}
