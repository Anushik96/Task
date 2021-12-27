<template>
  <div class="home">
    <div class="breadcrumb">
      <router-link :to="{name: ''}">
        <img src="../assets/images/left-arrow.svg" alt="">
        <p>К результатам поиска</p>
      </router-link>
    </div>
    <div class="product">
      <div class="product-title">
        <h2>Двухэтажный дом с садом на берегу океана</h2>
        <p>Konrad-Adenauer-Ring 2, Бад-Ольдесло, Германия</p>
        <span>доступно для аренды только жителям данного региона</span>
      </div>
      <img src="../assets/images/favorite-icon.svg" alt="">
    </div>
    <div class="product_info">
      <div class="product_info-carousel">
        <p class="info">Комиссия 50%</p>
        <carousel :items-to-show="1">
          <slide v-for="slide in pictures" :key="slide">
            <img :src="require(`../assets/images/${slide}`)" alt="">
          </slide>
          <template #addons>
            <navigation/>
          </template>
        </carousel>
        <div class="carousel_images">
          <img v-for="(img, i) in pictures" :src="require(`../assets/images/${img}`)" alt="" :key="i">
        </div>
      </div>
      <div class="product_description">
        <div class="short-info">
          <p>Wohnung
            <img src="../assets/images/wohnung.svg" alt=""></p>
          <p>Общая площадь, м2
            <span>200</span>
          </p>
          <p>Жилая площадь, м2
            <span>120</span>
          </p>
          <p>Этаж
            <span>1/2</span>
          </p>
          <button @click="showModal">
            <img src="../assets/images/button-icon.svg" alt="">
            План жилья
          </button>
        </div>
        <div class="product-tab">
          <div class="tabs">
            <button
                v-for="(tab, i) in tabs"
                :key="i"
                :class="['tab-button', { 'active': currentTab === tab }]"
                @click="currentTab = tab"
            >
              {{ tab }}
            </button>
          </div>
          <component :is="currentTab"></component>
        </div>
      </div>
    </div>

    <Modal
        v-model="isShow"
        :close="closeModal"
    >
      <div class="modal">
        <registerForm
          @save-data="register"
        />
      </div>
    </Modal>

  </div>
</template>

<script>
import {ref} from "vue";
import Description from "../components/home/Description";
import Features from "../components/home/Features";
import Parameters from "../components/home/Parameters";
import RegisterForm from "../components/home/RegisterForm";
import HomeService from "../services/HomeService"
import {Carousel, Slide, Navigation} from 'vue3-carousel';

export default {
  name: 'Home',
  components: {
    Description,
    Features,
    Parameters,
    Carousel,
    Slide,
    Navigation,
    RegisterForm
  },

  setup() {
    let homeService = new HomeService()

    const pictures = ['img.png', 'img_1.png', 'img_2.png', 'img_3.png', 'img.png', 'img_1.png'];

    let currentTab = ref('Description');
    const tabs = ['Description', 'Parameters', 'Features'];

    const changeActiveTab = (tab) => {
      return currentTab = tab
    };
    const isShow = ref(false)

    function showModal() {
      isShow.value = true
    }

    function closeModal() {
      isShow.value = false
    }

    async function register(data){
      const result = await homeService.registration(data);
      console.log(result)
    }

    return {
      pictures,
      currentTab,
      changeActiveTab,
      tabs,
      isShow,
      showModal,
      closeModal,
      register,
    };
  }
}
</script>
<style lang="scss">

</style>
