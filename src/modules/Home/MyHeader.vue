<template>
    <header class="default-header" style=" padding-top:5px; padding-bottom:5px; ">
        <div class="container" >
          <div class="header-wrap">
            <div class="header-top d-flex justify-content-center ">
              <div class="logo">
                <div class="logo-adjusted"><a href="/index.html">
                  <img :src="logo" alt=""></a>
                </div>
                
              </div>
              <div class="main-menubar d-flex  align-items-center">
                <nav class="main-menubar-extended "
                  :class="{ 'd-none' : !isOpen }"
                >
                  <a id="first-mb" class="hide-menubar  " href="#home">Home</a>
                  <!-- <a class=" appoinment2 hide-menubar "  href="#appoinment">Appoinment</a>
                  <a class="hide-menubar" href="#consultant">Consult</a> -->
                  <a class="hide-menubar" href="Join.html">Profile</a>
                  <a   class="hide-menubar " href="/blog.html">Blog</a>
                  <a  class="hide-menubar  " href="#home">Jobs</a>
                  <a id="last-mb" class="hide-menubar  " href="#home">About</a>
                </nav>
                
                    
                   
                  <!-- <a id="back-to-bottom" href="#footer-text" class="btn btn-light btn-lg back-to-bottom" role="button"><i class="fa fa-chevron-down"></i></a> -->
              </div>
                  <div id="nav-icon1"  class="menu-bar" @click="isOpen = !isOpen"
                    :class="{
                      'open' : isOpen
                    }"
                  >                    
                    <span></span>
                    <span></span>
                    <span></span>
               </div>
            </div>
          </div>
        </div>
      </header>
</template>

<script> 
import logo from "@/assets/img/32Carelogo.png";
  
export default {
  components : {
  },
  data(){
    return {
      logo : logo,
      isOpen : false
    }
  }
}
</script>
<style lang="scss">

#nav-icon1 {
  width: 30px;
  height: 25px;
  position: absolute;
  margin: 30px auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
  right: 60px;


  span {
    display: block;
    position: absolute;
    height: 5px;
    width: 100%;
    background: #939393db;
    border-radius: 10px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }

  span:nth-child(1) {
    top: 0px;
    width: 50%;
  }

  span:nth-child(2) {
    top: 10px;
    width: 100%;
  }

  span:nth-child(3) {
    top: 20px;
    width: 75%;
  }

}

#nav-icon1.open {
  span:nth-child(1) {
    transform-origin: bottom;
    transform: rotatez(45deg) translate(0px,4px)
  }

  span:nth-child(2) {
    transform-origin: top;
    transform: rotatez(-45deg) translate(-4px,-4px);
  }

  span:nth-child(3) {
    transform-origin: bottom;
    width: 60%;
    transform: translate(6px,-7px) rotatez(45deg);
  }

}









</style>
