let friends = [];


const calculation = () =>{
    let numberOfFriends = document.getElementById("totalfriends").value; 
    let displayTotalFriends = document.getElementById("total-people"); 
    let totalAmount = friends.reduce((sum, friend)=>{
       return sum + Number(friend.Price);
    },0)
    const displayTotal = document.getElementById("total-amount");
    displayTotal.textContent = totalAmount;
    let displayPerEach = document.getElementById("per-person");
    
    if(totalAmount === 0){

      displayPerEach.textContent = totalAmount;
    }else{
      const amountPerPerson =  totalAmount / numberOfFriends;
      displayPerEach.textContent = amountPerPerson;
    }
    

    
    displayTotalFriends.textContent= numberOfFriends;
}


const addNewFriend = (e) => {
    e.preventDefault();
  
    const payerNameInput = document.getElementById("payerName");
    const phoneNumberInput = document.getElementById("phoneNumber");
    const amountInput = document.getElementById("amount");
    const itemPurchasedInput = document.getElementById("item");
  
    const payerName = payerNameInput.value;
    const phoneNumber = phoneNumberInput.value;
    const amount = amountInput.value;
    const itemPurchased = itemPurchasedInput.value;
  
    // Check if friend already exists
    let existingFriend = friends.find(friend => friend.friendPhone === phoneNumber);
  
    if (existingFriend) {
      console.log("Friend exists:", existingFriend);
      return existingFriend;
    }
  
    // Create new friend
    let newFriend = {
      id: friends.length + 1,
      friendName: payerName,
      friendPhone: phoneNumber,
      Price: amount,
      Item: itemPurchased 
    };
  
    friends.push(newFriend);
  
    console.log("New Friend Added:", newFriend);
    calculation();
  
    const resultPannel = document.getElementById("summary-cards");
    const initialPannel = document.getElementById("splits-container");
    resultPannel.style.display = "block";
    initialPannel.style.display = "none";
  
    // clear inputs
    payerNameInput.value = "";
    phoneNumberInput.value = "";
    amountInput.value = "";
    itemPurchasedInput.value = "";
  
    return newFriend;
  };
  
const addButton = document.getElementById("add-btn");
addButton.addEventListener("click", addNewFriend);


