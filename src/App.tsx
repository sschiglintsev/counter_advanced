import React, {ChangeEvent, useEffect, useState} from 'react';
import c from './App.module.css'
import {Settings} from "./Components/Settings";
import {Counter} from "./Components/Counter";

function App() {


    const [counter, setCounter] = useState<string>('0')

    useEffect(() => {
        const newMinValue = localStorage.getItem('minValue')
        if (newMinValue) {
            setCounter(JSON.parse(newMinValue))
        } else {
            localStorage.setItem('minValue', JSON.stringify(counter))
        }
    }, [])

    useEffect(() => {
        const newMinValue = localStorage.getItem('minValue')
        const newMaxValue = localStorage.getItem('maxValue')
        if (newMinValue && newMaxValue) {
            setMinValue(JSON.parse(newMinValue))
            setMaxValue(JSON.parse(newMaxValue))
        } else {
            localStorage.setItem('minValue', JSON.stringify(minValue))
            localStorage.setItem('maxValue', JSON.stringify(maxValue))
        }
    }, [])


    const addCounter = () => {
        const Value = localStorage.getItem('maxValue')
        if (Value) {
            const maxValue = JSON.parse(Value)
            const newCounter = JSON.parse(counter) + 1
            setCounter(JSON.parse(counter) + 1 > maxValue ? JSON.parse(counter) : JSON.parse(counter) + 1)  //
            {
                newCounter >= maxValue ? setdisButInc(true) : setdisButInc(false)
            }
        } else {
            setCounter(JSON.parse(counter) + 1)

        }
    }

    const setMinMaxValue = () => {
        console.log(minValue)
        setCounter(minValue)
    }

    useEffect(() => {
        localStorage.getItem('minValue')
        localStorage.getItem('maxValue')
    }, [counter])


    const setMin = () => {
        const newMinValue = localStorage.getItem('minValue')
        if (newMinValue) {
            setCounter(JSON.parse(newMinValue))
            setdisButInc(false)
        }
    }

    const [control, setControl] = useState(false)

    const changeWindow = () => {
        setControl(!control)
    }

    const [maxValue, setMaxValue] = useState('10')

    const setValueMax = (e: string) => {

        const newMinValue = localStorage.getItem('minValue')
        if (newMinValue) {
            if (e < (JSON.parse(minValue))) {
                setdisButSet(true)
            } else {
                localStorage.setItem('maxValue', e)
                setMaxValue(e)
                setdisButSet(false)
            }
        }


    }

    const [minValue, setMinValue] = useState('0')

    const setValueMin = (e: string) => {
        const newMaxValue = localStorage.getItem('maxValue')
        if (newMaxValue) {
            if (e > (JSON.parse(maxValue))) {
                setdisButSet(true)
            } else {
                localStorage.setItem('minValue', e)
                setMinValue(e)
                setdisButSet(false)
            }
        }


    }

    const [disButInc, setdisButInc] = useState(false)
    const [disButSet, setdisButSet] = useState(false)


    return (
        <div className={c.App}>
            <div className={c.header}>
                COUNTER
            </div>
            {
                control ?
                    <Settings changeWindow={changeWindow}
                              setMinMaxValue={setMinMaxValue}
                              setValueMax={setValueMax}
                              setValueMin={setValueMin}
                              valueInputMax={maxValue}
                              valueInputMin={minValue}
                              disButSet={disButSet}/>
                    :
                    <Counter changeWindow={changeWindow}
                             counter={counter}
                             addCounter={addCounter}
                             setMin={setMin}
                             disButInc={disButInc}
                    />
            }


        </div>

    )
}

export default App;
