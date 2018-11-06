import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Third_page from './Sections/Third_page';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Third_page/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
