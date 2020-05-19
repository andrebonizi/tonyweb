<template>
  <v-app>
  
    <v-toolbar elevation="0" fixed app>
      <v-toolbar-title>
        <div class="d-flex align-center">
          <v-img
            src="../public/img/logo.png"
            width="40"
          />
          <div style="padding-left: 10px; text-shadow: 0px 1px 2px">
            Anthony<br>Rosenberg
          </div>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn color="white" v-for="item in menu" :key="item.icon" :to="item.link">
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
      <v-menu offset-y transition="scroll-x-transition" >
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon v-on="on" class="hidden-md-and-up"></v-app-bar-nav-icon>
        </template>
        <v-list>
          <v-list-item
            v-for="(item) in menu"
            :key="item.icon"
            :to="item.link"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
        
      </v-menu>
      
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer dark color="darkgray">
      <v-container>
        <v-row>
          <v-col align="left">
            Anthony James Rosenberg
          </v-col>
          <v-col align="center">
            © {{ new Date().getFullYear() }}
          </v-col>
          <v-col align="right">
            Developed by André Bonizi
          </v-col>
        </v-row>
      </v-container>
      
    </v-footer>
  </v-app>
</template>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT:wght@700&display=swap');
</style> 
<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
      menu: [
        { icon: "home", title: "Home", link:"/"},
        { icon: "about", title: "About",link:"/about"},
        { icon: "services", title: "Services",link:"/services"},
        { icon: "contact", title: "Contact Me",link:"/contact"}
      ]
  }),
};
</script>
