<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-menu-item @click='clickMenu(item)' v-for='item in menu' :index="item.path" :key="item.path">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="less" scope>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
  height:100vh;
  border : none;
  h3{
    color:#fff;
    text-align: center;
    line-height: 48px
  }
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      menu:[
          {
            path:'/',
            name:'HomePage',
            label:'个人主页',
            icon:'s-home',
            url: 'Home/Home'
          },
          {
            path:'/anime',
            name:'AnimePage',
            label:'番剧',
            icon:'film',
            url:'Anime/Anime'
          },
          {
            path:'/user',
            name:'UserPage',
            label:'用户信息',
            icon:'user',
            url:'UserManage/UserManage'
          },
          { 
            path:'/article',
            name:'ArticlePage',
            label:'其他',
            icon:'location',
            url:'Article/Article'
            
          }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item){
        this.$router.push({
            name:item.name
        })
    }
  }
};
</script>