<script setup lang="ts">
import { useSpecialModalStore } from '../stores/specialmodal';
import { useDetectMobileStore } from '../stores/detectmobile';
import { onMounted } from 'vue';

const specialModal = useSpecialModalStore();
const mobile = useDetectMobileStore();

function resizeModal() {
    const innerModal = document.getElementById('inner-modal') as HTMLDivElement;
    if (mobile.isMobile) {
        let modalResized = false;
        if (window.innerWidth > innerModal.clientWidth + 2/*for border*/) {
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
                <div class="scroll">
                    <div class="info-box" style="justify-content: space-evenly;">
                        <div class="special" style="width: 350%;">
                            <div class="button-row">
                                <button type="button" class="modal-button-mobile" @click="specialModal.toggle();">ⓧ</button>
                            </div>
                            <h2 class="card-header">
                                Lorem
                            </h2>
                            <span class="card-info">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem provident numquam nemo, doloribus accusamus 
                                corrupti laborum, saepe distinctio aliquid exercitationem voluptatum, corporis est obcaecati. Nihil repellat quo unde 
                                vitae eius ducimus, quibusdam itaque, non libero animi saepe aperiam ex magni. Dolore corporis id nihil numquam, dolorem 
                                exercitationem tempora ipsam et veniam officia dolor autem magnam necessitatibus quisquam inventore quidem doloribus adipisci, 
                                consequuntur nisi officiis, unde voluptate! Molestiae iusto quibusdam labore, aliquam ipsum nihil quod, et cum animi cumque praesentium? 
                                Natus iste distinctio dolores vitae iure rem hic nam ea officia quibusdam esse libero vero doloremque minima atque sint, obcaecati error 
                                tempore nihil voluptatum voluptate perferendis aliquid. Tempora ab nulla praesentium libero dolorum repudiandae dolores! Adipisci, voluptatem 
                                quisquam, nobis omnis rem hic ratione facilis totam eius laboriosam iure aliquam, ipsum id.
                            </span>
                        </div>
                    </div>

                    <div class="info-container-color">
                        <div class="info-box">
                            <div class="info-container">
                                <div class="info-header-left">Lorem ipsum:</div>
                            </div>

                            <div class="info-container">
                                <div class="info-header-right">Lorem ipsum:</div>
                            </div>
                        </div>

                        <div class="info-box">
                            <div class="info-container">
                                <div class="info-list-left">
                                    • Lorem ipsum dolor sit amet consectetur.
                                </div>
                                <div class="info-list-left">
                                    • Lorem ipsum dolor sit amet.
                                </div>
                                <div class="info-list-left">
                                    &emsp;• Lorem, ipsum dolor.
                                </div>
                                <div class="info-list-left">
                                    &emsp;• Lorem, ipsum dolor.
                                </div>
                                <div class="info-list-left">
                                    &emsp;• Lorem, ipsum dolor.
                                </div>
                                <div class="info-list-left">
                                    • Lorem ipsum dolor sit amet.
                                </div>
                            </div>

                            <div class="info-container">
                                <div class="info-list-right">
                                    • Lorem, ipsum.
                                </div>
                                <div class="info-list-right">
                                    • Lorem ipsum dolor sit.
                                </div>
                                <div class="info-list-right">
                                    • Lorem ipsum dolor sit.
                                </div>
                                <div class="info-list-right">
                                    • Lorem, ipsum dolor.
                                </div>
                                <div class="info-list-right">
                                    • Lorem, ipsum.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="special-more-info">
                        <h2 class="card-header">
                            Lorem ipsum dolor sit amet consectetur adipisicing?
                        </h2>
                        <span class="card-info">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Provident in, animi obcaecati nostrum aut ratione ipsa assumenda repudiandae 
                             necessitatibus eum libero dolores laborum eos? Id laborum neque quidem, maiores 
                             culpa aspernatur ducimus odio accusantium tenetur minus saepe earum. Deserunt, 
                             amet eaque obcaecati doloribus beatae aliquid eos perferendis aut illum quidem!
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else>
        <div class="modal">
            <div class="modal-inner">   
                <div class="scroll">
                    <div class="info-box" style="justify-content: space-evenly;">
                        <div class="info-container" style="display: flex; justify-content: center; align-items: center; background-color: var(--dark_purple);">
                            <img
                            src="@/assets/chicken-rooster-line-icon-export.png"
                            height="64"
                            width="64"
                            />
                        </div>
                        <div class="special">
                            <div class="button-row">
                                <button type="button" class="modal-button" @click="specialModal.toggle();">ⓧ</button>
                            </div>
                            <h2 class="card-header">
                                Lorem
                            </h2>
                            <span class="card-info">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem provident numquam nemo, doloribus accusamus 
                                corrupti laborum, saepe distinctio aliquid exercitationem voluptatum, corporis est obcaecati. Nihil repellat quo unde 
                                vitae eius ducimus, quibusdam itaque, non libero animi saepe aperiam ex magni. Dolore corporis id nihil numquam, dolorem 
                                exercitationem tempora ipsam et veniam officia dolor autem magnam necessitatibus quisquam inventore quidem doloribus adipisci, 
                                consequuntur nisi officiis, unde voluptate! Molestiae iusto quibusdam labore, aliquam ipsum nihil quod, et cum animi cumque praesentium? 
                                Natus iste distinctio dolores vitae iure rem hic nam ea officia quibusdam esse libero vero doloremque minima atque sint, obcaecati error 
                                tempore nihil voluptatum voluptate perferendis aliquid. Tempora ab nulla praesentium libero dolorum repudiandae dolores! Adipisci, voluptatem 
                                quisquam, nobis omnis rem hic ratione facilis totam eius laboriosam iure aliquam, ipsum id.
                            </span>
                        </div>
                    </div>

                    <div class="info-container-color">
                        <div class="info-box">
                            <div class="info-container">
                                <div class="info-header-left">Lorem Ipsum:</div>
                            </div>

                            <div class="info-container">
                                <div class="info-header-right">Lorem Ipsum:</div>
                            </div>
                        </div>

                        <div class="info-box">
                            <div class="info-container">
                                <div class="info-list-left">
                                    • Lorem ipsum dolor sit amet consectetur.
                                </div>
                                <div class="info-list-left">
                                    • Lorem ipsum dolor sit amet.
                                </div>
                                <div class="info-list-left">
                                    &emsp;• Lorem, ipsum dolor.
                                </div>
                                <div class="info-list-left">
                                    &emsp;• Lorem, ipsum dolor.
                                </div>
                                <div class="info-list-left">
                                    &emsp;• Lorem, ipsum dolor.
                                </div>
                                <div class="info-list-left">
                                    • Lorem ipsum dolor sit amet.
                                </div>
                            </div>

                            <div class="info-container">
                                <div class="info-list-right">
                                    • Lorem, ipsum.
                                </div>
                                <div class="info-list-right">
                                    • Lorem ipsum dolor sit.
                                </div>
                                <div class="info-list-right">
                                    • Lorem ipsum dolor sit.
                                </div>
                                <div class="info-list-right">
                                    • Lorem, ipsum.
                                </div>
                                <div class="info-list-right">
                                    • Lorem, ipsum.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="special-more-info">
                        <h2 class="card-header">
                            Lorem ipsum dolor sit amet consectetur?
                        </h2>
                        <span class="card-info">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum amet qui nostrum eveniet doloribus ad tempore. 
                            Placeat, iure doloremque tempore accusantium facilis id voluptas modi alias quasi deleniti vero perferendis 
                            earum quos accusamus rerum odio blanditiis recusandae ratione suscipit dolor sapiente! Facilis reiciendis nostrum 
                            adipisci aut vitae nam sit eaque.
                        </span>
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
    width: 100vw;
    height: 85%;
    height: -o-calc(100vh - 80px); /* opera */
    height: -webkit-calc(100svh - 80px); /* google, safari */
    height: -moz-calc(100vh - 80px); /* firefox */
    position: fixed;
    background-color: var(--transparent);
    bottom: 0;
    left: 0;
}
.modal-inner-mobile {
    display: flex;
    position: relative;
    height: fit-content;
    max-height: 100%;
    width: 100%;
    max-width: 450px;
    padding: 5px;
    background-color: var(--purple);
    border: none;
}
.modal-inner-mobile-rounded {
    display: flex;
    position: relative;
    height: fit-content;
    max-height: 100%;
    width: 100%;
    max-width: 450px;
    padding: 5px;
    background-color: var(--purple);
    border-radius: .5rem;
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
    left: 92%;
    color: var(--white);
    text-shadow: var(--shadow) 0px 0px 4px;
    line-height: 0px;
}
.modal-button-mobile:hover {
  color: var(--light_gray);
}

/* Desktop */
.info-box {
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
.info-container {
    width: 50%;
    border: solid 5px var(--purple);
}
.info-container-color {
    background-color: var(--dark_purple);
}
.scroll {
    overflow-y: auto;
    background-color: var(--purple);
}
.modal {
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
.modal-inner {
    max-height: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    position: relative;
    max-width: 750px;
    width: 80%;
    box-shadow: 5px 5px 6px -1px rgba(0,0, 0, 0.1), 0 2px 4px -1px rgba(0,0, 0, 0.6);
    padding: 5px;
    background-color: var(--purple);
    border-radius: .5rem;
}
.info-header-left {
    max-height: fit-content;
    font-size: x-large;
    background-color: var(--dark_purple);
    color: var(--white);
    text-shadow: var(--shadow) 1px 0 10px;
    padding: 5px;
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.info-header-right {
    max-height: fit-content;
    font-size: x-large;
    background-color: var(--dark_purple);
    color: var(--white);
    text-shadow: var(--shadow) 1px 0 10px;
    padding: 5px;
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.info-list-left {
    font-size: medium;
    background-color: var(--dark_purple);
    color: var(--white);
    text-shadow: var(--shadow) 1px 0 10px;
    padding: 5px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.info-list-right {
    font-size: medium;
    background-color: var(--dark_purple);
    color: var(--white);
    text-shadow: var(--shadow) 1px 0 10px;
    padding: 5px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.special {
    background-color: var(--dark_purple);
    border: solid 5px var(--purple);
    width: 350%;
}
.special-more-info {
    background-color: var(--dark_purple);
    border: solid 5px var(--purple);
    overflow: visible;
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
    left: 93.5%;
    color: var(--white);
    text-shadow: var(--shadow) 0px 0px 4px;
    line-height: 0px;
}
.modal-button:hover {
  color: var(--light_gray);
}
.button-row {
    border-bottom: 1px solid var(--purple);
    background-color: var(--dark_purple);
    min-height: 30px;
}
@media screen and (max-width: 300px) {
    .modal-button-mobile {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    font-size: x-large;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    cursor: pointer;
    position: relative;
    left: 89.5%;
    top: .5%;
    color: var(--white);
    text-shadow: var(--shadow) 0px 0px 4px;
    line-height: 0px;
}
}
</style>