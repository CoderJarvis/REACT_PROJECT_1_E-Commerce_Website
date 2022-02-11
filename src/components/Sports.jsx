import React from 'react'
import CardBootstrap from './CardBootstrap'
import Heading from './Heading'

export default function Sports() {
    return (
        <>
            <Heading title="Sports Produts" />
            <div className=" netflix my-5">
                <CardBootstrap img='./img/baseball.jpg' title="Baseball" content="Price-58$" />
                <CardBootstrap img='./img/hockey.jpg' title="Hockey" content="Price-32$" />
                <CardBootstrap img='./img/helmet.jpg' title="Helmet" content="Price-59$" />
                <CardBootstrap img='./img/wicket.jpg' title="Wicket" content="Price-32$" />
                <CardBootstrap img='./img/football.jpg' title="Football" content="Price-11$" />
                <CardBootstrap img='./img/badminton.jpg' title="Badminton" content="Price-38$" />
                <CardBootstrap img='./img/ball.jpg' title="Ball" content="Price-43$" />
                <CardBootstrap img='./img/bat.jpg' title="Bat" content="Price-96$" />
                <CardBootstrap img='./img/football.jpg' title="Football" content="Price-29$" />

            </div>
        </>
    )
}
