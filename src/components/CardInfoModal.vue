<script setup lang="ts">
import { useCardInfoStore } from '../stores/cardinfo';

const cardInfoModal = useCardInfoStore();

</script>

<template>
  <div class="modal-mobile">
    <div class="modal-inner-mobile">   
      <div>
        <div class="groups-container">
          <div class="groups">
            <button type="button" class="modal-button-mobile" @click="cardInfoModal.toggle();">ⓧ</button>
            <div class="group last-item">   
              <h3 class="card-header-mobile">{{ cardInfoModal.cardHeader }}</h3>
              <span class="card-info-mobile">{{ cardInfoModal.cardInfo }}</span>
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
    color: var(--shadow);
    overflow-x: hidden;
    text-decoration: none;
}
.modal-mobile {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: start;
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
    position: relative;
    height: fit-content;
    max-height: 100%;
    width: 100%;
    max-width: 450px;
    background-color: var(--dark_purple);
    overflow-y: visible;
    border: solid 1px var(--purple);
    border-radius: .5rem;
    top: 25%;
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
    color: var(--white);
    text-shadow: var(--shadow) 0px 0px 4px;
    line-height: 0px;
}
.modal-button-mobile:hover {
  color: var(--light_gray);
}
.card-header-mobile {
  color: var(--white);
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
.card-info-mobile {
  display: flex;
  text-align: left;
  font-size: medium;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 500;
  color: var(--white);
  text-shadow: var(--shadow) 1px 0 10px;
  padding: 10px;
  min-height: fit-content;
}
.last-item {
  border-bottom-left-radius: .5rem;
  border-bottom-right-radius: .5rem;
}
.groups-container {
    width: 100%;
}
.groups {
    background-color: var(--dark_purple);
    border-radius: .5rem;
    overflow: visible;
    width: 100%;
}
.group {
    border-top: 1px var(--purple) solid;
    background-color: var(--dark_purple);
}
</style>