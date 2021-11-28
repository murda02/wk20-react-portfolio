import React from 'react'
import ContactForm from '../ContactForm'

export default function Contact() {

    var h2Style = {
        paddingLeft: '5%'
      };

      var contactStyle = {
        paddingLeft: '3%'
      };

    return (
       <div>
           <section>
               <div>
                   <h2 style={h2Style}>Contact Me</h2>
                   <p style={contactStyle}>To get a  hold of me, please fill out the form below, thanks!</p>
                    <ContactForm />
               </div>
           </section>
       </div>
    )

}
