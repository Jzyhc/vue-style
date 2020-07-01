<template>
  <div class="hello" v-if='isShow'>
    {{isShow}}
    {{title}}
    {{message}}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default:()=>{ return ''}
    },
    message: {
      type: String,
      default:()=>{ return ''}
    },
    time: {
      type: Number,
      default:()=>{ return 3000}
    },
  },
  data(){
    return {
      isShow:false,
    }
  },
  methods: {
    show(){
      this.isShow = true
      setTimeout(()=>{ 
        this.hide()
      },this.time)
    },
    hide(){
       this.isShow = false
       this.remove()
    }
  }
}
</script>

<style scoped lang="less">

</style>
