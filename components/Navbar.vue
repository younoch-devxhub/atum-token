<template>
  <section>
    <transition name="slide-fade">
      <div v-if="show" class="mobileMenu fixed">
        <div class="flex justify-between item-center p-6">
          <p class="text-2xl"><strong>Close</strong></p>
          <button @click="mobileMenu" class="text-2xl p-4 pt-1">
            <strong>X</strong>
          </button>
        </div>
        <ul class="mobileMenuBarFontSize">
          <li>
            <a href="https://devxhub.com/"> Home </a>
          </li>
          <li class="solutions relative">
            <span class="dropdown-toggle"> Company </span>
            <div
              class="solutions-submenu mobile-menubar shadow-lg hidden absolute"
            >
              <ul>
                <li>
                  <a href="https://devxhub.com/about-us">
                    <span
                      ><img
                        src="https://devxhub.com/frontend/assets/img/menu-icon/company/1.svg" /></span
                    >About Us
                  </a>
                </li>
                <li>
                  <a href="https://devxhub.com/why-choose-us">
                    <span
                      ><img
                        src="https://devxhub.com/frontend/assets/img/menu-icon/company/5.svg" /></span
                    >Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="https://devxhub.com/career">
                    <span
                      ><img
                        src="https://devxhub.com/frontend/assets/img/menu-icon/company/2.svg" /></span
                    >Career
                  </a>
                </li>
                <li>
                  <a href="https://devxhub.com/blogs">
                    <span
                      ><img
                        src="https://devxhub.com/frontend/assets/img/menu-icon/company/3.svg" /></span
                    >BLog
                  </a>
                </li>
                <li>
                  <a href="https://devxhub.com/faqs">
                    <span
                      ><img
                        src="https://devxhub.com/frontend/assets/img/menu-icon/company/4.svg" /></span
                    >Services Provider FAQs
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="solutions relative">
            <span class="dropdown-toggle"> Services </span>
            <transition name="slide-fade">
              <div
                class="
                  solutions-submenu
                  w-full
                  shadow-lg
                  hidden
                  mobile-mega-menu
                  mega-menu
                  absolute
                "
              >
                <ul class="mobileMenuBarFontSize">
                  <li>
                    <a href="/domain-and-hosting">
                      <span
                        ><img
                          src="https://devxhub.com/frontend/assets/img/menu-icon/services/8.png" /></span
                      >Domain And Hosting
                    </a>
                  </li>
                  <li>
                    <a href="/mobile-app-development">
                      <span
                        ><img
                          src="https://devxhub.com/frontend/assets/img/menu-icon/services/13.png" /></span
                      >Mobile App Development
                    </a>
                  </li>
                  <li>
                    <a href="/seo-pwa-amp">
                      <span
                        ><img
                          src="https://devxhub.com/frontend/assets/img/menu-icon/services/2.png"
                      /></span>
                      SEO, PWA, AMP, SSR, ASO...
                    </a>
                  </li>
                  <li>
                    <a href="/saas-development">
                      <span
                        ><img
                          src="https://devxhub.com/frontend/assets/img/menu-icon/services/7.png" /></span
                      >Saas Development
                    </a>
                  </li>
                  <li>
                    <a href="/3d-animation">
                      <span
                        ><img
                          src="https://devxhub.com/frontend/assets/img/menu-icon/services/5.png" /></span
                      >3d Animation
                    </a>
                  </li>
                  <li>
                    <a href="/web-design">
                      <span
                        ><img
                          src="https://devxhub.com/frontend/assets/img/menu-icon/services/15.png" /></span
                      >Web Design
                    </a>
                  </li>
                  <li>
                    <a href="/cms-development">
                      <span
                        ><img
                          src="https://devxhub.com/frontend/assets/img/menu-icon/services/11.png" /></span
                      >Cms Development
                    </a>
                  </li>
                  <li>
                    <a href="/real-time-chat">
                      <span
                        ><img
                          src="https://devxhub.com/frontend/assets/img/menu-icon/services/1.png" /></span
                      >Real-time chat application
                    </a>
                  </li>
                  <li>
                    <a href="/chatbot-development">
                      <span
                        ><img
                          src="https://devxhub.com/frontend/assets/img/menu-icon/services/10.png" /></span
                      >Chatbot Development
                    </a>
                  </li>
                  <li>
                    <a href="/it-consultancy">
                      <span
                        ><img
                          src="https://devxhub.com/frontend/assets/img/menu-icon/services/9.png" /></span
                      >It Consultancy
                    </a>
                  </li>

                  <li>
                    <a href="/web-development">
                      <span
                        ><img
                          src="https://devxhub.com/frontend/assets/img/menu-icon/services/14.png" /></span
                      >Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="/e-commerce-crm-e-learning-and-enterprise-level-development"
                    >
                      <span
                        ><img
                          src="https://devxhub.com/frontend/assets/img/menu-icon/services/12.png" /></span
                      >E-commerce, CRM, E-learnin...
                    </a>
                  </li>
                  <li>
                    <a href="/ui-ux-and-graphics-design">
                      <span
                        ><img
                          src="https://devxhub.com/frontend/assets/img/menu-icon/services/6.png" /></span
                      >UI/UX, And Graphics Design
                    </a>
                  </li>
                  <li>
                    <a href="/api-integration-services">
                      <span
                        ><img
                          src="https://devxhub.com/frontend/assets/img/menu-icon/services/3.png" /></span
                      >API Integration services
                    </a>
                  </li>
                  <li>
                    <a href="/quality-assurance">
                      <span
                        ><img
                          src="https://devxhub.com/frontend/assets/img/menu-icon/services/4.png" /></span
                      >Quality Assurance
                    </a>
                  </li>
                </ul>
              </div>
            </transition>
          </li>
          <li>
            <a href="https://devxhub.com/our-clients"> Clients </a>
          </li>
          <li>
            <a href="https://devxhub.com/our-products"> Products </a>
          </li>
          <li>
            <a href="http://services.devxhub.com/how-we-work/"> How We Work </a>
          </li>
          <li>
            <a href="https://devxhub.com/contact-us"> Contact </a>
          </li>
        </ul>
      </div>
    </transition>
    <div class="flex pb-1 navbar">
      <div class="container">
        <div class="flex justify-between items-center">
          <div>
            <a href="https://devxhub.com/">
              <img
                class="logo"
                src="https://devxhub.com/storage/uploads/logos/1619427889-350x89-1617479508-x-devxhub-next-logo.png"
                alt="Logo"
              />
            </a>
          </div>
          <div>
            <div @click="mobileMenu" class="block lg:hidden">
              <button
                class="
                  flex
                  items-center
                  px-3
                  py-2
                  border
                  rounded
                  text-teal-200
                  border-teal-400
                  hover:text-white hover:border-white
                "
              >
                <svg
                  class="fill-current h-5 w-5"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div class="hidden lg:block">
              <ul class="flex menubar">
                <li>
                  <a href="https://devxhub.com/"> Home </a>
                </li>
                <li class="solutions relative">
                  <span class="dropdown-toggle text-white"> Company </span>
                  <div
                    class="
                      solutions-submenu
                      full-menubar
                      shadow-lg
                      hidden
                      absolute
                    "
                  >
                    <ul>
                      <li>
                        <a href="https://devxhub.com/about-us">
                          <span
                            ><img
                              src="https://devxhub.com/frontend/assets/img/menu-icon/company/1.svg" /></span
                          >About Us
                        </a>
                      </li>
                      <li>
                        <a href="https://devxhub.com/why-choose-us">
                          <span
                            ><img
                              src="https://devxhub.com/frontend/assets/img/menu-icon/company/5.svg" /></span
                          >Why Choose Us
                        </a>
                      </li>
                      <li>
                        <a href="https://devxhub.com/career">
                          <span
                            ><img
                              src="https://devxhub.com/frontend/assets/img/menu-icon/company/2.svg" /></span
                          >Career
                        </a>
                      </li>
                      <li>
                        <a href="https://devxhub.com/blogs">
                          <span
                            ><img
                              src="https://devxhub.com/frontend/assets/img/menu-icon/company/3.svg" /></span
                          >BLog
                        </a>
                      </li>
                      <li>
                        <a href="https://devxhub.com/faqs">
                          <span
                            ><img
                              src="https://devxhub.com/frontend/assets/img/menu-icon/company/4.svg" /></span
                          >Services Provider FAQs
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="solutions relative">
                  <span class="dropdown-toggle text-white"> Services</span>
                  <div
                    class="
                      solutions-submenu
                      w-full
                      shadow-lg
                      hidden
                      full-mega-menu
                      mega-menu
                      absolute
                    "
                  >
                    <div class="grid grid-cols-3 gap-4">
                      <ul>
                        <li>
                          <a href="/domain-and-hosting">
                            <span
                              ><img
                                src="https://devxhub.com/frontend/assets/img/menu-icon/services/8.png" /></span
                            >Domain And Hosting
                          </a>
                        </li>
                        <li>
                          <a href="/mobile-app-development">
                            <span
                              ><img
                                src="https://devxhub.com/frontend/assets/img/menu-icon/services/13.png" /></span
                            >Mobile App Development
                          </a>
                        </li>
                        <li>
                          <a href="/seo-pwa-amp">
                            <span
                              ><img
                                src="https://devxhub.com/frontend/assets/img/menu-icon/services/2.png"
                            /></span>
                            SEO, PWA, AMP, SSR, ASO...
                          </a>
                        </li>
                        <li>
                          <a href="/saas-development">
                            <span
                              ><img
                                src="https://devxhub.com/frontend/assets/img/menu-icon/services/7.png" /></span
                            >Saas Development
                          </a>
                        </li>
                        <li>
                          <a href="/3d-animation">
                            <span
                              ><img
                                src="https://devxhub.com/frontend/assets/img/menu-icon/services/5.png" /></span
                            >3d Animation
                          </a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="/web-design">
                            <span
                              ><img
                                src="https://devxhub.com/frontend/assets/img/menu-icon/services/15.png" /></span
                            >Web Design
                          </a>
                        </li>
                        <li>
                          <a href="/cms-development">
                            <span
                              ><img
                                src="https://devxhub.com/frontend/assets/img/menu-icon/services/11.png" /></span
                            >CMS Development
                          </a>
                        </li>
                        <li>
                          <a href="/real-time-chat">
                            <span
                              ><img
                                src="https://devxhub.com/frontend/assets/img/menu-icon/services/1.png" /></span
                            >Real-time chat application
                          </a>
                        </li>
                        <li>
                          <a href="/chatbot-development">
                            <span
                              ><img
                                src="https://devxhub.com/frontend/assets/img/menu-icon/services/10.png" /></span
                            >Chatbot Development
                          </a>
                        </li>
                        <li>
                          <a href="/it-consultancy">
                            <span
                              ><img
                                src="https://devxhub.com/frontend/assets/img/menu-icon/services/9.png" /></span
                            >It Consultancy
                          </a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="/web-development">
                            <span
                              ><img
                                src="https://devxhub.com/frontend/assets/img/menu-icon/services/14.png" /></span
                            >Web Development
                          </a>
                        </li>
                        <li>
                          <a
                            href="/e-commerce-crm-e-learning-and-enterprise-level-development"
                          >
                            <span
                              ><img
                                src="https://devxhub.com/frontend/assets/img/menu-icon/services/12.png" /></span
                            >E-commerce, CRM, E-learnin...
                          </a>
                        </li>
                        <li>
                          <a href="/ui-ux-and-graphics-design">
                            <span
                              ><img
                                src="https://devxhub.com/frontend/assets/img/menu-icon/services/6.png" /></span
                            >UI/UX, And Graphics Design
                          </a>
                        </li>
                        <li>
                          <a href="/api-integration-services">
                            <span
                              ><img
                                src="https://devxhub.com/frontend/assets/img/menu-icon/services/3.png" /></span
                            >API Integration services
                          </a>
                        </li>
                        <li>
                          <a href="/quality-assurance">
                            <span
                              ><img
                                src="https://devxhub.com/frontend/assets/img/menu-icon/services/4.png" /></span
                            >Quality Assurance
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="https://devxhub.com/our-clients"> Clients </a>
                </li>
                <li>
                  <a href="https://devxhub.com/our-products"> Products </a>
                </li>
                <li>
                  <a href="/how-we-work"> How We Work </a>
                </li>
                <li>
                  <a href="https://devxhub.com/contact-us"> Contact </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['mobileMenuModalShow'],
  data() {
    return {
      show: false,
      windowWidth: 0,
    }
  },

  watch: {
    mobileMenuModalShow(value) {
      this.show = false
    },
  },

  mounted() {
    window.addEventListener('resize', this.handleResize)
  },

  methods: {
    mobileMenu() {
      this.show = !this.show
    },
    handleResize() {
      this.windowWidth = window.innerWidth
      this.windowWidth > 768 ? (this.show = false) : ''
    },
  },
}
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 1s ease;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(0.8, 0.5, 0.5, 0.1);
}
.slide-fade-enter-active {
  transition: all 1s cubic-bezier(0.1, 0.5, 0.5, 0.8);
}

