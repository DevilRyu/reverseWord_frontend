import React from 'react'
import { useSelector } from 'react-redux';
import { Item } from './Item'

export const MainScreen = () => {

    const {words} = useSelector(state => state.reverseWord);
    

    return (
        <>
            <div className="card w-75" style={{ marginLeft: "13%", marginTop: "2%" }} >
                <div className="card-body">
                    <h5 className="card-title">Results: </h5>
                    <div className="card-grid">

                        {
                            words.map((word) => {
                                return <Item 
                                    key={word}
                                    word={word}/>
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}
