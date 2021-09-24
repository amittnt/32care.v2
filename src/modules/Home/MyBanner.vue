<template>
  <section class="banner-area relative" id="home" style="background-color: white; padding-top: 120px;">
        <div class="container">
            <div class="row justify-content-center " >
              
              <img  src="img/image-asset.jpeg" class=" d-md-block d-lg-none" style="max-height: 100%; max-width: 100%; max-height: 100%; max-width: 100%;    position: absolute;    height: 300px;    bottom: 0px;" />
              <div class="banner-content col-lg-6 col-md-12" style="position: relative; text-align: center;">
                <h1 class="text-uppercase banner-header">
                      World Wide  
                      Dentists
                </h1>
                <p>
                  Find   
                </p>

                <button v-b-modal.reg  id="myBtn" class="find" style="outline: none; ">Dentist</button>

                
              </div>
              
              <div class="col-lg-6 d-flex align-self-end img-right  " style="align-self: flex-end center; " >
                <img class="img-fluid d-none  d-md-none d-lg-block" src="@/assets/img/image-asset.jpeg" />
              </div>
              
            </div>
        </div>
      

      <!-- MODAL  --> 
      <b-modal id="reg" title="BootstrapVue" size="xl"
        hide-header  hide-footer>
          <!-- Modal content -->
            <MyDentFind></MyDentFind>
            <div class="close-find">&times;</div>
      </b-modal>

  </section>
</template>


<style>


</style>