.slide-fade-enter
    /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(650px);
}

.slide-fade-leave-to {
  transform: translateX(650px);
}
@media (max-width: 425px) {
  .mobileMenu {
    width: 100% !important;
  }
  .mobile-mega-menu {
    width: 100% !important;
  }
  .mobile-menubar {
    width: 100% !important;
  }
}
@media (min-width: 1024px) {
  .full-menubar {
    top: 52px;
  }
  .full-mega-menu {
    top: 52px;
  }
}
@media (min-width: 768px) {
  .mobileMenuBarFontSize li {
    font-size: 16px !important;
  }
}
@media (min-width: 1024px) {
  .menubar li a {
    font-size: 15px !important;
  }
}
.mobileMenu {
  float: right;
  top: 0;
  right: 0;
  z-index: 999999999;
  width: 320px;
  height: auto;
  background: linear-gradient(
    135deg,
    #fff 30%,
    #ffefe0 56%,
    #fff 83%,
    #fff
  ) !important;
}

.mobileMenu ul {
  padding: 0 20px 20px 20px;
}

.mobileMenu ul li {
  @apply py-2;
}

.mobileMenuBarFontSize li {
  @apply text-2xl;
}
.menubar li a {
  @apply text-white text-base md:text-sm;
}

.menubar li {
  @apply p-5 font-bold md:p-3;
}

