<template>
  <div class="hello">
    <div @click="add">add</div>
  </div>
</template>

<script>
import toast from '../components/toast.vue'
import toastFn from '../utils/create.js'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    add(){
      let mmmm = toastFn(toast,{
        title:'测试',
        message:'ertyuiop',
        time:2000
      })
      mmmm.show()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
