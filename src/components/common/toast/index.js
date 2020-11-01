import Toast from './Toast'
const obj = {}

obj.install = function (Vue) {
    //1.创建组件构造器
    const toastConstructor = Vue.extend(Toast)
    //2.以实例化的方式，根据组件构造器，创建一个组件对象
    const toast = new toastConstructor()
    //3.将组件对象手动挂载到指定元素上
    toast.$mount(document.createElement('div'))
    //4.挂载到元素后，就可通过toast.$el获取到其元素
    document.body.appendChild(toast.$el);

    //只将Toast对象添加到Vue原型中的$toast,没有生成模板,需要手动挂载
    //需要将用组件构造器完成挂载元素的对象加到原型上
    /* Vue.prototype.$toast = Toast; */
    Vue.prototype.$toast = toast;
}
export default obj