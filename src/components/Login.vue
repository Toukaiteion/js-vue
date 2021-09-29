
<template>
    <div class="container">
      <form class="form-signin">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="text" name="username" v-model="loginForm.userName" class="form-control" placeholder="user name" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" name="password" v-model="loginForm.password" class="form-control" placeholder="Password" required>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <div v-show="log_err" style="color:red;margin-top:-10px">{{log_err_content}}</div><br>
        <input type="button" class="btn btn-primary" value="Sign in" @click="login"/>
      </form>
    </div>
</template>

<script>
import {initMenu} from '../router/routes-init'
export default {
  name: 'Login',
  data () {
    return {
      client_id: 'jstudy-client',
      client_sercet: 'jstudy-client-1201',
      scope: 'all',
      grant_type: 'password',
      get_token_url: '/oauth-server/oauth/token',
      get_router_url: '/zuul-server/js-user/v1/user/user-menu/',
      loginForm: {
        userName: '',
        password: ''
      },
      log_err: false,
      log_err_content: ''
    }
  },
  methods: {
    login () {
      if (this.loginForm.userName === '' || this.loginForm.password === '') {
        alert('账号密码为空')
      } else {
        this.axios({
          url: this.get_token_url,
          method: 'post',
          data: {
            username: this.loginForm.userName,
            password: this.loginForm.password,
            scope: this.scope,
            grant_type: this.grant_type
          },
          transformRequest: [function (data) {
            var omyform = new FormData()
            omyform.append('username', data.username)
            omyform.append('password', data.password)
            omyform.append('scope', data.scope)
            omyform.append('grant_type', data.grant_type)
            return omyform
          }],
          auth: {
            username: this.client_id,
            password: this.client_sercet
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(res => {
          this.UserToken = 'Bearer ' + res.data.access_token
          this.$store.commit('setToken', this.UserToken)
          this.$store.commit('setUsername', this.loginForm.userName)
          this.generate_router()
        }).catch(error => {
          console.log(error)
          if (error.response.data.error_description === '用户名或密码错误') {
            this.log_err_content = error.response.data.error_description
            this.log_err = true
          }
        })
      }
    },
    generate_router () {
      this.axios.get(this.get_router_url + this.loginForm.userName).then(menu => {
        initMenu(this.$router, menu.data.data.menu)
        this.$router.push('/search')
      })
    }
  },
  created () {
    this.$parent.showNav = false
  }
}

</script>

<style>
body{
    background-color: #eee;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}
.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    width: 1170px;
}
.form-signin {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
}
</style>
