import React from 'react';
import c from "../App.module.css";
import {FullButton} from "./FullButton";

type propsType = {

    changeWindow: () => void
    counter: string
    addCounter: () => void
    setMin: ()=>void
    disButInc:boolean
}

export const Counter: React.FC<propsType> = ({changeWindow, counter,addCounter,setMin,disButInc, ...restProps}) => {
    const changeWindowHandler = () => {
        changeWindow()
    }
    const addCounterHandler = () => {
        addCounter()
    }

    const setMinHandler = () => {
        setMin()
    }

    return (
        <div className={c.Window}>
            <h3>Counter</h3>
            <div className={c.Window_min_max}>
                <h1 style={disButInc ? {color:"red"}:{color:"white"}}>{counter}</h1>
            </div>
            <div className={c.Window_min_max}>
                <FullButton title={'INC'} callBack={addCounterHandler} disBut={disButInc}/>
                <FullButton title={'RESET'} callBack={setMinHandler}/>
                <FullButton title={'SET'} callBack={changeWindowHandler}/>
            </div>
        </div>
    );
};
