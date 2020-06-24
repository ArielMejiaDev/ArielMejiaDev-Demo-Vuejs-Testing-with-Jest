import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import { mockService } from '../../public/mockCall';

const wrapper = mount(App)

const vm = wrapper.vm

describe('Fetching data from mock service', () => {

    test('Testing the data from resolved promise', () => {

        const data = {
            "mock": [
                {
                  "data": {
                    "name": "bulbasaur",
                    "height": 7,
                    "weight": 69,
                    "sprites": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                    "abilities": [
                      "chlorophyll","overgrow"
                    ],
                    "type": "poison"
                  }
                },
                {
                  "data": {
                    "name": "charmander",
                    "height": 6,
                    "weight": 85,
                    "sprites": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
                    "abilities": [
                      "solar-power","blaze"
                    ],
                    "type": "fire"
                  }
                },
                {
                  "data": {
                    "name": "squirtle",
                    "height": 5,
                    "weight": 90,
                    "sprites": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
                    "abilities": [
                      "rain-dish","torrent"
                    ],
                    "type": "water"
                  }
                }
              
            ]
        }

        expect.assertions(1)

        const response = mockService()

        expect(Promise.resolve(response)).resolves.toBe(data)

    })

})