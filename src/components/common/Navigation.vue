<template>
<div class="leftbar">
  <div class="leftbar-interface">
    <el-menu
      class="el-menu-demo"
      mode="vertical"
      router
      backgroup-color="#fff"
      text-color="#000000"
    >
    <div v-for="(navItem, i) in navList" :key="i">
      <el-menu-item v-if="navItem.subMenu==null" :key="navItem.id" :index="navItem.url">
       <template slot="title">
         <span>{{ navItem.menuName }}</span>
       </template>
      </el-menu-item>
      <el-submenu v-if="navItem.subMenu" :key="navItem.id" :index="navItem.url">
        <template slot="title">
          <span>{{ navItem.menuName }}</span>
        </template>
        <el-menu-item v-for="subItem in navItem.subMenu" :key="subItem.id" :index="subItem.url">
          <span>{{ subItem.menuName }}</span>
        </el-menu-item>
      </el-submenu>
    </div>

    </el-menu>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      navList: JSON.parse(localStorage.getItem('menu'))
    }
  },
  handleSelect () {}
}
</script>

<style>
.leftbar{
  background:rgba(255,250,250);
  height:100vh;
  position:fixed;
  width:300px;
}
.leftbar-interface{
  margin-top:40%;
  padding-left:30px;
  padding-right:30px;
  font-size:20px;
  font-weight:normal;
  color:#000000;
}
</style>
