<template>
<div class="loading" v-show="isLoading">
  <div id="caseBlanche">
    <div id="rond">
      <div id="test"></div>
    </div>
    <div id="load">
      <p>loading</p>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['isLoading']
};
</script>

<style>
  #caseBlanche {
    background-color : #fff;
    height : 140px;
    width : 150px;
    padding-top : 10px;
    position : relative;
    left: 50%;
    margin-left: -75px;
    top: 50px;
  }
  #caseBlanche #load {
    color : #c2c2c2;
    font-family : calibri;
    text-align : center;
    position : absolute;
    top : 55px;
    left :42px;
  }
  /****DEBUT TEST****/
  #test {
    height : 10px;
    width : 10px;
    position : absolute;
    background-color : #C2C2C2;
    border-radius : 50%;
    top : 10px;
    left : 10px;
  }

  #rond {
    height  : 100px;
    width : 100px;
    border : 1px solid #C2C2C2;
    border-radius : 50%;
    position :absolute;
    top : 20px;
    left : 15px;
    animation : rond 2s infinite;
    -webkit-animation : rond 2s infinite;
  }

  @keyframes rond {
    0% {transform : rotate(0deg);}
    100% {transform : rotate(360deg);}
  }

  @-webkit-keyframes rond {
    0% {-webkit-transform : rotate(0deg);}
    100% {-webkit-transform : rotate(360deg);}
  }
  /****FIN TEST****/

</style>
