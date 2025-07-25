import type { Route } from "./+types/index";
import FeaturedProjects from "../../components/FeaturedProjects";
import type { Project, StrapiProject, StrapiResponse } from "../../types";
import AboutPreview from "../../components/AboutPreview";
import type { Post, StrapiPost } from "../../types";
import LatestPosts from "../../components/LatestPosts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "the friendly | HOME dev" },
    { name: "description", content: "custom website for the friendly dev" },
  ];
}

export async function loader({request}: Route.LoaderArgs): Promise<{projects: Project[], posts: Post[]}> {

  const [projectRes, postRes] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/projects?filters[featured][$eq]=true&sort[0]=date:desc&populate=*`),
    fetch(`${import.meta.env.VITE_API_URL}/posts?sort[0]=date:desc&populate=*`)
  ])

  if (!projectRes.ok || !postRes.ok) {
    throw new Error('Failed to fetch projects or posts')
  }

  const projectJson: StrapiResponse<StrapiProject> = await projectRes.json()
  const postJson: StrapiResponse<StrapiPost> = await postRes.json()

  const projects = projectJson.data.map((item:StrapiProject) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
  }))

  const posts = postJson.data.map((item) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt,
    body: item.body,
    image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
    date: item.date,
  }));

  // console.log(projects, posts)

  return {projects, posts}
}

//HomePage takes in loaderData from the loader function data!
export default function HomePage({loaderData}: Route.ComponentProps) {
  // console.log("Home Page Index");

  // const now = new Date().toISOString();
  //check if it is on client or server?
  // if (typeof window === "undefined") {
  //   console.log("Server Render at: ", now);
  // } else {
  //   console.log("Client Hydration at: ", now);
  // }

  // console.log(window.scrollX);

  const {projects, posts} = loaderData
  // console.log(`hello from HomePage ${projects}`)
  // console.log(`Hello from Posts: ${posts}`)
  return (
    <>
      <FeaturedProjects projects={projects} count={4} />
      <AboutPreview />
      <LatestPosts posts={posts} />
      {/* {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))} */}
    </>
  );
}
