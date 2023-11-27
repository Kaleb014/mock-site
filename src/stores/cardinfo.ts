import { defineStore } from "pinia";

export const useCardInfoStore = defineStore("cardinfomodal", {
  state: () => {
    return { isVisible: false, cardHeader: '', cardInfo: '' };
  },
  actions: {
    toggle() {
      this.isVisible = !this.isVisible;
    }
  }
});