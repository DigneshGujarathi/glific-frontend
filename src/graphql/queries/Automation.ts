import { gql } from '@apollo/client';

export const GET_AUTOMATIONS = gql`
  {
    flows {
      id
      name
      shortcode
      uuid
    }
  }
`;

export const GET_AUTOMATION = gql`
  query getFlow($id: ID!) {
    flow(id: $id) {
      flow {
        id
        name
        shortcode
        uuid
      }
    }
  }
`;

export const GET_AUTOMATION_COUNT = gql`
  query countFlows($filter: FlowFilter!) {
    countFlows(filter: $filter)
  }
`;

export const FILTER_AUTOMATION = gql`
  query tags($filter: FlowFilter!, $opts: Opts!) {
    flows(filter: $filter, opts: $opts) {
      id
      name
      shortcode
      uuid
    }
  }
`;
