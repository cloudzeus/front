//Tranlation function and Processes


//container of the module
const lib = {};





// lib.endpoint = ""

// lib.getLanguages = function(){
//     if(localStorage.languages){
//         const stringCollection = localStorage.languages;
//         try{
//             const parsedLanguages = JSON.parse(stringCollection);
//             return parsedLanguages;
//         }catch(ex){
//             console.log('failed to parse languages from the localstorage');
//              return lib.requestLanguages;
//         }
//     }
// }

// lib.requestLanguages = function(){
//     fetch(lib.endpoint).then( res => res.json())
//     .then( data => {
//         const stringData = JSON.stringify(data);
//         localStorage.languages = stringData;
//         return data;
//     })
//     .catch( () => {
//         console.log('failed to get languages');
//         return {}
//     })
// }

//Components
// const components = {};

// components.formNav = function(){
//     const nav = document.querySelectorAll('#smartwizard ul a');
//     for ( var i=0;i<nav.length;i++){

//     }
//     console.log(nav)
// }











//translation init function
lib.init = () => {
   // components.formNav();
   lib.changeLanguage()
   lib.inputValueDisplay()
}

lib.changeLanguage = () => {
    const button = document.querySelector('#changeLanguage');
    if(button != null ){
        button.addEventListener('click',e => {
            const lang = e.target.id;
            switch(lang){
                case "English":
                    localStorage.language = "English"
                    break
                case "Greek":
                    localStorage.language = "Greek"
                    break
                case "German":
                    localStorage.language = "German"
                    break
                
            }
            location.reload()
        })
    }
}

lib.inputValueDisplay = () => {
    const startDate = document.querySelector("#startDate");
    const timePicker = document.querySelector("#timepicker");
    const endDate = document.querySelector("#endDate");
    const timeDrop = document.querySelector("#timeDrop");
    startDate.value = lib.translator("Pick_Up_Date")
    timePicker.value = lib.translator("pick_up_time")
    endDate.value = lib.translator("Drop_off_date")
    timeDrop.value = lib.translator("Drop_off_time")
}





lib.translator =  function(word){
    const language = localStorage.language;
    const wordList = languages;
    switch(language){
        case "English":
            for(var key in wordList ){
                if(wordList.hasOwnProperty(key)){
                    if( key == word ){
                        return wordList[key][0];
                        break;
                    } 
                }
            }
        case "Greek":
            for(var key in wordList ){
                if(wordList.hasOwnProperty(key)){
                    if( key == word ){
                        return wordList[key][1];
                        break;
                    } 
                }
            }
            
        case "German":
        for(var key in wordList ){
            if(wordList.hasOwnProperty(key)){
                if( key == word ){
                    return wordList[key][2];
                    break;
                } 
            }
        }
        default:
            return word
    }
}




//translations data

