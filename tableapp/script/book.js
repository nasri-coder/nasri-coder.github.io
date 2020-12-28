function BookNow(guestName, guestEmail, guestPax, guestRemarks, guestDate, guestTime) {
    let url = 'https://api.sheety.co/b788e4a251cfc65b7d11adbb514118a1/bookingsApp/bookings';
    let body = {
        booking: {
            name: guestName,
            email: guestEmail,
            pax: guestPax,
            remark: guestRemarks,
            date: guestDate,
            time: guestTime
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
            alert(json.booking.name + " added!");
        });
}


window.addEventListener("load", function () {
    document.getElementById("bookNow").addEventListener("click", function () {
        let userName = document.getElementById("userName").value;
        let userEmail = document.getElementById("userEmail").value;
        let userPax = document.getElementById("userPax").value;
        let userRemarks = document.getElementById("userRemarks").value;
        let userDate = document.getElementById("userDate").value;
        let userTime = document.getElementById("userTime").value;

        BookNow(userName, userEmail, userPax, userRemarks, userDate, userTime);
    });
});