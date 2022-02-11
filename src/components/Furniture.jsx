import React from 'react'
import CardBootstrap from './CardBootstrap'
import Heading from './Heading'

export default function Science() {
    return (
        <>
            <Heading title="Furniture Products" />
            <div className=" netflix my-5">
                <CardBootstrap img='./img/sofa.jpg' title="Sofa" content="Price-52$" />
                <CardBootstrap img='./img/table.jpg' title="Table" content="Price-80$" />
                <CardBootstrap img='./img/chair.jpg' title="Chair" content="Price-39$" />
                <CardBootstrap img='./img/bed.jpg' title="Bed" content="Price-35$" />
                <CardBootstrap img='./img/self.jpg' title="Self" content="Price-29$" />
                <CardBootstrap img='./img/gate.jpg' title="Gate" content="Price-36$" />
                <CardBootstrap img='./img/godrej.jpg' title="Goodrej" content="Price-45$" />
                <CardBootstrap img='./img/washbasin.jpg' title="Waterbasin" content="Price-71$" />
                <CardBootstrap img='./img/table.jpg' title="Table" content="Price-88$" />
            </div>
        </>
    )
}
