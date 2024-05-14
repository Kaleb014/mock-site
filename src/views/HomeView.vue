<script setup lang="ts">
import { useModalStore } from '../stores/clientinfomodal';
import { useHeaderStore } from '../stores/header';
import { onMounted } from 'vue';
import { useDetectMobileStore } from '../stores/detectmobile';
import { useCardInfoStore } from '../stores/cardinfo';
import { useSpecialModalStore } from '../stores/specialmodal'
import { useMoreInfoStore } from '../stores/moreinfomodal';

const infoModal = useModalStore();
const headerStore = useHeaderStore();
const mobile = useDetectMobileStore();
const cardInfoModal = useCardInfoStore();
const specialModal = useSpecialModalStore();
const moreInfoModal = useMoreInfoStore();

const additionalInfo = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde, aliquam iste quo vel accusantium optio possimus assumenda delectus ut.';

const appBody = document.getElementById('body') as HTMLBodyElement;

onMounted(() => {
  headerStore.headerText = "Site Name";
  mobile.checkDevice();
  appBody.scrollTop = 0;
});
</script>

<template>
  <div v-if="mobile.isMobile" class="mobile">

    <!-- Section 1 Landing -->
    <div class="section-mobile call-to-action-mobile">
      <div class="section1-mobile">
        <!-- Call to action -->
        <div class="bottom-mobile call-to-action-text-mobile">
          <div>
            <h1 class="tag-line-mobile">
              Lorem, ipsum dolor<span class="tag-line-mobile highlight-mobile">consectetur
              </span>Lorem ipsum dolor sit amet consectetur adipisicing elit<span class="tag-line-mobile highlight-mobile">nemo!</span>
            </h1>
          </div>
          <link>
            <span class="call-to-action-body-mobile">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati 
              vel aliquam unde in, soluta perspiciatis esse ducimus nesciunt, numquam 
              exercitationem cumque repudiandae blanditiis ratione nemo et quasi? Veritatis, dolore enim.
            </span>
          <div>
            <button type="button" class="consultation-button-mobile" @click="infoModal.clickButton()">Get Your Free Consultation</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 2 What We Do -->
    <div class="services-mobile">
      <div class="what-we-do-mobile">
        <div>
          <header class="banner-mobile text-body-mobile">
              <span class="banner-text-mobile">
                What We Do
              </span>
          </header>
        </div>

        <div class="what-we-do">
          <span class="text-body-mobile services-body-mobile">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, odit eum. Esse sed deleniti ipsam ut, sequi illum quibusdam at.
          </span>
          <span class="text-body-mobile services-body-mobile">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sint!
          </span>
          <span class="text-body-mobile services-body-mobile">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga id, quibusdam blanditiis ratione maiores aliquid.
          </span>
        </div>
      </div>

      <div class="button-container-mobile">
        <button type="button" 
        class="service-button-mobile"
        @click="cardInfoModal.toggle(); cardInfoModal.cardInfo=additionalInfo; cardInfoModal.cardHeader='Option 1'">
        Option 1
        </button>
      </div>

      <div class="button-container-mobile">
        <button type="button" 
        class="service-button-mobile"
        @click="cardInfoModal.toggle(); cardInfoModal.cardInfo=additionalInfo; cardInfoModal.cardHeader='Option 2'">
        Option 2
        </button>
      </div>

      <div class="button-container-mobile">
        <button type="button" 
        class="service-button-mobile"
        @click="cardInfoModal.toggle(); cardInfoModal.cardInfo=additionalInfo; cardInfoModal.cardHeader='Option 3'">
        Option 3
        </button>
      </div>

      <div class="button-container-mobile">
        <button type="button" 
        class="service-button-mobile"
        @click="cardInfoModal.toggle(); cardInfoModal.cardInfo=additionalInfo; cardInfoModal.cardHeader='Option 4'">
        Option 4
        </button>
      </div>

      <div class="button-container-mobile">
        <button type="button" 
        class="service-button-mobile"
        @click="cardInfoModal.toggle(); cardInfoModal.cardInfo=additionalInfo; cardInfoModal.cardHeader='Option 5'">
        Option 5
        </button>
      </div>
      <br>
      
      <div class="button-container-mobile">
        <button type="button" class="team-button-mobile"
          @click="moreInfoModal.toggle();"
          >More Info
        </button>
      </div>

      <div class="button-container-mobile">
        <button type="button" class="team-button-mobile"
          @click="specialModal.toggle();"
          >Special Program
        </button>
      </div>
      
      <div class="button-container-mobile">
        <RouterLink class="link" to="/ourteam" style="width: 75%; max-width: 450px;">
          <button type="button" class="team-button-mobile" style="width: 100%;">
            Meet Our Team!
          </button>
        </RouterLink>
      </div>
    </div>

    <!-- Section 3 Pricing -->
    <div>
      <div>
        <div class="wave">
          <br><br><br><br><br><br><br>
          <div class='air air1'></div>
          <div class='air air2'></div>
          <div class='air air3'></div>
          <div class='air air4'></div>
        </div>

        <br>
        
        <!--Pricing-->
        <div class="pricing">
          <div class="banner-text-black">
            Pricing
          </div>
          <div>
            <div>
              <span class="text-body-mobile">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia saepe doloremque hic at ratione laborum, molestias pariatur rerum. Doloribus, unde.
              </span>
              
              <div class="pricing-container">
                <div class="pricing-container-inner">
                  <div class="pricing-box">
                    <h3 class="text-body-mobile provider-type-label">
                      Provider
                    </h3>
                    <div class="session-type margin-top">
                      <span class="price-symbol">●</span><span class="session-text-mobile">&emsp;Lorem Ipsum: $999*</span>
                    </div>
                    <div class="session-type">
                      <span class="price-symbol">●</span><span class="session-text-mobile">&emsp;Lorem Ipsum: $999*</span>
                    </div>
                  </div>

                  <div class="pricing-box">
                    <h3 class="text-body-mobile provider-type-label">
                      Special Provider
                    </h3>
                    <div class="session-type margin-top">
                      <span class="price-symbol">●</span><span class="session-text-mobile">&emsp;Lorem Ipsum: $999*</span>
                    </div>
                    <div class="session-type">
                      <span class="price-symbol">●</span><span class="session-text-mobile">&emsp;Lorem Ipsum: $999*</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span class="text-body-mobile">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sapiente iste quasi nisi sequi fugiat.
                </span>
              </div>

              <div>
                <span class="undertext">
                  *Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolore, perferendis ducimus eligendi velit provident.
                </span>
              </div>

            </div>
          </div>

          <div class="logo-container">
            <div class="logo-box">
              <div class="logo">
                <div>
                  <img
                    src="@/assets/telehealth.png"
                    width="48"
                    height="48"
                  >
                </div>
                <div class="bold">
                  Offers Telehealth Appointments
                </div>
              </div>
              
              <div class="logo">
                <div>
                  <img
                    src="@/assets/card.png"
                    width="64"
                    height="48"
                  >
                </div>
                <div class="bold">
                  Accepts Online Payments
                </div>
              </div>
            </div>
            
            <div class="logo-box">
              <div class="logo">
                <div>
                  <img
                    src="@/assets/insurance.png"
                    width="40"
                    height="48"
                  >
                </div>
                <div class="bold">
                  Accepts Insurance
                </div>
              </div>
              
              <div class="logo">
                <div>
                  <img
                    src="@/assets/patient.png"
                    width="44"
                    height="48"
                  >
                </div>
                <div class="bold">
                  Accepting New Clients
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <br>

        <div class="wave2">
          <div class='air air1'></div>
          <div class='air air2'></div>
          <div class='air air3'></div>
          <div class='air air4'></div>
          <br><br><br><br><br><br><br>
        </div>
      </div>
    </div>

    <!-- Section 4 Map -->
    <div class="purple">
      <div>
        <br>
        <div>
          <div>
            <div class="text-body">
              <div class="contact-info banner">
                <div class="banner-symbol">●
                  <div class="banner-text">Phone:</div>
                </div>
                <a href="tel:1231231234" class="body-text"> 123-123-1234 </a>
                
                <div class="banner-symbol">&emsp;●
                  <div class="banner-text">Email:</div>
                </div>
                <a @click="infoModal.clickButton();" class="email-text"> fake_email@thisisafakeemail.com </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="map-container-mobile">
            <div class="map-mobile">
              <!-- First location -->
              <div class="address-banner">
                <div class="map-label">
                  Main Office:
                </div>
                <a href="http://maps.google.com/?q=1600 Amphitheatre Pkway, Mountain View, CA, 94043" class="map-text">
                  1600 Amphitheatre Pkway<br>Mountain View, CA-94043
                </a>
              </div>
              <br>
              <div class="map-width">
                <div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6228764465427!2d-122.
                  086762624133!3d37.422387772076306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba027
                  f087f8f%3A0xd86b06710e8fcc35!2s1600%20Amphitheatre%20Pkwy%2C%20Mountain%20View%2C%20CA%2094043!
                  5e0!3m2!1sen!2sus!4v1701041976397!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="false" 
                  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br>
        <br>
        <br>
        <br>
      </div>
    </div>    
    
    <!--Footer-->
    <div class="wave">
      <br><br><br><br><br><br><br>
      <div class='air air1'></div>
      <div class='air air2'></div>
      <div class='air air3'></div>
      <div class='air air4'></div>
    </div>

  </div>
  
  <div v-else>
    <!-- Section 1 Landing -->
    <div class="section call-to-action">
      <div class="section1">
        <!-- Call to action -->
        <div class="bottom call-to-action-text">
          <div>
            <h1 class="tag-line">
              Lorem, ipsum dolor<span class="tag-line highlight" style="font-weight: bold;">consectetur</span>Lorem ipsum dolor sit amet consectetur adipisicing elit<span class="tag-line highlight" style="font-weight: bold;">nemo!</span>
            </h1>
          </div>
          <link>
            <span class="call-to-action-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati 
              vel aliquam unde in, soluta perspiciatis esse ducimus nesciunt, numquam 
              exercitationem cumque repudiandae blanditiis ratione nemo et quasi? Veritatis, dolore enim.
            </span>
          <div>
            <button type="button" class="consultation-button" @click="infoModal.clickButton()">Get Your Free Consultation</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 2 What We Do -->
    <div class="services">
      <div class="what-we-do">
        <div>
          <header class="banner text-body">
            <div class="inline">
              <span class="banner-text">
                What We Do
              </span>
            </div>
          </header>
        </div>

        <div class="what-we-do-info">
          <span class="text-body services-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, odit eum. Esse sed deleniti ipsam ut, sequi illum quibusdam at.
          </span>
          <span class="text-body services-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sint!
          </span>
          <span class="text-body services-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga id, quibusdam blanditiis ratione maiores aliquid.
          </span>
        </div>

        <div class="therapy-type-container">
          <div class="therapy-info">
            <div>
              <h3 class="card-header">
                Option 1
              </h3>
              <span class="card-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim perspiciatis maxime ullam! Explicabo dolores facilis modi 
                tenetur quasi sapiente rem eaque delectus at natus.
              </span>
            </div>
          </div>

          <div class="therapy-info">
            <div>
              <h3 class="card-header">
                Option 2
              </h3>
              <span class="card-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde, aliquam iste quo vel accusantium optio possimus assumenda delectus ut.
              </span>
            </div>
          </div>

          <div class="therapy-info">
            <div>
              <h3 class="card-header">
                Option 3
              </h3>
              <span class="card-info">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi expedita inventore, ea neque in exercitationem!
              </span>
            </div>
          </div>

          <div class="therapy-info">
            <div>
              <h3 class="card-header">
                Option 4
              </h3>
              <span class="card-info">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores id voluptatum aperiam consequatur,
                 quo sed veniam aliquam repellat voluptatem! Labore modi ipsam maiores earum sint?
              </span>
            </div>
          </div>

          <div class="therapy-info">
            <div>
              <h3 class="card-header">
                Option 5
              </h3>
              <span class="card-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quia natus at sit fugiat maxime qui unde repudiandae 
                nobis mollitia ipsa ad soluta rerum, optio nam vero sapiente odio repellendus.
              </span>
            </div>
          </div>
        </div>
        
        <div class="button-container">
          <button type="button" class="team-button" @click="moreInfoModal.toggle();"
            >More Info
          </button>
          <button type="button" class="team-button" @click="specialModal.toggle();"
            >Special Program
          </button>
          <RouterLink to="/ourteam" class="link team-button-container">
            <button type="button" class="team-button-link">
              Meet Our Team!
            </button>
          </RouterLink>
        </div>
      </div>  
    </div>

    <!-- Section 3 Pricing -->
    <div>
      <div>
        <div class="wave">
          <br><br><br><br><br><br><br>
          <div class='air air1'></div>
          <div class='air air2'></div>
          <div class='air air3'></div>
          <div class='air air4'></div>
        </div>

        <br>

        <!--Pricing-->
        <div class="pricing">
          <div class="banner-text-black">
            Pricing
          </div>
          <div>
            <div>
              <span class="text-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, sed officiis ex corporis laboriosam id tempore ratione numquam quo illo iure suscipit.
              </span>
              
              <div class="pricing-container">
                <div class="pricing-container-inner">
                  <div class="pricing-box">
                    <span class="provider-type-label">
                      Provider
                    </span>
                    <div class="session-type margin-top">
                      <span class="price-symbol">●</span><span>&emsp;Lorem Ipsum: $999*</span>
                    </div>
                    <div class="session-type">
                      <span class="price-symbol">●</span><span>&emsp;Lorem Ipsum: $999*</span>
                    </div>
                  </div>

                  <div class="pricing-box">
                    <span class="provider-type-label">
                      Special Provider
                    </span>
                    <div class="session-type margin-top">
                      <span class="price-symbol">●</span><span>&emsp;Lorem Ipsum: $999*</span>
                    </div>
                    <div class="session-type">
                      <span class="price-symbol">●</span><span>&emsp;Lorem Ipsum: $999*</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span class="text-body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam hic laborum quod eveniet labore veritatis.
                </span>
              </div>

              <div>
                <span class="undertext">
                  *Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quos officia ab, excepturi asperiores sequi.
                </span>
              </div>
            </div>
          </div>

          <div class="logo-container">
            <div class="logo-box">
              <div class="logo">
                <div>
                  <img
                    src="@/assets/telehealth.png"
                    width="48"
                    height="48"
                  >
                </div>
                <div class="bold">
                  Offers Telehealth Appointments
                </div>
              </div>
              
              <div class="logo">
                <div>
                  <img
                    src="@/assets/card.png"
                    width="64"
                    height="48"
                  >
                </div>
                <div class="bold">
                  Accepts Online Payments
                </div>
              </div>
            </div>
            
            <div class="logo-box">
              <div class="logo">
                <div>
                  <img
                    src="@/assets/insurance.png"
                    width="40"
                    height="48"
                  >
                </div>
                <div class="bold">
                  Accepts Insurance
                </div>
              </div>
              
              <div class="logo">
                <div>
                  <img
                    src="@/assets/patient.png"
                    width="44"
                    height="48"
                  >
                </div>
                <div class="bold">
                  Accepting New Clients
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <br>

        <div class="wave2">
          <div class='air air1'></div>
          <div class='air air2'></div>
          <div class='air air3'></div>
          <div class='air air4'></div>
          <br><br><br><br><br><br><br>
        </div>
      </div>
    </div>

    <!-- Section 4 Map -->
    <div class="purple">
      <div>
        <br>
        <div>
          <div>
            <div class="text-body">
              <div class="contact-info banner">
                <div class="banner-symbol">●
                  <div class="banner-text">Phone:</div>
                </div>
                <a href="tel:1231231234" class="body-text"> 123-123-1234 </a>
                
                <div class="banner-symbol">&emsp;●
                  <div class="banner-text">Email:</div>
                </div>
                <a @click="infoModal.clickButton();" class="email-text"> fake_email@thisisafakeemail.com </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="map-container">
            <div class="map">
              <!-- First location -->
              <div class="address-banner">
                <div class="map-label">
                  Main Office:
                </div>
                <a href="http://maps.google.com/?q=1600 Amphitheatre Pkway, Mountain View, CA, 94043" class="map-text">
                  1600 Amphitheatre Pkway<br>Mountain View, CA-94043
                </a>
              </div>
              <br>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6228764465427!2d-122.
              086762624133!3d37.422387772076306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba027
              f087f8f%3A0xd86b06710e8fcc35!2s1600%20Amphitheatre%20Pkwy%2C%20Mountain%20View%2C%20CA%2094043!
              5e0!3m2!1sen!2sus!4v1701041976397!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="false" 
              loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <br>
        <br>
        <br>
        <br>
      </div>
    </div>    
    
    <!--Footer-->
    <div class="wave">
      <br><br><br><br><br><br><br>
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
    font-family: Arial;
    font-weight: 250;
    color: var(--shadow);
}
/* Pricing */
.pricing {
  text-align: center;
}
.bold {
  font-weight: 750;
}
.margin-top {
  margin-top: 15px;
}
.provider-type-label {
  font-size: large;
}
.logo {
  flex: 1;
}
.price-symbol {
    font-size: medium;
}
.session-type {
  text-align: left;
  margin-bottom: 15px;
}
.logo-container {
  display: flex;
  justify-content: space-evenly;
  margin-top: 25px;
  margin-left: 15%;
  margin-right: 15%;
}
.logo-box {
  width: 50%;
  display: flex;
  justify-content: space-evenly;
}
.pricing-container{
  display: flex;
  justify-content: center;
  width: 100%;
}
.pricing-container-inner {
  display: flex;
  justify-content: center;
}
.pricing-box {
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  width: 100%;
}


