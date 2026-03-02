function addBenefit() {
    let input = document.getElementById("benefitInput");
    let text = input.value.trim();

    if (text === "") {
        alert("Please enter a benefit!");
        return;
    }

    let list = document.getElementById("hobbyList");

    let li = document.createElement("li");
    li.innerHTML = text + ' <button onclick="deleteItem(this)">Delete</button>';

    list.appendChild(li);
    input.value = "";
}

function deleteItem(button) {
    button.parentElement.remove();
}

function showAlert() {
    alert("Thank you! Your message has been submitted.");
}


function updateDateTime() {
    let now = new Date();

    let options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    let date = now.toLocaleDateString('en-IN', options);
    let time = now.toLocaleTimeString();

    document.getElementById("dateTime").innerHTML = date + ", " + time;
}

setInterval(updateDateTime, 1000);
updateDateTime();