const languages = {
    users : ["users","χρήστες"],
    user : ["user","χρήστης"],
    groups : ["groups","Ομάδες"],
    cars : ["cars"],
    category : ["category","Κατηγορία"],
    categories : ["categories","Κατηγορίες"],
    priceLists :["pricelists","Τιμοκατάλογοι",],
    name : ["name","Όνομα"],
    email : ["email","Email"],
    address : ["address","Διεύθυνση"],
    zip : ["zip","T.K."],
    phone : ["phone","Τηλέφωνο"],
    prices : ["prices","Τιμές"],
    pricelist : ["pricelist","Τιμοκατάλογος"],
    signin : ["signin","Είσοδος"],
    signout : ["signout","Αποσύνδεση"],
    group : ["group","Ομάδa"],
    car : ["car","Αυτοκίνητο"],
    cars : ["cars","Αυτοκίνητα"],
    access : ["access","Πρόσβαση"],
    rentals : ["rentals","Ενοικιάσεις"],
    booking : ["booking","Ολοκληρωμένη Κράτηση"],
    bookings : ["bookings","Ολοκληρωμένες Κρατήσεις"],
    reservations : ["reservations","Κρατήσεις"],
    password : ["password","Κωδικός πρόσβασης"],
    city : ["city", "Πόλη"],
    tel : ["tel","Τηλέφωνο"],
    surname : ["surname","Επίθετο"],
    vatNumber :["vatNumber","ΑΦΜ"],
    new :["new","νέος"],
    updatedNow : ["updated now","τροποποίηση"],
    dashboard : ["dashboard","πίνακας Ελέγχου"],
    inactive : ["inactive","ανενεργός"],
    active : ["active","ενεργός"],
    edit : ["edit","επεξεργασία"],
    profile : ["profile","Προφίλ"],
    first : ["first","πρώτο"],
    home : ["home","Αρχική"],
    postalCode : ["postal code", "Ταχυδρομικός Κώδικας"],
    create : ["create","δημιουργία"],
    read : ["read","ανάγνωση"],
    update : ["update","τροποποίηση"],
    delete : ["delete","διαγράφη"],
    save : ["save","αποθηκεύση"],
    by : ["by","από"],
    members : ["members","μέλη"],
    loading : ["loading","φόρτωση"],
    add : ["add","προσθήκη"],
    remove : ["remove","διαγραφή"],
    createUser : ["create user","δημιουργία χρήστη"],
    createGroup : ["create group","δημιουργία Ομάδας"],
    make : ["Make","φτιαχνω, κανω"],
    STEP:["STEP","ΒΗΜΑ"],
    USER_SELECTIONS:["USER SELECTIONS","ΕΠΙΛΟΓΕΣ ΧΡΗΣΤΗ "],
    SEARCH_RESULTS:["SEARCH RESULTS","ΑΠΟΤΕΛΕΣΜΑΤΑ ΑΝΑ/ΣΗΣ"],
    DRIVERS_INFO:["DRIVERS INFO","ΣΤΟΙΧΕΙΑ ΟΔΗΓΟΥ"],
    PAYMENT:["PAYMENT","ΠΛΗΡΩΜΗ"],
    VOUCHER:["VOUCHER","ΑΠΟΔΕΙΚΤΙΚΟ ΚΡΑΤΗΣΗΣ"],
    Please_fill_your_prefrences:["Please fill your preferences","Παρακαλώ συπληρώστε τις προτειμήσεις σας"],
    PRIVACY_POLICY : ["PRIVACY POLICY","ΟΡΟΙ ΚΑΙ ΠΡΟΥΠΟΘΕΣΕΙΣ"],
    TERMS_AND_CONDITIONS:["TERMS AND CONDITIONS", "ΠΟΛΙΤΙΚΗ ΙΔΙΩΤΙΚΟΤΗΑΣ"],
    Pick_Up_Location :["Pick Up Location","Σημείο Παραλαβής"],   
    Please_select_your_Pick_Up_location :["Please select your Pick Up location", "Eπιλέξτε το σημέιο παραλαβής"],   
    Pick_Up_Date:["Pick Up Date","Ημ/νία Παραλαβής"],
    pick_up_time:["Pick Up time","Ώρα"],
    Drop_Off_Location  :["Drop Off Location","Σημείο παράδοσης"],
    Please_select_you_Drop_Off_Location :["Please select you Drop Off Location","Eπιλέξτε το σημείο παράδοσης"], 
    Drop_off_date:["Drop off date","Ημ/νια Παράδοσης"],
    Drop_off_time:["Drop off time","'Ωρα"],
    NEXT:["NEXT","ΕΠΟΜΕΝΟ"],
    PREVIOUS:["PREVIOUS","ΠΡΟΗΓΟΥΜΕΝΟ"],
    PICK_UP:["PICK UP","ΠΑΡΑΛΑΒΗ"],
    DROP_OFF:["DROP OFF","ΠΑΡΑΔΟΣΗ"],
    Please_select_your_Pick_Up_Location:["Please select your Pick Up Location","Παρακαλώ επιλέξτε το σημείο παραλαβής"],
    ATH_Athens_Airport:["ATH Athens Airport", "Διεθνές Αεροδρόμειο Ελευθέριος Βενιζέλος ΑΤΗ"],
    Athens_City_Center:["Athens City Center","Κέντρο Αθήνας"],
    Piraeus_Port:["Piraeus Port","Λιμάνι του Πειραιά"],
    Agia_Paraskevi_HQ:["Agia Paraskevi HQ", "Κεντρικά γραφεία Αγ. Παρασκευή"],
    Pick_Up_Date:["Pick Up Date","Ημ/νια Παραλαβής"],
    Pick_Up_time:["Pick Up time", "Ώρα Παραλαβής"],
    Drop_Off_Location:["Drop Off Location","Σημείο Παράδοσης"],
    Please_select_your_Drop_Off_Location:["Please select your Drop Off Location","Παρακαλώ επιλέξτε το σημείο Παράδοσης"],
    Drop_off_Date:["Drop off Date","Ημ/νια Παράδοσης"],
    Drop_off_Time:["Drop off Time","Ώρα Παραλαβής"],
    Showing:["Showing","Εμφάνιση"],
    Economy_only:["Economy only","Οικονομική Κατηγορία"],
    Vans_Only:["Vans Only","Φορτηγάκια"],
    Or_similar:["Or similar","Ή παρόμοιο"],
    Transition:["Transition","Ταχύτητες"],
    Manual:["Manual","Με συμπλέκτη"],
    Car_Dors:["Car Dors","Πόρτες"],
    Clima:["Clima","Κλιματισμός"],
    Air_Condition:["Air Condition","Air Condition"],
    Passengers:["Passengers","Επιβάτες"],
    Laggages:["Laggages","Αποσκευές"],
    Get_this_Car:["Get this Car","Επιλογή"],
    Economy:["Economy","Οικονομική"],
    extra_driver:["extra driver","Επιπλέον Οδηγός"],
    Snow_Chains:["Snow Chains","Αλυσίδες χιονιού"],
    Baby_cot:["Baby cot","Παιδικό κάθισμα"],
    Tolal_Price:["Tolal Price","Σύνολο Χρέωσης"],
    All_Prices_include_Taxes:["All Prices include Taxes","Όλες οι τιμές περιλαμβάνουν όλους τους φόρους"],
    Extras:["Extras","Πρόσθετα"],
    Here_are_all_the_extras_included:["Here are all the extras included","Λίστα προσθέτων"],
    Personal_details:["Personal details"],
    Returning_Customers:["Returning Customers","Παλαιός Πελάτης"],
    First_Name:["First Name","Όνομα"],
    Last_Name:["Last Name","Επίθετο"],
    Address:["Address","Διεύ/νση"],
    City:["City","Πόλη"],
    ZIP:["ZIP","Τ.Κ."],
    Drivers_License_Num:["Drivers License Num","Αριθμός Διπλώματος"],
    Customer_Identity_passport:["Customer Identity/passport","Αριθμός Ταυτότητας ή Διαβατηρίου"],
    Phone_Number:["Phone Number","Τηλέφωνο"],
    Terms_and_conditions:["Terms and conditions","Όροι και προυποθέσεις"],
    I_accept_Terms_and_Conditions:["I accept Terms and Conditions","Αποδέχομαι του Όρους χρήσης"],
    pay_with_paypal:["pay with paypal","Πληρωμή με Paypal"],
    Pay_at_Piraeus_Bank:["Pay at Piraeus Bank","Πληρωμή μέσω της Τράπεζας Πειραιώς"],
    Reservation_Voucher:["Reservation Voucher","Απόδεικτικό Κράτησης"],
    Payment_Type:["Payment Type","Τρόπος Πληρωμής"],
    Transaction_Details:["Transaction Details","Στοιχεία Συναλλαγής"],
    Reservation_Number:["Reservation Number","Αριθμός Κράτησης"],
    Booking_Date:["Booking Date","Ημερομηνία Κράτησης"],
    Last_Name:["Last Name","Επίθετο"],
    Name:["Name","Όνομα"],
    Phone_Number:["Phone Number","Τηλέφωνο"],
    Address:["Address","Διεύ/νση"],
    City:["City","Πόλη"],
    Zip_Code:["Zip Code","Τ.Κ."],
    Drivers_License:["Drivers License","Δίπλωμα Οδήγησης"],
    Customer_Identity_Passport_number:["Customer Identity/Passport number","Δελτίο Ταυτότητας/Διαβατήριο"],
    Print_Voucher:["Print Voucher","Εκτύπωση Απόδεικτικού Κράτησης"],
    Download_Pdf:["Download Pdf","Αποθήκευση PDF Κράτησης"],
    Pick_Up_Location_Details:["Pick Up Location Details","Στοιχεία τοποθεσίας Παραλαβής"],
    Address:["Address","Διεύ/νση"],
    Phone_number_24_7:["24/7 Phone number","24/7 Τηλέφωνο"],
    Drop_of_location_Details:["Drop of location Details","Στοιχεία τοποθεσίας Παράδοσης"],
    User_Log_In:["User Log In","Είσοδος Χρηστών"],
    Returning_Customer_Log_in:["Returning Customer Log in","Είδοδος παλαιών Πελατών"],
    User_E_mail:["User E-mail","Ε-mail Χρήστη"],
    User_Password:["User Password","Κωδικός Εισόδου"],
    Cancel:["Cancel","Απόριψη"],
    Submit:["Submit","Επιβεβαίωση"],
    User_Registration:["User Registration","Εγγραφή Χρήστη"],
    Customer_Registration:["Customer Registration","Εγγραφή Πελάτη"],
    Repeat_Password:["Repeat Password","Επανάληψη Κωδικού"],
    Register:["Register","Εγγραφή"]
}




window.onload = () => {
    lib.init();
}