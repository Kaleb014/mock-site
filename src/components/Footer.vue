<script setup>
import { useCardInfoStore } from "../stores/cardinfo";
import { useModalStore } from "../stores/clientinfomodal";
import { useDetectMobileStore } from "../stores/detectmobile";
import { useSpecialModalStore } from "../stores/specialmodal";
import { onMounted } from 'vue';
import { useMoreInfoStore } from "../stores/moreinfomodal";
import PrivacyPractices from "../documents/dummy.pdf";

const infoModal = useModalStore();
const mobile = useDetectMobileStore();
const cardInfo = useCardInfoStore();
const moreInfoModal = useMoreInfoStore();
const specialModal = useSpecialModalStore();

function openPrivacyPractices() {
    window.open(PrivacyPractices, '_blank');
}

onMounted(() => {
  mobile.checkDevice();
});

</script>

<template>
    <div v-if="mobile.isMobile">
        <div class="footer-container">
            <!--Links, Contact, Documents-->
            <div class="footer">
                <!--Logo-->
                <div class="image-width left">
                    <div class="scale-width-box">
                        <img
                            class="image"
                            src="@/assets/chicken-rooster-line-icon-export.png"
                        />
                    </div>
                </div>

                <!--Contact-->
                <div class="footer-box spacing">
                    <div class="footer-text">
                        Site Name
                    </div>
                    <div class="link">
                        <a href="tel:1231231234" class="footer-text-underline">
                            <img
                                src="@/assets/phone.png"
                                width="12"
                                height="12"
                            >
                            123-123-1234
                        </a>
                        <span> | </span>
                        <a @click="infoModal.clickButton();" class="footer-text-underline">
                            <img
                                src="@/assets/envelope.png"
                                width="14"
                                height="10"
                            >
                            Contact
                        </a>
                    </div>
                    <div class="link">
                        <a href="https://maps.google.com/?q=1600 Amphitheatre Pkway, Mountain View, CA, 94043" class="map-text">
                            1600 Amphitheatre Pkway
                            <br>
                            Mountain View, CA-94043
                        </a>
                    </div>
                    <!--Social Media-->
                    <div class="footer">
                        <div class="social">
                            <div
                                class="social"
                                @click="cardInfo.toggle(); 
                                cardInfo.cardHeader='Facebook'; 
                                cardInfo.cardInfo='This would be a link to ' + cardInfo.cardHeader + '.'">
                                <img
                                    src="@/assets/facebook.png"
                                    width="32"
                                    height="32"
                                />
                            </div>
                            <div 
                                class="social"
                                @click="cardInfo.toggle(); 
                                cardInfo.cardHeader='Instagram'; 
                                cardInfo.cardInfo='This would be a link to ' + cardInfo.cardHeader + '.'">
                                <img
                                    src="@/assets/instagram.png"
                                    width="32"
                                    height="32"
                                    
                                />
                            </div>
                            <div 
                                class="social"
                                @click="cardInfo.toggle(); 
                                cardInfo.cardHeader='LinkedIn'; 
                                cardInfo.cardInfo='This would be a link to ' + cardInfo.cardHeader + '.'">
                                <img
                                    src="@/assets/linkedin.png"
                                    width="32"
                                    height="32"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <!--Site Map & Additional Info-->
                <div class="right links-container">
                    <!--Site Map-->
                    <div class="links-section">
                        <div class="spacing">
                            <span class="link-label">Site Map</span>
                        </div>
                        <div class="link spacing">
                            <a>
                                <RouterLink to="/" class="footer-text-underline">Home</RouterLink>
                            </a>
                        </div>
                        <div class="link spacing">
                            <a>
                                <RouterLink to="/ourteam" class="footer-text-underline">Our Team</RouterLink>
                            </a>
                        </div>
                        <div class="link spacing">
                            <a @click="moreInfoModal.toggle();" class="footer-text-underline">
                                More Info
                            </a>
                        </div>
                        <div class="link spacing">
                            <a @click="specialModal.toggle();" class="footer-text-underline">
                                Special Program
                            </a>
                        </div>
                    </div>

                    <!--Additional Info-->
                    <div class="links-section">
                        <div class="spacing">
                            <span class="link-label">Additional Info</span>
                        </div>
                        <div class="link spacing">
                            <a class="footer-text-underline" @click="openPrivacyPractices();">
                                Notice of Privacy Practices
                            </a>
                        </div>
                        <div class="link spacing">
                            <a href="https://www.cms.gov/nosurprises" class="footer-text-underline">
                                No Surprises Act*
                            </a>
                        </div>
                        <div class="spacing">
                            <span class="undertext">
                                *You have the right to receive a Good Faith Estimate of what your services may cost.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else>
        <div class="footer-container">
            <!--Links, Contact, Documents-->
            <div class="footer">
                <!--Logo-->
                <div class="left">
                    <div class="image-width">
                        <img
                            class="image"
                            src="@/assets/chicken-rooster-line-icon-export.png"
                        />
                    </div>
                </div>

                <!--Contact-->
                <div class="footer-box spacing">
                    <div class="footer-text">
                        Site Name
                    </div>
                    <div class="link">
                        <a href="tel:1231231234" class="footer-text-underline">
                            <img
                                src="@/assets/phone.png"
                                width="12"
                                height="12"
                            >
                            123-123-1234
                        </a>
                        <span> | </span>
                        <a @click="infoModal.clickButton();" class="footer-text-underline">
                            <img
                                src="@/assets/envelope.png"
                                width="14"
                                height="10"
                            >
                            Contact
                        </a>
                    </div>
                    <div class="link">
                        <a href="https://maps.google.com/?q=1600 Amphitheatre Pkway, Mountain View, CA, 94043" class="map-text">
                            1600 Amphitheatre Pkway
                            <br>
                            Mountain View, CA-94043
                        </a>
                    </div>
                    <!--Social Media-->
                    <div class="footer">
                        <div class="social">
                            <div
                                class="social"
                                @click="cardInfo.toggle(); 
                                cardInfo.cardHeader='Facebook'; 
                                cardInfo.cardInfo='This would be a link to ' + cardInfo.cardHeader + '.'">
                                <img
                                    src="@/assets/facebook.png"
                                    width="32"
                                    height="32"
                                />
                            </div>
                            <div 
                                class="social"
                                @click="cardInfo.toggle(); 
                                cardInfo.cardHeader='Instagram'; 
                                cardInfo.cardInfo='This would be a link to ' + cardInfo.cardHeader + '.'">
                                <img
                                    src="@/assets/instagram.png"
                                    width="32"
                                    height="32"
                                    
                                />
                            </div>
                            <div 
                                class="social"
                                @click="cardInfo.toggle(); 
                                cardInfo.cardHeader='LinkedIn'; 
                                cardInfo.cardInfo='This would be a link to ' + cardInfo.cardHeader + '.'">
                                <img
                                    src="@/assets/linkedin.png"
                                    width="32"
                                    height="32"
                                />
                             </div>
                        </div>
                    </div>
                </div>

                <!--Site Map & Additional Info-->
                <div class="right links-container">
                    <!--Links-->
                    <div class="links-section">
                        <div class="spacing">
                            <span class="link-label">Site Map</span>
                        </div>
                        <div class="link spacing">
                            <a>
                                <RouterLink to="/" class="footer-text-underline">Home</RouterLink>
                            </a>
                        </div>
                        <div class="link spacing">
                            <a>
                                <RouterLink to="/ourteam" class="footer-text-underline">Our Team</RouterLink>
                            </a>
                        </div>
                        <div class="link spacing">
                            <a @click="moreInfoModal.toggle();" class="footer-text-underline">
                                More Info
                            </a>
                        </div>
                        <div class="link spacing">
                            <a @click="specialModal.toggle();" class="footer-text-underline">
                                Special Program
                            </a>
                        </div>
                    </div>

                    <!--Additional Info-->
                    <div class="links-section">
                        <div class="spacing">
                            <span class="link-label">Additional Info</span>
                        </div>
                        <div class="link spacing">
                            <a class="footer-text-underline" @click="openPrivacyPractices();">
                                Notice of Privacy Practices
                            </a>
                        </div>
                        <div class="link spacing">
                            <a href="https://www.cms.gov/nosurprises" class="footer-text-underline">
                                No Surprises Act*
                            </a>
                        </div>
                        <div class="spacing">
                            <span class="undertext">
                                *You have the right to receive a Good Faith Estimate of what your services may cost.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    text-decoration: none;
    overflow-x: hidden;
    color: black;
}

