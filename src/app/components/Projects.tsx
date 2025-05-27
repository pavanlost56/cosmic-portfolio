import { getGitHubRepos } from '@/lib/getGithubRepos';
import ProjectsClient from './ProjectsClient';

export default async function Projects() {
  // Fetch GitHub projects server-side
  const githubProjects = await getGitHubRepos();

  return <ProjectsClient githubProjects={githubProjects} />;
}
