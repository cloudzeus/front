const endpoints = {
    getPricelist : 'https://ersPappas.intellisoft.gr/api/Availability/GetPriceLists',
    getCategories : 'https://ersPappas.intellisoft.gr/api/Availability/CheckVehicleAvailability',
    newBooking : 'https://erspappas.intellisoft.gr/api/Bookings/AddNewBooking',
    newReservation:"https://backend.breezerentals.gr/api/reservations/create", //@TODO change in production
    makePayment:"https://backend.breezerentals.gr/api/reservations/pay", //@TODO change in production
    completeBookingDetails : "https://backend.breezerentals.gr/api/reservation/",
    loginForm : "https://backend.breezerentals.gr/api/accounts/login",
    signUpForm : "https://backend.breezerentals.gr/api/accounts/create/customer",
    newToken : "https://backend.breezerentals.gr/api/accounts/renew/token",
    customerDetails : "https://backend.breezerentals.gr/api/accounts/me/",
    customerBookings : "https://backend.breezerentals.gr/api/reservations/mine/",
    downloadVoucher : "https://backend.breezerentals.gr/api/voucher/download/",
}