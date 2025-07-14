'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { Code, Smartphone, Server, Palette, Download, Calendar, MapPin, GraduationCap, Lock, Database, Zap, Repeat, Table } from 'lucide-react';
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
    name: 'React Native & Expo',
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
    name: 'Clerk (Auth)',
    level: 85,
    icon: Lock,
    color: 'from-red-500 to-pink-500'
  },
  {
    name: 'Drizzle & PostgreSQL (Neon)',
    level: 82,
    icon: Database,
    color: 'from-emerald-500 to-lime-500'
  },
  {
    name: 'AJAX & jQuery',
    level: 80,
    icon: Zap,
    color: 'from-sky-500 to-indigo-500'
  },
  {
    name: 'Inngest (Background Jobs)',
    level: 78,
    icon: Repeat,
    color: 'from-fuchsia-500 to-rose-500'
  },
  {
    name: 'UI/UX Design & Tailwind CSS',
    level: 85,
    icon: Palette,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'SQL & MySQL',
    level: 82,
    icon: Table,
    color: 'from-gray-500 to-stone-500'
  }
];


const experiences = [
  {
    title: 'Project: AI Career Coach',
    company: 'TGAYS Technology Private Limited',
    period: 'June 10, 2025 – Present',
    location: 'Internal Project',
    description:
      'A full-stack Next.js application with features including AI Career Chat Assistant, AI Resume Analyzer, and AI Roadmap Generator. Integrated Clerk for auth, Drizzle ORM, Inngest for background workflows, and Neon PostgreSQL for the database. Designed to provide tailored career insights and resume improvements using AI.',
  },
  {
    title: 'Full Stack Developer (Internship)',
    company: 'TGAYS Technology Private Limited',
    period: '2024',
    location: 'Internal Project',
    description:
      'Built and deployed cross-platform apps using React Native CLI and Expo with EAS builds. Developed UI/UX screens for alarm apps using React Native Paper. Implemented secure authentication via Clerk and Firebase. Designed scalable backend APIs with Django. Worked on dynamic web interfaces with Django and real-time updates. Developed the Gym Management System and AI Career Coach web apps.',
  },
  {
    title: 'Project: Gym Management System',
    company: 'TGAYS Technology Private Limited',
    period: '2024',
    location: 'Internal Project',
    description:
      'A role-based gym management system built using Django and MySQL. Features include Super Admin/Gym Owner/Member access, attendance tracking, payment gateway integration, and AJAX-powered dynamic frontend with no full page reloads.',
  },
  {
    title: 'Project: Expense Tracker + Finance Blog',
    company: 'Personal Project',
    period: '2025',
    location: 'Personal',
    description:
      'Developed a Next.js-based monthly expense tracker with an integrated blog system. Admins can manage finance-related blog posts, while users track expenses. Included role-based access, Clerk for authentication, and Drizzle with Neon as the database layer.',
  }
];


const education = [
  {
    degree: 'Bachelor of Technology in Computer Science & Information Technology',
    school: 'Dronacharya Group of Institutions, Greater Noida (AKTU University)',
    period: '— Completed',
    description: 'Graduated with 67.1%. Gained strong fundamentals in software development, databases, and web technologies.'
  },
  {
    degree: '12th Standard (Senior Secondary)',
    school: '27101 SBV (JAI PRAKASH NARAYAN), E. Vinod Nagar, Delhi | CBSE Board',
    period: '2021',
    description: 'Completed with 77.6%. Focused on Science stream with emphasis on mathematics and computer science.'
  },
  {
    degree: '10th Standard (Secondary)',
    school: '160020-G Sarvodaya Boys SSS, Pkt-B Ph-II, Mayur Vihar, Delhi | CBSE Board',
    period: '2019',
    description: 'Completed with 86%. Built a strong foundation in core subjects, including mathematics and science.'
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
                    Hello! I&apos;m SK Sarfaraz, a dedicated full-stack developer with over 1.5 years of hands-on experience building modern, scalable web applications. My journey in tech has been fueled by a deep passion for solving complex problems and turning ideas into reality through clean, efficient code. I have professional experience at TGAYS Technology Pvt. Ltd., where I worked on cross-platform mobile apps, intuitive UI/design, and secure authentication systems.
                  </p>
                  <p>
                    I work primarily with Next.js for full-stack development, combining powerful tools like Clerk for authentication, Neon for scalable Postgres databases, Drizzle for type-safe ORM, and Inngest for background jobs and workflows. I’ve also worked extensively with Django and Python to build dynamic web applications, and with Firebase for real-time features and Google sign-ins. My focus is on building modern, robust, and maintainable applications that solve real-world problems — including a customizable alarm app with text-to-speech, repeat/snooze functionsand notifications.
                  </p>
                  <p>
                    Outside of coding, I continuously explore new tools and frameworks, collaborate on client projects, and refine my skills to stay ahead in the ever-evolving tech landscape. I’m committed to delivering quality solutions and user experiences that make a lasting impact. I’ve also developed a Gym Management System with features like role-based access, server-side pagination, attendance tracking, and payment integration — all built with Django, MySQL, and AJAX for seamless interactivity.
                  </p>
                </div>
                <div className='mt-3'>
                  <a href="/resume.pdf" download>
                    <Button className="group">
                      <Download className="mr-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
                      Download Resume
                    </Button>
                  </a>
                </div>
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