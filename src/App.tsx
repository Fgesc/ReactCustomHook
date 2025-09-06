import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';


function App() {

    const [value, setValue] = useLocalStorage('inputValue', '');
    
    const [count, setCount] = useLocalStorage('counter', 1);

    const [field, setField] = useLocalStorage<Record<string, string>>('savedFields' , {});

    const onClick = () => {
        if (!value.trim()) {
            return;
        }
        setField(prev => ({ ...prev, [count] : value}));
        setCount(prev => prev + 1)
        setValue('')
    };

    return (
        <>

            <div className='savedValues'>
                {Object.entries(field).map(([key, val]) => (
                    <p key={key}> Значение {key}: "{val}" </p>
                ))}
            </div>

            <div>
                <label style={{ marginRight: '10px' }} htmlFor="СохраненноеЗначение">Сохраненное значение:</label>
            </div>
            <div>
                {value}
            </div>

            <div className='flex'>
                <div>
                    <Input
                        id="СохраненноеЗначение"
                        value={value}
                        onChange={setValue}
                        maxLength={20}
                    />
                </div>

                <div>
                    <Button type="button" onClick={onClick}>Сохранить</Button>
                </div>    
            </div>

        </>
    );
}

export default App;
