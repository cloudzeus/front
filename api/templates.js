const templates = {
    car : `
    <!-- Car Image-->                                  
    <div class="col-sm-12 col-md-12 col-lg-4 pt-2 wow fadeInUp">
       <img src="images/merchedes.png" class="img-fluid  bg-white rounded" alt="">
    </div>
    <!-- Car Image-->
    <div class="col-sm-12 col-lg-7 pl-3 ml-lg-5">
        <!-- Car Make-->
           <p class="mb-0 py-2"><span class="makeHeader">{CarMake}</span><small
               class="pl-1"><script>document.write(lib.translator("Or_similar"))</script></small>
            </p>
       <div class="row">
          <div class="col-6 pl-3">
               <div class="text-center row">
                       <div class="col-12 text-left pb-1"><img src="images/taxytites.svg"
                          width="16px" alt=""><span class="propertiesSpanFonts">
                            <script>document.write(lib.translator("Transition"))</script>:</span><span class="propertiesSpanFontsLabel">Manual</span>
                       </div>
                    </div>
                    <div class="text-center row">
                       <div class="col-12 text-left pb-1"><img src="images/carDoor.svg" width="16px"
                          alt=""><span class="propertiesSpanFonts"> Car Doors:</span><span
                          class="propertiesSpanFontsLabel">5</span></div>
                    </div>
                    <div class="text-center row">
                       <div class="col-12 text-left  pb-1"><img src="images/clima.svg" width="16px"
                          alt=""><span class="propertiesSpanFonts"> Clima:</span><span
                          class="propertiesSpanFontsLabel">Air Condition</span></div>
                    </div>
                    <div class="text-center row">
                       <div class="col-12 text-left pb-1"><img src="images/People.svg" width="16px"
                          alt=""><span class="propertiesSpanFonts"> Passengers:</span><span
                          class="propertiesSpanFontsLabel">5</span></div>
                    </div>
                    <div class="text-center row">
                       <div class="col-12 text-left pb-1 mb-2"><img src="images/lagage.svg"
                          width="16px" alt=""><span class="propertiesSpanFonts">
                          Laggages:</span><span class="propertiesSpanFontsLabel">4</span>
                       </div>
                    </div>
          </div>
          <!-- Car Price and select button-->
          
          <div class="col-6">
             <div class="row">
                 <div class="col-12 text-center pb-md-2"><h6 class="display-4 pricePerCar">{totalCharges}€</h6></div>                                              
                 <div class="col-12 text-center">
                     <button type="button" class="btn btn-myFormPre sw-btn-prev">Get this Car</button>
                   </div>
                   <div class="col-12 text-center py-md-1 mb-4">
                       <p class="mb-1"><span class="propertiesSpanFontsLabel">{CarCategory}</span></p>
                   </div>
             </div>
          </div>
          <!-- Car Price and select button-->
       </div>
       
    </div>
    <!-- Car extras-->
    
    <div class="col-12 pt-2  extrasBackGround">
           <div class="row justify-content-md-center">
                {extrasBlock}
           </div>
      </div>
      <!-- Car extras-->
    `,
    extras : `

                                          <div class="col-6 col-md-6 col-lg-3">
                                       <span class="switchText">Baby Seat</span><span class="switchPrice">{ExtraPrice}5.00€</span>
                                       <a class="btnInfo infoPrice align-middle infoLink" style="z-index:1000;" href="#" role="button" data-toggle="tooltip" data-placement="top" title="{ExtraDescription}">
                                          <i class="fas fa-info-circle"></i>
                                          </a> 
                                       <label class="switch ">
                                          <input type="checkbox" class="default">
                                          <span class="slider round"></span>
                                       </label>
                                    </div>

    `
}