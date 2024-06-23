// Code your solutions in this file
function writeCards(namesArray, eventName) {
    let messages = []; 
  
    for (let i = 0; i < namesArray.length; i++) {
      
      let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
      messages.push(message); 
    }
  
    return messages; 
  }
  let names = ["Brian", "Bernice", "Lavynn"];
  let event = "birthday";
  let thankYouMessages = writeCards(names, event);
  console.log(thankYouMessages)
  

  function countDown(){
    let count=10
    while(count>=0){
      console.log(count)
      count--
    }
  }
    countDown()
        
    

    
  

