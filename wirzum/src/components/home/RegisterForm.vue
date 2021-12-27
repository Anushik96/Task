<template>
  <div>
<!--    <form>-->
      <h1>form with VeeValidate</h1>
      <button @click="register" >
        Save
      </button>
<!--    </form>-->
  </div>
</template>
<script>
// import { ValidationProvider } from 'vee-validate';
import { reactive } from 'vue'

export default {
  name: 'RegisterForm',
  components: {
    // ValidationProvider
  },

  setup(prop, { emit }){
    const data = reactive({
      first_name: '',
      last_name: '',
      date_of_birth: null,
      message: '',
      email: '',
      phone_number: null,
      photo: ''
    })

    function register(){
      emit('save-data', data)
    }
    return{register}
  }
}
</script>