'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, Code2, Smartphone, Globe, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React frontend, Django backend, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Django', 'PostgreSQL', 'Stripe', 'Redis'],
    category: 'Web',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Cross-platform mobile application built with React Native. Features include task creation, team collaboration, push notifications, and offline synchronization.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'Mobile',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard for business intelligence. Built with Next.js, features interactive charts, data visualization, and automated reporting.',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'TypeScript', 'Chart.js', 'Prisma', 'PostgreSQL'],
    category: 'Web',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true
  },
  {
    id: 4,
    title: 'AI-Powered Chatbot',
    description: 'Intelligent chatbot system with natural language processing. Integrates with multiple platforms and provides 24/7 customer support automation.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'TensorFlow', 'Django', 'OpenAI', 'WebSocket'],
    category: 'AI/ML',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false
  },
  {
    id: 5,
    title: 'Social Media Platform',
    description: 'Modern social networking platform with real-time messaging, content sharing, and community features. Built for scalability and performance.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'GraphQL', 'MongoDB', 'AWS'],
    category: 'Web',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false
  },
  {
    id: 6,
    title: 'Fitness Tracking App',
    description: 'Comprehensive fitness tracking mobile app with workout plans, progress tracking, and social features. Integrates with wearable devices.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'Express.js', 'SQLite', 'HealthKit'],
    category: 'Mobile',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false
  }
];

const categories = ['All', 'Web', 'Mobile', 'AI/ML'];

const categoryIcons = {
  Web: Globe,
  Mobile: Smartphone,
  'AI/ML': Code2,
  All: Database
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my latest work, featuring web applications, mobile apps, and innovative solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Featured Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Here are some of my most impactful and innovative projects
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        animate={{ scale: hoveredProject === project.id ? 1.05 : 1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">All Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore my complete portfolio of projects across different technologies and domains
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const Icon = categoryIcons[category as keyof typeof categoryIcons];
                return (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className="group"
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {category}
                    <Filter className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                );
              })}
            </div>

            {/* Projects Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                    className="group"
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-500">
                      <div className="relative overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover"
                          animate={{ scale: hoveredProject === project.id ? 1.05 : 1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Button size="sm" variant="secondary" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                          <Button size="sm" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        </motion.div>
                        {project.featured && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-primary text-primary-foreground">
                              Featured
                            </Badge>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6 space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <Badge variant="outline" className="text-xs">
                              {project.category}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Have a Project in Mind?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always excited to work on new challenges and bring innovative ideas to life. 
              Let's discuss your next project!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/contact">Start a Project</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View All on GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}