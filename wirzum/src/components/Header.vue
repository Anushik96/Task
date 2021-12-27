<template>
  <header>
    <router-link class="main-logo" :to="{name: 'Home'}"><img src="../assets/images/mainLogo.svg" alt=""></router-link>
    <nav>
      <ul class="main_menu">
        <li class="main_menu-item">
          <router-link :to="{name: 'Home'}">Поиск жилья</router-link>
        </li>
        <li class="main_menu-item">
          <router-link :to="{name: 'Home'}">Активности</router-link>
        </li>
        <li class="main_menu-item">
          <router-link :to="{name: 'Home'}">Услуги</router-link>
        </li>
      </ul>
    </nav>
    <div class="right-side">
      <p class="user-name">Магдалена</p>
      <div class="language-shweatcher">
        <p>RU</p>
        <ul class="dropdown">
          <li>RU</li>
          <li>RU</li>
          <li>RU</li>
        </ul>
      </div>
      <div class="burger-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>
<script>

export default {
  name: 'Header',

  setup() {

  }

}

</script>
<style lang="scss">
</style>