import type {Route} from './+types/details'
import type {Project, StrapiProject, StrapiResponse} from '../../types'
import {FaArrowLeft} from 'react-icons/fa'
import {Link} from 'react-router'

// This is a client loader approach - fetching API data from client side, instead of server side.

export async function loader({request, params}: Route.LoaderArgs){
    const res = await fetch(`${import.meta.env.VITE_API_URL}/projects?filters[documentId][$eq]=${params.id}&populate=*`)
    if (!res.ok) {
        throw new Response('Failed to fetch project',{status:404});
    }
    const json: StrapiResponse<StrapiProject> = await res.json()
    const project = json.data[0]
    // console.log(`Project Server Loader: ${project}`)
    return {project}
}

const ProjectDetailsPage = ({loaderData}: Route.ComponentProps) => {
    const {project} = loaderData as {project:StrapiProject}
    return (
        <>
            <Link to="/projects" className="flex items-center text-blue-500 hover:text-blue-600 mb-6 transition">
                <FaArrowLeft className="inline-block mr-2" />
                Back to Projects
            </Link>
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="relative">
                    <img src={project.image?.url ? `${project.image.url}` : '/images/no-image.png'} alt={project.title} className="rounded-lg shadow-md w-full h-full object-cover" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-blue-400 mb-4">{project.title}</h1>
                    <p className="text-gray-200 text-sm mb-4">{new Date(project.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) + ' • ' + project.category}</p>
                    <p className="text-gray-200 text-sm mb-4">{project.description}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-block text-white bg-blue-600 hover:text-blue-700 px-6 py-2 rounded transition">View Live Site ➡️</a>
                </div>
            </div>
        </>
    )
}

export default ProjectDetailsPage