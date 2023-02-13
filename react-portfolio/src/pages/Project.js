
import projectData from './projectData.json';

import { NavLink } from 'react-router-dom';





function Project () {
    return(
        <>       
            <h1>Projects</h1>
            {projectData.map((projectData)=>{
                return(
                    <div className="projectItem">
                        <h3>Title: {projectData.title}</h3>
                        <p>Description: {projectData.description}</p>
                        <span>
                            
                            <img className="project" src={require(`../Images/${projectData.image}.jpg`)} alt=""/>
                            <NavLink to={projectData.link}>Click to view project</NavLink>
                        </span>     
                       
                    </div>
                )
            })}
        </>
        
    )
}

export default Project;