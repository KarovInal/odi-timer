import React from 'react';
import { render } from 'react-dom';
import { App } from './app';
import '@/assets/styles/bootstrap-grid.css';
import '@/assets/styles/main.css';

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
const root = document.createElement('div');

root.id = 'root';
document.body.appendChild(root);

// Now we can render our application into it
render(<App />, document.getElementById('root'));