.container {
  width: 80% !important;
  margin: 0 auto;
}

.full-mega-menu {
  left: -410px !important;
  width: 61rem !important;
  top: 48px;
}

.mobile-mega-menu {
  left: -20px;
  width: 320px;
  overflow-y: scroll;
  height: 500px;
}
.menubar li a {
  font-size: 17px;
}
.solutions-submenu ul li {
  float: left;
  width: 100%;
  padding: 0.5rem !important;
}

.solutions-submenu ul li a {
  color: black;
}

.solutions-submenu ul {
  display: block !important;
}

.solutions-submenu ul li:hover {
  background-image: linear-gradient(00deg, #fa7070, #fa9770);
  color: #fff !important;
}

.menu ul {
  @apply flex;
}

.menu ul li {
  @apply py-3 px-6 text-base font-semibold text-white rounded cursor-pointer;
  font-family: Poppins, sans-serif;
}

.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255rem;
  vertical-align: 0.255rem;
  content: '';
  border-top: 0.3rem solid;
  border-right: 0.3rem solid transparent;
  border-bottom: 0;
  border-left: 0.3rem solid transparent;
}
.menu ul li:hover {
  color: #eee9e9;
}
.navbar {
  background-image: linear-gradient(100deg, #470467, #470467);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99999;
}

.solutions-submenu {
  background: linear-gradient(
    135deg,
    #fff 30%,
    #ffefe0 56%,
    #fff 83%,
    #fff
  ) !important;
  border-top: 10px solid #f3b92e !important;
}

.mobile-menubar {
  left: -20px;
  top: 50px !important;
  @apply bg-white p-4;
  width: 320px;
  z-index: 99;
}

.full-menubar {
  left: 0;
  top: 48px !important;
  @apply w-64 bg-white p-4;
}

.solutions-submenu img {
  width: 20px;
  float: left;
  margin-right: 5px;
}

.solutions:hover .solutions-submenu {
  @apply block;
}

.logo {
  width: 150px;
  height: 70px;
}
</style>
