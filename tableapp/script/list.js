function GetBookings() {
    let url = 'https://api.sheety.co/13f01fbdfcb01397fa8063062e74ff62/bookingsApp/booking';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            //console.log(json.bookings);
            let bookingList = document.getElementById("booking-list");
            let bookingIds = [];

            //clear the table rows
            for (let k = bookingList.rows.length - 1; k > 0; k--) {
                bookingList.deleteRow(k);
            }

            for (let i = 0; i < json.booking.length; i++) {
                let gName = json.booking[i].name;
                let gEmail = json.booking[i].email;
                let gPax = json.booking[i].pax;
                let gTime = json.booking[i].time;
                let gDate = json.booking[i].date;
                let gId = json.booking[i].id;
                let gRemarks = json.booking[i].remark;
                let buttonId = "delete" + gId;

                let row = bookingList.insertRow(bookingList.rows.length);
                row.insertCell(0).innerHTML = gId;
                row.insertCell(1).innerHTML = gName;
                row.insertCell(2).innerHTML = gEmail;
                row.insertCell(3).innerHTML = gPax;
                row.insertCell(4).innerHTML = gDate;
                row.insertCell(5).innerHTML = gTime;
                row.insertCell(6).innerHTML = gRemarks;
                row.insertCell(7).innerHTML = "<button id='" +
                    buttonId + "' class='btn btn-danger'>Delete</button>";

                bookingIds.push(buttonId);
            }

            for (let j = 0; j < bookingIds.length; j++) {
                let el = document.getElementById(bookingIds[j]);
                el.addEventListener("click", function () {
                    let theId = bookingIds[j].replace("delete", "");
                    DeleteBooking(theId);
                });
            }
        });
}

window.addEventListener("load", function () {
    document.getElementById("refreshList").addEventListener("click", function () {
        GetBookings();
    });
})

function DeleteBooking(id) {
    let url = 'https://api.sheety.co/13f01fbdfcb01397fa8063062e74ff62/bookingsApp/booking/' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then((response) => {
            GetBookings();
        });
}