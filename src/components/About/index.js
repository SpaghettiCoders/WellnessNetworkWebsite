import React, { Component } from 'react';
import logo from "./Logo.jpg"
import pam from "./pamela_koons.jpg"

const ContactPage = () => (
    <div className="img-fluid col-md-12 img-fluid">
        <div className = "col-centered col-md-12 text-md-center ">
            <h1></h1>
            <br/>

            <Contact />

        </div>
    </div>

);

class Contact extends Component {

    render() {
        return (
            <body class="body-3">

            <div class="div-block-6"></div>

            <div>
                <div class="container-13 w-container">
                    <div class="w-row">
                        <div class="column w-col w-col-7">
                            <div>
                                <h1 class="hero-text dark">About Our Founder</h1>
                                <div class="rich-text-block w-richtext">
                                    <p>Pamela D. Koons is the Executive Director of At The WELLness Network, Inc., a 501(c)(3) not-for-profit corporation dedicated to improving the health and wellness of women and children, Producer and Talk Show Host for At The WELLnessRadioTV and Keynote Speaker.</p>
                                    <p>Pamela is the 11th of 13 children from an amazing family in rural West Tennessee.  She had no idea she was poor, until she learned that other children didn’t eat nor liked molasses and cornbread for supper.</p>
                                    <p>God has blessed her with some incredible opportunities to help people in the communities where she has lived and worked over the past 35 years.
                                        Her prior career path has taken her from being a radio and television journalist, to working in public policy for transportation, healthcare, public housing and economic development.  She was interviewed for Under Secretary of USDA Rural Development during the President Barack Obama Administration.
                                    </p>
                                    <p>She is a certified Bikram Yoga Instructor, Yoga 2 Life Coach and certified Y.O.G.A. for Youth teacher.    Today she enjoys sharing the healing power of yoga through her “Yoga Is 4Me2 Project”, teaching yoga and life skills to children and families in our deserving communities.</p>
                                    <p>She is the very proud mom of one son, and two grandsons and still a newlywed to the most wonderful man in the world.</p>
                                    <p>Something that most people don’t know about Pamela is, she sang Amazing Grace with Willie Nelson.</p>
                                    <h2>‍</h2>
                                </div>
                            </div>
                        </div>
                        <div class="column-2 w-col w-col-5">
                            <div class="card-bg contact"><img src={pam} sizes="(max-width: 767px) 96vw, (max-width: 991px) 291.65625px, 380px" alt="" class="contact-picture"></img>
                                <div class="rich-text-block-2 w-richtext">
                                    <h2>Pamela D. Koons</h2>
                                    <h4>Executive Director</h4>
                                    <p>‍</p>
                                    <blockquote>(352) 359 - 5760</blockquote>
                                    <blockquote>2153 SE Hawthorne Rd #210 Gainesville, FL</blockquote>
                                    <blockquote><a href="https://m.me/WellnessRadioTV?fbclid=IwAR3x4ZnBI50fNfEAaC3C_LCG0BuTNlO1-mSFDeMTrY6T8hl6l4UYl3UaV0w" target="_blank">m.me/WellnessRadio</a></blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </body>
        );
    }
}
export default ContactPage;
