<script setup lang="ts">
import { useHeaderStore } from "../stores/header";
import { onMounted } from 'vue';
import { useDetectMobileStore } from '../stores/detectmobile';
import { useClinicianInfoStore } from '../stores/clinicianinfo';

const headerStore = useHeaderStore();
const mobile = useDetectMobileStore();
const clinicianInfo = useClinicianInfoStore();

const clinicianPhilosophy = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis maiores at fugit et? Quo, cum. Voluptas aut suscipit atque odio repellendus dolorum numquam perferendis ducimus illo sequi laudantium, quisquam a veniam impedit consequuntur fugit facilis? Veritatis debitis officia autem tempora tenetur quod laborum cupiditate. Ipsa saepe porro libero culpa vel.';
const clinicianSpecialty = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat minima sint vitae, eligendi quod nulla sit, eaque quae repellat eveniet repellendus modi maiores odio adipisci. Voluptas ut praesentium aliquid voluptatum facere nobis asperiores aspernatur quasi.';
const clinicianCredentials = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, nulla temporibus rerum ducimus fuga illum.​';

const appBody = document.getElementById('body') as HTMLBodyElement;

onMounted(() => {
  headerStore.headerText = "Our Team";
  mobile.checkDevice();
  appBody.scrollTop = 0;
});
</script>

