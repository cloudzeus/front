

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
    email : ["email"," ΗΛΕΚΤΡΟΝΙΚΗ ΔΙΕΥΘΥΝΣΗ"],
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
    Air_Condition:["Air Condition","Αέρας κατάσταση"],
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
    car_selection : ["CAR SELECTION","ΕΠΙΛΟΓΗ ΑΥΤΟΚΙΝΗΤΟΥ"],
    car_category : ["Car Category","Κατηγορία Αυτ/του"] ,
    total_price : ["Total Price", "Σύνολο"],
    all_prices : ["All Prices include Taxes","Στις τιμές περιλαμβάνονταο όλοι οι Φόροι" ],
    all_extras: ["Here are all the extras included","Λίστα έξτρα παροχών" ],
    notAvailable : ["Not Available", "Δεν είναι διαθέσημο"],
    Family : ["Family","Οικογενειακή"],
    Mini :["Mini", "Μίνι"],
    
    
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
    description_13 : ["15€ charges for drop off locations over 15Km radius around our central agency location. ","Χρέωση 15€ για σημείο παραδοσης και για ακτίνα 15 χιλιομέτρων από τα κεντρικά μας γραφεία."],




    bookingFooter : [`<footer id="site-footer" class="padding_half"> 
    <div class="container"> 
        <div class="row"> 
            <div class="col-md-12 col-sm-12 text-center"> 
                <ul class="social-icons bottom25 wow fadeInUp" data-wow-delay="300ms" style="visibility: hidden; animation-delay: 300ms; animation-name: none;"> 
                    <li>
                        <a href="javascript:void(0)"><i class="fab fa-facebook"></i> </a> 
                    </li>                     
                
                    <li>
                        <a href="javascript:void(0)"><i class="fab fa-google-plus"></i> </a> 
                    </li>                     
                     
                    <li>
                        <a href="https://www.instagram.com/breezecars/" target="_blank"><i class="fab fa-instagram"></i> </a> 
                    </li>                     
                    <li>
                        <a href="mailto:info@breezerentals.gr"  target="_blank"><i class="fa fa-at"></i> </a> 
                    </li>                     
                </ul>                 
                <p class="copyrights wow fadeInUp" data-wow-delay="400ms" style="visibility: hidden; animation-delay: 400ms; animation-name: none;"> 
                  © 2019 Breeze Car rentals </p> 
                 

            </div>             
        </div>         
    </div>  
    <div class="container">
        <div class="row">
                <div class="col-md-12 col-sm-12 text-center consentLinks"> 
                    <a href="#" data-toggle="modal" data-target="#siteTerms" data-text="Πολιτική Απορρήτου">Terms Of Use</a>&nbsp;&nbsp;
                    <a href="#" data-toggle="modal" data-target="#faq" data-text="Πολιτική Απορρήτου">F.A.Q</a>&nbsp;&nbsp;
                    <a href="#" data-toggle="modal" data-target="#consent" data-text="Πολιτική Απορρήτου">Cookies Policy</a>&nbsp;&nbsp;
                    <a href="#" data-toggle="modal" data-target="#privacyPolicy" data-text="Πολιτική Απορρήτου">GDPR = Personal Data Policy</a>&nbsp;&nbsp;
                </div>
        </div>
    </div>   
</footer> 

 <!-- The Modal -->
 <div class="modal fade" id="consent">
        <div class="modal-dialog">
          <div class="modal-content">
          
            <!-- Modal Header -->
            <div class="modal-header" style="color:#000;">
              <h4>Cookies policy - Breeze Rentals</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            
            <!-- Modal body -->
            <div class="modal-body">
                <h4>Brief</h4>
                <p>
                        We use technologies on the Website https://www.be-best.gr ("Website") to collect information that helps us improve your online experience.
                        In this Cookie Policy, we refer to these technologies, which include cookies, pixels and gifs, jointly "Cookies". This policy explains the different types of cookies used on the Site and how they are controlled. We reserve the right to change this cookie policy at any time. Check at the top of this page to see when this Cookie Policy applies.
                        
                </p>
                <p>
                        Any changes to this Cookie Policy will be effective as soon as the revised Cookie Policy becomes available on the Site. Considering the use of Cookies, you can enjoy browsing the website. We hope that this policy helps you understand and feel more secure about our use of cookies. If you have any further questions, please contact us at info@breezerentals.gr
                </p>
                <h4>What is  a Cookie?</h4>
                <p>
                        Cookies are small text files that are installed on your computer, on your tablet, on your mobile, and generally on the device you are browsing through the Website https://www.be-best.gr They are widely used to make websites work better and more effectively. They can do this because websites can read and write these files, enabling them to recognize and remember important information that will make Internet use easier for you (for example, memorizing user preferences).
                </p>
                <h4>Types of Cookies Used</h4>
                <p>Here is a list of different types of Cookies that we may use on the Site</p>
                <h5>Essential Cookies. </h5>
                <p>These cookies are important to our site so that we can navigate through it and use its capabilities. Without these absolutely necessary Cookies, we may not be able to provide specific services or features and our site will not work for a smooth user experience.</p>
                <h5>Performance Cookies.</h5>
                <p> Performance cookies, sometimes referred to as analytics cookies, collect information about your use of this website and allow us to improve its functionality. For example, performance cookies show us which pages are most frequently visited on the website, allows us to see the total usage patterns on the Website, helps us to record any difficulties you encounter with the Website.</p>
                <h5>Functionality  Cookies</h5>
                <p> In some cases, we may use Functionality Cookies. Functionality  Cookies allow us to remember the choices you make on our Website and provide more enriched / enhanced and more personalized features / features. All of these features help us improve your visit to our Website.
                    </p>
                <h5>Targeted or Promotional Cookies. </h5>
                <p>We and our service providers may use Targeted or Promotional Cookies to display ads that we believe are most relevant to you and your interests. For example, we may use targeted or promotional cookies to limit the frequency of viewing the same ad on our Site and to help us measure the effectiveness of promotional activities. These cookies remember what you've seen on our Web site and can share this information with other organizations, such as advertisers.</p>
                <p>
                        For more information about your targeted and advertising cookies and how to leave, you can visit
                </p>
                <ul>
                    <li>www.youronlinechoices.com/uk/your-ad-choices</li>
                    <li>www.allaboutcookies.org/manage-cookies/index.html</li>              
                </ul>
                <h4>Third parties using cookies on our website</h4>
                <p>In some cases, we may work with third parties to provide services to our Website. Third-party advertisers and other businesses may use their own Cookies to collect information about your activities on our Site and / or the ads you have selected. This information can be used by them to provide ads that they think may be of interest to you based on what you've seen.</p>
                <p>Third-party advertisers can also use this information to measure the effectiveness of their ads. We do not control these cookies and to disable or reject Third Party Cookies, please refer to the third party's website. You can also learn more about checking cookies in the section below.</p>
                <h4>How can you control cookies?</h4>
                <p>You may not allow or deny the acceptance of Cookies from this Site at any time, either by not activating the relevant settings in your browser, or by activating the setting in your browser that allows you to discard them.</p>
                <p>You may refuse to accept Flash Cookies from this Website using the Adobe Flash management tools at www.adobe.com/security/ flashplayer. More information about the procedure you need to follow to disable cookies, if you have them turned on, can be found on the internet browser's website through the help window.</p>
                <p>You may want to visit www.allaboutcookies.org/manage-cookies/index.html for information on the most frequently used browsers.</p>
                <p>Please keep in mind that if cookies are not enabled or disabled, it is likely that all features of the Site will not work as intended.</p>
            </div>
            
            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-large btn-success" data-dismiss="modal">Close</button>
            </div>
            
          </div>
        </div>
      </div>
 <div class="modal fade" id="faq">
        <div class="modal-dialog">
          <div class="modal-content">
          
            <!-- Modal Header -->
            <div class="modal-header text-center" style="color:#000;">
              <h4>F.A.Q - Breeze Rentals</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            
            <!-- Modal body -->
            <div class="modal-body">
                    <!--Accordion wrapper-->
<div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

        <!-- Accordion card -->
        <div class="card">
      
          <!-- Card header -->
          <div class="card-header py-0 my-0" role="tab" id="headingOne1">
            <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
              aria-controls="collapseOne1">
              <h5 class="py-1 mt-1">
                    WHich is the shortest period I can rent a car from your agency
              </h5>
            </a>
          </div>
      
          <!-- Card body -->
          <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
            <div class="card-body">
                    The minimum period is 2 days and the maximum period is 30 days
            </div>
          </div>
      
        </div>
        <!-- Accordion card -->
      
        <!-- Accordion card -->
        <div class="card">
      
          <!-- Card header -->
          <div class="card-header py-0 my-0" role="tab" id="headingTwo2">
            <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
              aria-expanded="false" aria-controls="collapseTwo2">
              <h5  class="py-1 mt-1">
                    
                    Which is the difference of payment on line and payment on delivery?
              </h5>
            </a>
          </div>
      
          <!-- Card body -->
          <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordionEx">
            <div class="card-body">

               You can pay the amount of your rental, by credit or debit card, by choosing "prepay online". If you use a debit card to prepay your online booking, you must also show a credit card on the same name when receiving the car.
                 Alternatively, you can choose to pay for your reservation when picking up the car from the service point you have chosen during the booking. In this case you will need to enter your credit / debit card details. Your card will not be charged unless the amount of € 80 plus VAT is pre-approved, which is also the guarantee in case of no show on receipt of the car </div>
          </div>
      
        </div>
        <!-- Accordion card -->
      
        <!-- Accordion card -->
        <div class="card">
      
          <!-- Card header -->
          <div class="card-header py-0 my-0" role="tab" id="headingThree3">
            <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
              aria-expanded="false" aria-controls="collapseThree3">
              <h5 class="py-1 mt-1">
                    Will I receive any confirmation of my reservation?
              </h5>
            </a>
          </div>
      
          <!-- Card body -->
          <div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#accordionEx">
            <div class="card-body">
                    After your reservation has been successfully completed, a confirmation of your reservation will be sent to the email address you provided at your booking.
            </div>
          </div>
      
        </div>
        <!-- Accordion card -->
        <div class="card">
      
          <!-- Card header -->
          <div class="card-header py-0 my-0" role="tab" id="headingThree4">
            <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree4"
              aria-expanded="false" aria-controls="collapseThree4">
              <h5 class="py-1 mt-1">
                    What if I cancel my booking? Is there a charge?
              </h5>
            </a>
          </div>
      
          <!-- Card body -->
          <div id="collapseThree4" class="collapse" role="tabpanel" aria-labelledby="headingThree4" data-parent="#accordionEx">
            <div class="card-body">
                    You can cancel your reservation up to 1 day before the time of pickup of the car you have stated in your reservation. For prepaid reservations, if you cancel your reservation up to 48 hours before the start of the rental, the full amount of the reservation will be refunded to your card. Otherwise, the amount of the booking will be refunded to you on the card less when you charge a late € 30 plus VAT refund within two (2) business days. If you make a prepaid reservation within 48 hours from the start of the rental, and then canceled, then the amount of the booking will be refunded on the card, less the late € 30 plus VAT.                    <br><br>
                    In bookings where payment is made upon receipt of the car, cancellation is allowed until the start of rental without any charge.<br>
                    In the event that you do not appear for the receipt of the rented vehicle on the day and time you stated on your reservation without prior notice, Hertz reserves the right to cancel your reservation after 29 minutes without prior written notice.
                    <br><br>
                    For prepaid reservations, you will be refunded on the card the amount of the booking less the no-show charge, which is € 40 plus VAT. For bookings where payment is made upon receipt of the car, the no-show charge is € 30 plus VAT.
                    
            </div>
          </div>
      
        </div>
        <!-- Accordion card -->
      
      </div>
      <!-- Accordion wrapper -->
            </div>
            
            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-large btn-success" data-dismiss="modal">Close</button>
            </div>
            
          </div>
        </div>
      </div>
 <div class="modal fade" id="privacyPolicy">
        <div class="modal-dialog">
          <div class="modal-content">
          
            <!-- Modal Header -->
            <div class="modal-header" style="color:#000;">
              <h4>Privacy Policy - Breeze Rentals</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            
            <!-- Modal body -->
            <div class="modal-body">
                   <div class="container">
                       <div class="row">
                           <div class="col-md-12">
                               <h5>Breeze Car Rentals - https://breezerentals.gr   Privacy Policy for Website Personal Data
                                     </h5>
                               <p>
                                    Thank you for visiting the Breeze Car Rentals website - https://breezerentals.gr, based in 72 Agia Triados, Agia Paraskevi Athens (Breezerentals.gr).
                                    Before using our website, please read this Privacy Policy carefully.
                                                       
                               </p>
                               <h6>Introduction</h6>
                               <p>
                                    Breezerentals.com as your account manager informs you about how it collects and processes information about you.
                                    Personal data (PD) is any information relating to natural persons whose identity is known or can be identified.
                                    The protection of your personal data is very important to Breezerentals.gr who takes action in this direction when you visit its Website.
                                    <br><br> This Privacy Policy lists the kind of information we may collect during your visit to our Website and informs you of how we use this information. When you voluntarily provide us with personal information such as your name, address or email address, we treat this information with absolute confidentiality. Subject to specific provisions of this Privacy Policy, no personal information is being leased, sold, posted or otherwise disclosed to other companies, organizations or websites.
                                    <br><br>As outlined in the Terms of Use of https://breezerentals.gr and the Cookies Policy https://breezerentals.gr, the services provided through the website are directed towards a general audience, do not target children and do not collect - knowingly - personal information from children under the age of 16.
                                    <br><br>The Privacy Policy applies to all users of the site. This Policy applies to the collection and use of your personal information by Breezerentals.gr (eg information that defines a particular person such as full name or e-mail address).
                               </p>
                               <h6>What information do we collect from you?</h6>
                               <p>
                                    When you visit the fasting website, https://breezerentals.gr/, we may collect data from you. Some of these data may be of a personal nature. This data may include search history, IP address, screen resolution, browser you used, operating system and settings, access hours, and your referrer URL. If you are using a portable device, we may also collect data that identifies your device, settings, and location.
                                    <br><br> Breezerentals.gr reserves the right to collect non-personally identifiable user information (browser type, computer type, operating system, Internet providers etc) and / or to monitor IP addresses using corresponding technologies (cookies) . Cookies are small text files stored on each user's hard drive without being able to access documents or files from the user's computer.
                                    They are used to facilitate user access to specific services and / or pages of the Site, as well as for statistical purposes. For more information about the cookies used by the Website, users are kindly requested to visit the Cookies Policy page.
                                    
                                    <br><br> If you are interested in contacting us through our contact form, we will need to collect your name and email address.
                                    <br><br> If you choose to subscribe to the Breezerentals.gr newsletter, we will collect your email address.
                                     
                               </p>
                               <h6>How we collect your personal data</h6>
                               <p>
                                    We collect your personal data directly from you. You provide your personal information when filling in the registration / communication forms available on our website (https://breezerentals.gr). Also during your booking we collect all of your personal information to complete the reservation on the page (https://breezerentals.gr/bookings.html)
                               </p>
                               <h6>Use - disclosure of personal data</h6>
                               <p>
                                    We use your personal information to respond to your requests in order to communicate with your company as well as inform you about the company's activities through newsletters.
                                    <br><br>Your personal data that we collect through the website is not shared and transferred to third parties for further processing.
                                    
                               </p>
                               <h6>Storage - protection of personal data</h6>
                               <p>
                                    The data center where your personal data is stored is located in Germany and the backups are held locally at the business premises.

                               </p>
                               <h6>Time of retention of personal data</h6>
                               <p>
                                    The retention time of your personal data is defined as follows:<br>
                                    <br>1.	 If you fill out the contact form, your personal data is kept for 24 months.                                  
                                    <br> 2.	 If you subscribe to the newsletter service, your personal data is kept for 3 years. Of course, you can inform  us at any time that you no longer wish to send you a newsletter by sending an e-mail to info@breezerentals.gr so that your data will be deleted. At the end of the period specified by the legal-tax obligation (if any), your personal data is deleted                           
                               </p>
                               <h6>Your rights regarding the processing of your personal data </h6>
                                    <p>You have the right to obtain information about your personal data that we have stored at any time, in accordance with applicable law and without any charge. We may request proof of your identity before we give you this data. In some cases, we may not be able to allow access to certain personal data. For example, if your personal data is related to someone else's personal data or if they are kept for legal reasons. In these cases, we'll explain why you can not get this data.
                                            You have the right to request a correction - to update your details and Breezerentals.gr will immediately correct them.                                           
                                    <br><br> You have the right to request the deletion of your personal data and Breezerentals.gr will immediately delete it. However, in some cases where existing legal and tax obligations require mandatory retention, it may be forbidden to delete the data. In these cases, we will explain why we can not delete your personal data and for how long.
                                    You have the right to request that the Breeze Car Rentals - https://breezerentals.gr processing of your personal data be stopped and Breeze cat rentals will immediately cease processing. If this is not possible, we will explain why we can not stop processing your Personal Data.
                                    <br><br>  You have the right to request that you limit the processing of your personal data from Breezerentals.gr and that Breeze Car Rentals - https://breezerentals.gr will immediately limit their processing. If this is not possible, we will explain why we can not limit the processing of your PDs
                                    <br><br>   You have the right to request the transfer of your personal data to another organization / organization and Breeze Car Rentals - https://breezerentals.gr will immediately transmit this data. However, in some cases due to Breeze Car Rentals's documented obligations - https://breezerentals.gr, your request may not be accepted.
                                    Should your Breeze Car Rentals - https://breezerentals.gr be found to have been leaked, you may have a right of complaint to the relevant supervisory authority (Personal Data Protection Authority).
                                    
                                    <br><br> In order to exercise these rights or if you have questions about your privacy policy or if you need help with exercising or understanding privacy options, please contact the privacy team at info@breezerentals.gr or write to us at address: Agias Triados 72, Agia Paraskevi Athens 
                                    
                                    <br><br>  Breeze Car Rentals - https://breezerentals.gr may modify this Privacy Policy. Please check the Application Date at the beginning of this Policy to see when this Policy was last reviewed. Every revision will be implemented as soon as we review the revised Policy.
                                    If we make substantial changes to this Policy that extend our rights to use personal data that we have already collected from you, we will inform you and provide you with the option of using this data in the future.
                                    
                                    </p>
                           </div>
                       </div>
                   </div>
            </div>
            
            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-large btn-success" data-dismiss="modal">Close</button>
            </div>
            
          </div>
        </div>
      </div>

 <div class="modal fade" id="siteTerms">
        <div class="modal-dialog">
          <div class="modal-content">
          
            <!-- Modal Header -->
            <div class="modal-header" style="color:#000;">
              <h4>Terms of Use - Breeze Rentals</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            
            <!-- Modal body -->
            <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h6>Terms and Conditions of Use of the https:// breezerentals.gr website.</h6>
                                <p>
                                       •	Users of this website must read the terms of use of our website in advance before proceeding . These terms and conditions determine the rights of access and use of this website.. 
                                    </p><p>    •	The website is accessible to users that agree to the following terms and conditions.  If you have any reason to disagree or do not accept the following terms and conditions then the access and use of this website is prohibited. 
                                        </p><p>      •	If you wish to proceed and access the website , you explicitly state that you accept all the terms and conditions of the Breeze Car Rental Company policy. </p>  
                                
                                <h6>Rights of Use</h6>
                                <p>
                                        This website is a property  of   Pappas Nikolaos Car Rentals and being made available for the use to all legal and private persons ( of 16 years and older) and entities , that can legally enter into binding agreements in the current legal framework. If you do not fulfill the above requirements you are not allowed to use the breezerentals.gr website.

                                </p>
                                <h6>Modifications of the Terms of Use</h6>
                                <p>
                                        ΗThe company reserves the right to change and update the Terms and Conditions of Use at any given point in time. If you choose to continue to use the website after these changes have taken place , that signifies the acceptance of the changes being made. All the information on the website can be modified, deleted, updated and complemented at the discretion of the “Pappas Nikolaos “ Car Rentals.
                                </p>
                                <h6>Protection of Personal Data</h6>
                                <p>The protection of personal data Policy of the company outlines the use of Personal data that are being collected from the data subjects on the website.  This policy is available at the link GDPR - Personal Data Policy</p>
                                <h6>Intellectual Rights of the Website</h6>
                                <p>All the content of the website , including text news graphs pictures and any type of files and directories is the intellectual property of breezerentals.gr and is subject  to all national, european and international rules and regulations .
                                </p>
                                <p>As a result the reproduction, republishing, copying, storage, sale, distribution, distribution, publication, execution, downloading, translation and modification of any part of the website is expressly prohibited and in any way without the express written consent of Pappas El. Nikolaos »Rent a car.</p>
                                <p>The registered trademarks and names on this website are trademarks and are protected by the above mentioned copyright laws. By way of exception, individual parts of the content of the website may be stored or copied on a simple personal computer strictly for personal use without the intention of commercial exploitation. In case of storage or copying of content from the website it should be referred to as a source of origin, although this does not in any way imply the granting of intellectual property rights.Certain elements contained on the website and originating from other entities are the intellectual property of originators.</p>
                                <h6>RESTRICTIONS ON THE USE OF THE WEBSITE</h6>
                                <p>
                                        In addition to the other limitations set forth in these Terms of Use, you agree to the following:
                                      <br>  a)	You will not hide the source of information transmitted through the Site
                                      <br>  b)	You will not provide false or misleading information through the Site
                                      <br>  c)	You will not log in and use any services, information, applications, etc. available through the Site in a manner not explicitly permitted by "Pappas Ele. Nikolaos »Rent a car.
                                      <br>  d)	You will not import / upload to the site items containing viruses, Trojan horses, worms, time bombs or other computer programming routines that are intended to cause damage, interference, interception or seizure of any system, the website or the Information or violating the intellectual property rights of others.

                                </p>
                                <h6>CONNECTIONS WITH OTHER WEB SITES</h6>
                                <p>a) External links. The Site may contain links to third-party websites and resources (linked sites). These affiliated sites are provided for your convenience only and not as sites whose content is endorsed by "Pappas El. Nikolaos »Rent a car,« Pappas Ele. Nikolaos Car Rental offers no promises or guarantees regarding the accuracy, accuracy, performance or quality of any content, software, service or application available in any linked site.
                                        "Pappas Ele. Nicholas »Car Rental is not responsible for the availability of the linked sites or the content or activities of these sites. If you decide to sign in to affiliated sites, this is at your own risk and at your own risk only . In addition, the use of linked sites is subject to the applicable policies, terms and conditions, including, but not limited to, the privacy policy of the linked site.
                                        
                                </p>
                                <p>
                                        (b) Internal connections. The link to any page of the Site other than "Pappas Ele. Nikolaos »Rent a car via a simple text link is strictly prohibited unless there is a separate connection agreement with" Pappas Ele. Nikolaos »Rent a car. Any webpage or other device that provides a link to the site (company-website) or any page available within it, is not allowed (a) to reproduce the Content, (b) to use a Browser or Margin environment around the Content, (c) to imply in any way that "Pappas El. Nicholas' car rentals approves it, (d) misinterpret any situation, including its relationship with Pappas El. Nicholas »Car Rentals, (e) to present false information about the services of" Pappas El. Nicholas' car rentals, and (f) use any logo or badge of "Pappas El. Nikolaos »Rentals of cars without the prior express written permission of" Pappas Ele. Nikolaos »Rent a car.
  
                                </p>
                                <h6>TERMINATION - SUSPEND THE OPERATION OF THE WEBSITE </h6>
                                <p>
                                        You agree that "Pappas Ele. Nicholas »Car Rental, at its sole discretion, is entitled to terminate or suspend the use of the Site, its content and / or information by you, at any time and for any reason or without reason, even if access and use continue to be allowed to others. With such suspension or termination of use, you are required to (a) immediately discontinue the use of the site and services, and (b) destroy any copy of the content you have created.

                                </p>
                                <p>
                                        Your access to the Website, the Information or the Services after the termination, suspension or interruption of the above is an act of unlawful entry. In addition, you agree that "Pappas Ele. Nikolaos Car Rental is not liable to you or to any third party for any termination or suspension of your access to the Website, Information and / or Services.
                                </p>
                                <h6>LIMITATION OF LIABILITY</h6>
                                <p>
                                        "Pappas Ele. Nikolaos Car Rentals makes the most effort to ensure that the information on the site and its content as a whole is accurate, clear, valid, complete, correct and available.
                                        Under no circumstances, including such negligence, is there a liability of Pappas El. Nikolaos »Rent a car for any damage that may be caused to the public due to this use of the website https://breezerentals.gr. 
                                </p>
                                <h6>OBLIGATIONS OF WEB SITE USERS</h6>
                                <p>
                                        The visitor to https://breezerentals.gr is required to comply with the relevant provisions of Greek, European and International Law and the relevant legislation governing telecommunications. In addition, the person concerned must refrain from any illegal and abusive use of the Network content. The visitor assumes responsibility for any form of damage caused to the site by the visitor due to inappropriate actions.
                                </p>

                                <h6>APPLICABLE LAW AND OTHER TERMS </h6>
                                <p>
                                        This contract of use is governed by the provisions of Greek and International Law, as well as the Directives and Regulations of European Law. It is interpreted on the basis of good faith and business ethics. In the event that a provision is found to be unlawful and therefore void , it shall automatically cease to be valid, without in any way undermining the validity of the other terms. Competent Courts for any emerging disputes arising from this are the Courts of Athens.
                                        If you experience any problems with the content of the site, please contact https://breezerentals.gr at 0030 21 0608 0461 or email: info@breezerentals.gr.
                                        
                                      <br>  Αν διαπιστώσετε οποιαδήποτε προβλήματα στο περιεχόμενο της ιστοσελίδας, παρακαλείσθε να επικοινωνείτε με την https://breezerentals.gr στο τηλ.  21 0608 0461 ή στο email: info@breezerentals.gr
                                        
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
            
            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-large btn-success" data-dismiss="modal">Close</button>
            </div>
            
          </div>
        </div>
      </div>

<!--Footer ends--> `,`<footer id="site-footer" class="padding_half"> 
    <div class="container"> 
        <div class="row"> 
            <div class="col-md-12 col-sm-12 text-center"> 
                <ul class="social-icons bottom25 wow fadeInUp" data-wow-delay="300ms" style="visibility: hidden; animation-delay: 300ms; animation-name: none;"> 
                    <li>
                        <a href="javascript:void(0)"><i class="fab fa-facebook"></i> </a> 
                    </li>                     
                
                    <li>
                        <a href="javascript:void(0)"><i class="fab fa-google-plus"></i> </a> 
                    </li>                     
                     
                    <li>
                        <a href="javascript:void(0)"><i class="fab fa-instagram"></i> </a> 
                    </li>                     
                    <li>
                        <a href="javascript:void(0)"><i class="fa fa-at"></i> </a> 
                    </li>                     
                </ul>                 
                <p class="copyrights wow fadeInUp" data-wow-delay="400ms" style="visibility: hidden; animation-delay: 400ms; animation-name: none;"> 
                  © 2019 Breeze Car rentals </p> 
                 
 
            </div>             
        </div>         
    </div>  
    <div class="container">
        <div class="row">
                <div class="col-md-12 col-sm-12 text-center consentLinks"> 
                    <a href="#" data-toggle="modal" data-target="#siteTerms" data-text="Πολιτική Απορρήτου">Terms Of Use</a>&nbsp;&nbsp;
                    <a href="#" data-toggle="modal" data-target="#faq" data-text="Πολιτική Απορρήτου">F.A.Q</a>&nbsp;&nbsp;
                    <a href="#" data-toggle="modal" data-target="#consent" data-text="Πολιτική Απορρήτου">Cookies Policy</a>&nbsp;&nbsp;
                    <a href="#" data-toggle="modal" data-target="#privacyPolicy" data-text="Πολιτική Απορρήτου">GDPR = Personal Data Policy</a>&nbsp;&nbsp;
                </div>
        </div>
    </div>   
 </footer> 
 
 <!-- The Modal -->
 <div class="modal fade" id="consent">
        <div class="modal-dialog">
          <div class="modal-content">
          
            <!-- Modal Header -->
            <div class="modal-header" style="color:#000;">
              <h4>Privacy Policy - Breeze Rentals</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            
            <!-- Modal body -->
            <div class="modal-body">
                    <script id="CookieDeclaration" src="https://consent.cookiebot.com/1fa8f132-2ca9-4840-870d-37bba76aad48/cd.js" type="text/javascript" async></script>
            </div>
            
            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-large btn-success" data-dismiss="modal">Close</button>
            </div>
            
          </div>
        </div>
      </div>
 <div class="modal fade" id="faq">
        <div class="modal-dialog">
          <div class="modal-content">
          
            <!-- Modal Header -->
            <div class="modal-header text-center" style="color:#000;">
              <h4>F.A.Q - Breeze Rentals</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            
            <!-- Modal body -->
            <div class="modal-body">
                    <!--Accordion wrapper-->
 <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
 
        <!-- Accordion card -->
        <div class="card">
      
          <!-- Card header -->
          <div class="card-header py-0 my-0" role="tab" id="headingOne1">
            <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
              aria-controls="collapseOne1">
              <h5 class="py-1 mt-1">
                    Ποια είναι η ελάχιστη/μέγιστη περίοδος που μπορώ να ενοικιάσω ένα αυτοκίνητο
              </h5>
            </a>
          </div>
      
          <!-- Card body -->
          <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
            <div class="card-body">
                    Η ελάχιστη περίοδος για ενοικίαση είναι 1 ημέρα και η μέγιστη είναι τριάντα (30) ημέρες.
            </div>
          </div>
      
        </div>
        <!-- Accordion card -->
      
        <!-- Accordion card -->
        <div class="card">
      
          <!-- Card header -->
          <div class="card-header py-0 my-0" role="tab" id="headingTwo2">
            <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
              aria-expanded="false" aria-controls="collapseTwo2">
              <h5  class="py-1 mt-1">
                    Τι είναι η «Προπληρωμή online» και τι η «Πληρωμή κατά την παραλαβή»;
              </h5>
            </a>
          </div>
      
          <!-- Card body -->
          <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordionEx">
            <div class="card-body">
                    Μπορείτε να προπληρώσετε το ποσό της ενοικίασης σας, μέσω πιστωτικής ή χρεωστικής κάρτας, επιλέγοντας «προπληρωμή online». Στην περίπτωση που κάνετε χρήση χρεωστικής κάρτας για την προπληρωμή της online κράτησης σας, κατά την παραλαβή του αυτοκινήτου θα πρέπει να εμφανίσετε και μια πιστωτική κάρτα στο ίδιο όνομα. 
                    Εναλλακτικά, μπορείτε να επιλέξετε να πληρώσετε για την κράτηση σας κατά την παραλαβή του αυτοκινήτου από το σημείο εξυπηρέτησης που έχετε επιλέξει κατά τη διάρκεια της κράτησης. Σε αυτή την περίπτωση θα χρειαστεί να εισάγετε τα στοιχεία της πιστωτικής/χρεωστικής σας κάρτας. Η κάρτα σας δεν θα χρεωθεί, παρά μόνο θα προ-εγκριθεί το ποσό των €80 συν ΦΠΑ, που αποτελεί και την εγγύηση σε περίπτωση μη εμφάνισης κατά την παραλαβή του αυτοκινήτου.
                </div>
          </div>
      
        </div>
        <!-- Accordion card -->
      
        <!-- Accordion card -->
        <div class="card">
      
          <!-- Card header -->
          <div class="card-header py-0 my-0" role="tab" id="headingThree3">
            <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
              aria-expanded="false" aria-controls="collapseThree3">
              <h5 class="py-1 mt-1">
                  Θα λάβω κάποια επιβεβαίωση για την κράτηση μου;
              </h5>
            </a>
          </div>
      
          <!-- Card body -->
          <div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#accordionEx">
            <div class="card-body">
                    Μετά την επιτυχή ολοκλήρωση της κράτησης σας, θα σας σταλεί επιβεβαίωση της κράτησης σας, στην ηλεκτρονική διεύθυνση που δηλώσατε κατά την κράτησης σας.
            </div>
          </div>
      
        </div>
        <!-- Accordion card -->
        <div class="card">
      
          <!-- Card header -->
          <div class="card-header py-0 my-0" role="tab" id="headingThree4">
            <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree4"
              aria-expanded="false" aria-controls="collapseThree4">
              <h5 class="py-1 mt-1">
                    Τι γίνεται αν ακυρώσω την κράτηση μου; Υπάρχει επιβάρυνση;
              </h5>
            </a>
          </div>
      
          <!-- Card body -->
          <div id="collapseThree4" class="collapse" role="tabpanel" aria-labelledby="headingThree4" data-parent="#accordionEx">
            <div class="card-body">
                    Μπορείτε να ακυρώσετε την κράτηση σας μέχρι και 1 μέρα πριν την ώρα παραλαβής του αυτοκινήτου που έχετε δηλώσει στην κράτηση σας. Για προπληρωμένες κρατήσεις, εάν ακυρώσετε την κράτηση σας μέχρι και 48 ώρες πριν την έναρξη της ενοικίασης, θα επιστραφεί στην κάρτα σας το σύνολο του ποσού της κράτησης. Σε αντίθετη περίπτωση θα σας επιστραφεί στην κάρτα το ποσό της κράτησης μειωμένο κατά τη χρέωση καθυστερημένης ακύρωσης €30 συν ΦΠΑ, εντός δυο (2) εργάσιμων ημερών. Σε περίπτωση που πραγματοποιήσετε προπληρωμένη κράτηση εντός 48 ωρών από την έναρξη της ενοικίασης, και στην συνέχεια ακυρωθεί, τότε θα σας επιστραφεί στην κάρτα το ποσό της κράτησης μειωμένο κατά τη χρέωση καθυστερημένης ακύρωσης €30 συν ΦΠΑ. 
                    <br><br>
                    Σε κρατήσεις όπου η πληρωμή γίνεται με την παραλαβή του αυτοκινήτου, η ακύρωση είναι επιτρεπτή μέχρι την έναρξη της ενοικίασης χωρίς καμία χρέωση.<br>
                    Στην περίπτωση που δεν εμφανιστείτε για την παραλαβή του μισθωμένου οχήματος την ημέρα και ώρα που δηλώσατε κατά την κράτηση σας χωρίς προηγούμενη ειδοποίηση, η Hertz έχει το δικαίωμα να ακυρώσει την κράτηση σας μετά την πάροδο 29 λεπτών, χωρίς προηγούμενη γραπτή ειδοποίηση. 
                    <br><br>
                    Για προπληρωμένες κρατήσεις θα σας επιστραφεί στην κάρτα το ποσό της κράτησης μειωμένο κατά τη χρέωση μη εμφάνισης, η οποία ανέρχεται στα €40 συν ΦΠΑ. Για κρατήσεις όπου η πληρωμή γίνεται με την παραλαβή του αυτοκινήτου, η χρέωση μη εμφάνισης είναι €30 συν ΦΠΑ.
                    
            </div>
          </div>
      
        </div>
        <!-- Accordion card -->
      
      </div>
      <!-- Accordion wrapper -->
            </div>
            
            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-large btn-success" data-dismiss="modal">Close</button>
            </div>
            
          </div>
        </div>
      </div>
 <div class="modal fade" id="privacyPolicy">
        <div class="modal-dialog">
          <div class="modal-content">
          
            <!-- Modal Header -->
            <div class="modal-header" style="color:#000;">
              <h4>Privacy Policy - Breeze Rentals</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            
            <!-- Modal body -->
            <div class="modal-body">
                   <div class="container">
                       <div class="row">
                           <div class="col-md-12">
                               <h5>Breeze Car Rentals - https://breezerentals.gr Πολιτική Προστασίας Δεδομένων Προσωπικού Χαρακτήρα Ιστοσελίδας </h5>
                               <p>
                                    Σας ευχαριστούμε που επισκεφθήκατε την Ιστοσελίδα  της Breeze Car Rentals - https://breezerentals.gr που εδρεύει Αγίας Τριάδος 72, Αγία Παρασκευή Αθήνα (εφεξής η Breezerentals.gr). 
                                    Πριν χρησιμοποιήσετε την ιστοσελίδα μας, παρακαλούμε διαβάστε προσεκτικά την παρούσα Πολιτική Προστασίας ΠΔ.                                    
                               </p>
                               <h6>Εισαγωγή</h6>
                               <p>
                                    Η Breezerentals.gr ως υπεύθυνος επεξεργασίας σας ενημερώνει για τον τρόπο συλλογής και επεξεργασίας πληροφοριών σχετικά με εσάς. <br><br>
                                    Τα δεδομένα προσωπικού χαρακτήρα (ΠΔ) είναι κάθε πληροφορία που αναφέρεται σε φυσικά πρόσωπα των οποίων η ταυτότητα είναι γνωστή ή μπορεί να εξακριβωθεί.<br><br>
                                    Η προστασία των δεδομένων προσωπικού χαρακτήρα σας είναι πολύ σημαντική για την Breezerentals.gr οποίος/η οποία λαμβάνει μέτρα προς την κατεύθυνση αυτή όταν επισκέπτεστε την Ιστοσελίδα της. 
                                    <br><br> Η παρούσα Πολιτική Προστασίας Δεδομένων Προσωπικού Χαρακτήρα παραθέτει το είδος των πληροφοριών που μπορεί να συλλέξουμε κατά την επίσκεψη σας στην Ιστοσελίδα μας και σας ενημερώνουμε για το πώς χρησιμοποιούμε αυτές τις πληροφορίες. Όταν μας παρέχετε οικειοθελώς προσωπικές πληροφορίες, όπως το όνομα σας, τη διεύθυνση ή τη διεύθυνση ηλεκτρονικού ταχυδρομείου σας, αντιμετωπίζουμε τις πληροφορίες αυτές με απόλυτη εμπιστευτικότητα. Με την επιφύλαξη ειδικών προβλέψεων της Παρούσας Πολιτικής Προστασίας Δεδομένων Προσωπικού Χαρακτήρα καμία προσωπική πληροφορία δεν αποτελεί αντικείμενο ενοικίασης, πώλησης, δημόσιας ανάρτησης ή κοινοποίησης σε άλλες εταιρείες, οργανισμούς ή ιστοσελίδες.
                                    <br><br> Όπως αποτυπώνεται στους Όρους Χρήσης της ιστοσελίδας https://breezerentals.gr και στην Πολιτική Cookies https://breezerentals.gr, οι υπηρεσίες που παρέχονται μέσω της ιστοσελίδας απευθύνονται  προς ένα γενικό κοινό, δεν στοχεύουν σε παιδιά και δεν συλλέγουν - εν γνώση τους - προσωπικές πληροφορίες από παιδιά ηλικίας κάτω των 16 ετών.
                                    <br><br> Η Πολιτική Προστασίας Δεδομένων Προσωπικού Χαρακτήρα εφαρμόζεται προς όλους τους χρήστες της ιστοσελίδας. Η παρούσα Πολιτική εφαρμόζεται στη συλλογή και χρήση των προσωπικών σας πληροφοριών από την  Breezerentals.gr (π.χ. πληροφορίες που ορίζουν συγκεκριμένο πρόσωπο όπως πλήρες ονοματεπώνυμο ή ηλεκτρονική διεύθυνση).
                               </p>
                               <h6>Τι πληροφορίες συλλέγουμε από εσάς</h6>
                               <p>
                                    Όταν επισκέπτεστε την ιστοσελίδα της νηστεία, https://breezerentals.gr/, ενδέχεται να συλλέξουμε δεδομένα από εσάς. Ορισμένα από αυτά τα δεδομένα ενδέχεται να είναι προσωπικής φύσης. Αυτά τα δεδομένα μπορεί να περιλαμβάνουν το ιστορικό αναζήτησης, τη διεύθυνση IP, την ανάλυση οθόνης, το πρόγραμμα περιήγησης που χρησιμοποιήσατε, το λειτουργικό σύστημα και τις ρυθμίσεις, τις ώρες πρόσβασης και το URL αναφοράς σας. Αν χρησιμοποιείτε κάποια φορητή συσκευή, ενδέχεται επίσης να συλλέξουμε δεδομένα που να αναγνωρίζουν τη συσκευή, τις ρυθμίσεις και την τοποθεσία σας.
                                    <br><br> Η Breezerentals.gr διατηρεί το δικαίωμα να συγκεντρώνει μη προσωπικά στοιχεία αναγνώρισης των χρηστών [τύπος φυλλομετρητή (browser), είδος υπολογιστή, λειτουργικό σύστημα, παρόχους διαδικτύου κτλ] ή/και να παρακολουθεί διευθύνσεις Πρωτοκόλλου Internet (IP Address) χρησιμοποιώντας αντίστοιχες τεχνολογίες (cookies). Τα cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στο σκληρό δίσκο κάθε χρήστη χωρίς να είναι δυνατή η πρόσβαση σε έγγραφα ή αρχεία από τον υπολογιστή του χρήστη. Χρησιμοποιούνται για την διευκόλυνση πρόσβασης του χρήστη κατά τη χρήση συγκεκριμένων υπηρεσιών ή/και σελίδων της Ιστοσελίδας, καθώς και για στατιστικούς λόγους. Για περισσότερες πληροφορίες σχετικά με τα cookies που χρησιμοποιεί η Ιστοσελίδα, παρακαλούνται οι χρήστες να επισκεφτούν τη σελίδα της Πολιτικής Χρήσης των cookies (Cookies Policy).
                                    <br><br>  Αν ενδιαφέρεστε να επικοινωνήσουμε μαζί σας μέσω της φόρμας επικοινωνίας, θα συλλέξουμε υποχρεωτικά το όνομά σας και τη διεύθυνση email.
                                    <br><br> Αν επιλέξετε να κάνετε εγγραφή στο newsletter  της Breezerentals.gr, θα συλλέξουμε τη διεύθυνση email σας.                                     
                               </p>
                               <h6>Πως συλλέγουμε τα προσωπικά σας δεδομένα</h6>
                               <p>
                                    Συλλέγουμε τα προσωπικά σας δεδομένα απευθείας από εσάς. Μάς παρέχετε τα προσωπικά σας δεδομένα όταν συμπληρώνεται τις φόρμες εγγραφής/επικοινωνίας που είναι διαθέσιμες στην ιστοσελίδα μας (https://breezerentals.gr). Επίσης κατά την διάρκεια της κράτησης σας συλλέγουμε όλα τα προσωπικά σας στοιχεία για την ολοκλήρωση της κράτησης στην σελίδα (https://breezerentals.gr/bookings.html)
                               </p>
                               <h6>Χρήση – κοινοποίηση των προσωπικών δεδομένων</h6>
                               <p>
                                    Χρησιμοποιούμε τα προσωπικά σας δεδομένα για να ανταποκριθούμε στα δικά σας αιτήματα με στόχο την επικοινωνία με την εταιρία αλλά και την ενημέρωσή σας σχετικά με τις δραστηριότητες της επιχείρησης μέσω ενημερωτικών δελτίων.
                                    <br><br>Τα προσωπικά δεδομένα σας που συλλέγουμε μέσω της ιστοσελίδας δεν κοινοποιούνται και μεταφέρονται σε τρίτα μέρη για περεταίρω επεξεργασία.
                                    
                               </p>
                               <h6>Αποθήκευση – προστασία των προσωπικών δεδομένων</h6>
                               <p>
                                    Ο χώρος φιλοξενίας (data center) όπου αποθηκεύονται τα προσωπικά σας δεδομένα βρίσκονται στην Γερμανία και τα αντίγραφα ασφαλείας κρατούνται τοπικά στον χώρο της επιχείρησης.
                               </p>
                               <h6>Χρόνος διατήρησης των προσωπικών δεδομένων</h6>
                               <p>
                                    Ο χρόνος διατήρησης των προσωπικών σας δεδομένων καθορίζεται ως εξής:<br>
                                    <br>1.	Στην περίπτωση που συμπληρώσετε την φόρμα επικοινωνίας τα προσωπικά σας δεδομένα διατηρούνται για χρονικό διάστημα 24 μηνών .
                                    <br> 2.	Στην περίπτωση που εγγραφείτε στην υπηρεσία αποστολής newsletter τα προσωπικά σας δεδομένα διατηρούνται για χρονικό διάστημα 3 ετών. Μπορείτε βέβαια να μας ενημερώσετε ανά πάσα στιγμή ότι πλέον δεν επιθυμείτε να σας αποστέλλουμε newsletter με αποστολή σχετικού e-mail στο info@breezerentals.gr οπότε τα δεδομένα σας θα διαγραφούν.
                                    Μετά το πέρας του χρονικού διαστήματος που ορίζεται από την εκάστοτε νομική-φορολογική υποχρέωση (εφόσον υπάρχει), τα προσωπικά σας δεδομένα διαγράφονται                                     
                               </p>
                               <h6>Δικαιώματα σας σχετικά με την επεξεργασία των προσωπικών δεδομένων </h6>
                               <p>Έχετε το δικαίωμα τα αποκτήσετε πληροφορίες σχετικά με τα προσωπικά σας δεδομένα που έχουμε αποθηκεύσει ανά πάσα στιγμή, σύμφωνα με την ισχύουσα νομοθεσία και χωρίς οποιαδήποτε χρέωση. Ενδέχεται να ζητήσουμε αποδεικτικό της ταυτότητάς σας πριν σας δώσουμε αυτά τα δεδομένα. Σε ορισμένες περιπτώσεις, ενδέχεται να μην μπορέσουμε να επιτρέψουμε την πρόσβαση σε συγκεκριμένα προσωπικά δεδομένα. Για παράδειγμα, αν τα προσωπικά σας δεδομένα σχετίζονται με προσωπικά δεδομένα άλλων ατόμων ή εάν διατηρούνται για νομικούς λόγους. Σε αυτές τις περιπτώσεις, θα σας εξηγήσουμε τον λόγο για τον οποίο δεν μπορείτε να αποκτήσετε τα δεδομένα αυτά. 
                                    <br><br> Έχετε το δικαίωμα να αιτηθείτε την διόρθωση – επικαιροποίηση των στοιχείων σας και η Breezerentals.gr θα προβεί στην άμεση διόρθωση τους.
                                    <br><br>  Έχετε το δικαίωμα να αιτηθείτε τη διαγραφή των προσωπικών σας δεδομένων και η Breezerentals.gr θα προβεί στην άμεση διαγραφή τους. Ωστόσο, σε ορισμένες περιπτώσεις που οι ισχύουσες νομικές και φορολογικές υποχρεώσεις απαιτούν την υποχρεωτική διατήρηση δεδομένων, ενδέχεται να απαγορεύεται η διαγραφή των δεδομένων. Σε αυτές τις περιπτώσεις, θα σας εξηγήσουμε τον λόγο για τον οποίο δεν μπορούμε να διαγράψουμε τα προσωπικά σας δεδομένα και για πόσο διάστημα.
                                    <br><br>   Έχετε το δικαίωμα να αιτηθείτε την παύση επεξεργασίας από Breeze Car Rentals - https://breezerentals.gr των προσωπικών σας δεδομένων και η Breeze cat rentals  θα προβεί στην άμεση παύση επεξεργασίας αυτών. Εάν αυτό δεν είναι εφικτό, θα σας εξηγήσουμε τον λόγο για τον οποίο δεν μπορούμε να παύσουμε την επεξεργασία των ΠΔ σας.
                                    <br><br>   Έχετε το δικαίωμα να αιτηθείτε τον περιορισμό της επεξεργασίας από την Breezerentals.gr των προσωπικών σας δεδομένων και η Breeze Car Rentals - https://breezerentals.gr θα προβεί στον άμεσο περιορισμό της επεξεργασίας αυτών. Εάν αυτό δεν είναι εφικτό, θα σας εξηγήσουμε τον λόγο για τον οποίο δεν μπορούμε να περιορίσουμε την επεξεργασία των ΠΔ σας.
                                    <br><br>   Έχετε το δικαίωμα να αιτηθείτε τη διαβίβαση των προσωπικών σας δεδομένων σε άλλο φορέα/οργανισμό και η Breeze Car Rentals - https://breezerentals.gr  θα προβεί στην άμεση διαβίβαση των δεδομένων αυτών.  Ωστόσο σε ορισμένες περιπτώσεις λόγω τεκμηριωμένων υποχρεώσεων της Breeze Car Rentals - https://breezerentals.gr, ενδέχεται να μην μπορεί να γίνει δεκτό το αίτημα σας. 
                                    <br><br>   Σε περίπτωση που αποδειχθεί ότι έγινε διαρροή των προσωπικών σας δεδομένων από την  Breeze Car Rentals - https://breezerentals.gr με αποτέλεσμα να υποστείτε υλική ή όχι ζημία, έχετε το δικαίωμα καταγγελίας στην αρμόδια εποπτική αρχή (Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα).
                                    <br><br>  Για να ασκήσετε τα παραπάνω δικαιώματά σας ή αν έχετε ερωτήσεις σχετικά με την πολιτική προστασίας προσωπικών δεδομένων ή αν χρειάζεστε βοήθεια σχετικά με την άσκηση ή την κατανόηση των επιλογών απορρήτου, επικοινωνήστε με την ομάδα απορρήτου στην ηλεκτρονική διεύθυνση info@breezerentals.gr ή γράψτε μας στη διεύθυνση: Αγίας Τριάδος 72, Αγία Παρασκευή Αθήνα Αλλαγές στην πολιτική προστασίας προσωπικών δεδομένων 
                                    
                                    <br><br>  H Breeze Car Rentals - https://breezerentals.gr μπορεί να τροποποιεί την παρούσα Πολιτική Προστασίας Δεδομένων Προσωπικού Χαρακτήρα. Παρακαλούμε να ελέγχετε την Ημερομηνία Εφαρμογής στην αρχή της παρούσας Πολιτικής, για να δείτε πότε η παρούσα Πολιτική, αναθεωρήθηκε για τελευταία φορά. Κάθε αναθεώρηση θα τίθεται σε εφαρμογή μόλις αναρτούμε την αναθεωρημένη Πολιτική. 
                                    Αν κάνουμε ουσιαστικές αλλαγές στην παρούσα Πολιτική που διευρύνουν τα δικαιώματα μας να χρησιμοποιούμε τα προσωπικά δεδομένα τα οποία έχουμε ήδη συγκεντρώσει από εσάς, θα σας ενημερώσουμε και θα σας παρέχουμε τη δυνατότητα επιλογής για τη μελλοντική χρήση αυτών των δεδομένων.
                                    </p>
                           </div>
                       </div>
                   </div>
            </div>
            
            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-large btn-success" data-dismiss="modal">Close</button>
            </div>
            
          </div>
        </div>
      </div>
 
 <div class="modal fade" id="siteTerms">
        <div class="modal-dialog">
          <div class="modal-content">
          
            <!-- Modal Header -->
            <div class="modal-header" style="color:#000;">
              <h4>Terms of Use - Breeze Rentals</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            
            <!-- Modal body -->
            <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h6>Όροι χρήσης της ιστοσελίδας https://breezerentals.gr</h6>
                                <p>
                                       •	ΠΑΡΑΚΑΛΟΥΜΕ ΔΙΑΒΑΣΤΕ ΠΡΟΣΕΚΤΙΚΑ ΤΟΥΣ ΟΡΟΥΣ ΧΡΗΣΗΣ ΤΗΣ ΙΣΤΟΣΕΛΙΔΑΣ ΜΑΣ  ΠΡΙΝ ΤΗ ΧΡΗΣΙΜΟΠΟΙΗΣΕΤΕ.  ΑΥΤΟΙ ΟΙ ΟΡΟΙ ΧΡΗΣΗΣ ΔΙΕΠΟΥΝ ΤΗΝ ΠΡΟΣΒΑΣΗ ΣΑΣ ΚΑΙ ΤΗ ΧΡΗΣΗ ΤΗΣ ΙΣΤΟΣΕΛΙΔΑΣ. 
                                    </p><p>    •	Η ΙΣΤΟΣΕΛΙΔΑ ΕΙΝΑΙ ΔΙΑΘΕΣΙΜΗ ΣΕ ΣΑΣ ΓΙΑ ΠΡΟΣΒΑΣΗ ΚΑΙ ΧΡΗΣΗ ΜΟΝΟ ΕΦΟΣΟΝ ΣΥΜΦΩΝΕΙΤΕ ΜΕ ΤΟΥΣ ΟΡΟΥΣ ΚΑΙ ΤΙΣ ΠΡΟΫΠΟΘΕΣΕΙΣ ΠΟΥ ΑΝΑΦΕΡΟΝΤΑΙ ΣΤΗ ΣΥΝΕΧΕΙΑ. 
                                        </p><p>      •	ΕΑΝ ΔΕΝ ΣΥΜΦΩΝΕΙΤΕ ΜΕ ΟΛΟΥΣ ΤΟΥΣ ΟΡΟΥΣ ΧΡΗΣΗΣ, ΤΟΤΕ ΔΕΝ ΕΠΙΤΡΕΠΕΤΑΙ Η ΠΡΟΣΒΑΣΗ ΣΑΣ ΣΤΗΝ ΙΣΤΟΣΕΛΙΔΑ ΚΑΘΩΣ ΚΑΙ Η ΧΡΗΣΗ ΑΥΤΗΣ. 
                                            </p><p>    •	ΜΕ ΤΗΝ ΠΡΟΣΒΑΣΗ ΣΑΣ ΣΤΗΝ ΙΣΤΟΣΕΛΙΔΑ Ή ΤΗ ΧΡΗΣΗ ΤΗΣ, ΔΗΛΩΝΕΤΕ ΟΤΙ ΑΠΟΔΕΧΕΣΤΕ ΤΗ ΔΕΣΜΕΥΣΗ ΣΑΣ, ΟΠΩΣ ΠΡΟΚΥΠΤΕΙ ΑΠΟ ΤΟΥΣ ΟΡΟΥΣ ΧΡΗΣΗΣ. 
                                      </p>  
                                
                                <h6>1. ΚΑΤΑΛΛΗΛΟΤΗΤΑ ΧΡΗΣΤΗ ΙΣΤΟΣΕΛΙΔΑΣ</h6>
                                <p>
                                        Η ιστοσελίδα παρέχεται από την Παππάς Ελε. Νικόλαος» Ενοικιάσεις αυτοκινήτων, και διατίθεται τόσο σε νομικά πρόσωπα όσο και σε φυσικά πρόσωπα άνω των 16 ετών, τα οποία μπορούν να συνάψουν νομικά δεσμευτικές συμφωνίες στα πλαίσια της ισχύουσας νομοθεσίας. Εάν δεν καλύπτετε τις προϋποθέσεις, δεν επιτρέπεται να χρησιμοποιείτε την ιστοσελίδα.
                                </p>
                                <h6>2. ΤΡΟΠΟΠΟΙΗΣΗ ΤΩΝ ΟΡΩΝ ΧΡΗΣΗΣ</h6>
                                <p>
                                        Η Παππάς Ελε. Νικόλαος Ενοικιάσεις αυτοκινήτων, έχει το δικαίωμα να αναθεωρεί και να ενημερώνει τους παρόντες Όρους χρήσης οποιαδήποτε στιγμή.  Η από μέρους σας συνέχιση της χρήσης της Ιστοσελίδας μετά από την πραγματοποίηση οποιασδήποτε αλλαγής σε αυτούς τους Όρους χρήσης σημαίνει ότι αποδέχεστε αυτές τις αλλαγές. Κάθε στοιχείο της Ιστοσελίδας μπορεί να τροποποιηθεί, να συμπληρωθεί, να διαγραφεί ή να ενημερωθεί χωρίς προειδοποίηση, κατά την απόλυτη κρίση της «Παππάς Ελε. Νικόλαος» Ενοικιάσεις αυτοκινήτων,. 
                                </p>
                                <h6>3. ΠΡΟΣΤΑΣΙΑ ΠΡΟΣΩΠΙΚΩΝ ΔΕΔΟΜΕΝΩΝ</h6>
                                <p>Η Πολιτική Προστασίας Δεδομένων Προσωπικού Χαρακτήρα της  «Παππάς Ελε. Νικόλαος» Ενοικιάσεις αυτοκινήτων, διέπει τη χρήση των πληροφοριών που συλλέγονται ή παρέχονται από εσάς στην Ιστοσελίδα. Για να λάβετε γνώση της Πολιτικής Προστασίας Δεδομένων Προσωπικού Χαρακτήρα της «Παππάς Ελε. Νικόλαος» Ενοικιάσεις αυτοκινήτων.</p>
                                <h6>4. ΑΔΕΙΑ – ΙΔΙΟΚΤΗΣΙΑ ΤΗΣ ΙΣΤΟΣΕΛΙΔΑΣ</h6>
                                <p>
                                        Το σύνολο του περιεχομένου της ιστοσελίδας συμπεριλαμβανομένων, χωρίς περιορισμό, κειμένων, ειδήσεων, γραφικών, φωτογραφιών, διαγραμμάτων, εικόνων, υπηρεσιών και γενικά κάθε είδους αρχείων αποτελεί αντικείμενο πνευματικής ιδιοκτησίας και διέπεται από τις εθνικές, ευρωπαϊκές και διεθνείς διατάξεις περί Πνευματικής Ιδιοκτησίας. 
                                        Ως εκ τούτου, η αναπαραγωγή, αναδημοσίευση, αντιγραφή, αποθήκευση, πώληση, μετάδοση, διανομή, έκδοση, εκτέλεση, λήψη, μετάφραση και τροποποίηση κάθε μέρους της ιστοσελίδας απαγορεύεται ρητά και με οποιονδήποτε τρόπο χωρίς την προηγούμενη ρητή έγγραφη συναίνεση της «Παππάς Ελε. Νικόλαος» Ενοικιάσεις αυτοκινήτων, Τα εγγεγραμμένα σήματα και ονόματα που περιλαμβάνονται σε αυτήν την ιστοσελίδα είναι σήματα κατατεθέντα και προστατεύονται από τις προαναφερόμενες διατάξεις περί πνευματικής ιδιοκτησίας. Κατ’ εξαίρεση, επιμέρους τμήματα του περιεχομένου της ιστοσελίδας μπορεί να αποθηκευτούν ή να αντιγραφούν σε έναν απλό προσωπικό ηλεκτρονικό υπολογιστή, αυστηρά για προσωπική χρήση χωρίς την πρόθεση για εμπορική εκμετάλλευση. Σε περίπτωση αποθήκευσης ή αντιγραφής περιεχομένου από την ιστοσελίδα θα πρέπει να αναφέρεται ως πηγή προέλευσης, αν και αυτό σε καμία περίπτωση δεν συνεπάγεται την παραχώρηση των δικαιωμάτων πνευματικής ιδιοκτησίας. Ορισμένα στοιχεία που περιέχονται στην ιστοσελίδα και προέρχονται από άλλους φορείς, αποτελούν πνευματική ιδιοκτησία των φορέων προέλευσης.
 
                                </p>
                                <h6>5. ΠΕΡΙΟΡΙΣΜΟΙ ΧΡΗΣΗΣ ΤΗΣ ΙΣΤΟΣΕΛΙΔΑΣ</h6>
                                <p>
                                        Πλέον των άλλων περιορισμών που ορίζονται στους παρόντες Όρους Χρήσης, συμφωνείτε με τα ακόλουθα:
                                      <br>  a)	Δεν θα προβαίνετε σε απόκρυψη της προέλευσης πληροφοριών που μεταδίδονται μέσω της Ιστοσελίδας
                                      <br>  b)	Δεν θα παρέχετε ψευδείς ή παραπλανητικές πληροφορίες μέσω της Ιστοσελίδας
                                      <br>  c)	Δεν θα συνδέεστε και δεν θα χρησιμοποιείτε υπηρεσίες, πληροφορίες, εφαρμογές κλπ που διατίθεται μέσω της Ιστοσελίδας με τρόπο που δεν επιτρέπεται ρητά από την «Παππάς Ελε. Νικόλαος» Ενοικιάσεις αυτοκινήτων
                                      <br>  d)	Δεν θα εισάγετε/φορτώνετε στην ιστοσελίδα στοιχεία που περιέχουν ιούς, Trojan horses, worms, time bombs ή άλλες ρουτίνες προγραμματισμού υπολογιστών που έχουν σκοπό την πρόκληση ζημιών, την παρεμβολή, την υποκλοπή ή την κατάληψη οποιουδήποτε συστήματος, της Ιστοσελίδας ή των Πληροφοριών ή που παραβιάζουν τα δικαιώματα πνευματικής ιδιοκτησίας άλλων.
 
                                </p>
                                <h6>6. ΣΥΝΔΕΣΕΙΣ ΜΕ ΑΛΛΕΣ ΙΣΤΟΣΕΛΙΔΕΣ</h6>
                                <p>
                                        α) Εξωτερικές συνδέσεις. Η Ιστοσελίδα ενδέχεται να περιέχει συνδέσεις προς ιστοσελίδες και πόρους τρίτων (συνδεδεμένες τοποθεσίες). Οι συνδεδεμένες αυτές τοποθεσίες παρέχονται μόνο για την ευκολία σας και όχι ως τοποθεσίες, των οποίων το περιεχόμενο φέρει την έγκριση της «Παππάς Ελε. Νικόλαος» Ενοικιάσεις αυτοκινήτων, Η «Παππάς Ελε. Νικόλαος» Ενοικιάσεις αυτοκινήτων δεν παρέχει υποσχέσεις ή εγγυήσεις όσον αφορά στην ορθότητα, την ακρίβεια, την απόδοση ή την ποιότητα οποιουδήποτε περιεχομένου, λογισμικού, υπηρεσίας ή εφαρμογής υπάρχει σε οποιαδήποτε συνδεδεμένη τοποθεσία. Η «Παππάς Ελε. Νικόλαος» Ενοικιάσεις αυτοκινήτων δεν είναι υπεύθυνη για τη διαθεσιμότητα των συνδεδεμένων τοποθεσιών ή του περιεχομένου ή των δραστηριοτήτων αυτών των τοποθεσιών. Εάν αποφασίσετε την είσοδο σε συνδεδεμένες τοποθεσίες, αυτό γίνεται με δική σας ευθύνη και δικό σας κίνδυνο. Επιπλέον, η χρήση των συνδεδεμένων τοποθεσιών υπόκειται στις πολιτικές, τους όρους και τις προϋποθέσεις που ισχύουν, συμπεριλαμβανόμενης, αλλά όχι περιοριστικά, της πολιτικής απορρήτου της συνδεδεμένης τοποθεσίας.
                                       <br> (β) Εσωτερικές συνδέσεις. Η σύνδεση προς οποιαδήποτε σελίδα της Ιστοσελίδας άλλη εκτός από την «Παππάς Ελε. Νικόλαος» Ενοικιάσεις αυτοκινήτων μέσω σύνδεσης απλού κειμένου απαγορεύεται αυστηρά εάν δεν υπάρχει ξεχωριστό συμφωνητικό σύνδεσης με την «Παππάς Ελε. Νικόλαος» Ενοικιάσεις αυτοκινήτων. Κάθε ιστοσελίδα ή άλλη συσκευή που παρέχει σύνδεση προς την τοποθεσία {ιστοσελίδα επιχείρησης-φορέα} ή οποιαδήποτε σελίδα είναι διαθέσιμη εντός αυτής, δεν επιτρέπεται (α) να αναπαράγει το Περιεχόμενο, (β) να χρησιμοποιεί περιβάλλον προγράμματος περιήγησης ή περιθωρίου γύρω από το Περιεχόμενο, (γ) να υπονοεί με οποιονδήποτε τρόπο ότι η «Παππάς Ελε. Νικόλαος» Ενοικιάσεις αυτοκινήτων την εγκρίνει, (δ) να παρερμηνεύει οποιαδήποτε κατάσταση, συμπεριλαμβανόμενης της σχέσης της με την «Παππάς Ελε. Νικόλαος» Ενοικιάσεις αυτοκινήτων, (ε) να παρουσιάζει ψευδείς πληροφορίες σχετικά με τις υπηρεσίες της «Παππάς Ελε. Νικόλαος» Ενοικιάσεις αυτοκινήτων, και (στ) να χρησιμοποιεί οποιοδήποτε λογότυπο ή σήμα της «Παππάς Ελε. Νικόλαος» Ενοικιάσεις αυτοκινήτων  χωρίς προηγούμενη ρητή γραπτή άδεια της «Παππάς Ελε. Νικόλαος» Ενοικιάσεις αυτοκινήτων.
                                        
                                </p>
                                <h6>7. ΤΕΡΜΑΤΙΣΜΟΣ – ΑΝΑΣΤΟΛΗ ΛΕΙΤΟΥΡΓΙΑΣ ΤΗΣ ΙΣΤΟΣΕΛΙΔΑΣ</h6>
                                <p>
                                        Συμφωνείτε ότι η «Παππάς Ελε. Νικόλαος» Ενοικιάσεις αυτοκινήτων, κατά την απόλυτη κρίση της, δικαιούται να τερματίσει ή να αναστείλει τη χρήση της ιστοσελίδας, του περιεχομένου ή/και των πληροφοριών της από εσάς, οποιαδήποτε στιγμή και για οποιονδήποτε λόγο, ή και χωρίς αιτιολογία, ακόμη και αν η πρόσβαση και η χρήση συνεχίσει να επιτρέπεται σε άλλους.  Με την εν λόγω αναστολή ή τον τερματισμό της χρήσης, υποχρεούστε (α) να διακόψετε αμέσως τη χρήση της ιστοσελίδας και των υπηρεσιών, και (β) να καταστρέψετε οποιοδήποτε αντίγραφο τμήματος του περιεχομένου έχετε δημιουργήσει.   Η πρόσβαση σας στην ιστοσελίδα, στις Πληροφορίες ή στις Υπηρεσίες μετά από τον τερματισμό, την αναστολή ή τη διακοπή κατά τα ανωτέρω, συνιστά πράξη παράνομης εισόδου.  Επιπλέον, συμφωνείτε ότι η «Παππάς Ελε. Νικόλαος» Ενοικιάσεις αυτοκινήτων δεν ευθύνεται έναντι υμών ή έναντι οποιουδήποτε τρίτου για οποιονδήποτε τερματισμό ή αναστολή της πρόσβασής σας στην ιστοσελίδα, τις Πληροφορίες ή/και τις Υπηρεσίες.
                                </p>
                                <h6>8. ΠΕΡΙΟΡΙΣΜΟΣ ΕΥΘΥΝΩΝ</h6>
                                <p>
                                        Η «Παππάς Ελε. Νικόλαος» Ενοικιάσεις αυτοκινήτων καταβάλλει τη μεγαλύτερη δυνατή προσπάθεια για να εξασφαλιστεί ότι οι πληροφορίες της ιστοσελίδας και το περιεχόμενο της στο σύνολό του είναι ακριβείς, σαφείς, έγκυρες, πλήρεις, σωστές και διαθέσιμες. 
                                      <br>  Σε καμία περίπτωση, συμπεριλαμβανομένης και αυτής της αμέλειας, δεν προκύπτει ευθύνη της «Παππάς Ελε. Νικόλαος» Ενοικιάσεις αυτοκινήτων για οποιαδήποτε ζημία τυχόν προκληθεί στο κοινό εξ αφορμής αυτής της χρήσης της ιστοσελίδας https://breezerentals.gr
                                        
                                </p>
                                <h6>9. ΥΠΟΧΡΕΩΣΕΙΣ ΕΠΙΣΚΕΠΤΗ </h6>
                                <p>
                                        Ο επισκέπτης της ιστοσελίδας https://breezerentals.gr  υποχρεούται να συμμορφωθεί με τις σχετικές διατάξεις του Ελληνικού, Ευρωπαϊκού και Διεθνούς Δικαίου και τη σχετική νομοθεσία που διέπει τις τηλεπικοινωνίες. Επιπλέον, ο ενδιαφερόμενος οφείλει να απέχει από κάθε παράνομη και καταχρηστική χρήση του περιεχομένου του Δικτύου. Ο επισκέπτης αναλαμβάνει την ευθύνη για οποιασδήποτε μορφής ζημία που προκλήθηκε στην ιστοσελίδα από τον επισκέπτη λόγω ακατάλληλων ενεργειών του. Σε περίπτωση άσκησης οποιαδήποτε αγωγής, αξίωσης, διοικητικής ή δικαστικής κατά της ιστοσελίδας, λόγω οποιασδήποτε μορφής παράβαση του, ο τελευταίος αναλαμβάνει την υποχρέωση αφενός να παρέμβει στη σχετική δικαστική διαδικασία και αφετέρου να αποζημιώσει την ιστοσελίδα στην περίπτωση που υποχρεωθεί σε καταβολή αποζημίωσης ή άλλης.
                                </p>
                                <h6>10. ΕΦΑΡΜΟΣΤΕΟ ΔΙΚΑΙΟ ΚΑΙ ΛΟΙΠΟΙ ΟΡΟΙ </h6>
                                <p>
                                        Η παρούσα σύμβαση χρήσης διέπεται από τις διατάξεις του Ελληνικού και Διεθνούς Δικαίου, καθώς και τις οδηγίες και Κανονισμούς του Ευρωπαϊκού Δικαίου. Ερμηνεύεται βάσει των κανόνων καλής πίστης και των συναλλακτικών ηθών. Στην περίπτωση που κάποια διάταξη κριθεί αντίθετη προς το νόμο και ως εκ τούτου άκυρη ή ακυρώσιμη, παύει αυτοδικαίως να ισχύει, χωρίς σε καμία περίπτωση να θίγεται η ισχύς των λοιπών όρων. Αρμόδια δικαστήρια για τυχόν αναφυόμενες διαφορές προκύπτουσες από την παρούσα είναι τα Δικαστήρια Αθηνών.
                                      <br>  Αν διαπιστώσετε οποιαδήποτε προβλήματα στο περιεχόμενο της ιστοσελίδας, παρακαλείσθε να επικοινωνείτε με την https://breezerentals.gr στο τηλ.  21 0608 0461 ή στο email: info@breezerentals.gr
                                        
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
            
            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-large btn-success" data-dismiss="modal">Close</button>
            </div>
            
          </div>
        </div>
      </div>
 
       <!--Footer ends-->`]



}


