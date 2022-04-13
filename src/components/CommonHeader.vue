<template>
    <header>
        <div class="l-content">
            <h3 style="color: #fff">首页</h3>
        </div>
        <div class="r-content">
            <el-dropdown trigger="hover" size="medium">
                <span>
                    <img class="user" :src="userImg">
                </span>
                <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
export default{
    name: "CommonHeader",
    data(){
        return{
            userImg: require('../assets/images/ClubMark.png')
        }
    }
}
</script>

<style lang="less" scoped>
header {
    display: flex;
    height:100%;
    justify-content: space-between;
    align-items: center;
}
.l-content{
    display:flex;
    align-items: center;
}
.r-content{
    .user{
        width:40px;
        height:40px;
        border-radius: 50%;
    }
}

</style>