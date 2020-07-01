import Vue from 'vue'

export default function create (Component,props) {
  // export const toastFn = (Component,props) =>{
  // 创建实例
  const vm = new Vue({
    // h 函数 渲染vnode 也就是虚拟dom
    // render:h=>h(Component,{props})
    render(h){
      return h(Component,{props})
    }
  }).$mount();

  //挂在到当前实例下
  const comp = vm.$children[0]
  console.log(vm.$children)
  // 手动挂载到body
  document.body.appendChild(comp.$el)
  
  // 销毁组件
  comp.remove = () =>{
    document.body.removeChild(comp.$el);
    vm.$destroy();
  }
  return comp
}