import React from 'react'
import ContactForm from '../ContactForm'

export default function Contact() {

    var h1Style = {
        paddingLeft: '5%'
      };

      var contactStyle = {
        paddingLeft: '2%'
      };

    return (
       <div>
           <section>
               <div>
                   <h2 style={h1Style}>Contact Me</h2>
                   <p style={contactStyle}>To get a  hold of me, please fill out the form below, thanks!</p>
                    <ContactForm />
               </div>
           </section>
       </div>
    )

}
