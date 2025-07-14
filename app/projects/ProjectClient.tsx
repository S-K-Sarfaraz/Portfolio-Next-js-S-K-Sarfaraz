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
    title: 'AI Career Coach',
    description: 'A full-stack AI-powered career assistant with features like AI Career Chatbot, Resume Analyzer, and Roadmap Generator. It helps users explore career options, evaluate resumes, and plan step-by-step career paths.',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Clerk', 'Drizzle', 'Inngest', 'Neon', 'PostgreSQL', 'OpenAI'],
    category: 'AI/ML',
    github: 'https://github.com/S-K-Sarfaraz/ai-career-coach-application', // Add GitHub link if public
    demo: 'https://ai-career-coach-application-cx6e.vercel.app',
    featured: true
  },
  {
    id: 2,
    title: 'Expense Tracker & Finance Blog',
    description: 'A personal finance tracker with admin-controlled blog system. Tracks user expenses monthly and allows admin to post financial articles. Includes role-based access and a clean dashboard UI.',
    image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Clerk', 'Drizzle', 'Neon', 'PostgreSQL'],
    category: 'Web',
    github: 'https://github.com/S-K-Sarfaraz/The-Guardian-Cunsultant', // Add GitHub link if public
    demo: 'https://the-guardian-cunsultant.vercel.app',
    featured: true
  },
  {
    id: 3,
    title: 'Gym Management System',
    description: 'A role-based web app for managing gym memberships, attendance, payments, and staff roles. AJAX-enabled dynamic frontend with Django backend and MySQL integration.',
    image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Django', 'MySQL', 'jQuery', 'AJAX', 'HTML/CSS'],
    category: 'Web',
    github: '', // Add GitHub link if available
    demo: 'https://gymforest.in/', // Internal project
    featured: false
  },
  {
    id: 4,
    title: 'React Native Alarm App',
    description: 'A customizable alarm app with repeat/snooze features, text-to-speech reminders, and local push notifications. Built with Expo, it supports advanced navigation and real-time functionality.',
    image: 'https://images.pexels.com/photos/277394/pexels-photo-277394.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'Expo', 'Expo-Router', 'Clerk', 'Firebase'],
    category: 'Mobile',
    github: '', // Add GitHub link if available
    demo: '', // Not deployed
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

const ProjectClient = () => {
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
                  I&apos;m always excited to work on new challenges and bring innovative ideas to life. 
                  Let&apos;s discuss your next project!
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
  )
}

export default ProjectClient