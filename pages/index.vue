<template>
  <div class="w-full main-container">
    <section class="relative flex justify-center w-full py-10 align-middle">
      <div class="absolute top-0 left-0 h-full background-1"></div>
      <main class="container grid items-center grid-cols-12 gap-5 py-6 mx-40">
        <aside class="col-span-6 font-medium text-white">
          <h1 class="text-5xl">Atum <span class="underline">Token</span></h1>
          <h2 class="mt-2 text-4xl">
            A Trusted & Secure Cryptocurrency Platform
          </h2>
          <p class="mt-5 font-normal">
            ATUM is an American Indian Government, operated and supported by
            ATUM BLOCKCHAIN Technology. ATUM’s aim is to create the world’s best
            platform to purchase, protect and Asset licensed digital assets,
            copyrighting , trademarking , American Indian Patents, Music,
            MP3,MP4, Data collection & monetization using Distributed Ledger
            Technology.
          </p>
          <div class="mt-6 text-sm font-normal">
            <button class="btn-1">White paper</button>
            <button class="btn-2">Buy Token</button>
          </div>
        </aside>
        <figure class="col-span-6">
          <img class="img-para" src="@/assets/images/page1-1.png" alt="" />
        </figure>
      </main>
    </section>

    <section
      class="relative flex justify-center w-full py-10 align-middle part-2"
    >
      <div class="absolute top-0 left-0 background-2"></div>
      <main class="container grid items-center grid-cols-12 gap-5 py-6 mx-40">
        <figure class="col-span-6">
          <img
            class="img-para"
            src="@/assets/images/atum_overview.svg"
            alt=""
          />
        </figure>
        <aside class="col-span-6 font-medium">
          <h1 class="text-3xl font-semibold">
            Atum <span class="underline text-grad"> Overview</span>
          </h1>

          <p class="mt-5 text-sm font-normal">
            ATUM is an application that allows users to buy, sell and trade
            premium licensed, digital assets and other related virtual goods.
            <br />
            Through the ATUM app, users can browse a multitude of diﬀerent
            brands and categories to view and purchase digital assets, ATUM the
            oﬃcial owner. <br />
            Users can display their digital assets in their personal showroom
            and create custom scenes with their digital assets and props. Within
            a social feed users can share their digital assets, Gala and scenes
            with the ATUM Asset community, who can comment and show
            appreciation. <br />
            The Augmented Reality feature lets users interact with their digital
            assets in the real-world and even show them on social media.
            Eventually through ATUM’s in-app gameplay, assets will be able to
            interact with each other. <br />
            Within the app, users can connect to a secondary marketplace, where
            they will be able to buy, sell and trade to other members of the
            community. <br />
            All transactions within ATUM are carried out utilizing the ATUM
            token, which is used to purchase the digital assets and via staking,
            open access to premium features.
          </p>
        </aside>
      </main>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  mounted() {},

  head() {
    return {
      title: 'Web Design Services of DevXhub',
    }
  },
}
</script>
<style>
.main-container {
  font-family: 'DM Sans', sans-serif;
}
.h-576px {
  height: 576px;
}
.text-grad {
  background: -webkit-linear-gradient(#2842ef 0%, #a25ffd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.background-1 {
  @apply w-full;

  z-index: -1;
  background: conic-gradient(
    from 4.18deg at 57.37% 52.33%,
    #a25ffd -33.33deg,
    #2842ef 10.72deg,
    #a25ffd 326.67deg,
    #2842ef 370.72deg
  );
}
.background-2 {
  @apply w-full h-full;
  background-image: url(assets\images\atum_overview_bg.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
button {
  @apply w-28 py-3 px-4 mr-3;
}

.btn-1 {
  background: white;
  color: #2842ef;
}
.btn-2 {
  background: #2842ef;
}
.img-para {
  height: 480px;
}
@media (min-width: 768px) {
  .container {
    width: 80% !important;
  }
}
</style>
