import React, { forwardRef } from 'react';
import './Body.css';

import imgs from './imgs.jfif';
import sp from './sp.gif';

// Use forwardRef to allow passing refs to this component
const Body = forwardRef((props, ref) => {
    return (
        <div className="body" ref={ref}>
            <div className="animation">
                <h1 id="headA">Web development builds a business's online presence.</h1>
                <h2 id="headB">A well-designed website enhances user experience.</h2>
            </div>
            <div className="container">
                <div id="div_a">
                    <h2 id='headers'>What is Web Development?</h2>
                    <div id='para'>
                        <p id="parag">
                        <p id="parag">Web development is the process of creating and maintaining websites. It involves a range of tasks, including web design, web content creation, client-side/server-side scripting, and network security configuration.<br /><br />*Front-End Development: This is what users interact with directly in their web browsers. It involves designing the layout, look, and feel of a website using technologies like HTML (for structure), CSS (for styling), and JavaScript (for interactivity).<br /><br />* Back-End Development: This involves working on the server side, where the logic and database management happen. Back-end developers use server-side languages like Python, PHP, Ruby, or Java to manage data and ensure the website functions correctly.<br /><br />* Full-Stack Development: A full-stack developer handles both front-end and back-end development. They are knowledgeable in both areas and can manage the entire web development process.</p>
                        </p>
                    </div>
                </div>
                <div id="div_b">
                    <img id='side_pics' src={imgs} alt="side_pic" />
                    <div id='para_divs'>
                        <p id='tr'>Did you know? The first-ever website, created by Tim Berners-Lee, went live on August 6, 1991. It was hosted on a NeXT computer at CERN (European Organization for Nuclear Research) and was dedicated to providing information about the World Wide Web project.</p>
                    </div>
                </div>
            </div>
            <div className="container_b">
                <div id="div_c">
                    <img id='sps' src={sp} alt="" />
                    <div>
                        <h4 id="info">Information</h4>
                        <a id="info" href="https://explorer.globe.engineer/search?qd=%5B%7B%22searchbox_query%22%3A%22what%20is%20Web%20development%22%2C%22search_id%22%3A%22ba718c0f-cbb5-4848-b4c9-9a7090fa4744%22%2C%22index%22%3A0%2C%22type%22%3A%22initial_searchbox%22%2C%22clicked_category%22%3Anull%2C%22staged_image%22%3Anull%2C%22location%22%3Anull%7D%5D&sid=ba718c0f-cbb5-4848-b4c9-9a7090fa4744" target="_blank">For other information, click Me!</a>
                    </div>
                </div>
                <div id="div_d">
                    <div>
                        <h1 id="ask">Importances</h1>
                        <p id="paraA">
                            <p id="paraA">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The process of creating and managing websites is called web development. It is significant because: Websites are necessary for companies and organizations to create an online identity, connect with a larger clientele, and offer goods and services to end consumers. Website development is the process of creating and managing websites. Good web development makes sure websites are aesthetically pleasing, easy to use, and work effectively on all platforms and browsers. It is significant because: For individuals, corporations, and organizations, websites serve as their principal online presence. A website that is developed effectively guarantees that it is aesthetically pleasing, useful, and offers a satisfying user experience. Increased traffic, engagement, and conversions may result from this. Skills in web development are quite significant in the job market because there is a high need for qualified</p>
                        </p>
                    </div>
                </div>
            </div>
            <div className="animationB">
                <h3 id="headA">Websites provide valuable data analytics for businesses.</h3>
                <h2 id="headB">Web development ensures accessibility across devices.</h2>
            </div>
        </div>
    );
});

export default Body;
