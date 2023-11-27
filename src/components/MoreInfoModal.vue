<script setup lang="ts">
import { useMoreInfoStore } from '../stores/moreinfomodal';
import { useDetectMobileStore } from '../stores/detectmobile';
import { onMounted } from 'vue';

const moreInfoModal = useMoreInfoStore();
const mobile = useDetectMobileStore();

function resizeModal() {
    const innerModal = document.getElementById('inner-modal') as HTMLDivElement;
    if (mobile.isMobile) {
        let modalResized = false;
        if (window.innerWidth > innerModal.clientWidth + 2/*for border*/) {
            if (innerModal.classList.contains('modal-inner-mobile')) {
                innerModal.classList.remove('modal-inner-mobile');
                innerModal.classList.add('modal-inner-mobile-rounded');
                modalResized = true;
            }
        } else {
            if (innerModal.classList.contains('modal-inner-mobile-rounded')) {
                innerModal.classList.remove('modal-inner-mobile-rounded');
                innerModal.classList.add('modal-inner-mobile');
                modalResized = true;
            }
        }
        if (!modalResized) {
            if (window.innerHeight - 80/*for header*/ > innerModal.clientHeight + 2/*for border*/) {
                if (innerModal.classList.contains('modal-inner-mobile')) {
                    innerModal.classList.remove('modal-inner-mobile');
                    innerModal.classList.add('modal-inner-mobile-rounded');
                }
            } else {
                if (innerModal.classList.contains('modal-inner-mobile-rounded')) {
                    innerModal.classList.remove('modal-inner-mobile-rounded');
                    innerModal.classList.add('modal-inner-mobile');
                }
            }
        }
    }
}

onMounted(() => {
    resizeModal();
});
</script>

<template>
    <div v-if="mobile.isMobile">
        <div class="modal-mobile">
            <div class="modal-inner-mobile" id="inner-modal">
                <div class="button-row">
                    <button type="button" class="modal-button-mobile" @click="moreInfoModal.toggle();">ⓧ</button>
                </div>
                <div class="scroll">
                    <div class="card-header">
                        {{ moreInfoModal.cardHeader }}
                    </div>
                    <div class="card-info">
                        {{ moreInfoModal.moreInfo }}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else>
        <div class="modal">
            <div class="modal-inner">
                <div class="button-row">
                    <button type="button" class="modal-button" @click="moreInfoModal.toggle();">ⓧ</button>
                </div>
                <div class="scroll">
                    <div class="card-header">
                        {{ moreInfoModal.cardHeader }}
                    </div>
                    <div class="card-info">
                        {{ moreInfoModal.moreInfo }}
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
    font-weight: 500;
    color: var(--shadow);
    overflow: hidden;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

/* Mobile */
.modal-mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px);
    height: -o-calc(100vh - 80px); /* opera */
    height: -webkit-calc(100svh - 80px); /* google, safari */
    height: -moz-calc(100vh - 80px); /* firefox */
    width: 100vw;
    position: fixed;
    background-color: var(--transparent);
    bottom: 0;
    left: 0;
}
.modal-inner-mobile {
    display: flex;
    flex-direction: column;
    max-height: 100%;
    width: 100%;
    max-width: 450px;
    border: 1px solid var(--purple);
    background-color: var(--dark_purple);
}
.modal-inner-mobile-rounded {
    display: flex;
    flex-direction: column;
    max-height: 100%;
    width: 100%;
    max-width: 450px;
    border: 1px solid var(--purple);
    border-radius: .5rem;
    background-color: var(--dark_purple);
}
.modal-button-mobile {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: x-large;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    cursor: pointer;
    position: relative;
    left: 90%;
    top: 0;
    color: var(--white);
    text-shadow: var(--shadow) 0px 0px 4px;
    line-height: 0px;
}
.modal-button-mobile:hover {
  color: var(--light_gray);
}

/* Desktop */
#info-box {
    display: flex;
    overflow: visible;
}
.card-header {
    font-size: xx-large;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 500;
    color: var(--white);
    text-shadow: var(--shadow) 1px 0 10px;
    padding: 10px;
    text-align: center;
    text-decoration: underline;
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
#last-item {
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
    border-bottom: none;
}
.button-row {
    border-bottom: 1px solid var(--purple);
    background-color: var(--dark_purple);
    min-height: 30px;
}
.scroll {
    overflow-y: auto;
    background-color: var(--dark_purple);
}
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px);
    height: -o-calc(100vh - 80px); /* opera */
    height: -webkit-calc(100svh - 80px); /* google, safari */
    height: -moz-calc(100vh - 80px); /* firefox */
    max-height: 100%;
    width: 100vw;
    position: fixed;
    background-color: var(--transparent);
    bottom: 0;
    left: 0;
}
.modal-inner {
    display: flex;
    flex-direction: column;
    max-height: 100%;
    height: fit-content;
    position: relative;
    max-width: 575px;
    width: 80%;
    box-shadow: 5px 5px 6px -1px rgba(0,0, 0, 0.1), 0 2px 4px -1px rgba(0,0, 0, 0.6);
    border-radius: .5rem;
    border: 1px solid var(--purple);
    background-color: var(--dark_purple);
}
.group {
    border-top: 1px var(--purple) solid;
}
.modal-button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: x-large;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    cursor: pointer;
    position: relative;
    left: 94.5%;
    color: var(--white);
    text-shadow: var(--shadow) 0px 0px 4px;
    line-height: 0px;
}
.modal-button:hover {
  color: var(--light_gray);
}

@media screen and (max-width: 300px) {
    .modal-button-mobile {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: x-large;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    cursor: pointer;
    position: relative;
    color: var(--white);
    text-shadow: var(--shadow) 0px 0px 4px;
    line-height: 0px;
    margin: 5px;
}
}
</style>