'use client';

export default function ProjectsLoading() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Loading my latest projects from GitHub...
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 animate-pulse"
            >
              {/* Loading skeleton */}
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 rounded w-3/4 shimmer"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-1/2 shimmer"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3 shimmer"></div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-6 w-16 bg-gray-200 rounded-full shimmer"></div>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-4">
                  <div className="h-4 w-16 bg-gray-200 rounded shimmer"></div>
                  <div className="h-8 w-20 bg-gray-200 rounded shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
