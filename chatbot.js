function askQuestion() {
  var input = document.getElementById("input").value;
  var giveresponse = responses[input]
  document.getElementById("chat-area").textContent += input + ": " + giveresponse + " ";
}
var responses = {
  "how are you" : "I am good how are you",
  "What is your name" : "My name is Little light",
  "How old are you" : "I am 1754 year's old",
  "What time is it" : "I think its time for you to get a watch",
  "Hello" : "Hi there",

}
