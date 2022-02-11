import React from 'react'
import CardBootstrap from './CardBootstrap'
import Heading from './Heading'

export default function Health() {
    return (
        <>
            <Heading title="Electronics Products" />
            <div className=" netflix my-5">
                <CardBootstrap img='./img/dslr.jpg' title="Dslr" content="Price-56$" />
                <CardBootstrap img='./img/tv.jpg' title="Tv" content="Price-78$" />
                <CardBootstrap img='./img/fridge.jpg' title="Fridge" content="Price-34$" />
                <CardBootstrap img='./img/washingmachine.jpg' title="Washingmachine" content="Price-38$" />
                <CardBootstrap img='./img/charger.jpg' title="Charger" content="Price-71$" />
                <CardBootstrap img='./img/dvdplayer.jpg' title="Dvdplayer" content="Price-30$" />
                <CardBootstrap img='./img/fan.jpg' title="Fan" content="Price-67$" />
                <CardBootstrap img='./img/cooler.jpg' title="Cooler" content="Price-81$" />
                <CardBootstrap img='./img/oven.jpg' title="Oven" content="Price-47$" />
            </div>
        </>
    )
}