<template>
  <div v-if="mobile.isMobile">
    <div class="wave3">
      <br><br><br><br><br><br>
      <div class='air air1'></div>
      <div class='air air2'></div>
      <div class='air air3'></div>
      <div class='air air4'></div>
    </div>

    <div>
      <h1 class="text-body-mobile thank-you-mobile">Lorem ipsum dolor sit amet consectetur</h1>
      <span class="text-body-mobile services-body-mobile">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente recusandae tempore at minus impedit aliquid labore dolores nostrum officiis ad!
      </span>
    </div>
    <br>
    <!-- Profile 1-->
    <div>
      <div class="team-body-mobile">
        <div>
          <div class="about-left-mobile">
            <div class="image-mobile">
              <img src="@/assets/therapists/no-profile-picture-icon.png" 
              @click="clinicianInfo.toggle();
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"/>
            </div>
            <div class="about-text-mobile">
              <h1 class="name-mobile">
                Name - Credentials
              </h1>
              &emsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel autem recusandae perspiciatis eaque minima quod quaerat tempora 
              labore voluptas maiores? Suscipit distinctio amet officia rem modi dolores sequi perspiciatis nostrum fugit atque! Architecto, autem 
              nesciunt adipisci suscipit similique beatae maiores inventore odio deleniti aut corporis voluptatibus, consequatur unde dolore fugit?
              <br>
              <br>
              &emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam corporis magni numquam suscipit ad, harum, beatae ullam
               adipisci distinctio vero ratione ex doloremque autem fugiat! Reprehenderit fuga voluptate debitis?
              <br>
              <br>
              <span class="quote">&emsp;"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem cumque facere non explicabo repellat
                 inventore, impedit magni dignissimos, dolore quos culpa aperiam aliquid tenetur."</span>​
            </div>
          </div>
          
          <div class="button-container-mobile">
            <button 
            type="button" 
            class="service-button-mobile"
            @click="clinicianInfo.toggle();
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"
            >More Info</button>
          </div>

        </div>
      </div>
    </div>

    <div class="wave4">
      <br><br><br><br><br><br>
      <div class='air air1'></div>
      <div class='air air2'></div>
      <div class='air air3'></div>
      <div class='air air4'></div>
    </div>

    <!-- Profile 2-->
    <div class="purple-mobile">
      <div class="team-body-mobile">
        <div>
          <div class="about-right-mobile">
            <div class="image-mobile">
              <img src="@/assets/therapists/no-profile-picture-icon.png" 
              @click="clinicianInfo.isVisible = true;
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"/>
            </div>
            <div class="about-text-right-mobile">
              <h1 class="name-right-mobile">
                Name - Credentials
              </h1>
              &emsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel autem recusandae perspiciatis eaque minima quod quaerat tempora 
              labore voluptas maiores? Suscipit distinctio amet officia rem modi dolores sequi perspiciatis nostrum fugit atque! Architecto, autem 
              nesciunt adipisci suscipit similique beatae maiores inventore odio deleniti aut corporis voluptatibus, consequatur unde dolore fugit?
              <br>
              <br>
              &emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam corporis magni numquam suscipit ad, harum, beatae ullam
               adipisci distinctio vero ratione ex doloremque autem fugiat! Reprehenderit fuga voluptate debitis?
              <br>
              <br>
              <span class="quote white-text">&emsp;"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem cumque facere non explicabo repellat
                 inventore, impedit magni dignissimos, dolore quos culpa aperiam aliquid tenetur."</span>
            </div>
          </div>

          <div class="button-container-mobile">
            <button 
            type="button" 
            class="service-button-mobile"
            @click="clinicianInfo.isVisible = true;
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"
            >More Info</button>
          </div>
        </div>
      </div>
    </div>

    <div class="wave3">
      <br><br><br><br><br><br>
      <div class='air air1'></div>
      <div class='air air2'></div>
      <div class='air air3'></div>
      <div class='air air4'></div>
    </div>

    <!-- Profile 3-->
    <div>
      <div class="team-body-mobile">
        <div>
          <div class="about-left-mobile">
            <div class="image-mobile">
              <img src="@/assets/therapists/no-profile-picture-icon.png" 
              @click="clinicianInfo.toggle();
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"/>
            </div>
            <div class="about-text-mobile">
              <h1 class="name-mobile">
                Name - Credentials
              </h1>
              &emsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel autem recusandae perspiciatis eaque minima quod quaerat tempora 
              labore voluptas maiores? Suscipit distinctio amet officia rem modi dolores sequi perspiciatis nostrum fugit atque! Architecto, autem 
              nesciunt adipisci suscipit similique beatae maiores inventore odio deleniti aut corporis voluptatibus, consequatur unde dolore fugit?
              <br>
              <br>
              &emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam corporis magni numquam suscipit ad, harum, beatae ullam
               adipisci distinctio vero ratione ex doloremque autem fugiat! Reprehenderit fuga voluptate debitis?
              <br>
              <br>
              <span class="quote">&emsp;"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem cumque facere non explicabo repellat
                 inventore, impedit magni dignissimos, dolore quos culpa aperiam aliquid tenetur."</span>​
            </div>
          </div>
          
          <div class="button-container-mobile">
            <button 
            type="button" 
            class="service-button-mobile"
            @click="clinicianInfo.toggle();
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"
            >More Info</button>
          </div>

        </div>
      </div>
    </div>

    <div class="wave4">
      <br><br><br><br><br><br>
      <div class='air air1'></div>
      <div class='air air2'></div>
      <div class='air air3'></div>
      <div class='air air4'></div>
    </div>

    <!-- Profile 4-->
    <div class="purple-mobile">
      <div class="team-body-mobile">
        <div>
          <div class="about-right-mobile">
            <div class="image-mobile">
              <img src="@/assets/therapists/no-profile-picture-icon.png" 
              @click="clinicianInfo.isVisible = true;
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"/>
            </div>
            <div class="about-text-right-mobile">
              <h1 class="name-right-mobile">
                Name - Credentials
              </h1>
              &emsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel autem recusandae perspiciatis eaque minima quod quaerat tempora 
              labore voluptas maiores? Suscipit distinctio amet officia rem modi dolores sequi perspiciatis nostrum fugit atque! Architecto, autem 
              nesciunt adipisci suscipit similique beatae maiores inventore odio deleniti aut corporis voluptatibus, consequatur unde dolore fugit?
              <br>
              <br>
              &emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam corporis magni numquam suscipit ad, harum, beatae ullam
               adipisci distinctio vero ratione ex doloremque autem fugiat! Reprehenderit fuga voluptate debitis?
              <br>
              <br>
              <span class="quote white-text">&emsp;"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem cumque facere non explicabo repellat
                 inventore, impedit magni dignissimos, dolore quos culpa aperiam aliquid tenetur."</span>
            </div>
          </div>

          <div class="button-container-mobile">
            <button 
            type="button" 
            class="service-button-mobile"
            @click="clinicianInfo.isVisible = true;
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"
            >More Info</button>
          </div>
        </div>
      </div>
    </div>

    <div class="wave3">
      <br><br><br><br><br><br>
      <div class='air air1'></div>
      <div class='air air2'></div>
      <div class='air air3'></div>
      <div class='air air4'></div>
    </div>

    <!-- Profile 5-->
    <div>
      <div class="team-body-mobile">
        <div>
          <div class="about-left-mobile">
            <div class="image-mobile">
              <img src="@/assets/therapists/no-profile-picture-icon.png" 
              @click="clinicianInfo.toggle();
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"/>
            </div>
            <div class="about-text-mobile">
              <h1 class="name-mobile">
                Name - Credentials
              </h1>
              &emsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel autem recusandae perspiciatis eaque minima quod quaerat tempora 
              labore voluptas maiores? Suscipit distinctio amet officia rem modi dolores sequi perspiciatis nostrum fugit atque! Architecto, autem 
              nesciunt adipisci suscipit similique beatae maiores inventore odio deleniti aut corporis voluptatibus, consequatur unde dolore fugit?
              <br>
              <br>
              &emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam corporis magni numquam suscipit ad, harum, beatae ullam
               adipisci distinctio vero ratione ex doloremque autem fugiat! Reprehenderit fuga voluptate debitis?
              <br>
              <br>
              <span class="quote">&emsp;"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem cumque facere non explicabo repellat
                 inventore, impedit magni dignissimos, dolore quos culpa aperiam aliquid tenetur."</span>​
            </div>
          </div>
          
          <div class="button-container-mobile">
            <button 
            type="button" 
            class="service-button-mobile"
            @click="clinicianInfo.toggle();
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"
            >More Info</button>
          </div>

        </div>
      </div>
    </div>

    <div class="wave4">
      <br><br><br><br><br><br>
      <div class='air air1'></div>
      <div class='air air2'></div>
      <div class='air air3'></div>
      <div class='air air4'></div>
    </div>

    <!-- Profile 6-->
    <div class="purple-mobile">
      <div class="team-body-mobile">
        <div>
          <div class="about-right-mobile">
            <div class="image-mobile">
              <img src="@/assets/therapists/no-profile-picture-icon.png" 
              @click="clinicianInfo.isVisible = true;
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"/>
            </div>
            <div class="about-text-right-mobile">
              <h1 class="name-right-mobile">
                Name - Credentials
              </h1>
              &emsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel autem recusandae perspiciatis eaque minima quod quaerat tempora 
              labore voluptas maiores? Suscipit distinctio amet officia rem modi dolores sequi perspiciatis nostrum fugit atque! Architecto, autem 
              nesciunt adipisci suscipit similique beatae maiores inventore odio deleniti aut corporis voluptatibus, consequatur unde dolore fugit?
              <br>
              <br>
              &emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam corporis magni numquam suscipit ad, harum, beatae ullam
               adipisci distinctio vero ratione ex doloremque autem fugiat! Reprehenderit fuga voluptate debitis?
              <br>
              <br>
              <span class="quote white-text">&emsp;"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem cumque facere non explicabo repellat
                 inventore, impedit magni dignissimos, dolore quos culpa aperiam aliquid tenetur."</span>
            </div>
          </div>

          <div class="button-container-mobile">
            <button 
            type="button" 
            class="service-button-mobile"
            @click="clinicianInfo.isVisible = true;
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"
            >More Info</button>
          </div>
        </div>
      </div>
    </div>

    <div class="wave3">
      <br><br><br><br><br><br>
      <div class='air air1'></div>
      <div class='air air2'></div>
      <div class='air air3'></div>
      <div class='air air4'></div>
    </div>

  </div>

  <div v-else>
    <div>
      <div class="wave3">
          <br><br><br><br><br><br>
          <div class='air air1'></div>
          <div class='air air2'></div>
          <div class='air air3'></div>
          <div class='air air4'></div>
      </div>

      <h1 class="text-body thank-you">Lorem ipsum dolor sit amet consectetur</h1>
      <span class="text-body services-body">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente recusandae tempore at minus impedit aliquid labore dolores nostrum officiis ad!
      </span>
    </div>
    <!-- Profile 1-->
    <div>
      <div class="team-body">
        <div>
          <div class="about-left">
            <div class="image">
              <img src="@/assets/therapists/no-profile-picture-icon.png" 
              @click="clinicianInfo.toggle();
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"/>
            </div>
            <div class="about-text">
              <h1 class="name">
                Name - Credentials
              </h1>
              &emsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel autem recusandae perspiciatis eaque minima quod quaerat tempora 
              labore voluptas maiores? Suscipit distinctio amet officia rem modi dolores sequi perspiciatis nostrum fugit atque! Architecto, autem 
              nesciunt adipisci suscipit similique beatae maiores inventore odio deleniti aut corporis voluptatibus, consequatur unde dolore fugit?
              <br>
              <br>
              &emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam corporis magni numquam suscipit ad, harum, beatae ullam
               adipisci distinctio vero ratione ex doloremque autem fugiat! Reprehenderit fuga voluptate debitis?
              <br>
              <br>
              <span class="quote">&emsp;"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem cumque facere non explicabo repellat
                 inventore, impedit magni dignissimos, dolore quos culpa aperiam aliquid tenetur."</span>
            </div>
          </div>

          <div class="button-container">
            <button 
            type="button" 
            class="service-button"
            @click="clinicianInfo.toggle();
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"
            >More Info</button>
          </div>

        </div>
      </div>
    </div>

    <div class="wave4">
      <br><br><br><br><br><br>
      <div class='air air1'></div>
      <div class='air air2'></div>
      <div class='air air3'></div>
      <div class='air air4'></div>
    </div>

    <!-- Profile 2-->
    <div class="purple">
      <div class="team-body">
        <div>
          <div class="about-right">
            <div class="about-text-right">
              <h1 class="name-right">
                Name - Credentials
              </h1>
              &emsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel autem recusandae perspiciatis eaque minima quod quaerat tempora 
              labore voluptas maiores? Suscipit distinctio amet officia rem modi dolores sequi perspiciatis nostrum fugit atque! Architecto, autem 
              nesciunt adipisci suscipit similique beatae maiores inventore odio deleniti aut corporis voluptatibus, consequatur unde dolore fugit?
              <br>
              <br>
              &emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam corporis magni numquam suscipit ad, harum, beatae ullam
               adipisci distinctio vero ratione ex doloremque autem fugiat! Reprehenderit fuga voluptate debitis?
              <br>
              <br>
              <span class="quote white-text">&emsp;"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem cumque facere non explicabo repellat
                 inventore, impedit magni dignissimos, dolore quos culpa aperiam aliquid tenetur."</span>
            </div>
            <div class="image">
              <img src="@/assets/therapists/no-profile-picture-icon.png" 
              @click="clinicianInfo.toggle();
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"/>
            </div>
          </div>

          <div class="button-container">
            <button 
            type="button" 
            class="service-button"
            @click="clinicianInfo.toggle();
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"
            >More Info</button>
          </div>
        </div>
      </div>
    </div>

    <div class="wave3">
      <br><br><br><br><br><br>
      <div class='air air1'></div>
      <div class='air air2'></div>
      <div class='air air3'></div>
      <div class='air air4'></div>
    </div>

    <!-- Profile 3-->
    <div>
      <div class="team-body">
        <div>
          <div class="about-left">
            <div class="image">
              <img src="@/assets/therapists/no-profile-picture-icon.png" 
              @click="clinicianInfo.toggle();
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"/>
            </div>
            <div class="about-text">
              <h1 class="name">
                Name - Credentials
              </h1>
              &emsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel autem recusandae perspiciatis eaque minima quod quaerat tempora 
              labore voluptas maiores? Suscipit distinctio amet officia rem modi dolores sequi perspiciatis nostrum fugit atque! Architecto, autem 
              nesciunt adipisci suscipit similique beatae maiores inventore odio deleniti aut corporis voluptatibus, consequatur unde dolore fugit?
              <br>
              <br>
              &emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam corporis magni numquam suscipit ad, harum, beatae ullam
               adipisci distinctio vero ratione ex doloremque autem fugiat! Reprehenderit fuga voluptate debitis?
              <br>
              <br>
              <span class="quote">&emsp;"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem cumque facere non explicabo repellat
                 inventore, impedit magni dignissimos, dolore quos culpa aperiam aliquid tenetur."</span>
            </div>
          </div>

          <div class="button-container">
            <button 
            type="button" 
            class="service-button"
            @click="clinicianInfo.toggle();
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"
            >More Info</button>
          </div>

        </div>
      </div>
    </div>

    <div class="wave4">
      <br><br><br><br><br><br>
      <div class='air air1'></div>
      <div class='air air2'></div>
      <div class='air air3'></div>
      <div class='air air4'></div>
    </div>

    <!-- Profile 4-->
    <div class="purple">
      <div class="team-body">
        <div>
          <div class="about-right">
            <div class="about-text-right">
              <h1 class="name-right">
                Name - Credentials
              </h1>
              &emsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel autem recusandae perspiciatis eaque minima quod quaerat tempora 
              labore voluptas maiores? Suscipit distinctio amet officia rem modi dolores sequi perspiciatis nostrum fugit atque! Architecto, autem 
              nesciunt adipisci suscipit similique beatae maiores inventore odio deleniti aut corporis voluptatibus, consequatur unde dolore fugit?
              <br>
              <br>
              &emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam corporis magni numquam suscipit ad, harum, beatae ullam
               adipisci distinctio vero ratione ex doloremque autem fugiat! Reprehenderit fuga voluptate debitis?
              <br>
              <br>
              <span class="quote white-text">&emsp;"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem cumque facere non explicabo repellat
                 inventore, impedit magni dignissimos, dolore quos culpa aperiam aliquid tenetur."</span>
            </div>
            <div class="image">
              <img src="@/assets/therapists/no-profile-picture-icon.png" 
              @click="clinicianInfo.toggle();
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"/>
            </div>
          </div>

          <div class="button-container">
            <button 
            type="button" 
            class="service-button"
            @click="clinicianInfo.toggle();
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"
            >More Info</button>
          </div>
        </div>
      </div>
    </div>

    <div class="wave3">
      <br><br><br><br><br><br>
      <div class='air air1'></div>
      <div class='air air2'></div>
      <div class='air air3'></div>
      <div class='air air4'></div>
    </div>

    <!-- Profile 5-->
    <div>
      <div class="team-body">
        <div>
          <div class="about-left">
            <div class="image">
              <img src="@/assets/therapists/no-profile-picture-icon.png" 
              @click="clinicianInfo.toggle();
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"/>
            </div>
            <div class="about-text">
              <h1 class="name">
                Name - Credentials
              </h1>
              &emsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel autem recusandae perspiciatis eaque minima quod quaerat tempora 
              labore voluptas maiores? Suscipit distinctio amet officia rem modi dolores sequi perspiciatis nostrum fugit atque! Architecto, autem 
              nesciunt adipisci suscipit similique beatae maiores inventore odio deleniti aut corporis voluptatibus, consequatur unde dolore fugit?
              <br>
              <br>
              &emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam corporis magni numquam suscipit ad, harum, beatae ullam
               adipisci distinctio vero ratione ex doloremque autem fugiat! Reprehenderit fuga voluptate debitis?
              <br>
              <br>
              <span class="quote">&emsp;"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem cumque facere non explicabo repellat
                 inventore, impedit magni dignissimos, dolore quos culpa aperiam aliquid tenetur."</span>
            </div>
          </div>

          <div class="button-container">
            <button 
            type="button" 
            class="service-button"
            @click="clinicianInfo.toggle();
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"
            >More Info</button>
          </div>

        </div>
      </div>
    </div>

    <div class="wave4">
      <br><br><br><br><br><br>
      <div class='air air1'></div>
      <div class='air air2'></div>
      <div class='air air3'></div>
      <div class='air air4'></div>
    </div>

    <!-- Profile 6-->
    <div class="purple">
      <div class="team-body">
        <div>
          <div class="about-right">
            <div class="about-text-right">
              <h1 class="name-right">
                Name - Credentials
              </h1>
              &emsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel autem recusandae perspiciatis eaque minima quod quaerat tempora 
              labore voluptas maiores? Suscipit distinctio amet officia rem modi dolores sequi perspiciatis nostrum fugit atque! Architecto, autem 
              nesciunt adipisci suscipit similique beatae maiores inventore odio deleniti aut corporis voluptatibus, consequatur unde dolore fugit?
              <br>
              <br>
              &emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam corporis magni numquam suscipit ad, harum, beatae ullam
               adipisci distinctio vero ratione ex doloremque autem fugiat! Reprehenderit fuga voluptate debitis?
              <br>
              <br>
              <span class="quote white-text">&emsp;"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem cumque facere non explicabo repellat
                 inventore, impedit magni dignissimos, dolore quos culpa aperiam aliquid tenetur."</span>
            </div>
            <div class="image">
              <img src="@/assets/therapists/no-profile-picture-icon.png" 
              @click="clinicianInfo.toggle();
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"/>
            </div>
          </div>

          <div class="button-container">
            <button 
            type="button" 
            class="service-button"
            @click="clinicianInfo.toggle();
              clinicianInfo.counselingPhilosophy=clinicianPhilosophy;
              clinicianInfo.specialtyAreas=clinicianSpecialty;
              clinicianInfo.credentials=clinicianCredentials"
            >More Info</button>
          </div>
        </div>
      </div>
    </div>

    <!--Footer-->
    <div class="wave3">
      <br><br><br><br><br><br>
      <div class='air air1'></div>
      <div class='air air2'></div>
      <div class='air air3'></div>
      <div class='air air4'></div>
    </div>
    
  </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 500;
}
h2 {
  text-decoration: underline;
}
img {
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  min-width: 100%;
  border-radius: 5px;
  overflow: hidden;
  vertical-align: middle;
}
@media screen and (max-width: 1000px) {
  .about-right {
    flex-direction: column;
    align-items: center;
  }
  .about-left {
    flex-direction: column;
    align-items: center;
  }
  .info {
    flex-direction: column;
    align-items: center;
  }
}

