"use client"
import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import {
    MapPinIcon,
    EnvelopeIcon,
    PhoneIcon
  } from "@heroicons/react/24/outline";
  import BusinessMap from "@/components/bussiness/Business";
  
export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      
      

<footer class="">
    <div class="mx-auto w-full max-w-screen-xl px-1  ">
        <div class="md:flex md:justify-between">
         
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
         
              
                  <div >
 <BusinessMap/>
</div>
              <div >
                
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Our Services</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="">
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
          </div>
          <div class="mb-6 md:mb-0">
          <ThemeSwitch />
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" class="hover:underline">Lani Builders</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
           
          </div>
      </div>
    </div>
</footer>

    </Container>
  );
}

