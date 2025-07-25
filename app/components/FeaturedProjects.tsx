import type { Project } from "../types"
import ProjectCard from "./ProjectCard"

interface FeaturedProjectsProps {
    projects: Project[]
    count?: number
}

const FeaturedProjects = ({projects, count = 4}: FeaturedProjectsProps) => {
    if(projects.length === 0) return null

    return (
        <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-200" >🎖️ Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.slice(0,count).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}

export default FeaturedProjects