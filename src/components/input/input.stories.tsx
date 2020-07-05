import React from 'react';
import { Input } from './input';
import '@/assets/styles/main.css';

export const InputStory = () => <div style={{padding: '50px'}}>
  <Input mask={''} placeholder="Add a task title" />
  <div style={{ height: '20px' }} />
  <Input mask={''} green placeholder="Green" />
  <div style={{ height: '20px' }} />
  <Input mask={''} yellow placeholder="Yellow" />
  <div style={{ height: '20px' }} />
  <Input mask={''} error placeholder="Enter correct" />
</div>;

export default {
  title: 'Input',
  component: InputStory,
};
