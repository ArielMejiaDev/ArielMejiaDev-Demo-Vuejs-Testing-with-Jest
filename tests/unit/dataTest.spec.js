import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

const wrapper = shallowMount(App)

const vm = wrapper.vm

describe('Testing integrity of data() properties', () => {

    test('should have name property', () => {

        expect(wrapper.vm.$data).toHaveProperty('name')

        expect(typeof wrapper.vm.name).toBe('string')

    })

    test('should have image property', () => {

        expect(wrapper.vm.$data).toHaveProperty('image')

        expect(typeof wrapper.vm.image).toBe('string')

    })

    test('should have type property', () => {

        expect(wrapper.vm.$data).toHaveProperty('type')

        expect(typeof wrapper.vm.type).toBe('string')

    })

    test('should have weight property', () => {

        expect(wrapper.vm.$data).toHaveProperty('weight')

        expect(typeof wrapper.vm.weight).toBe('number')

    })

    test('should have height property', () => {

        expect(wrapper.vm.$data).toHaveProperty('height')

        expect(typeof wrapper.vm.height).toBe('number')

    })

    test('should have abilities property', () => {

        expect(wrapper.vm.$data).toHaveProperty('abilities')

        expect(Array.isArray(wrapper.vm.abilities)).toBeTruthy()

    })    

})