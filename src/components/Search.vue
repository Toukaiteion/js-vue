<template>
<div id='main-interface'>
  <div class="barcenter">
    <el-input placeholder="搜索单词......" v-model="search_content">
        <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  <div id="searchList" class="search-list"></div>
</div>
</div>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      search_content: '',
      test: ''
    }
  },
  watch: {
    search_content: function (newContent, oldContent) {
      this.fuzzySearch()
    }
  },
  methods: {
    fuzzySearch () {
      // 返回值是函数，所以后面的括号注意不能少
      _.debounce(this.fuzzySeaechRequire, 1000)()
    },
    fuzzySeaechRequire () {
      alert(this.search_content)
    }
  }
}
</script>

<style>
@import '../../static/css/common.css';
.barcenter{
  margin-top:160px;
  margin-left:30%;
  width:40%;
}
.jpword{
  padding-top:10px;
  height:100%;
  white-space:nowrap;
  float:left;
}
.cnword{
  padding-top:10px;
  margin-left:20px;
  height:100%;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  float:left;
}
.speech{
  padding-top:10px;
  margin-left:20px;
  height:100%;
  white-space:nowrap;
  float:left;
}
.search-list{
  background:rgba(255,250,250,0.8);
  position:relative;
  display:none;
  max-height:300px;
  overflow:auto;
}
</style>
