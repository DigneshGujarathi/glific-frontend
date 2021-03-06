import React from 'react';
import { mount } from 'enzyme';
import { FlowEditor } from './FlowEditor';
import { MemoryRouter } from 'react-router-dom';

const wrapper = mount(
  <MemoryRouter>
    <FlowEditor match={{ params: { uuid: 'd3223dvfdfddffdknf' } }} />
  </MemoryRouter>
);

test('it should display the flowEditor', () => {
  expect(wrapper.find('#flow').exists()).toBe(true);
});

test('it should have a done button that redirects to automation page', () => {
  expect(wrapper.find('[data-testid="button"]').exists()).toBe(true);
});

test('it should have a help button that redirects to help page', () => {
  expect(wrapper.find('[data-testid="helpButton"]').exists()).toBe(true);
  wrapper.unmount();
});
