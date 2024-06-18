
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Sandwich from './components/Sandwich';
import Counter from './components/Counter';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Sandwich />
      <Counter />
    </div>
  </Provider>,
  document.getElementById('root')
);
