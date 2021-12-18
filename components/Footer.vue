<template>
  <footer class="py-5">
    <div class="flex items-center justify-between mx-40 align-middle">
      <img src="@/assets/logo/logo_footer.svg" />
      <p>Copyright © 2021. <span>Atumtoken</span> All rights reserved.</p>
      <div class="flex">
        <div class="inactive-icon">
          <img src="@/assets/icons/facebook.svg" />
        </div>
        <div class="inactive-icon">
          <img src="@/assets/icons/twitter.svg" />
        </div>
        <div class="inactive-icon">
          <img src="@/assets/icons/linkedin.svg" />
        </div>
        <div class="inactive-icon">
          <img src="@/assets/icons/telegram.svg" />
        </div>
        <div class="inactive-icon">
          <img src="@/assets/icons/discord.svg" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
footer {
  background: black;
}
p {
  color: white;
}
span {
  color: #2842ef;
}
.active-icon,
.inactive-icon {
  border-radius: 5px;
  size: 10px 10px;
}
.active-icon {
  background: #2842ef;
}
</style>