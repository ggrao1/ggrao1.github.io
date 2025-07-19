import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Gautham G Rao',
  description: 'Technical insights on AI, cloud technologies, and modern web development. Deep-dives into RAG systems, LLM integration, and cloud architectures.',
}

const blogPosts = [
  {
    id: 1,
    title: 'How I Built a Multi-Cloud RAG Pipeline',
    excerpt: 'A comprehensive guide to building production-ready RAG systems that work seamlessly across GCP, AWS, and Azure, with cost optimization strategies.',
    content: 'In this detailed tutorial, I walk through the architecture decisions, implementation challenges, and optimization techniques used to build a scalable RAG pipeline...',
    author: 'Gautham G Rao',
    date: '2025-01-15',
    readTime: '12 min read',
    tags: ['RAG', 'Multi-Cloud', 'AI/ML', 'Architecture'],
    featured: true,
    category: 'AI/ML'
  },
  {
    id: 2,
    title: 'Integrating LLMs into VSCode for Productivity',
    excerpt: 'Learn how to build intelligent VSCode extensions that leverage large language models to enhance developer productivity and code quality.',
    content: 'VSCode extensions provide a powerful way to integrate AI capabilities directly into the development workflow. This post covers the technical implementation...',
    author: 'Gautham G Rao',
    date: '2025-01-10',
    readTime: '8 min read',
    tags: ['VSCode', 'LLMs', 'Developer Tools', 'Productivity'],
    featured: true,
    category: 'Developer Tools'
  },
  {
    id: 3,
    title: 'Comparing Vertex AI and Azure OpenAI for Enterprise NLP',
    excerpt: 'An in-depth comparison of Google Vertex AI and Azure OpenAI services, focusing on enterprise requirements, compliance, and cost considerations.',
    content: 'Enterprise adoption of LLM services requires careful consideration of multiple factors including compliance, cost, performance, and integration capabilities...',
    author: 'Gautham G Rao',
    date: '2025-01-05',
    readTime: '15 min read',
    tags: ['Vertex AI', 'Azure OpenAI', 'Enterprise', 'NLP'],
    featured: true,
    category: 'Cloud'
  },
  {
    id: 4,
    title: 'Cost Optimization Strategies for AI Workloads in the Cloud',
    excerpt: 'Practical techniques to reduce AI/ML costs in cloud environments while maintaining performance and reliability.',
    content: 'Running AI workloads in the cloud can be expensive. This post shares proven strategies for optimizing costs without compromising on performance...',
    author: 'Gautham G Rao',
    date: '2024-12-28',
    readTime: '10 min read',
    tags: ['Cost Optimization', 'AI/ML', 'Cloud', 'FinOps'],
    featured: false,
    category: 'Cloud'
  },
  {
    id: 5,
    title: 'Building Secure AI APIs with FastAPI and Docker',
    excerpt: 'A step-by-step guide to creating production-ready AI APIs with proper authentication, rate limiting, and containerization.',
    content: 'Security is paramount when building AI APIs that handle sensitive data. This tutorial covers best practices for secure API development...',
    author: 'Gautham G Rao',
    date: '2024-12-20',
    readTime: '11 min read',
    tags: ['FastAPI', 'Docker', 'Security', 'APIs'],
    featured: false,
    category: 'Development'
  },
  {
    id: 6,
    title: 'Vector Databases: Choosing the Right Solution for RAG',
    excerpt: 'A comprehensive comparison of vector database options for RAG applications, including performance benchmarks and use case recommendations.',
    content: 'Vector databases are the backbone of modern RAG systems. This post compares popular options like Pinecone, Weaviate, and ChromaDB...',
    author: 'Gautham G Rao',
    date: '2024-12-15',
    readTime: '9 min read',
    tags: ['Vector Databases', 'RAG', 'ChromaDB', 'Pinecone'],
    featured: false,
    category: 'AI/ML'
  }
]

const categories = ['All', 'AI/ML', 'Cloud', 'Developer Tools', 'Development']

const Blog = () => {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep-dives into AI, cloud technologies, and modern development practices. 
            Sharing insights from building production systems and solving real-world challenges.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                category === 'All'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-600 relative">
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L13.09 8.26L12 14.5L10.91 8.26L12 2ZM21 12L14.74 13.09L8.5 12L14.74 10.91L21 12Z"/>
                        </svg>
                      </div>
                      <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2 group"
                  >
                    Read More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Articles</h2>
          <div className="space-y-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/4">
                    <div className="h-32 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg relative">
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                        <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium text-white">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-3/4">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2 group"
                    >
                      Continue Reading
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get notified when I publish new technical articles and insights
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
