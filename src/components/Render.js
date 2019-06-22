import * as React from 'react'

function renderList(model) {
    return (
        <li key={model.name}>
            Name: {model.name}
            <br/>
            Manufacturer: {model.manufacturer}
            <br/>
            Year: {model.year}
            <br/>
            Origin: {model.origin}
            <br/>
        </li>
    )
}

export default function Render(props) {
    console.log("THESE ARE MY PROPS", props)
    console.log("THESE ARE MY PROPS.ARRAYOFMODELS", props.arrayOfModels)
    return (
        <div className="listOfModels">
            <h3>Your Choices:</h3>

            {
                props.arrayOfModels &&
                <ul>
                    {props.arrayOfModels.map(renderList)}
                </ul>

            }
        </div>
    )
}