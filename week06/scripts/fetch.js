function GetBookings() {
        let url = 'https://api.sheety.co/13f01fbdfcb01397fa8063062e74ff62/bookingApp/booking';
        fetch(url)
        .then((response) => response.json())
        .then(json => {
        // Do something with the data
        console.log(json.bookings);
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