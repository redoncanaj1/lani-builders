"use client"
import Container from "@/components/container";

  import BusinessMap from "@/components/bussiness/Business";
  
export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800 text-center ">
      
      

<footer>

          <div class="grid grid-cols-3 sm:gap-6 sm:grid-cols-3">
         
              
<div >
    <BusinessMap/>
</div>
            <div>               
                <h2 class="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white ml-2">Our Services</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium ml-2">
                      <li>
                          <span class="hover:text-blue-300">New Builds</span>
                      </li>
                      <li>
                          <span class="hover:text-blue-300">Extensions</span>
                      </li>
                      <li>
                          <span class="hover:text-blue-300">Roofing</span>
                      </li>
                      <li>
                          <span class="hover:text-blue-300">Brick Work</span>
                      </li>
                      <li>
                          <span class="hover:text-blue-300">Wood Work</span>
                      </li>
                      <li>
                          <span class="hover:text-blue-300">Tiling</span>
                      </li>
                       
                  </ul>
              </div>   
          
          <div>
            <ul>
            <h2 class="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white ml-2">Contacts</h2>
                <li>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                       <i class="fa fa-instagram" aria-hidden="true"></i>
                    <a href="https://www.instagram.com/lanibuilders/" className=""> Instagram</a>
                    </li>
                    <li>
                    <i class="fa fa-google" aria-hidden="true"></i>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBncSdLvGlCkKwcxBMDPcDJGMSNxdczzBNwkggcTHqZmVkTsBrCjdJFlVZGjGRntpFWdJGd" className=""> Gmail</a>
                    </li>
                    <li>
                    <i class="fa fa-mobile" aria-hidden="true"></i>
                    <a href="tel:+447378 402689"> Mobile</a>
                    </li>
                    <li>
                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                    <a href="https://wa.me/+447378402689?text=Hello"> WhatsApp</a>
                    </li>
                    </ul>
              </div>
         </div>
          
    
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" class="hover:underline">Lani Builders</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
           
          </div>
      </div>
</footer>

    </Container>
  );
 
}