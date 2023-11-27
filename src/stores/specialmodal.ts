import { defineStore } from "pinia";

export const useSpecialModalStore = defineStore("specialmodalstore", {
  state: () => {
    return { isVisible: false };
  },
  actions: {
    toggle() {
      this.isVisible = !this.isVisible;
    }
  }
});