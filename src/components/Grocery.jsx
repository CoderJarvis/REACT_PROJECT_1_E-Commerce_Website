import React from 'react'
import CardBootstrap from './CardBootstrap'
import Heading from './Heading'

export default function Technology() {
    return (
        <>
            <Heading title="Grocery Products" />
            <div className=" netflix my-5">
                <CardBootstrap img='img/tea.jpg' title="Tea" content="Price-58$" />
                <CardBootstrap img='img/masala.jpg' title="Masala" content="Price-32$" />
                <CardBootstrap img='img/maggy.jpg' title="Maggy" content="Price-63$" />
                <CardBootstrap img='img/atta.jpg' title="Atta" content="Price-80$" />
                <CardBootstrap img='img/oil.jpg' title="Oil" content="Price-41$" />
                <CardBootstrap img='img/vegetables.jpg' title="Vegetables" content="Price-38$" />
                <CardBootstrap img='img/salt.jpg' title="Salt" content="Price-73$" />
                <CardBootstrap img='img/rice.jpg' title="Rice" content="Price-49$" />
                <CardBootstrap img='img/masala.jpg' title="Masala" content="Price-41$" />
            </div>
        </>
    )
}
