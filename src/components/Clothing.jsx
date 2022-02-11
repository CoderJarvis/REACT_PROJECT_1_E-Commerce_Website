import React from 'react'
import CardBootstrap from './CardBootstrap'
import Heading from './Heading'


export default function Business() {
    return (
        <>
            <Heading title="Clothing Products" />
            <div className=" netflix my-5">
                <CardBootstrap img='img/jeans.jpg' title="Jeans" content="Price-56$" />
                <CardBootstrap img='img/goggles.jpg' title="Googles" content="Price-67$" />
                <CardBootstrap img='img/cap.jpg' title="Cap" content="Price-96$" />
                <CardBootstrap img='img/traditional.jpg' title="Traditinal Dresses" content="Price-34$" />
                <CardBootstrap img='img/jackets.jpg' title="Jackets" content="Price-49$" />
                <CardBootstrap img='img/footwear.jpg' title="Footwear" content="Price-92$" />
                <CardBootstrap img='img/shirts.jpg' title="Shirts" content="Price-36$" />
                <CardBootstrap img='img/goggles.jpg' title="Googles" content="Price-19$" />
                <CardBootstrap img='img/footwear.jpg' title="Footwear" content="Price-47$" />
            </div>
        </>
    )
}
