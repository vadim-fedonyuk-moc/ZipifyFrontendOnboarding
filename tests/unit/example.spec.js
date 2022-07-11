import { shallowMount } from '@vue/test-utils'
import Header from "../../app-frontend/packs/components/homePage/header/Header";

describe('Header.vue', () => {
  it('include div', () => {
    const wrapper = shallowMount(Header)

    expect(wrapper.find('div'))
  })
})
