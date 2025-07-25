import type {Route} from './+types/index'
import type {Project, StrapiProject, StrapiResponse} from '../../types'
import ProjectCard from '../../components/ProjectCard'
import {useState} from 'react'
import Pagination from '../../components/Pagination'
import { AnimatePresence, motion } from 'framer-motion'

export async function loader({request}: Route.LoaderArgs):Promise<{projects:Project[]}> {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/projects?populate=*`)
    const json: StrapiResponse<StrapiProject> = await res.json()
    const projects = json.data.map((item:StrapiProject) => ({
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        description: item.description,
        image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
        url: item.url,
        date: item.date,
        category: item.category,
        featured: item.featured,
      }));
    
      return { projects };
    }

const ProjectsPage = ({loaderData}: Route.ComponentProps) => {
    const [selectedCategory, setSelectedCategory] = useState('Frontend')
    const {projects} = loaderData as {projects:Project[]}
    // console.log(projects)
    const [currentPage, setCurrentPage] = useState(1)

    const categories = ['All', ...new Set(projects.map((project)=>project.category))]
    console.log(categories)

    //filter projects by category
    const filteredProjects = selectedCategory === 'All' ? projects : projects.filter((project)=>project.category === selectedCategory)

    //calculate the number of pages
    const projectsPerPage = 10
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

    //get current page projects
    const indexOfLastProject = currentPage * projectsPerPage
    const indexOfFirstProject = indexOfLastProject - projectsPerPage
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)

    return (
        <>
            <h2 className="text-white text-2xl font-bold mb-4">
                welcome to my projects page 📦
            </h2>
            <div className='flex flex-wrap gap-2 mb-8'>
                {categories.map((category)=>(
                    <button key={category} onClick={()=>{
                        setSelectedCategory(category);
                        setCurrentPage(1)}}
                        className={`px-3 py-1 cursor-pointer rounded ${selectedCategory === category ? 'bg-blue-700 text-white' : 'text-gray-200 bg-gray-700'}`}>
                        {category}
                    </button>
                ))}
            </div>
            <AnimatePresence mode='wait'>
                <motion.div layout className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-6">
                    {currentProjects.map((project)=>(
                        <motion.div key={project.id} layout>
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
            {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />}
        </>
    );
};

export default ProjectsPage;