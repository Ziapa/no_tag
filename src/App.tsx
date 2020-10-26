import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {addCoil, addValueLength, addValueSection, StoreType} from "./Redux/Store";



type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {

    const state = props.store._state


    const changeLength = (e: ChangeEvent<HTMLInputElement>) => {
        setErrorLength(null)
        let text = e.currentTarget.value
        addValueLength(text)
    }

    const changeSection = (e: ChangeEvent<HTMLInputElement>) => {
        setErrorSection(null)
        let text = e.currentTarget.value
        addValueSection(text)
    }

    const add = () => {
        if (state.newLength.trim() && state.newSection.trim()) {
            addCoil()
        } else if (!state.newLength.trim()){
            setErrorLength("need length")
        } else if (!state.newSection.trim()) {
            setErrorSection("need section")
        }
    }

    const [errorLength, setErrorLength] = useState<string | null>(null)
    const [errorSection, setErrorSection] = useState<string | null>(null)

    return (
        <div>
           <input value={state.newLength}
                   onChange={changeLength}
                   placeholder={"Длина"}
                   type="text"/>

            <input value={state.newSection}
                   onChange={changeSection}
                   placeholder={"Сечение"}
                   type="text"/>
            <button onClick={add}>Добавить</button>
            {errorLength && <div className={"error-length"}>{errorLength}</div>}
            {errorSection && <div className={"error-section"}>{errorSection}</div>}

            {state.coil.map(coil => {
                return (
                    <div key={coil._id}>

                        <span>
                            {`Длина: ${coil.length}---- `}
                        </span>
                        <span>
                            {` ----Сечение ${coil.section}`}
                        </span>
                    </div>
                )
            })}


        </div>
    );
}

export default App;