/* Desktop & Mobile */
.right {
    flex: 1;
    margin-left: 10%;
}
.left {
    flex: 1;
    margin-left: 10%;
}
.link {
    font-weight: 750;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', Arial, Helvetica, sans-serif;
}
.footer-text-underline {
    font-size: small;
    text-decoration: underline;
}
.map-text {
    font-size: small;
}
.spacing {
    margin-bottom: 5px;
}
.social {
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
}
.footer-container {
    margin-bottom: 25px;
}
.undertext {
    font-size: x-small;
}
.link-label {
    font-weight: 500;
    font-size: large;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', Arial, Helvetica, sans-serif;
}
.links-section {
    max-width: 165px;
    min-width: 130px;
}
.footer-box {
    text-align: center;
}
.link {
    font-size: medium;
}
.link :hover{
    color: var(--purple);
    cursor: pointer;
}
.footer-text {
    font-size: x-large;
    font-weight: 500;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', Arial, Helvetica, sans-serif;
}
.footer {
    max-height: fit-content;
    height: 150;
    min-height: 150;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;
    -webkit-user-select: none;       
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.image-width {
    width: 150px;
}
.scale-width-box {
  width: 75%;
  height: 75%;
}
.image {
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  min-width: 100%;
  vertical-align: middle;
}
.social {
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
}
.links-container {
    display: flex;
    justify-content: center;
}

@media screen and (max-width: 1000px) {
    .right {
        flex: none;
        margin: auto;
    }
    .left {
        margin: auto;
        flex: none;
        display: flex;
        justify-content: center;
    }
    .footer {
        display: flex;
        flex-direction: column;
    }
    .social {
        margin-bottom: 10px;
    }
    .image {
        margin-bottom: 10px;
    }
    .links-section {
        min-width: 100px;
        max-width: 150px;
        text-align: center;
    }
}
</style>