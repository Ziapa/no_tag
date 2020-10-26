import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {addCoil, addValueLength, addValueSection, StoreType, changeLengthValue} from "./Redux/Store";
import {EditableSpan} from "./EditableSpan";


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
        } else if (!state.newLength.trim()) {
            setErrorLength("Необходимо ввести длину")
        } else if (!state.newSection.trim()) {
            setErrorSection("Необходимо ввести сечение")
        }
    }

    const [errorLength, setErrorLength] = useState<string | null>(null)
    const [errorSection, setErrorSection] = useState<string | null>(null)

    return (
        <div>
            <input value={state.newLength}
                   onChange={changeLength}
                   placeholder={"Длина"}
                   type="number"/>

            <input value={state.newSection}
                   onChange={changeSection}
                   placeholder={"Сечение"}
                   type="number"/>
            <button onClick={add}>Добавить</button>
            {errorLength && <div className={"error-length"}>{errorLength}</div>}
            {errorSection && <div className={"error-section"}>{errorSection}</div>}

            {state.coil.map(coil => {
            const   changeValue = (title:string) => {
                changeLengthValue(coil._id, title)
            }

                return (
                    <div key={coil._id}>

                        <EditableSpan
                            changeValue={changeValue}
                            title={"Длина"}
                            value={coil.length}/>
                        <EditableSpan
                            changeValue={changeValue}
                            title={"Сечение"}
                            value={coil.section}/>
                    </div>
                )
            })}


        </div>
    );
}


export default App;
