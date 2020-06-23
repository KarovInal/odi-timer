import React from 'react';
import { Input } from './input';
import '../../main.css';

export const InputStory = () => <div style={{padding: '50px'}}>
  <Input placeholder="Add a task title" />
</div>

export default {
  title: 'Input',
  component: InputStory,
};
