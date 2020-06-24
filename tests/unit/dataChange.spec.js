import { mount } from '@vue/test-utils'
import App from '@/App.vue'

const wrapper = mount(App)




describe('should change pokemon data', () => {

    // get values from Ui elements that change by pressing button

    const nameTag = wrapper.find('.pokemon-name')

    const lastNameValue = nameTag.text()
    
    const imgTag = wrapper.find('img')
    
    const lastImgValue = imgTag.attributes().src
    
    const typeTag = wrapper.find('#type')
    
    const lastTypeValue = typeTag.text()
    
    const weightTag = wrapper.find('#weight')
    
    const lastWeightValue = weightTag.text()
    
    const heightTag = wrapper.find('#height')
    
    const lastHeightValue = heightTag.text()
    
    const abilitiesTag = wrapper.find('ul')
    
    const lastAbilitiesValue = abilitiesTag.text()

    const btn = wrapper.find('button') // getting the button from the component

    btn.trigger // simulating the click event

    test('should change name', async () => {

        expect(nameTag.text()).not.toContain('name')

        await wrapper.vm.$nextTick() // expect the next value after the button event - click line 39

        .then(()=>{expect(nameTag.text()).not.toBe(lastNameValue)}) // test that the value of name tag is not the same because it changes

    })



})