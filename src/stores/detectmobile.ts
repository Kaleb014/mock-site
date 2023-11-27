import { defineStore } from "pinia";

export const useDetectMobileStore = defineStore("detectmobilestore", {
  state: () => {
    return { isMobile: false };
  },
  actions: {
    checkDevice() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.isMobile = true;
        } else {
            this.isMobile = false;
        }
    }
  }
});