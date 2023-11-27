import { defineStore } from "pinia";

export const useClinicianInfoStore = defineStore("clinicianinfomodal", {
  state: () => {
    return { isVisible: false, 
      cardHeader: '', 
      counselingPhilosophy: '', 
      specialtyAreas: '', 
      credentials: '',
    };
  },
  actions: {
    toggle() {
      this.isVisible = !this.isVisible;
    }
  }
});