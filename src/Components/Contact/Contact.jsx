import React from 'react'
import "./Style.css"
import Header from './Header'
import Details from './Details'

import Form from './Form'
import People from './People'

export default function Contact() {
    return (<>
        <Header />
        

        <section id="form-details">
            <Form/>
            <People/>
        </section>
    </>
    )
}
