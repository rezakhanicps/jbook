import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TextEditor from './components/text-editor';
import { store } from './state';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <TextEditor />
            </div>
        </Provider>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
