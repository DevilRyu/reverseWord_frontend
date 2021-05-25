import React from 'react'

export const Item = ({word}) => {
    return (
        <div className="border border-secondary w-75 mt-3 pl-2 pt-1 pb-1 rounded" style={{marginLeft: "10%"}}>{word}</div>
    )
}
