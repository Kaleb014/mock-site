<script setup lang="ts">
import { useModalStore } from "../stores/clientinfomodal";
import { useHeaderStore } from "../stores/header";
import { useDetectMobileStore } from "../stores/detectmobile";
import { useCardInfoStore } from "../stores/cardinfo";
import { onMounted } from 'vue';
import { useClinicianInfoStore } from "../stores/clinicianinfo";
import { useMoreInfoStore } from "../stores/moreinfomodal";
import { useSpecialModalStore } from "../stores/specialmodal";

const infoModal = useModalStore();
const cardInfoModal = useCardInfoStore();
const headerStore = useHeaderStore();
const mobile = useDetectMobileStore();
const clinicianInfo = useClinicianInfoStore();
const moreInfo = useMoreInfoStore();
const specialModal = useSpecialModalStore();

onMounted(() => {
  mobile.checkDevice();
});

</script>

<template>
    <div v-if="mobile.isMobile">
        <div class="header-mobile">
            <img
                class="logo-mobile"
                src="@/assets/chicken-rooster-line-icon-export.png"
                width="64"
                height="64"
            />

            <div class="header-box-mobile">
                <span class="header-text-mobile">
                    {{ headerStore.headerText }}
                </span>
            </div>

            
            <div class="link-container-mobile">
                <div class="inline-mobile">
                    <a class="link-mobile" @click="infoModal.isVisible = false;
                        clinicianInfo.isVisible = false; 
                        cardInfoModal.isVisible = false; 
                        moreInfo.isVisible = false; 
                        specialModal.isVisible = false;">
                        <RouterLink to="/">Home</RouterLink>
                    </a>
                    <a class="link-mobile-last" @click="infoModal.isVisible = false;
                        clinicianInfo.isVisible = false; 
                        cardInfoModal.isVisible = false; 
                        moreInfo.isVisible = false; 
                        specialModal.isVisible = false;">
                        <RouterLink to="/ourteam">Our Team</RouterLink>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div v-else>
        <div class="header">
            <img
                class="logo"
                src="@/assets/chicken-rooster-line-icon-export.png"
                width="64"
                height="64"
            />

            <div class="header-box">
                <span class="header-text">
                    {{ headerStore.headerText }}
                </span>
            </div>

            
            <div class="link-container">
                <div class="inline">
                    <a class="link" @click="infoModal.isVisible = false; 
                        cardInfoModal.isVisible = false;
                        clinicianInfo.isVisible = false;
                        moreInfo.isVisible = false;
                        specialModal.isVisible = false;">
                        <RouterLink to="/">Home</RouterLink>
                    <span class="slogan-symbol">|</span>
                    </a>
                    <a class="link" @click="infoModal.isVisible = false; 
                        cardInfoModal.isVisible = false;
                        clinicianInfo.isVisible = false;
                        moreInfo.isVisible = false;
                        specialModal.isVisible = false;">
                        <RouterLink to="/ourteam">Our Team</RouterLink>
                    </a>
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
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 500;
    text-decoration: none;
    overflow-x: hidden;
    color: var(--light_gray);
}

/* Mobile */
.link-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: solid 1px var(--purple);
}
.link-mobile-last {
    display: flex;
    align-items: center;
    justify-content: center;
}
.header-box-mobile {
    text-align: center;
}
.logo-mobile {
    position: fixed;
    left: 1%;
    top: 50;
    background-color: var(--dark_purple);
}
.link-container-mobile {
    font-size: small;
    position: fixed;
    right: 1%;
}
.link-mobile:hover{
    color: var(--purple);
}
.header-text-mobile {
    color: var(--light_gray);
    font-size: x-large;
}
.header-mobile {
    max-height: 80px;
    height: 80px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--dark_purple);
    overflow: hidden;
    -webkit-user-select: none;       
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.inline-mobile {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
}


/* Desktop */
.link {
    display: flex;
    align-items: center;
    justify-content: center;
}
.slogan-symbol {
    color: var(--purple);
    font-size: large;
    margin-left: 4px;
    margin-right: 4px;
}
.header-box {
    text-align: center;
}
.logo {
    position: fixed;
    left: 1%;
    top: 50;
    background-color: #2C2C54;
}
.link-container {
    font-size: medium;
    position: fixed;
    right: 1%;
}
.link :hover{
    color: var(--purple);
}
.header-text {
    color: var(--light_gray);
    font-size: xx-large;
}
.header {
    max-height: 80px;
    height: 80px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #2C2C54;
    overflow: hidden;
    -webkit-user-select: none;       
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.inline {
    display: flex;
    justify-content: space-evenly;
}

@media screen and (max-width: 1000px) {
  .inline {
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: 350px) {
    .header-text-mobile {
        font-size: medium;
    }
}
</style>