import { defineStore } from "pinia";

export const useMoreInfoStore = defineStore("moreinfomodal", {
  state: () => {
    return { isVisible: false, 
      cardHeader: 'More Info', 
      moreInfo: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur nam tempore minus officiis, vero maxime veniam quo saepe modi voluptatum facere magni mollitia perferendis, nesciunt aut earum iure ad nulla iusto error totam numquam laudantium quaerat? Ea ipsam, ut sed culpa animi molestiae a, quasi odit numquam, pariatur voluptatum magni. Nihil ex sunt incidunt veniam commodi totam dicta laborum consequatur amet aperiam rerum eius vel culpa quos magni dolorum quo voluptatibus tempora minus, veritatis ipsa molestias aspernatur fugiat ullam. Sunt ipsam quas asperiores! Perferendis, ratione quae molestiae maxime id odit voluptatem ullam accusamus quod asperiores, consectetur magni aut. Tenetur, iusto?'
    };
  },
  actions: {
    toggle() {
      this.isVisible = !this.isVisible;
    }
  }
});