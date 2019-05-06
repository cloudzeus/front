//Container of the module

var app ={};


app.tableRow = `<tr colspan="6" data-toggle="collapse" data-target="#demo{i}" class="accordion-toggle">
<td>{id}</td>
<td>{BookingNumber}</td>
<td>{ReservationDate}</td>
<td>{TotalCharge}</td>
<td>{Deposit}</td>
<td>{Balance}</td>

</tr>
<tr class="p">
    <td colspan="6" class="hiddenRow">
        <div class="accordian-body collapse p-2 ml-1" id="demo{i}">                                                                  
            <div class="row">
                <div class="col-4 hidenRowDetails text-left">
                <h5 class="mb-2">Booking Details</h5>
                <p>Pick Up date:<span class="hiddenSpan">{DateStart}</span></p>
                <p>Drop of date:<span class="hiddenSpan">{DateEnd}</span></p>
                <p>Pick up location:<span class="hiddenSpan">{PlaceFrom}</span></p>
                <p>Drop of location:<span class="hiddenSpan">{PlaceTo}</span></p>
                </div>
                <div class="col-4 text-left hidenRowDetails border-left">
                <h5 class="mb-2">Charging Details</h5>
                <p>Total Charge: <span class="hiddenSpan">{TotalCharge}</span></p>
                <p>Day average: <span class="hiddenSpan">{AveDailyCharge}</span></p>
                <p>Extras Charge: <span class="hiddenSpan">{ExtraCharges}</span></p>
                <p>Payment Type: <span class="hiddenSpan">{PaymentType}</span></p>
                </div>
                <div class="col-4 mt-auto mb-auto border-left">
                <button type="button" class="btn btn-myFormPre align-middle" onclick="$('#bookingCancelation').modal('toggle');"><i class="fa fa-ban" style="font-size:1.1rem;"></i>&nbsp;&nbsp;Cancel Booking <div class="ripple-container"></div><div class="ripple-container"></div></button>
                <button type="button" class="btn btn-myFormPre align-middle" onclick="$('#bookingModify').modal('toggle');"><i class="fa fa-edit" style="font-size:1.1rem;"></i>&nbsp;&nbsp;Modify Booking<div class="ripple-container"></div><div class="ripple-container"></div></button>
                <button type="button" class="btn btn-myFormPre align-middle" onclick="$('#oldCustomer').modal('toggle');"><i class="fa fa-print" style="font-size:1.1rem;"></i>&nbsp;&nbsp;Print Voucher<div class="ripple-container"></div><div class="ripple-container"></div></button>

                </div>
            </div>
        </div> 
    </td> 
</tr>
`


app.authUser =function(){
    const token = localStorage.token;
    if(!token){
        localStorage.removeItem('token')
        console.log("User not authorized")
        return window.location = '/index.html';
    }

}

app.customerDetails = function(){
    if(!localStorage.userDetails) return;
    clientRequest(endpoints.customerDetails,undefined,'GET').then(userDetails=> {
        return localStorage.userDetails = JSON.stringify(userDetails);
    })
    .catch( ex => console.log(ex))
}


app.customerBookings = function(){
    const customerId = localStorage.userDetails ? JSON.parse(localStorage.userDetails).CustomerIdentityNumber: false;
    if(!customerId) return console.log('User not Authorised')
    const table = document.querySelector("#bookingList");
    clientRequest(endpoints.customerBookings+customerId,undefined,'GET').then(bookings=> {
        for (let i = 0; i < bookings.length; i++) {
            const booking = bookings[i];
            let div = document.createElement('div');
            var str = app.tableRow;
            str = str.replace(new RegExp({i}, 'g'), i)
            for (const key in booking) {
                if (booking.hasOwnProperty(key)) {
                    let prop = booking[key]
                    ;
                    let find = '{'+key+'}';
                    console.log(prop)
                    str = str.replace(new RegExp(find, 'g'), prop)
                }
            }
            // const node = $.parseHTML(str)
            // console.log(node)
            // table.appendChild(node)
            document.write(str)
        }
    })
    .catch( ex => console.log(ex))
}

app.init = function(){

    //get Customer bookings
    //app.customerBookings()
}

window.onload = function(){
    app.init()
}