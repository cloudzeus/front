

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
    Rafina_Port:["Rafina Port","Λιμάνι Ραφίνας"],
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
    Air_Condition:["Αέρας κατάσταση","Air Condition"],
    All_Car_Categories : ["All Car Categories","Όλες οι κατηγορίες"],
    Passengers:["Passengers","Επιβάτες"],
    Laggages:["Laggages","Αποσκευές"],
    GET_THIS_CAR:["Get this Car","Επιλογή"],
    Economy:["Economy","Οικονομική"],
    extra_driver:["extra driver","Επιπλέον Οδηγός"],
    Snow_Chains:["Snow Chains","Αλυσίδες χιονιού"],
    Baby_cot:["Baby cot","Παιδικό κάθισμα"],
    Tolal_Price:["Tolal Price","Σύνολο Χρέωσης"],
    All_Prices_include_Taxes:["All Prices include Taxes","Όλες οι τιμές περιλαμβάνουν όλους τους φόρους"],
    Extras:["Extras","Πρόσθετα"],
    Here_are_all_the_extras_included:["Here are all the extras included","Λίστα προσθέτων"],
    Personal_details:["Personal details","Στοιχεία Οδηγού"],
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
    terms : [`Reservations: All reservations are based on a vehicle category and not a certain car model. In case of no availability for a confirmed reservation, Breeze Rentals reserves the right to offer a vehicle of bigger category to the customer with no extra charge.
    Driver: Minimum age is 23 years of age.
    Drivers' License: The Driver is required to have and display a valid Drivers' License issued at least a year ago. Citizens of Non-EU countries are required to have a valid international Drivers' License along with their regular Drivers' License.
    Traffic Violations - Fines: Traffic violations and fines are bore by the Renter.
    Means of Payment: The Renter is required to present a valid Credit Card for the Rental Guarantee, even if the payment is made by the use of cash. The Rental is prepaid.
    Cancellations
    Cancellation of a booking must be made a minimum of seventy two (72) hours before the rental of the vehicle is due to commence, pursuant to a booking made on this booking engine. If you wish to cancel a booking, the only accepted method is through our Breeze rentals web page.
    In case of cancellations of bookings the following charges will be applied:
    In the event of a cancellation notice which is received by Breeze Rentals at least seventy two (72) hours before the rental of the vehicle is due to commence, pursuant to a booking made on this booking engine, all funds will be reimbursed.
    In the event of a cancellation notice which is received by Breeze rentals  less than seventy two (72) hours before the rental of the vehicle is due to commence, pursuant to a booking made on this booking engine, no funds paid will be reimbursed.
    
                                                                   `,
    `
    Οδηγός: Ελάχιστο όριο ηλικίας τα 23 έτη.
    Άδεια οδήγησης: Απαιτείται η προσκόμιση ισχύοντος διπλώματος που έχει εκδοθεί τουλάχιστον 1 χρόνο πριν. Πολίτες χωρών εκτός ΕΕ απαιτείται να έχουν διεθνές δίπλωμα μαζί με την προσκόμιση του κανονικού διπλώματος
    
    Κλήσεις – Πρόστιμα: Οι κλήσεις και τα πρόστιμα από διοικητικές παραβάσεις επιβαρύνουν τον ενοικιαστή.
     
    Τρόπος πληρωμής: Ο ενοικιαστής απαιτείται να προσκομίσει πιστωτική κάρτα για εγγύηση της ενοικίασης ακόμα και αν η πληρωμή γίνει με μετρητά. Η ενοικίαση προπληρώνεται.
     
    Παραδόσεις – Παραλαβές εκτός ωρών λειτουργίας: Επιβάρυνση 40€+ΦΠΑ(08.30-20.00) 
    Παραδόσεις – Παραλαβές 
    Παραλαβή – Παράδοση στα γραφεία της εταιρίας ατελώς 
    Παραλαβή από λιμάνι Πειραιά, Λιμάνι Ραφήνας, Αεροδρόμιο Ελευθέριος Βενιζέλος έξτρα χρέωση 10€. 
    Παράδοση από λιμάνι Πειραιά, Λιμάνι Ραφήνας, Αεροδρόμιο Ελευθέριος Βενιζέλος έξτρα χρέωση 10€. 
    Παραλαβή μέχρι και 15 χιλιόμετρα από τα γραφεία μας έξτρα χρέωση 15€ 
    Παράδοση μέχρι και 15 χιλιόμετρα από τα γραφεία μας έξτρα χρέωση 15€ 
    Απεριόριστα Χιλιόμετρα για ενοικιάσεις πάνω από 4 ημέρες 
    Επιπλέον οδηγός: Ο πρώτος επιπλέον οδηγός χρέωση ανά ημέρα με μέγιστη χρέωση 10 ημερών.  
    Παιδικό κάθισμα: Η χρέωση για παιδικό κάθισμα είναι ανά ημέρα με μέγιστη χρέωση 10 ημερών 
    Αλυσίδες χιονιού: Η χρέωση για αλυσίδες χιονιού είναι ανά ημέρα με μέγιστη χρέωση 10 ημερών 
    Φορητό GPS: H χρέωση για το φορητό GPS είναι ανά ημέρα με μέγιστη χρέωση 6 ημερών  
    Καύσιμα: Ο μισθωτής οφείλει να επιστρέψει το αυτοκίνητο με την ίδια ποσότητα καυσίμου που το παρέλαβε. Σε περίπτωση παραλαβής του αυτοκινήτου με λιγότερη βενζίνη από την βενζίνη εκκίνησης ο πελάτης επιβαρύνεται τη διαφορά καυσίμου. Καμία επιστροφή δεν δίνεται αν το αυτοκίνητο επιστραφεί με περισσότερα καύσιμα απ'ότι παρελήφθη. 
    Ατύχημα: Σε περίπτωση ατυχήματος ο μισθωτής οφείλει να ενημερώσει την εταιρεία καθώς και την αστυνομία και να προσκομίσει στην επιστροφή το δελτίο καταγραφής της αστυνομίας. Σε περίπτωση ατυχήματος υπαιτιότητας του πελάτη μας, επιβαρύνεται με 15€ για έξοδα διαχείρισης φακέλου ατυχήματος.  
    Ασφάλειες: 
    Τα οχήματα είναι ασφαλισμένα έναντι τρίτων για υλικές ζημιές τρίτων ( εξαιρουμένων α) του οδηγού και επιβατών αυτών β) του οχήματος της (Breeze Car Rental ) 
    S.C.D.W-Μερικη απαλλαγη ευθυνης ζημιων 
        - Άνω των 350€ εφόσον αποδεχτεί τους όρους του συμβολαίου και καταβαλει το ποσο των 6€ επιπλέον του C.D.W ημερησίως για τις κατηγορίες Α,Β 
        - Άνω των 750€ εφόσον αποδεχτεί τους όρους του συμβολαίου και καταβάλει το ποσό των 10€ επιπλέον του C.D.W ημερησίως για τις κατηγορίες A,B.  
    ΚΛΟΠΗ ΠΥΡΟΣ: Ο ενοικιαστής απαλλάσσεται πλήρως της ευθύνης για οποιανδήποτε ζημιά του αυτοκινήτου σε περίπτωση φωτιάς ή κλοπής εφόσον αποδεχτεί και υπογράψει τους σχετικούς όρους του συμβολαίου της εταιρείας και καταβάλει το ποσό των: 
    • 8€, για κάθε ημέρα ενοικίασης για τις κατηγορίες A,B,C,D,D1,D2,E,L 
    • 10€, για κάθε ημέρα ενοικίασης για τις κατηγορίες G,G7,J 
    Κύρια προϋπόθεση για τα ως άνω η μη απόδειξη αμέλειας ( αυτοκίνητο ξεκλείδωτο κλπ). 
    ΟΔΗΓΗΣΗ ΕΚΤΟΣ ΣΥΝΟΡΩΝ: Δεν επιτρέπεται.   
    ΜΕΤΑΦΟΡΑ ΜΕ ΠΛΟΙΟ: Μόνο με προηγούμενη έγγραφη έγκριση της εταιρείας και υπό προϋποθέσεις. 
    ΟΔΙΚΗ ΒΟΗΘΕΙΑ: Τα αυτοκίνητα της Breeze Car Rental καλύπτονται 24ωρες από οδική βοήθεια. Στοιχεία επικοινωνίας θα σας δωθούν από το σταθμό 
    ΑΚΥΡΩΣΗ Σε περίπτωση ακύρωσης έως 7 ημέρες πριν την προγραμματισμένη ημερα και ώρα παραλαβής του αυτοκινήτου επιστρέφεται πλήρως η προκαταβολή. Σε περίπτωση ακύρωσης σε λιγότερο από 7ημερες  κρατείται όλο το ποσό της προκαταβολής. 
    Σε περιπτωση που ο μισθωτης εχει προπληρωση την εξοφληση της κρατησης και ακυρωσει 7 ημερες πριν την προγγραματισμενη ημερα και ωρα παραλαβης επιστρεφεται πληρως η προκαταβολη.Σε περιπτωση που ακυρωσει σε λιγοτερο απο 7 ημερες απο την προγγραματισμενη ημερα και ωρα παραλαβης η εταιρεια Breeze Car Rental  παρακρατει το 30% του συνολικου τιμηματος και επιστρεφει το 70%.  
    ΑΝΕΤΙΑ ΜΗ ΕΜΦΑΝΙΣΗ Σε περίπτωση που ο ενοικιαστής δεν παραλάβει το αυτοκίνητο τη συμφωνηθείσα ημέρα και ώρα χωρίς προηγούμενη έγγραφη ή τηλεφωνική ειδοποίηση, η BREEZE CAR RENTAL θα ακυρώνει την κράτηση μετά την πάροδο 3 ωρών και διατηρεί το δικαίωμα να χρεώσει τον ενοικιαστή με μία ημέρα ενοικίασης της ίδιας κατηγορίας αυτοκινήτου που αφορά η κράτηση
    Επισης μπορει να  χρησιμοποιηση το συγκεκριμενο αυτοκινητο για αλλη κρατηση.  
    Εσωτερικό αυτοκινήτου Σε περίπτωση που το όχημα επιστραφεί με λεκέδες που απαιτούν ειδικό καθαρισμό, (π.χ. τρίχωμα, άμμος κ.α. στα
        καθίσματα ή στο πάτωμα, στο πορτ-μπαγκάζ κλπ), ο ενοικιαστής επιβαρύνεται με το ποσό των 80,00€ 
    `],
    I_accept_Terms_and_Conditions:["I accept Terms and Conditions","Αποδέχομαι του Όρους χρήσης"],
    termsAggreedError : ["please agree to the terms and conditions to proceed.","Παρακαλώ αποδεχθείτε τους όρους χρήσης για να προχωρήσετε στην κράτηση."],
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
    Register:["Register","Εγγραφή"],
    VAN:['VAN','από'], 
    car_selection : ["CAR SELECTION"],
    car_category : ["Car Category"] ,
    total_price : ["Total Price"],
    all_prices : ["All Prices include Taxes"],
    all_extras: ["Here are all the extras included"],
    
    
    label_2 : ['Pick up charge 10€ ','Χρέωση Παραλαβής 10€ '],
    label_3 : ['Extra Driver ','Έχτρα οδηγός '],
    label_4 : ['GPS ','GPS '],
    label_5 : ['Pick up charge 15€ ','Χρέωση Παραλαβής 15€ '],
    label_6 : ['Baby Seat ','Παιδικό κάθισμα '],
    label_7 : ['Snow chains ','Αλυσίδες χιονιού'],
    label_8 : ['Advanced Insurance 750€ ','Ασφάλεια με απαλλαγή 750€ '],
    label_9 : ['Extra Insurance 350€ ','Ασφάλεια με απαλλαγή 350€ '],
    label_10 : ['Theft or loss coverage ','Ασφάλεια Απώλεια Κλοπή '],
    label_12 : ['Drop off charge 10€ ','Χρέωση Παράδοσης 10€ '],
    label_13 : ['Drop off charge 15€ ','Χρέωση Παράδοσης 15€ '],
    description_2 : ["10€ charges for  Pick up locations of ATH - International Airport, Rafina Port, Piraeus Port.","Χρέωση 10€ για παραλαβή από το Αεροδρόμιο, Το Λιμάνι της Ραφίνας και το Λιμάνι του Πειραιά"],
    description_3 : ["Extra car driver which will be charged daily but with maximum charge of 7 days","Έξτρα οδηγός για όλη την διάρκεια της ενοικίασης με μέγιστη χρέωση 7 ημερών."],
    description_4 : ["Portable GPS device which will be charged by daily with maximum charge of 7 days","Φορτή συσκευή Πλοήγησης με χρέωση ανά ημέρα μέγιστη χρέωση 7 ημέρες."],
    description_5 : ["15€ charges for  Pick up  locations over 15Km. Away from our central agency location. ","Χρέωση 15€ για σημείο παραλαβής σε ακτίνα 15 χιλιομέτρων από τα κεντρικά μας γραφεία."],
    description_6 : ['Baby Seat for ages from 2 to 4 which will be charged daily but with maximum 7 days charge.','Παιδικό κάθισμα η χρέωση είναι ανά ημέρα με μέγιστη χρέωση 7 ημερών'],
    description_7 : ["Car snow chains for snow expeditions which will be charged by daily with maximum charge of 7 days","Αλυσίδες χιονιού για κάθε τύπο αυτοκινήτου με χρέωση ανά ημέρα μέγιστη χρέωση 7 ημέρες."],
    description_8 : ['Full car insurance with a 750€ deductible for comprehensive and collision which will be charged daily','Ολοκληρωμένη Ασφάλεια αυτοκινήτου  με απαλλαγή 750€. Η χρέωση είναι ανά ημέρα ενοικίασης'],
    description_9 : ['Full car insurance with a 350€ deductible for comprehensive and collision which will be charged daily.','Ολοκληρωμένη Ασφάλεια αυτοκινήτου  με απαλλαγή 350€. Η χρέωση είναι ανά ημέρα ενοικίασης'],
    description_10 : ['Extra car insurance that reimburses you in the case of car theft or loss of any Car equiptment which will be charged daily.','Έχτρα Ασφάλεια αυτοκιήτου για  ολική Απώλεια ή μερική Κλοπή εξοπλισμού. Ηχρέωσης είναι ανά ημέρα ενοικίασης'],
    description_12 : ["10€ charges for  drop off locations for ATH - International Airport, Rafina Port, Piraeus Port.","Χρέωση 10€ για παραδοση από το Αεροδρόμιο, Το Λιμάνι της Ραφίνας και το Λιμάνι του Πειραιά"],
    description_13 : ["15€ charges for drop off locations over 15Km radius around our central agency location. ","Χρέωση 15€ για σημείο παραδοσης και για ακτίνα 15 χιλιομέτρων από τα κεντρικά μας γραφεία."]

}


