// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import first from 'components/first/first.vue';
import products from './components/products/products.vue';
import ordering from './components/ordering/ordering.vue';
import customer from './components/customer/customer.vue';
import personal from './components/personal/personal.vue';
import productarr from './components/products-array/productarray.vue';
import productsearch from './components/products-search/productsearch.vue';
import productclass from './components/product-class/productclass.vue';
import productdetail from './components/product-detail/product-detail.vue';
import productrb1 from './components/product-detail/product-rb1.vue';
import signin from './components/signin/signin';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false;

const routes = [
  { path: '/first', component: first },
  { path: '/products', component: products },
  { path: '/ordering', component: ordering },
  { path: '/customer', component: customer },
  { path: '/personal', component: personal },
  { path: '/productarr/:id', name: 'productarr', component: productarr },
  { path: '/productsearch', name: 'productsearch', component: productsearch },
  { path: '/productclass/:id', name: 'productclass', component: productclass },
  { path: '/productdetail/:id', name: 'productdetail', component: productdetail },
  { path: '/productrb1', name: 'productrb1', component: productrb1 },
  { path: '/signin', name: 'signin', component: signin },
  { path: '*', redirect: '/first' }
];

var router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'sel-color'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

