<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import { useDetectMobileStore } from "./stores/detectmobile";
import { onMounted } from "vue";
import Footer from "./components/Footer.vue";
import Modal from "./views/ModalView.vue";

const mobile = useDetectMobileStore();

onMounted(() => {
  mobile.checkDevice();
});
</script>

<template>
  <div>
    <div class="sticky">
      <Header />
    </div>
    <div id="body">
      <RouterView />
      <Footer />
    </div>
    <Modal />
  </div>
</template>