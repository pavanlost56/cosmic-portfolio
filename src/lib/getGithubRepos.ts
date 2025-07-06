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

// Fallback projects data that matches the structure from data.ts
const fallbackProjects: ProcessedProject[] = [
  {
    title: "Credit Scoring Model",
    description: "Machine learning model using logistic regression and decision trees to predict creditworthiness with high accuracy.",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    githubUrl: "https://github.com/pavanlost56/credit-scoring-model",
    stars: 0,
    language: "Python"
  },
  {
    title: "Emotion Recognition System",
    description: "Deep learning system built with TensorFlow/Keras, trained on FER2013 dataset with data augmentation for real-time emotion detection.",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV"],
    githubUrl: "https://github.com/pavanlost56/emotion-recognition",
    stars: 0,
    language: "Python"
  },
  {
    title: "Ad Blocker Extension",
    description: "JavaScript-based browser extension using DOM manipulation and browser APIs to block intrusive advertisements.",
    techStack: ["JavaScript", "HTML", "CSS", "Browser APIs"],
    githubUrl: "https://github.com/pavanlost56/ad-blocker-extension",
    stars: 0,
    language: "JavaScript"
  },
  {
    title: "Backend API Development",
    description: "RESTful APIs built with Go and Python following microservices architecture with robust logging and testing.",
    techStack: ["Go", "Python", "REST APIs", "Docker"],
    githubUrl: "https://github.com/pavanlost56/backend-api-services",
    stars: 0,
    language: "Go"
  },
  {
    title: "AI-Powered CLI - CodeInsight",
    description: "AI-powered command-line interface designed for Warp terminal, using Go for frontend and Python for backend.",
    techStack: ["Go", "Python", "CLI", "AI/ML"],
    githubUrl: "https://github.com/pavanlost56/codeinsight",
    stars: 0,
    language: "Go"
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with Next.js and TypeScript, featuring smooth animations and dark theme.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/pavanlost56/cosmic-portfolio",
    liveUrl: "https://pavankumar-portfolio.vercel.app",
    stars: 0,
    language: "TypeScript"
  }
];

export async function getGitHubRepos(username: string = 'pavanlost56'): Promise<ProcessedProject[]> {
  try {
    // Build headers with optional GitHub token for higher rate limits
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Portfolio-Website'
    };

    // Add GitHub token if available (for production)
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
      headers,
      // Cache for 1 hour in production
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      console.error('Failed to fetch GitHub repos:', response.status, response.statusText);
      
      // Check for rate limit
      if (response.status === 403) {
        const rateLimitRemaining = response.headers.get('X-RateLimit-Remaining');
        const rateLimitReset = response.headers.get('X-RateLimit-Reset');
        console.error('GitHub API rate limit hit.', {
          remaining: rateLimitRemaining,
          resetTime: rateLimitReset ? new Date(parseInt(rateLimitReset) * 1000).toISOString() : 'unknown'
        });
      }
      
      // Return fallback data instead of empty array
      return fallbackProjects;
    }

    const repos: GitHubRepo[] = await response.json();

    // If no repos found, return fallback
    if (!repos || repos.length === 0) {
      return fallbackProjects;
    }

    // Filter and process repos
    const processedRepos = repos
      .filter(repo => !repo.fork) // Remove forks
      .sort((a, b) => {
        // Sort by update date first, then by stars
        const dateA = new Date(a.updated_at).getTime();
        const dateB = new Date(b.updated_at).getTime();
        if (Math.abs(dateA - dateB) > 30 * 24 * 60 * 60 * 1000) { // If more than 30 days difference
          return dateB - dateA; // Sort by date
        }
        return b.stargazers_count - a.stargazers_count; // Otherwise sort by stars
      })
      .slice(0, 9) // Take top 9
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

    // If we got less than 6 projects from GitHub, merge with fallback
    if (processedRepos.length < 6) {
      const existingUrls = new Set(processedRepos.map(p => p.githubUrl));
      const additionalProjects = fallbackProjects
        .filter(p => !existingUrls.has(p.githubUrl))
        .slice(0, 6 - processedRepos.length);
      
      return [...processedRepos, ...additionalProjects];
    }

    return processedRepos;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    // Return fallback data on any error
    return fallbackProjects;
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
