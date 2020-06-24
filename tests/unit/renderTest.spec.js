import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('Testing the correct rendering of elements', () => {



    const wrapper = mount(App)



    test('should render 2 sections', () => {

        expect(wrapper.find('.app-pokemon-main').exists()).toBeTruthy();

        expect(wrapper.find('.app-pokemon-main').is('section')).toBeTruthy();

        expect(wrapper.find('.app-pokemon-stats').exists()).toBeTruthy();

        expect(wrapper.find('.app-pokemon-stats').is('section')).toBeTruthy();

    })



    test('should render 1 img', () => {

        expect(wrapper.find('img').exists()).toBeTruthy();

        expect(wrapper.find('img').is('img')).toBeTruthy();

    })



    test('should render 2 p', () => {

        expect(wrapper.find('.pokemon-name').exists()).toBeTruthy();

        expect(wrapper.find('.pokemon-name').is('p')).toBeTruthy();

        expect(wrapper.find('#abilities').exists()).toBeTruthy();

        expect(wrapper.find('#abilities').is('p')).toBeTruthy();

    })



    test('should render 1 button', () => {

        expect(wrapper.find('button').exists()).toBeTruthy();

        expect(wrapper.find('button').is('button')).toBeTruthy();

    })



    test('should render 1 ul', () => {

        expect(wrapper.find('ul').exists()).toBeTruthy();

        expect(wrapper.find('ul').is('ul')).toBeTruthy();

    })



    test('should render 1 ul', () => {

        expect(wrapper.find('.component').exists()).toBeTruthy();

        console.log(wrapper.html())

    })

    

})