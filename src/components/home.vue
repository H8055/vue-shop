<template>
    <div>
        <NavBar/>
        <div class="search-box">
         <input 
          type="text" 
          class="search-bar" 
          placeholder="Search"
          
        />
        </div>
        <div class="main-banner">
            <img src="../assets/main.webp" alt="img">
        </div>
        <div>
          <ProductList/>
        </div>
        
    </div>
    
</template>

<script>
import ProductList from './productList.vue';
import NavBar from './navBar.vue';
// import Cart from './cart.vue';





export default {
  name: 'HomePage',
  components: {
    ProductList,
    NavBar
}
}
</script>
<style>
    .search-box {
  width: 100%;
  margin-bottom: 10px;
  padding-top: 20px;
  padding-left: 50px ;
  padding-right: 50px ;
}
.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  
  color: #313131;
  font-size: 20px;
  appearance: none;
  border:none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}
.main-banner{
    width: 100%;
    padding: 50px;

}
.main-banner img {
    width: 100%;
    margin: auto;

}
</style>