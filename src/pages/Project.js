
import projectData from './projectData.json';

import { NavLink } from 'react-router-dom';





function Project () {
    return(
        <>       
            <h1>Projects</h1>
            {projectData.map((projectData)=>{
                // looping over the project data to display each item in the DOM
                return(
                    <div className="projectItem">
                        <h3>Title: {projectData.title}</h3>
                        <p>Description: {projectData.description}</p>
                        {/* used span so as to apply properties seperately on the image and link */}
                        <span>                                                   
                            <img className="project" src={require(`../Images/${projectData.image}.jpg`)} alt=""/>
                            {/* link to the github published projects */}
                            <NavLink to={projectData.link}>Click to view project</NavLink>
                        </span>     
                       
                    </div>
                )
            })}
        </>
        
    )
}

export default Project;