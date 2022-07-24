import React, {useState, useEffect} from 'react';
import axios from 'axios'
const App = () => {
    const [textState, setTextState] = useState('')
    
    // send term code
    const sendTermToBackend = async (term) => { 
        console.log('Sending ' + term + ' ...')
        const response = await axios.get(`http://localhost:8080/api/classes`, {
            params: { 
                term
            }
        })
        console.log(response)
    }
    useEffect(() => { 
        if(textState) { 
            sendTermToBackend(textState)
        }
    }, [textState]
    );
    // ping server code
    useEffect(() => { 
        pingServer();
    }, []);
    const pingServer = async () => { 
        console.log('Pinging server ...')
        const response = await axios.get('http://localhost:8080/api/ping')
        console.log('Ping Sent')
        console.log(`Value of ping 'success' is ${response.data.success}`);
    }
    return (
        <div className="App">
            <h2>App</h2>
            <Search textState={textState} setTextState={setTextState}/> 
        </div>
    )
};

const Search = ({textState, setTextState}) => {
    return (
        <div className="Search">
            <input 
            type="text"
            value={textState} 
            onChange={(e) => setTextState(e.target.value)} 
            />
        </div>
    )
}


export default App;
