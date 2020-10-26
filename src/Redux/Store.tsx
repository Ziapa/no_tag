import {v1} from "uuid";

export let rerenderEntireTree = () => {
}

export type StoreType = {
    _state: RootStateType
    _subscribe: (observer: () => void) => void
    getState: () => RootStateType
}
export type RootStateType = {
    coil: CoilType[]
    newLength: string
    newSection: string
}

export type CoilType = {
    _id: string
    length: string
    section: string
}


let store: StoreType = {
    _state: {
        newLength: "",
        newSection: "",
        coil: [
            {_id: v1(), length: "500", section: "2x1.5"}
            ]
    },
    _subscribe(observer) {
        rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },
}

export const addValueLength = (text:string) => {
    store._state.newLength = text
    rerenderEntireTree()
}
export const addValueSection = (text:string) => {
    store._state.newSection = text
    rerenderEntireTree()
}

export const addCoil = () => {
    const newCoil: CoilType = {_id: v1(), section: store._state.newSection, length: store._state.newLength}
    store._state.coil.push(newCoil)
    rerenderEntireTree()
}

export default store