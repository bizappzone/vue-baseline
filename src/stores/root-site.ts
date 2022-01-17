import { computed, toRefs, reactive } from "vue";
import { acceptHMRUpdate, defineStore } from "pinia";

// const delay = (t: number) => new Promise((r) => setTimeout(r, t));

export const useRootSiteStore = defineStore("root-site", () => {
  const state = reactive({
    theme: "light",
    currentMenu: "home",
    errors: [] as string[],
  });

  //   const double = computed(() => state.n * 2);

  function toggleCurrentTheme(theme: string) {
    if (theme === "dark") {
      state.theme = "light";
      console.log("$$$ ACTION setTheme", state.theme);
    } else {
      state.theme = "dark";
      console.log("$$$ ACTION setTheme", state.theme);
    }
  }

  function changeMe() {
    console.log("change me to test HMR");
  }

  return {
    ...toRefs(state),
    // double,
    toggleCurrentTheme,
    changeMe,
  };
});

// import { defineStore } from "pinia";
// import ThemeHueType from "@/components/structure/ThemeHueType";

// export const useRootSiteStore = defineStore("root-site", {
//   state: () => ({
//     theme: "dark",
//     currentMenu: "home",
//     errors: [],
//   }),
//   actions: {
//     setTheme(current: ThemeHueType) {

//       console.log("$$$$ ACTION gotvalue", current);
//       if (this.theme === "dark") {
//         this.theme = "light";
//         console.log("ACTION1 setTheme", this.theme);
//       } else {
//         this.theme = "dark";
//         console.log("ACTION2 setTheme", this.theme);
//       }
//       return {};
//     },
//   },
// });
