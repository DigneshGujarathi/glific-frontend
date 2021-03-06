import React, { useState } from 'react';

import { Input } from '../../../components/UI/Form/Input/Input';
import { EmojiInput } from '../../../components/UI/Form/EmojiInput/EmojiInput';
import { ListItem } from '../../List/ListItem/ListItem';
import { GET_TEMPLATE } from '../../../graphql/queries/Template';
import {
  CREATE_TEMPLATE,
  UPDATE_TEMPLATE,
  DELETE_TEMPLATE,
} from '../../../graphql/mutations/Template';

const setValidation = (values: any) => {
  const errors: Partial<any> = {};
  if (!values.label) {
    errors.label = 'Message title required';
  } else if (values.label.length > 50) {
    errors.label = 'Length of the title is too long';
  }
  if (!values.body) {
    errors.body = 'Mesaage body required';
  }
  return errors;
};

const dialogMessage = ' It will stop showing when you are drafting a customized message.';

const formFields = [
  { component: Input, name: 'label', placeholder: 'Title' },
  { component: EmojiInput, name: 'body', placeholder: 'Message', rows: 5, textArea: true },
];

const defaultAttribute = {
  type: 'TEXT',
};

const queries = {
  getItemQuery: GET_TEMPLATE,
  createItemQuery: CREATE_TEMPLATE,
  updateItemQuery: UPDATE_TEMPLATE,
  deleteItemQuery: DELETE_TEMPLATE,
};

export interface TemplateProps {
  match: any;
  listItemName: string;
  redirectionLink: string;
  icon: any;
  defaultAttribute?: any;
}

const Template: React.SFC<TemplateProps> = (props) => {
  const [label, setLabel] = useState('');
  const [body, setBody] = useState('');

  const states = { label, body };
  const setStates = ({ label, body }: any) => {
    setLabel(label);
    setBody(body);
  };

  let attributesObject = defaultAttribute;
  if (props.defaultAttribute) {
    attributesObject = { ...attributesObject, ...props.defaultAttribute };
  }

  return (
    <ListItem
      {...queries}
      match={props.match}
      states={states}
      setStates={setStates}
      setValidation={setValidation}
      listItemName={props.listItemName}
      dialogMessage={dialogMessage}
      formFields={formFields}
      redirectionLink={props.redirectionLink}
      listItem="sessionTemplate"
      icon={props.icon}
      defaultAttribute={attributesObject}
    />
  );
};

export default Template;
