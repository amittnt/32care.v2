<template>
    <form role="form" name="searchForm" class="row " style="margin-top: 15px;">
        <div class="form-group col-4 col-md-3 row" style="padding-right: 0px;" >
          <input class="col" style="border: none; outline: none;" type="text"  id="searchBox" name="searchBox" minlength="1" placeholder="Location" required="" autocomplete="off" data-toggle="dropdown" >
          <div class="dropdown-menu dropdown-height" aria-labelledby="select-location">
                <ul>
                <li><a href="">All Locations</a></li>
                <li><a href="">Delhi</a></li>
                <li><a href="">Haryana</a></li>
                <li><a href="">Punjab</a></li>
                <li><a href="">Utter Pradesh</a></li>
                <li><a href="">Jammu & Kashmir</a></li>
                </ul>
                 </div>
          
        </div>
        
         <div class="form-group col row" style="padding-left: 0px; " >
          <input class="col" style="border-width: 0px 0px 0px 3px; border-color: aqua;outline: none;" type="text"  id="searchBox" name="searchBox" minlength="1" placeholder="Type   a   Dentist  or  Clinic's  Name" required="" autocomplete="off">
           <button   type="button" style="background-color: #38959d;color: white;outline: none;    border: none;cursor: pointer;"><i class="fa fa-search search-style-icon" ></i>
           </button>
        </div>
      </form>
</template>

<script> 

export default {
  components : {
  },
  data(){
    return {

    }
  }
}
</script>
<style>

</style>