/* Mobile */
.map-width {
  width: 95vw;
}
.bottom-mobile {
  position: absolute;
  bottom: 5%;
  left: 50;
}
.link-mobile {
  text-decoration: none;
  color: var(--white);
}
.therapy-type-container-mobile {
  display: flex;
  justify-content: center;
}
.bottom-right-mobile {
  position: relative;
  bottom: 125px;
  font-size: small;
  margin: 1%;
}
.banner-mobile {
  padding: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-user-select: none;       
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: var(--dark_purple);
  margin-bottom: 20px;
}
.banner-text-mobile {
  color: var(--white);
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: var(--white);
  text-shadow: var(--shadow) 0px 0px 10px;
  padding: 5px;
}
.highlight-mobile {
  color: var(--light_gray);
  font-style: italic;

}
.call-to-action-mobile {
  background-image: url(../assets/individual.jpg);
  background-size: cover;
  background-position: 3%;
}
.services-mobile {
  background-color: var(--dark_purple);
}
.services-body-mobile {
  color: var(--white);
  text-shadow: var(--shadow) 1px 0 10px;
  padding: 10px;
}
.what-we-do-mobile {
  margin-top: 25px;
  margin-bottom: 25px;
}
.button-container-mobile {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}
.tag-line-mobile {
  font-size: large;
  color: var(--white);
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: var(--shadow) 0px 0px 10px;
  padding: 10px;
  margin-bottom: 5px;
  font-weight: 750;
}
.call-to-action-body-mobile {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 500;
  font-size: medium;
  color: var(--white);
  text-shadow: var(--black) 0px 0px 10px;
  padding: 10px;
}
.section1-mobile {
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.call-to-action-text-mobile {
  text-align: center;
  width: 80%;
}
.consultation-button-mobile {
  margin-top: 25px;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: var(--purple);
  color: var(--white);
  background-color:var(--dark_purple);
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  cursor: pointer;
  color: var(--white);
  text-shadow: var(--shadow) 1px 1px 10px;
  padding: 10px;
  margin-bottom: 25px;
  font-weight: 750;
}
.service-button-mobile {
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: var(--light_gray);
  color: var(--white);
  background-color: var(--gray);
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  cursor: pointer;
  color: var(--white);
  text-shadow: var(--shadow) 1px 1px 10px;
  padding: 10px;
  width: 75%;
  max-width: 450px;
  font-weight: 500;
}
.team-button-mobile {
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: var(--gray);
  color: var(--white);
  background-color: var(--light_gray);
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  cursor: pointer;
  color: var(--white);
  text-shadow: var(--shadow) 1px 1px 10px;
  padding: 10px;
  width: 75%;
  max-width: 450px;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 500;
}
.consultation-button-mobile:hover {
  background-color: var(--light_gray);
  border-color: var(--gray);
}
.service-button-mobile:hover {
  background-color: var(--gray);
}
.team-button-mobile:hover {
  background-color: var(--gray);
}
.text-body-mobile {
  margin-left: 5%;
  margin-right: 5%;
  font-size: large;
  display: flex;
  justify-content: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', Arial, Helvetica, sans-serif;
  font-weight: 500;
  text-align: center;
}
.session-text-mobile {
  font-size: small;
}
.map-container-mobile {
  display: flex;
  justify-content: space-evenly;
}
.map-mobile {
  align-items: center;
  text-align: center;
}


/* Desktop */
.what-we-do-info {
  text-align: center;
}
.bottom {
  position: absolute;
  bottom: 5%;
  left: 50;
}
.link{
  text-decoration: none;
  color: var(--white);
}
.therapy-type-container {
  display: flex;
  justify-content: center;
}
.card-header {
  background-color: var(--dark_purple);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: var(--white);
  text-shadow: var(--shadow) 1px 0 10px;
  padding: 10px;
}
.card-info {
  display: flex;
  font-size: medium;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 500;
  color: var(--white);
  text-shadow: var(--shadow) 1px 0 10px;
  padding: 10px;
}
.bottom-right {
  position: relative;
  bottom: 125px;
  font-size: small;
  margin: 1%;
}
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-user-select: none;       
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: var(--dark_purple);
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 20px;
}
.banner-text {
  font-size: xx-large;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: var(--white);
  text-shadow: var(--shadow) 0px 0px 10px;
  padding: 5px;
}
.banner-text-black {
  color: var(--black);
  font-size: xx-large;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  margin-bottom: 20px;
}
.highlight {
  color: var(--light_gray);
  font-style: italic;
  text-shadow: var(--light_shadow) 0px 0px 10px;
}
.call-to-action {
  background-image: url(../assets/individual.jpg);
  background-size: cover;
}
.services {
  background-color: var(--dark_purple);
}
.services-body {
  color: var(--white);
  text-shadow: var(--shadow) 1px 0 10px;
  padding-left: 10px;
  padding-right: 10px;
}
.body-text:hover{
  color: var(--purple);
}
.body-text {
  font-size: large;
  font-weight: 500;
  color: var(--white);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-left: 10px;
  margin-right: 10px;
  text-decoration: none;
  text-shadow: var(--black) 0px 0px 10px;
  padding: 5px;
}
.email-text {
  font-size: large;
  font-weight: 500;
  color: var(--white);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-left: 10px;
  margin-right: 10px;
  text-decoration: none;
  text-shadow: var(--black) 0px 0px 10px;
  padding: 5px;
  cursor: pointer;
}
.email-text:hover{
  color: var(--purple);
}
.map-label {
  color: var(--white);
  font-size: x-large;
  font-weight: 500;
  text-shadow: var(--black) 0px 0px 10px;
  padding: 5px;
}
.map-text:hover {
  color: var(--purple);
}
.map-text {
  color: var(--white);
  font-size: large;
  font-weight: 500;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  text-decoration: none;
  text-shadow: var(--black) 0px 0px 10px;
  padding: 5px;
}
.address-banner {
  justify-content: space-between;
  align-items: center;
  font-size: large;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: var(--dark_purple);
  border-radius: 5px;
}
.undertext {
  margin-left: 12%;
  margin-right: 12%;
  padding: 5px;
  font-size: small;
  display: flex;
  justify-content: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 500;
}
.contact-info {
  text-align: center;
}
.map-container {
  display: flex;
  justify-content: space-evenly;
  margin-right: 12%;
  margin-left: 12%;
}
.map {
  align-items: center;
  text-align: center;
}
.what-we-do {
  margin-top: 25px;
  margin-bottom: 25px;
}
.button-container {
  display: flex;
  justify-content: center;
  height: fit-content;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 12%;
  margin-right: 12%;
}
.tag-line {
  font-size: xx-large;
  color: var(--white);
  margin-bottom: 15px;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: var(--shadow) 0px 0px 10px;
  padding-left: 10px;
  padding-right: 10px;
}
.call-to-action-body {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 500;
  font-size: large;
  color: var(--white);
  text-shadow: var(--black) 0px 0px 10px;
  padding: 5px;
}
.section1 {
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.call-to-action-text {
  text-align: center;
  width: 50%;
}
.consultation-button {
  margin-top: 25px;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: var(--purple);
  color: var(--white);
  background-color:var(--dark_purple);
  font-family: Arial, Helvetica, sans-serif;
  font-size: x-large;
  cursor: pointer;
  color: var(--white);
  text-shadow: var(--shadow) 1px 1px 10px;
  padding: 10px;
}
.team-button {
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: var(--light_gray);
  background-color: var(--gray);
  color: var(--white);
  font-family: Arial, Helvetica, sans-serif;
  font-size: x-large;
  font-style: italic;
  text-shadow: var(--shadow) 1px 1px 10px;
  text-transform: uppercase;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
}

.team-button-link {
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: var(--light_gray);
  background-color: var(--gray);
  color: var(--white);
  font-family: Arial, Helvetica, sans-serif;
  font-size: x-large;
  font-style: italic;
  text-shadow: var(--shadow) 1px 1px 10px;
  text-transform: uppercase;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.consultation-button:hover {
  background-color: var(--light_gray);
  border-color: var(--gray);
}
.team-button:hover {
  background-color: var(--light_gray);
  border-color: var(--gray);
}
.team-button-link:hover {
  background-color: var(--light_gray);
  border-color: var(--gray);
}
.therapy-info {
  width: 225px;
  max-height: fit-content;
  margin-left: 2px;
  margin-right: 2px;
  font-size: medium;
}
.text-body {
  margin-left: 12%;
  margin-right: 12%;
  padding: 5px;
  font-size: large;
  display: flex;
  justify-content: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', Arial, Helvetica, sans-serif;
  font-weight: 500;
}
.banner-symbol {
    color: var(--light_gray);
    font-size: medium;
    display: flex;
    align-items: center;
}
.purple {
  background-color: var(--dark_purple);
}



@media screen and (max-width: 1000px) {
  .section1 {
    flex-direction: column;
    align-items: center;
  }
  .services {
    flex-direction: column;
    align-items: center;
  }
  .therapy-type-container {
    flex-direction: column;
    align-items: center;
  }
  .section1-mobile {
    flex-direction: column;
    align-items: center;
  }
  .services-mobile {
    flex-direction: column;
    align-items: center;
  }
  .therapy-type-container-mobile {
    flex-direction: column;
    align-items: center;
  }
  .contact-info {
    flex-direction: column;
    align-items: center;
  }
  .button-container {
    flex-direction: column;
  }
  .team-button {
    margin-bottom: 15px;
    margin-left: 15%;
    margin-right: 15%;
  }
  .team-button-container {
    margin-bottom: 15px;
    margin-left: 15%;
    margin-right: 15%;
  }
  .logo {
    flex: none;
    width: 50%;
  }
  .provider-type-label {
    font-size: medium;
    text-align: center;
  }
  .logo-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .logo-box {
    width: 100%;
    justify-content: center;
    margin-bottom: 15px;
  }
  .pricing-container-inner {
    flex-direction: column;
  }
  .pricing-box {
    text-align: center;
  }
}
</style>