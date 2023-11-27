import { defineStore } from "pinia";

export const useToggleStore = defineStore("toggle", {
  state: () => {
    return { isToggled: false };
  },
  actions: {
    toggle() {
      this.isToggled = !this.isToggled;
    }
  }
});