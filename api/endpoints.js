const endpoints = {
    getPricelist : 'https://ersPappas.intellisoft.gr/api/Availability/GetPriceLists',
    getCategories : 'https://ersPappas.intellisoft.gr/api/Availability/CheckVehicleAvailability',
    newBooking : 'https://erspappas.intellisoft.gr/api/Bookings/AddNewBooking',
    newReservation:"http://localhost:7000/api/reservations/create", //@TODO change in production
    makePayment:"http://localhost:7000/api/reservations/pay", //@TODO change in production
    completeBookingDetails : "http://localhost:7000/api/reservation/",
    loginForm : "http://localhost:7000/api/accounts/login",
    signUpForm : "http://localhost:7000/api/accounts/create/customer",
    newToken : "http://localhost:7000/api/accounts/renew/token",
    customerDetails : "http://localhost:7000/api/accounts/me/",
    customerBookings : "http://localhost:7000/api/reservations/mine/",
}