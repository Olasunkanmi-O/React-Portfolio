

import picture from '../Images/myself.jpg'
import {Document, Page} from 'react-pdf'

function About () {
    return(
       
       <>

        <h3>About  Me</h3>
        
        <img className="personal"src={picture} alt="" />

        <Document file='Resume.pdf'>
            <Page />
        </Document>
        <p>After 7 years in the Fast-Moving Consumer Goods as a logistics personnel, I realized I wanted more and as such,
        I decided to branch into tech. I got into the front End development of web and web applications and I have never
        been happier. I have worked with some other developers in creating some web applications. Some of my works are
        linked in this website as you may like to view them.
        I enjoy spending time with my wife but when I am not doing that, I am learning new trends in software development</p>

       </>

    )
}

export default About 