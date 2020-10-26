import React, {ChangeEvent, useState} from "react";

export type EditableSpanPropsType = {
    value: string
    title: string
    changeValue: (title:string) => void
}
export const EditableSpan = (props: EditableSpanPropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState<string>(props.value)
    const changeValue = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onEditMode = () => setEditMode(true)
    const offEditMode = () => {
        setEditMode(false)
        if (value.trim()) {
            props.changeValue(value.trim())
        }
    }

    return (
        <span onDoubleClick={onEditMode}>
                {editMode ?
                    <input
                        autoFocus
                        onBlur={offEditMode}
                        onChange={changeValue}
                        value={value}
                        type="text"
                    />
                    :
                    <span>
                           {`${props.title}:  ${value}`}
                    </span>
                }

        </span>
    )
}