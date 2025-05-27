export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  topics: string[];
  language: string | null;
  fork: boolean;
  updated_at: string;
  created_at: string;
}

export interface ProcessedProject {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  stars: number;
  language: string | null;
}

export async function getGitHubRepos(username: string = 'pavanlost56'): Promise<ProcessedProject[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Portfolio-Website'
      },
      // Cache for 1 hour in production
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      console.error('Failed to fetch GitHub repos:', response.status, response.statusText);
      return [];
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter out forks and process repos
    const processedRepos = repos
      .filter(repo => !repo.fork && repo.description) // Remove forks and repos without description
      .sort((a, b) => b.stargazers_count - a.stargazers_count) // Sort by stars
      .slice(0, 6) // Take top 6
      .map(repo => ({
        title: repo.name.replace(/-/g, ' ').replace(/_/g, ' ').split(' ').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' '),
        description: repo.description || 'No description available',
        techStack: [
          ...(repo.language ? [repo.language] : []),
          ...repo.topics.slice(0, 4) // Limit topics to prevent overflow
        ],
        githubUrl: repo.html_url,
        liveUrl: repo.homepage || undefined,
        stars: repo.stargazers_count,
        language: repo.language
      }));

    return processedRepos;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

export async function getGitHubProfile(username: string = 'pavanlost56') {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Portfolio-Website'
      },
      next: { revalidate: 86400 } // Cache for 24 hours
    });

    if (!response.ok) {
      console.error('Failed to fetch GitHub profile:', response.status, response.statusText);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    return null;
  }
}
