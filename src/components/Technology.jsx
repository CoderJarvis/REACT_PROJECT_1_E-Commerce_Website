import React from 'react'
import CardBootstrap from './CardBootstrap'
import Heading from './Heading'

export default function Entertainment() {
    return (
        <>
            <Heading title="Technology Products" />
            <div className=" netflix my-5">
                <CardBootstrap img='./img/laptop.jpeg' title="Laptop" content="Price- $47" />
                <CardBootstrap img='./img/mobile.jpeg' title="Mobile" content="Price- $89" />
                <CardBootstrap img='./img/earphone.jpg' title="Ear Phone" content="Price- $25" />
                <CardBootstrap img='./img/memorycard.jpg' title="Memory Card" content="Price- $95" />
                <CardBootstrap img='./img/googlewatch.jpg' title="Google Watch" content="Price- $59" />
                <CardBootstrap img='./img/mouse.jpeg' title="Mouse" content="Price- $50" />
                <CardBootstrap img='./img/tablet.png' title="Tablet" content="Price- $43" />
                <CardBootstrap img='./img/keyboard.jpg' title="Keyboard" content="Price- $69" />
                <CardBootstrap img='./img/drone.jpg' title="Drone" content="Price- $43" />
            </div>
        </>
    )
}
