import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CellList from './components/cell-list';
import TextEditor from './components/text-editor';
import { store } from './state';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <CellList />
            </div>
        </Provider>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
