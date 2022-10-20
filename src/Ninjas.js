import React from 'react'

const Ninjas = (props) => {
        // same as 'const ninjas = this.props.ninjas'
        const { ninjas } = props
        const ninjaList = ninjas.map(ninja => {
            return (
            <div className="ninja" key={ ninja.key }>
                <div>Name: { ninja.name } </div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
            </div>
            )
        })
        return(
            <div className="ninja-list">
                { ninjaList }
            </div>
        )
    }

export default Ninjas

