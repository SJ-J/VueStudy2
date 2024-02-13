<template>
  <div>
    <!-- nav bar -->
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <!-- 로고 출처 : https://under30km.postype.com/post/14193382 --> 
          <router-link to="/"><a class="navbar-brand" href="#"><img src="./assets/npius_logo.png"></a></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/list">
                  <a class="nav-link" href="#">Notice</a>
                </router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    
      <!-- main -->
      <!-- <router-view :home="home"></router-view> ◀이거안써도됨!!!!! -->
      <!-- <div class="container mt-4">
        <h4> North Pacific International Undersea Station </h4>
        <p> 모든 임직원의 안전한 북태평양해저기지 생활을 응원합니다. </p>
      </div>
    <button type="button" class="btn btn-secondary">Diving! 👉</button> -->
    
    
    <!-- board list -->
    <div class="contentsBody">
      <router-view :contents="contents"></router-view>
      <!-- <BoardList :contents="contents" /> -->

      <router-link to="/">
        <button type="button" class="btn btn-primary">NPIUS</button>
      </router-link>
      <router-link to="/list">
        <button type="button" class="btn btn-secondary">Diving! 👉</button>
      </router-link>
    </div>
  </div>   
  </template>
  
  <script>
  
  // components import
  import boardContents from './assets/contents.js';
  // import BoardList from './components/BoardList.vue';
  
  export default {
    name: 'App',
    components: {
      // BoardList: BoardList,
    },
    data() {
      return {
        contents : boardContents,
      }
    },
  }
  </script>
  
  <style>
  #app {
    font-family: "Open Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  </style>
  