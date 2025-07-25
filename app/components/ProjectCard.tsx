import type {Project} from '../types'
import {Link} from 'react-router'
const ProjectCard = ({project}: {project: Project}) => {
    return (
        <Link to={`/projects/${project.documentId}`} className="block transform transition duration-300 hover:scale-[1.02]">
            <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-sm transition hover:shadow-md">
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
                <h3 className="text-blue-400 text-3xl font-semibold mb-1">{project.title}</h3>
                <p className="text-white text-sm">{project.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                    <span className="text-gray-500 text-sm">{project.category}</span>
                    <span className="text-gray-500 text-sm">{new Date(project.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</span>
                </div>
            </div>
        </Link>
        )
}

export default ProjectCard