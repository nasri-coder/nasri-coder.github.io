function GetBookings() {
        let url = 'https://api.sheety.co/13f01fbdfcb01397fa8063062e74ff62/bookingApp/booking';
        fetch(url)
        .then((response) => response.json())
        .then(json => {
        // Do something with the data
        console.log(json.booking);
        let bookingList = document.getElementById("bookingList");
        bookingList.innerHTML = "";
        for (let i = 0; i < json.booking.length; i++) {
            let gName = json.booking[i].name;
            let gEmail = json.booking[i].email;
            let gPax = json.booking[i].pax;
            let gId = json.booking[i].id;

            bookingList.innerHTML += gId + "-" + gName + ", " +
                gEmail + ", pax:" + gPax + "<br>";
        }
    });
    }

    let getBookingBtn = document.getElementById("getBooking");
    getBookingBtn.addEventListener("click", function () {
        GetBookings();
    });

function BookNow(guestName, guestEmail, guestPax) {
            let url = 'https://api.sheety.co/13f01fbdfcb01397fa8063062e74ff62/bookingApp/booking';
    let body = {
        booking: {
            name: guestName,
            email: guestEmail,
            pax: guestPax
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers : {
            "Content-Type" : "application/json"
        }
    })
    .then((response) => response.json())
    .then(json => {
        // Do something with object
        //console.log(json.booking);
        let bookMsg = document.getElementById("bookMsg");
                bookMsg.innerHTML = json.booking.name + " added!"
                GetBookings();
    });
}

let bookNow = document.getElementById("bookNow");
bookNow.addEventListener("click", function () {
    let gName = document.getElementById("guestName").value;
    let gEmail = document.getElementById("guestEmail").value;
    let gPax = document.getElementById("guestPax").value;

    BookNow(gName, gEmail, gPax);
});

function DeleteBooking(id) {
        let url = 'https://api.sheety.co/13f01fbdfcb01397fa8063062e74ff62/bookingApp/booking/' + id;
    fetch(url, {
    method: 'DELETE',
    })

    .then((response) => {
        document.getElementById("deleteMsg").innerHTML = "Booking Deleted!";
        GetBookings();
    });
}

let deleteBooking = document.getElementById("deleteBooking");
deleteBooking.addEventListener("click", function () {
    let deleteId = document.getElementById("deleteId").value;
    DeleteBooking(deleteId);
});