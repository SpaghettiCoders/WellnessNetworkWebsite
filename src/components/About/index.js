import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import logo from "./Logo.jpg"
import pam from "./pamela_koons.jpg"

const AboutPage = () => (
    <div className="img-fluid col-md-12 img-fluid">
        <div className = "col-centered col-md-12 text-md-center ">
            <h1></h1>
            <br/>

            <FAQ />

        </div>
    </div>

);

class FAQ extends Component {

    render() {
        return (
            <body class="body-3">

            <div class="div-block-6"></div>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2>FAQ</h2>
            <div>
            <Button color="primary" id="Q1">
                What's the At The WELLness Network story?
            </Button>
            <UncontrolledCollapse toggler="#Q1">
                <Card>
                    <CardBody>
                    I am the 11th of 13 children.  A few years ago, I read a story that proclaimed that we would be the first generation that would not live as long as our parents.  I thought, with all of the advances in healthcare, how is that possible?  Then in a five year period, my three oldest brothers died.  All three of my brothers served in the United States Army.  War on the battlefield didn't take their lives.  My three brothers are dead because of food related illnesses.  My three brothers died before reaching my parent’s age at the time of their deaths.  
                    As I continued to watch loved ones die, I felt a calling to find leaders in the healthcare and holistic community to help teach us how to take care of the vessel...our bodies.  We formed <b>At The WELLness Network, Inc.</b> to help inform men, women, boys and girls that we can take control of our health through better nutrition, reducing stress and adding yoga and other forms of exercise to our daily lives. 
                    At The WELLness Network, Inc. birthed <b>At The WELLnessRadioTV</b> as a vehicle, a ministry to help free people from the bondage of food and food related diseases. Our cells do not understand public policy or laws and regulations. Our cells respond to what we put in our mouth, goes down a tube into our stomach and moves through our intestines nourishing or destroying.   
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
            </div>
            <br/>
            <div>
            <Button color="primary" id="Q2">
                What is At the WELLness Network?
            </Button>
            <UncontrolledCollapse toggler="#Q2">
                <Card>
                    <CardBody>
                    At The WELLness Network, Inc. is a 501 (c)(3).  Our goal at At The WELLnessRadioTV is to enlighten viewers and listeners by bringing them stories and advice from global leaders in health, wellness and holistic living. We will save lives and bring back a quality of life by promoting emotional and physical WELLbeing.  We also work with other nonprofits to help promote programs and events that will facilitate better health and WELLness in our communities.  At The WELLness Network is the parent company of At The WELLnessRadioTV and the Yoga Is  4Me2 Program.
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
            </div>
            <br/>
            <div>
            <Button color="primary" id="Q3">
                What is At the WELLnessRadioTV?
            </Button>
            <UncontrolledCollapse toggler="#Q3">
                <Card>
                    <CardBody>
                    <b>At WELLness Radio TV (AWRT)</b> is a proud member of At The WELLness Network and proudly serves the community of Gainesville, FL. and online audiences worldwide.  Our goal is to provide both a superior customer experience and tremendous value for our listeners as well as talk show/podcast host on AWRT.  AWRT is a 24/7 media provider helping our broadcasters use live radio and video streaming in their quest to offer a variety of services for their local community, current clients and other business owners. 
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
            </div>
            <br/>
            <div>
            <Button color="primary" id="Q4">
                How can I add my Podcast/Talk Show to At The WELLnessRadioTV (AWRT)?
            </Button>
            <UncontrolledCollapse toggler="#Q4">
                <Card>
                    <CardBody>
                    I'm glad you asked.  It's quite simple.  
                        Go to the link: Sign up for an account and follow the simple steps.  Set-up you Privacy Protected account.  Give a description of your Podcast/Talk Show, then upload the MP3 file.  Our team will listen to your MP3 file to confirm that your show meets the goals  and mission of ATWR.  After your show has been approved for broadcast, you will be given the opportunity to select a time slot for your show and the date that you would like for your show to start.  Through the secure AWRT Stripe Payment System, your payment must be received before your show is aired.   After your payment is received, you will be on the air broadcasting to the world.  You will be provided a link and promo card that you can add to all of you social media, letting your followers know that you are now broadcasting to the world.
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
            </div>
            <br/>
            <div>
            <Button color="primary" id="Q5">
                How can I become a guest on AWRT's On The Road To WELLness Show?
            </Button>
            <UncontrolledCollapse toggler="#Q5">
                <Card>
                    <CardBody>
                        We would love to have you as a one-time guest or commit to being a regular contributor to discuss an approved topic for our listening audience.   Go to the link: Be Our Guest and follow the simply instructions for being a guest on our show.  Our guest are given the opportunity to promote their books, events and services offered in their community and around the world.   We will provide you with the link of your interview so you can share on all of your social media platforms.
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
            </div>
            <br/>
            <div>
            <Button color="primary" id="Q6">
                How can my company become an Underwriter for programing on At The WELLnessRadioTV?
            </Button>
            <UncontrolledCollapse toggler="#Q6">
                <Card>
                    <CardBody>
                    We are a listener supported station.  To become an Underwriter, go to the link:  Underwriters
                    As a non-profit station underwriting is an essential element of our radio programs.  According to recent industry survey 79%, of the listening audience, changes their radio station during a commercial breaks.  Underwriters, on the other hand are often held in higher regard by the listeners.  Underwriters are viewed as supporters who helping to provide valuable information, not just another business wanting to sell a product or service.  There are many programs that you can support or you may want to underwrite a show that gives information about your business or services that you provide.  You can help educate by underwriting shows with a focus on: health tips, holistic living, spiritual conferences, travel retreats, yoga trainings, legal advice, financial WELLness and end of life planning.   By underwriting show giving the listener expert advice, listeners will associate you with providing valuable information and tips that will help empower them to live a better life.  You will be provided with a link to embed in all of your social media so your community and the world can see you efforts to educate and inform.
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
            </div>
            <br/>
            <div>
            <Button color="primary" id="Q7">
                How does At The WELLness Network give back to the community?    
            </Button>
            <UncontrolledCollapse toggler="#Q7">
                <Card>
                    <CardBody>
                    Our Executive Director, Pamela Koons is a certified Yoga for Youth Instructor.  She founded the Yoga Is 4Me2 Program to provide FREE Yoga classes, workshops and retreats for children and families in our deserving communities.  She has taken the yoga room to children at the Boys and Girls Club, Gainesville Public Housing, Youth Build, and the SWAG Neighborhood.  Koons has seen the evidence that children who participate in a mindfulness practice are less likely to be bullied, less likely to bully, do better in school and live a more peaceful childhood.  Yoga classes are also offered to senior citizens and families.
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
            </div>
            <br/>
            <div>
                <p>
                    Please share your stories with us. We want to listen to your challenges and help direct you on the path to emotional and physical FREEDOM. We love our customers and welcome your feedback and suggestions. 
                </p>
                <br/>
                <p>
                PAMELA D. KOONS,   Executive Director of the At The WELLness Network, Inc. has over 30 years of experience in broadcasting and is passionate about exceeding your broadcasting expectations.
                </p>
            </div>
            </body>
        );
    }
}
export default AboutPage;
