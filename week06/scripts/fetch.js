function GetBookings() {
        let url = 'https://api.sheety.co/13f01fbdfcb01397fa8063062e74ff62/bookingApp/booking';
        fetch(url)
        .then((response) => response.json())
        .then(json => {
        // Do something with the data
        console.log(json.bookings);
        });
    }

    let getBookingBtn = document.getElementById("getBooking");
    getBookingBtn.addEventListener("click", function () {
        GetBookings();
    });