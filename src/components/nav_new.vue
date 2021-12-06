<template>
  <vue-navigation-bar :options="navbarOptions" @vnb-item-clicked="vnbItemClicked" />
</template>

<script>

  import "vue-navigation-bar/dist/vue-navigation-bar.css";
  import VueNavigationBar from "vue-navigation-bar";


  export default {
      components: {
        VueNavigationBar,
      },
      data() {
        return {
          navbarOptions: {
            elementId: "main-navbar",
            isUsingVueRouter: true,
            mobileBreakpoint: 992,
            brandImagePath: "./",
            brandImage: require("vue-navigation-bar/src/assets/images/lockup-color.png"),
            brandImageAltText: "brand-image",
            collapseButtonOpenColor: "#661c23",
            collapseButtonCloseColor: "#661c23",
            showBrandImageInMobilePopup: true,
            ariaLabelMainNav: "Main Navigation",
            tooltipAnimationType: "shift-away",
            tooltipPlacement: "bottom",
            menuOptionsLeft: [
              {
                type: "link",
                text: "Why Dunder Mifflin",
                arrowColor: "#659CC8",
                subMenuOptions: [
                  {
                    isLinkAction: true,
                    type: "link",
                    text: "About",
                    subText: "Stupid corporate wet blankets. Like booze ever killed anyone.",
                    path: { name: "about" },
                    iconLeft: '<i class="fa fa-star fa-fw"></i>'
                  },
                  {
                    type: "hr",
                  },
                  {
                    type: "link",
                    text: "Locations",
                    subText: "You\'re a presentation tool!",
                    path: { name: "locations" },
                    arrowColor: "#659CC8",
                  },
                  {
                    type: "hr",
                  },
                  {
                    type: "link",
                    text: "Blog",
                    subText: "I enjoy having breakfast in bed. I like waking up to the smell of bacon. Sue me.",
                    path: { name: "blog" }
                  },
                ]
              },
              {
                type: "link",
                text: "Contact",
                subMenuOptions: [
                  {
                    type: "link",
                    text: "Customer Service",
                    path: { name: "customer-service" },
                  },
                  {
                    type: "link",
                    text: "Accounting",
                    path: { name: "accounting" },
                  },
                  {
                    type: "hr",
                  },
                  {
                    type: "link",
                    text: "Reception",
                    path: { name: "reception"},
                    iconLeft: '<svg id="i-telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" /> <circle cx="16" cy="21" r="4" /> </svg>',
                  },
                ]
              },
              {
                type: "link",
                text: "Pricing",
                path: { name: "pricing"},
                iconRight: '<i class="fa fa-long-arrow-right fa-fw"></i>',
              },
            ],
            menuOptionsRight: [
              // {
              //   type: "button",
              //   text: "Signup",
              //   path: { name: "signup" },
              //   class: "button-red"
              // },
              {
                type: "link",
                // text: "Pricing",
                path: { name: "pricing"},
                iconRight: '<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"></path> </svg>'
              },
              {
                isLinkAction: true,
                type: "button",
                text: "Connect Wallet",
                path: { name: "login" },
                iconRight: '<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>'
              }
            ]
          }
        }
      },

      methods: {
        vnbItemClicked(text) {
          if (text === "About") {
            alert("'About' was selected.");
          }
          else if(text === "Connect Wallet") 
          {
            console.log(text + " is selected")

            this.$store.dispatch('registerWeb3')

          }
        }
      }
      
  }
</script>

<style lang="scss">
  .vnb {
    .button-red {
      background: #ff3b30;

      &:hover {
        background: darken(#ff3b30, 10%);
      }
    }
  }
</style>