/* Mobile */
.about-left-mobile {
  display: flex;
  justify-content: left;
  margin-top: 10px;
  flex-direction: column;
  align-items: center;
}
.about-right-mobile {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  flex-direction: column;
  align-items: center;
}
.about-text-mobile {
  font-size: medium;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
}
.about-text-right-mobile {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 500;
  font-size: medium;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  text-shadow: #1a1b1f 1px 0 10px;
  overflow: visible;
  color: #ffffff;
}
.name-mobile {
  text-decoration: underline;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', Arial, Helvetica, sans-serif;
  font-size: x-large;
  font-weight: 500;
}
.name-right-mobile {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', Arial, Helvetica, sans-serif;
  font-size: x-large;
  font-weight: 500;
  color: #ffffff;
  overflow: visible;
  text-decoration: underline;
}
.thank-you-mobile {
  font-size: x-large;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 500;
  margin-bottom: 10px;
  text-align: center;
}
.services-body-mobile {
  font-size: medium;
  margin-bottom: 25px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
}
.purple-mobile {
  background-color: var(--dark_purple);
}
.image-mobile:hover {
  box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.1), 3px 3px 4px 2px rgba(0,0,0,0.6);
  cursor: pointer;
}
.image-mobile {
  width: 210px;
  height: 290px;
  min-width: 210px;
  border-radius: 5px;
  margin: 10px;
  /*box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.1), 3px 3px 4px 1px rgba(0,0,0,0.6);*/
  box-shadow: 3px 3px 3px 2px rgba(0,0,0,0.1), 2px 2px 2px 1px rgba(0,0,0,0.6);
}
.team-body-mobile {
  margin-left: 5%;
  margin-right: 5%;
  font-size: medium;
}
.text-body-mobile {
  margin-left: 12%;
  margin-right: 12%;
  font-size: medium;
  display: flex;
  justify-content: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', Arial, Helvetica, sans-serif;
  font-weight: 500;
}
.service-button-mobile {
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: var(--light_gray);
  color: #ffffff;
  background-color: var(--gray);
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  cursor: pointer;
  color: #ffffff;
  text-shadow: #1a1b1f 1px 1px 10px;
  padding: 10px;
  width: 50%;
}
.service-button-mobile:hover {
  background-color: var(--light_gray);
  border: solid 1px var(--gray);
}
.button-container-mobile {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

/* Desktop */
.quote {
  font-style: italic;
  font-size: small;
}
.about-left {
  display: flex;
  justify-content: left;
  margin-top: 10px;
  margin-bottom: 20px;
  max-width: 1280px;
}
.about-right {
  display: flex;
  justify-content: right;
  margin-top: 10px;
  margin-bottom: 20px;
  max-width: 1280px;
}
.about-text {
  font-size: large;
  width: 75%;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.about-text-right {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 500;
  font-size: large;
  width: 75%;
  margin-left: 20px;
  margin-right: 20px;
  text-shadow: #1a1b1f 0px 0px 10px;
  overflow: visible;
  color: #ffffff;
}
.name {
  text-decoration: underline;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', Arial, Helvetica, sans-serif;
  font-size: xx-large;
  font-weight: 500;
}
.name-right {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', Arial, Helvetica, sans-serif;
  font-size: xx-large;
  font-weight: 500;
  color: #ffffff;
  overflow: visible;
  text-decoration: underline;
}
.info {
  font-size: medium;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
  margin-bottom: 10px;
}
.info-card {
  width: 300px;
  max-height: fit-content;
  margin-left: 5px;
  margin-right: 5px;
}
.info-card-right {
  width: 300px;
  max-height: fit-content;
  margin-left: 5px;
  margin-right: 5px;
  text-shadow: #1a1b1f 0px 0px 10px;
  overflow: visible;
  color: #ffffff;
}
.info-right {
  color: #ffffff;
  overflow: visible;
}
.thank-you {
  font-size: xx-large;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
}
.services-body {
  font-size: large;
  margin-bottom: 50px;
  font-family: Arial, Helvetica, sans-serif;
}
.white-text {
  color: #ffffff;
}
.purple {
  background-color: var(--dark_purple);
}
.image:hover {
  box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.1), 3px 3px 4px 2px rgba(0,0,0,0.6);
  cursor: pointer;
}
.image {
  width: 210px;
  height: 290px;
  min-width: 210px;
  border-radius: 5px;
  margin: 10px;
  /*box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.1), 3px 3px 4px 1px rgba(0,0,0,0.6);*/
  box-shadow: 3px 3px 3px 2px rgba(0,0,0,0.1), 2px 2px 2px 1px rgba(0,0,0,0.6);
}
.team-body {
  margin-left: 15%;
  margin-right: 15%;
  font-size: large;
  justify-content: center;
  display: flex;
}
.text-body {
  margin-left: 12%;
  margin-right: 12%;
  font-size: medium;
  display: flex;
  justify-content: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', Arial, Helvetica, sans-serif;
  font-weight: 500;
}
.service-button {
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: var(--light_gray);
  color: #ffffff;
  background-color: var(--gray);
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  cursor: pointer;
  color: #ffffff;
  text-shadow: #1a1b1f 0px 0px 10px;
  padding: 10px;
  width: 25%;
}
.service-button:hover {
  background-color: var(--light_gray);
  border: solid 1px var(--gray);
}
.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}
</style>