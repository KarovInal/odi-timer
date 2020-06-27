import React from 'react';
import { Input } from './input';
import '../../main.css';

export const InputStory = () => <div style={{padding: '50px'}}>
  <Input placeholder="Add a task title" />
  <div style={{ height: '20px' }} />
  <Input green placeholder="Green" />
  <div style={{ height: '20px' }} />
  <Input yellow placeholder="Yellow" />
  <div style={{ height: '20px' }} />
  <Input error placeholder="Enter correct" />
</div>;

export default {
  title: 'Input',
  component: InputStory,
};
