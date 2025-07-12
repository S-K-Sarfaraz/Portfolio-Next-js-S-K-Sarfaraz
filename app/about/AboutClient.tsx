'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { Code, Smartphone, Server, Palette, Download, Calendar, MapPin, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skills = [
  {
    name: 'React & Next.js',
    level: 95,
    icon: Code,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'React Native',
    level: 90,
    icon: Smartphone,
    color: 'from-green-500 to-teal-500'
  },
  {
    name: 'Django & Python',
    level: 88,
    icon: Server,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    name: 'UI/UX Design',
    level: 85,
    icon: Palette,
    color: 'from-purple-500 to-pink-500'
  }
];

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    period: '2022 - Present',
    location: 'San Francisco, CA',
    description: 'Leading development of enterprise-scale web applications using React, Next.js, and Django. Mentoring junior developers and architecting scalable solutions.'
  },
  {
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    location: 'Remote',
    description: 'Built mobile-first web applications and React Native mobile apps. Implemented CI/CD pipelines and improved application performance by 40%.'
  },
  {
    title: 'Frontend Developer',
    company: 'WebAgency Pro',
    period: '2019 - 2020',
    location: 'New York, NY',
    description: 'Developed responsive websites and web applications for clients. Specialized in React development and modern CSS frameworks.'
  }
];

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Stanford University',
    period: '2017 - 2019',
    description: 'Specialized in Software Engineering and Human-Computer Interaction. Graduated Magna Cum Laude.'
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of California, Berkeley',
    period: '2013 - 2017',
    description: 'Foundation in computer science principles, algorithms, and software development. Dean\'s List recipient.'
  }
];

const AboutClient = () => {
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
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences with passion, precision, and purpose
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Bio and Skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              {/* Bio */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">My Journey</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Hello! I&apos;m Alex Johnson, a passionate full-stack developer with over 5 years of experience 
                    creating innovative digital solutions. My journey began with a curiosity about how things work 
                    on the web, which evolved into a deep love for crafting elegant, efficient code.
                  </p>
                  <p>
                    I specialize in modern JavaScript frameworks, particularly React and Next.js for web development, 
                    and React Native for mobile applications. On the backend, I&apos;m proficient in Django and Python, 
                    creating robust APIs and scalable server architectures.
                  </p>
                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, 
                    or sharing my knowledge through blog posts and mentoring. I believe in writing clean, maintainable 
                    code and creating user experiences that delight and inspire.
                  </p>
                </div>
                <Button className="group">
                  <Download className="mr-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
                  Download Resume
                </Button>
              </div>

              {/* Skills */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-foreground">Skills & Expertise</h2>
                <div className="space-y-6">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-medium text-foreground">{skill.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Experience and Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              {/* Experience */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Experience</h2>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="space-y-3">
                            <div className="flex items-start justify-between">
                              <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4 mr-1" />
                                {exp.period}
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="text-primary font-medium">{exp.company}</div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 mr-1" />
                                {exp.location}
                              </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Education</h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                    >
                      <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="space-y-3">
                            <div className="flex items-start justify-between">
                              <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4 mr-1" />
                                {edu.period}
                              </div>
                            </div>
                            <div className="flex items-center text-primary font-medium">
                              <GraduationCap className="w-4 h-4 mr-2" />
                              {edu.school}
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always excited to take on new challenges and collaborate on innovative projects. 
              Let&apos;s discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/contact">Start a Conversation</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/projects">View My Work</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutClient