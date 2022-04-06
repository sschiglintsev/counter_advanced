import React from 'react';
import c from './App.module.css'

function App() {
    return (
        <div className={c.App}>
            <div className={c.Up}>
                COUNTER
            </div>
            <div className={c.Window}>
                <div className={c.Window_min_max}>
                    <input/>
                    <button>MIN</button>
                </div>
                <div className={c.Window_min_max}>
                    <input/>
                    <button>MAX</button>
                </div>
            </div>
            <div className={c.Window}>
                <div className={c.Window_min_max}>
                    <input/>
                </div>
                <div className={c.Window_min_max}>
                    <button>INC</button>
                    <button>SET</button>
                </div>
            </div>

        </div>

    )
}

export default App;
