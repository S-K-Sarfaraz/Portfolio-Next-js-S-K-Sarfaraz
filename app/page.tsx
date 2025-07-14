'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import TiltedCard from './../components/TiltedCard';
import ScrambledText from './../components/ScrambledText';
import WaveButton  from './../components/WaveButton';
import GlassIcons from './../components/GlassIcons'
import GradientText from './../components/GradientText'
import CountUp from './../components/CountUp'
import ScrollVelocity from './../components/ScrollVelocity';

import { Allura } from 'next/font/google';

const allura = Allura({
  weight: '400',
  subsets: ['latin'],
});


const roles = [
  'Full Stack Developer',
  'React Specialist',
  'Django Expert', 
  'Mobile App Developer',
  'UI/UX Enthusiast'
];

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

const items = [
    {
      icon: <Github size={20} />,
      color: 'blue',
      label: 'GitHub',
      href: 'https://github.com/S-K-Sarfaraz?tab=overview&from=2025-07-01&to=2025-07-09',
    },
    {
      icon: <Linkedin size={20} />,
      color: 'purple',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/s-k-sarfaraz-nextjs-react',
    },
    {
      icon: <Mail size={20} />,
      color: 'red',
      label: 'Email',
      href: 'mailto:work.sarfaraz@gmail.com',
    },
  ];



  useEffect(() => {
    const currentText = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToAbout = () => {
    document.getElementById('about-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20" />
          
          {/* Floating Shapes */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 left-20 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 120, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, -80, 0],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-20 left-1/3 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl"
          />
        </div>

        <div className="max-w-7xl mb-6 mx-auto px-4 mt-6 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 w-full">
            {/* Left Side: Headings (2/3) */}
            <div className="w-full lg:w-2/3 space-y-6">
              <motion.h1 
                className="text-4xl sm:text-6xl sm:mt-6 lg:text-7xl md:mt-16  font-bold text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  S K Sarfaraz
                </span>
              </motion.h1>

              <motion.div
                className="h-20 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block ml-1 w-0.5 h-6 sm:h-8 bg-primary"
                  />
                </h2>
              </motion.div>
            </div>

            {/* Right Side: Tilted Card (1/3) */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <TiltedCard
                imageSrc="/images/Picsart_24-09-12_23-23-08-913.jpg"
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="S K Sarfaraz - Next js Developer"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={30}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">S K Sarfaraz</p>
                }
              />
            </div>
          </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <ScrambledText
                className="text-lg sm:text-xl font-bold !text-[#a3a3a3] text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                radius={50}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:" 
              >
                <span>
                  I create innovative digital solutions using modern technologies. Passionate about building scalable web applications and mobile experiences that make a difference.
                </span>
              </ScrambledText>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link href="/projects">
                <WaveButton
                  text="View My Work"
                  icon={ArrowRight}
                  color="text-indigo-600 border-indigo-600"
                  waveColor="bg-indigo-600"
                />
              </Link>
              <Link href="/contact">
                <WaveButton 
                  text="Get In Touch" 
                  icon={null}
                  color="dark:text-white dark:border-white text-black border-black" 
                  waveColor="bg-gray-900" 
                />
              </Link>
            </motion.div>

            <div className="flex justify-center items-center">
              <GlassIcons items={items} className="gap-6" />
            </div>

          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <ChevronDown size={32} />
        </motion.button>
      </section>
      
      {/* <ScrollVelocity
        texts={['NEXT JS Expert', 'Full Stack Develper']} 
        velocity={50} 
        className="custom-scroll-text"
      /> */}

      {/* Quick About Section */}
      <section id="about-section" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                <GradientText
                  colors={["#9333ea", "#4079ff", "#9333ea", "#4079ff", "#9333ea"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class"
                >
                Building the Future, One Line at a Time
                </GradientText>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                With over 1.5 years of experience in full-stack development, I specialize in creating 
                robust, scalable applications using cutting-edge technologies. My passion lies in 
                solving complex problems and delivering exceptional user experiences.  
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '4+', label: 'Projects Completed' },
                { number: '1.5+', label: 'Years Experience' },
                { number: '2+', label: 'Happy Clients' },
                { number: '4', label: 'Tech Stacks' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Link href="/about">
                <WaveButton
                  text="Learn More About Me"
                  icon={ArrowRight}
                  color="text-indigo-600 border-indigo-600"
                  waveColor="bg-indigo-600"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}