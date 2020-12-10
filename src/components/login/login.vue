<template>
  <div class="login">
    <div class="loginBig">
      <div class="context">
        <div class="from">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="70px"
          >
            <el-form-item label="用户：" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
              <el-input v-model="ruleForm.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
              <input
                type="button"
                value="登录"
                class="loginhBtn"
                @click="logingo"
              />
            </el-form-item>
            <el-form-item>
              <input
                type="button"
                value="注册"
                class="registerBtn"
                @click="loginreg"
              />
            </el-form-item>
          </el-form>
          <div class="signWay">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-qq"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weibo"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weixin"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/font/iconfont.js";                  
export default {
  created() {},
  data() {
    return {
      rules: {
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 5,
            max: 12,
            message: "长度在 5 到 12 个字符",
            trigger: "blur",
          },
        ],
      },
      ruleForm: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    loginreg() {
      this.$refs.ruleForm.validate(async (validate) => {
        if (validate) {
          const { data: res } = await this.$http.post(
            "/user/add",
            this.ruleForm
          );
          console.log(res);
          if (res.status === 200) {
            this.$message.success("注册成功");
          }
        }
      });
    },
    logingo() {
      this.$refs.ruleForm.validate(async (validate) => {
        if (validate) {
          const { data: res } = await this.$http.post(
            "/user/search",
            this.ruleForm
          );
          console.log(res);
          if (res.meta.status === 200) {
            this.$message.success("登录成功");
            this.$router.push("/context");
           this.$store.state.appear = false;
          } else {
            this.$message.error("没有匹配用户");
          }
        }
      });
    },
  },
};
</script>
<style scoped>
.loginBig {
  padding-bottom: 150px;
  width: 1184px;
  height: 625px;
  margin: 0 auto;
}
.context {
  position: relative;
  height: 100%;
  background: url(https://static3w.kuaikanmanhua.com/static-kkfront-pc/image/web_bg.8bc5698.png)
    170px 100px no-repeat;
}
.from {
  width: 300px;
  position: absolute;
  right: 14%;
  top: 45%;
}
.el-form {
  position: relative;
  width: 280px;
  height: 254px !important;
  top: -100px;
  left: -60px;
}
.loginhBtn {
  width: 100%;
  height: 32px;
  background-color: #fce13d;
  outline: 0;
  border: 0;
  border-radius: 16px;
  cursor: pointer;
  font-size: 100%;
}
.registerBtn {
  width: 100%;
  height: 32px;
  outline: 0;
  border: 0;
  border-radius: 16px;
  cursor: pointer;
  font-size: 100%;
}
.signWay {
  width: auto;
  border-bottom: none;
  margin-left: 50px;
  position: relative;
  height: 46px;
  padding-top: 15px;
  top: -120px;
  left: -10px;
}
</style>
