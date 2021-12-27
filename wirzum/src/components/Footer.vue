<template>
  <footer>
    <div class="footer-menu">
      <router-link class="main-logo" :to="{name: 'Home'}"><img src="../assets/images/whiteLogo.svg" alt=""></router-link>
      <nav>
        <ul>
          <li><router-link :to="{name: 'Home'}">Поиск жилья</router-link></li>
          <li>Коливинг</li>
          <li>Жильё с уходом</li>
          <li>Жильё для отпуска</li>
          <li><router-link :to="{name: 'Home'}">Активности</router-link></li>
          <li><router-link :to="{name: 'Home'}">Услуги</router-link></li>
        </ul>
        <ul>
          <li><router-link :to="{name: 'Home'}"> Бизнес-аккаунт</router-link></li>
          <li>Разместить объект аренды</li>
          <li>Добавить активность </li>
          <li>Добавить услугу</li>
        </ul>
      </nav>
    </div>
    <div class="footer_info">
      <h3 class="footer_info-title">Новый формат жизни.</h3>
      <h5 class="footer_info-subtitle">Социальный проект Wirzum</h5>
      <div class="info-block">
        <img src="../assets/images/footerLogo.svg" alt="">
        <h4>Сервис помощи во время карантина</h4>
        <p>Пандемия уже более года сталкивает нас с серьезными проблемами. Сложившаяся ситуация есть и остается
          катастрофой, связанной с множеством потерь. Несмотря на тяжелые времена, кое-что все же пошло в лучшую
          сторону.</p>
      </div>
      <ul>
        <li><router-link :to="{name: 'Home'}">Условия</router-link></li>
        <li><router-link :to="{name: 'Home'}">FAQ</router-link></li>
        <li><router-link :to="{name: 'Home'}">Служба поддержки</router-link></li>
      </ul>
    </div>
  </footer>
</template>
<script>

export default {
  name: 'Footer',


}

</script>
<style>

</style>