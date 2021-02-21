import React from 'react';
import TextMessageComponent from './index';

export default {
  component: TextMessageComponent,
  title: 'Components/Text Message',
};

const props = { text: "there's nothing here! :/" };

export const TextMessage = () => <TextMessageComponent {...props} />;
