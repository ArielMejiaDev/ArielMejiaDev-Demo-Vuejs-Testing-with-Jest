// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import {huevo, espinaca} from  "./jestTest";

const wrapper = mount(App)

const vm = wrapper.vm

console.log(vm.$data)

describe('Se testeara la calidad de los productos', () => {

  test('Calidad del huevo', ()  => {
    expect(huevo().estado[0]).toBe('fresco')
  })

  test('Calidad de la espinaca', ()  => {
      expect(espinaca()).toEqual({
        estado: 1,
        color: "verde"
      })
  })

  describe('Probar que se cambió la propiedad changeTest ', () => {

    test('should click a button', () => {

    const lastValue = wrapper.vm.changeTest 
    // obtiene el valor de la propiedad "changeTest" de un componente, esta propiedad puede venir de data

    wrapper.find('button').trigger('click')
    // find retorna el primer elemento del tipo que se envia en el string, 
    // trigger lanza el evento del tipo del string en el componente que retorno find

    expect(wrapper.vm.changeTest).toBe(lastValue+1)
    // espera que la propiedad del componente "changeTest" ahora sea igual a el valor de changeTest mas uno

  })

})

})