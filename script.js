

var storedValue, registeredParticipants;



function submit() {
   
    let name = document.getElementById('name').value;
    let id =document.getElementById('id').value;
    let amount = parseInt(document.getElementById('amount').value);
    var userObject = { name: name, id: id, amount: amount }
   
console.log(name,id,amount)
    // if(storedValue == 'null'){
    //     let userArray = JSON.parse(localStorage.getItem('userArray')) || [];

    //     // Add the new object to the array
    //     userArray.push(userObject);
    
    //     // Convert array back to JSON string and store in localStorage
    //     localStorage.setItem('userArray', JSON.stringify(userArray));
    
    //     // document.getElementById("msg").innerHTML = (`<p style={color:'Green'}>Success</p>`)
    //     document.getElementById("msg").innerHTML = `<p style="color:Green;">Success</p>`;
    
    //    alert('Successfuly Registered')
    // }
    // else {
// do{
//     if(!registeredParticipants[i].id.includes(id)){

//         // if (registeredUserIds.includes(userId))
//     // console.log(data)

    // console.log(name,id,amount)

    let userArray = JSON.parse(localStorage.getItem('userArray')) || [];

    // Add the new object to the array
    userArray.push(userObject);

    // Convert array back to JSON string and store in localStorage
    localStorage.setItem('userArray', JSON.stringify(userArray));

    // document.getElementById("msg").innerHTML = (`<p style={color:'Green'}>Success</p>`)
    setTimeout(() => {
        let element = document.getElementById('msg');
        element.value = ''; // Clear the value of the input field
        if (element.customProperty) { // Check if customProperty exists before deleting
            delete element.customProperty;
        }
        // alert('Status deleted');
        // If you intended to remove all child elements of the element:
        element.innerHTML = 'Status'; // This will clear the inner HTML content
    }, 2000);
    
    document.getElementById("msg").innerHTML = `<p style="color:Green;">Success</p>`;

//    alert('Successfuly Registered')
    //Text field clearing
      document.getElementById('name').value='';
      document.getElementById('id').value='';
      document.getElementById('amount').value='';
//     }
//     else{
//        alert("Use different Phone To registered")
//     }
//     i++;
// }while(i<=registeredParticipants.length)

}

function data() {
    // Retrieve the stored value by key
    storedValue = localStorage.getItem('userArray');

    // Check if the value exists
    if (storedValue) {
        console.log(storedValue);

    } else {
        console.log('No data found');
    }
    registeredParticipants = JSON.parse(storedValue)
}
data();
function participantList() {
    
    data();
    //  document.getElementsByClassName("registeredList").innerHTML = (`List ${registeredParticipants[0]}`)
    document.write(`<h1> Participant List`)
    for (let i = 0; i <= registeredParticipants.length; i++) {
        let name = registeredParticipants[i].name;
        let amount = registeredParticipants[i].amount

        document.write(`<ul> <li>${i + 1}. Name ${name} Amount RS-${amount}</li></ul>`)

    }
}

function winner() {
    var totalSum = 0;
    data();
    let firstPrize = 0;
    if(registeredParticipants.length == 10){
    for (let i = 0; i < registeredParticipants.length; i++) {
        totalSum = totalSum + registeredParticipants[i].amount
    }

    let firstPrize = (totalSum * 50) / 100;
    let secondPrize = (totalSum * 30) / 100;
    let thirdPrize = (totalSum * 20) / 100;

    // Randomly Winner Selection
    function getRandomValues(registeredParticipants, count) {
        // Create a copy of the array to avoid modifying the original array
        let tempArray = registeredParticipants.slice();

        // Fisher-Yates shuffle
        for (let i = tempArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
        }

        // Return the first 'count' elements from the shuffled array
        return tempArray.slice(0, count);
    }

    // Example usage:

    let randomValues = getRandomValues(registeredParticipants, 3);
    console.log(randomValues); // e.g., [3, 1, 6]

    document.getElementById("first").innerHTML = (`First Winner Name ${randomValues[0].name} Prize ${firstPrize}`)
    document.getElementById('second').innerHTML = (`Second Winner Name ${randomValues[1].name} Prize ${secondPrize}`)
    document.getElementById('third').innerHTML = (`Third Winner Name ${randomValues[2].name} Prize ${thirdPrize}`)


   
}
    else {
        let left = 10-registeredParticipants.length;
        document.write(`<h2>Registered ${left} more Participants then we Annouce Winner List `)
    }

}




