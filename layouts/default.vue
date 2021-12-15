<template>
  <section>
    <Navbar :mobileMenuModalShow="mobileMenuModalShow"></Navbar>
    <div class="pt-16" @click="mobileMenu">
      <Nuxt />
    </div>
  </section>
</template>
<script>
import { ref } from 'vue'

import Navbar from '~/components/Navbar'

export default {
  comments: {
    Navbar,
  },
  data() {
    return {
      mobileMenuModalShow: true,
    }
  },
  methods: {
    mobileMenu() {
      this.mobileMenuModalShow = !this.mobileMenuModalShow
    },
  },
}
</script>


