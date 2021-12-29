<template>
  <div class="uk-section-primary">
  <nav class="uk-navbar-container uk-margin uk-navbar-transparent uk-light" uk-navbar="mode: click">
    <div class="uk-navbar-left">

        <ul class="uk-navbar-nav">
            <li class="uk-active">
              <router-link to="/">Home</router-link>
            </li>
            <li class="uk-active">
              <router-link to="/clients">Clients</router-link>
            </li>
        </ul>
        
    </div>
  </nav>
  </div>
  <div class="uk-padding">
    <router-view></router-view>
  </div>

  <br/>
  <br/>
</template>

<script>

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

export default {
  name: 'App'
}
</script>

<style>
@import "../node_modules/uikit/dist/css/uikit.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

}
</style>
