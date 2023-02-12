
import projectData from './projectData.json'


function Project () {
    return(
        <>       
            <h1>Projects</h1>
            {projectData.map((projectData)=>{
                return(
                    <div>
                        <h3>Title: {projectData.title}</h3>
                        <p>Description: {projectData.description}</p>
                        


                    </div>
                )
            })}
        </>
        
    )
}

export default Project;