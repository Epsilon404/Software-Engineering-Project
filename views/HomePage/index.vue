<template>
  <el-row class="home" :gutter="20">
    <el-row :span="20" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <p class="icon"><img :src="userImg" /></p>
          <el-button
            type="primary"
            icon="el-icon-picture-outline"
            style="margin-left: 20px"
            >上传头像</el-button
          >
        </div>
        <div class="userinfo">
          <p class="name">
            用户ID: Admin
            <el-button
              type="primary"
              icon="el-icon-edit"
              style="margin-left: 20px"
              >编辑用户名</el-button
            >
          </p>
        </div>

        <div>
          <el-divider></el-divider>
          <p class="userAccount">账号: PhoenixACG@link.cuhk.edu.com</p>
          <el-divider></el-divider>
          <p class="userPassword">
            密码: 52@Ereshkigal
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              style="margin-left: 20px"
              >编辑密码</el-button
            >
          </p>
        </div>
      </el-card>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      userImg: require("../../src/assets/images/ClubMark.png"),
    };
  },
};
</script>