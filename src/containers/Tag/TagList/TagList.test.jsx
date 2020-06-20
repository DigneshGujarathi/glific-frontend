import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import { GET_TAGS } from '../../../graphql/queries/Tag';
import { Button } from './../../../components/UI/Form/Button/Button';
import { TagList } from './TagList';
import waitForExpect from 'wait-for-expect';
import { TableContainer } from '@material-ui/core';

const mocks = [
  {
    request: {
      query: GET_TAGS,
    },
    result: {
      data: {
        tags: [{ id: 1, label: 'Buck', description: 'bulldog' }],
      },
    },
  },
];

describe('<TagList />', () => {
  it('renders <Taglist /> component', () => {
    const wrapper = shallow(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router>
          <TagList />
        </Router>
      </MockedProvider>
    );

    expect(wrapper.exists()).toEqual(true);
  });

  it('should render Button component with text', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router>
          <TagList />
        </Router>
      </MockedProvider>
    );
    await waitForExpect(() => {
      wrapper.update();
      expect(wrapper.find('Button').exists()).toEqual(true);
      expect(wrapper.find('Button').text()).toEqual('New Tag');
    });
  });

  it('should render TableContainer', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router>
          <TagList />
        </Router>
      </MockedProvider>
    );
    await waitForExpect(() => {
      wrapper.update();
      expect(wrapper.find(TableContainer).exists()).toEqual(true);
    });
  });
});
