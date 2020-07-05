import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { P12Bold as P12BoldComp } from './p12bold';
import { P14 as P14Comp } from './p14';
import { P12Grey as P12GreyComp } from './p12grey';
import '@/assets/styles/main.css';

export const P12Bold = () => (
  <P12BoldComp>
    {text('Text', 'Preferences')}
  </P12BoldComp>
);

export const P14 = () => (
  <P14Comp>
    {text('Text', 'Idle notification')}
  </P14Comp>
);

export const P12Grey = () => (
  <P12GreyComp>
    {text('Text', 'You will be notified when the optimistic time limit expires and when you exceed the pessimistic time limit')}
  </P12GreyComp>
);

export default {
  title: 'Paragraphs',
  decorators: [withKnobs],
  parameters: {
    backgrounds: [
      { name: 'default', value: '#11141B', default: true },
    ]
  },
  component: P12Bold,
};
