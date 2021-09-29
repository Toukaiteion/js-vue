<template>
  <div id='app'>
    <topbar v-if="$route.path !== '/login'"></topbar>
    <navigation v-if="$route.path !== '/login'"></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/common/Navigation.vue'
import Topbar from './components/common/Topbar.vue'
export default {
  components: { Navigation, Topbar },
  name: 'App'
}
</script>

<style>
@import '../static/css/common.css';
</style>
