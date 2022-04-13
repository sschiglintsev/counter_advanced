import React, {ChangeEvent} from 'react';
import c from "../App.module.css";
import {FullButton} from "./FullButton";
import {FullInput} from "./FullInput";

type propsType = {
    changeWindow: () => void
    setMinMaxValue: () => void
    setValueMin: (e: string) => void
    setValueMax: (e: string) => void
    valueInputMax: string
    valueInputMin: string
    disButSet:boolean
}

export const Settings: React.FC<propsType> = ({
                                                  changeWindow, setMinMaxValue,
                                                  setValueMin, setValueMax,
                                                  valueInputMax, valueInputMin,
                                                  disButSet, ...restProps
                                              }) => {

    const changeWindowHandler = () => {
        changeWindow()
        setMinMaxValue()
    }

    return (
        <div className={c.Window}>
            <h3>Settings</h3>
            <div className={c.Window_min_max}>
                <FullInput callBack={setValueMax} valueInput={valueInputMax} disButSet={disButSet}/>
                max value
            </div>
            <div className={c.Window_min_max}>
                <FullInput callBack={setValueMin} valueInput={valueInputMin} disButSet={disButSet}/>
                min value
            </div>
            <FullButton title={'SET'} callBack={changeWindowHandler} disBut={disButSet}/>
        </div>
    );
};
