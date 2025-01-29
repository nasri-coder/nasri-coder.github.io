function sheet1(name, email, phone, message) {
    let url = 'https://api.sheety.co/6bb7d5e4f5c607ab66603ebc27552f2c/sheet1/sheet1';
    let body = {
        booking: {
            name: name,
            email: email,
            phone: phone,
            message: message
            
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            alert(json.sheet1 + " added!");
        });
}


window.addEventListener("load", function () {
    document.getElementById("submit").addEventListener("click", function () {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let message = document.getElementById("message").value;

        sheet1(name, email, phone, message);
    });
});