<template>
<!-- template中定义html代码 -->
  <div>
    <!-- <element-view></element-view> -->
  <!-- <emp-view></emp-view> -->
  <router-view></router-view>
  <!-- 通过router-view动态选择展示组件,依据router/index.js -->
  </div>
</template>

<script>
// import ElementView from './views/Element/ElementView.vue'
// // script中定义js代码
// export default{
//   components: { ElementView },
//   data(){
//     return{
//       message: 'Hello Vue!'
//     }
//   },
//   methods:{
    
//   }
// }
// import EmpView from './views/Sample/EmpView.vue'

export default{
  // components: { EmpView },
  data(){
    return{
      message: 'Hello Vue!'
    }
  },
  methods:{
    
  }
}
</script>

<style>

</style>
