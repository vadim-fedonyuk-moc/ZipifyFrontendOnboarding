import { shallowMount } from '@vue/test-utils';
import Header from "../../app-frontend/packs/components/homePage/header/Header";

describe('component Button', () => {
  const wrapper = shallowMount(Header, {
    props: {
      type: 'button'
    }
  });

  it('test button', () => {
    expect(wrapper.find('.ba-header__create').exists()).toBe(true);
  });

  it('trigger button', () => {
    wrapper.find('.ba-header__create').trigger('click');
  });
});
