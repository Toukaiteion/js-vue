<template>
    <nav class="navbar navbar-inverse navbar-fixed-top topbar">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">JStudy</a>
        </div>
        <el-dropdown>
          <el-button type="default" circle>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><li><a href="#">{{ username }}</a></li></el-dropdown-item>
            <el-dropdown-item><li><a href="#">exit</a></li></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      username: localStorage.getItem('username')
    }
  }
}
</script>

<style>
.nav-active{
  background-color: #c7dee8;
}
.topbar{
  background-color: #020a0aab;
}
.right{
  padding-right: 40px;
}
</style>
