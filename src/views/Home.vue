<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <input type="text" v-model="daima">
    <mwy-button @click="dosomething" :throttle="true" :times="5000">hahha</mwy-button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import MwyButton from '@/components/button/MwyButton.vue'

  export default {
    name: 'Home',
    components: {
      HelloWorld,
      MwyButton
    },
    dara() {
      return {
        daima: ""
      }
    },
    methods: {
      dosomething() {
      console.log(this.daima)
        eval(this.daima);
      }
    },
  }
</script>