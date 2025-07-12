'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';


const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255, 'Name is too long'),
  email: z.string().email('Invalid email address').max(255, 'Email is too long'),
  subject: z.string().min(1, 'Subject is required').max(500, 'Subject is too long'),
  message: z.string().min(1, 'Message is required'),
});

type ContactFormData = z.infer<typeof contactSchema>;

type FormData = z.infer<typeof formSchema>;

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Send me an email anytime',
    value: 'alex@example.com',
    href: 'mailto:alex@example.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'Call me for urgent matters',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'San Francisco, CA',
    value: 'Available for remote work',
    href: '#',
    color: 'from-purple-500 to-pink-500'
  }
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com',
    color: 'hover:text-gray-900 dark:hover:text-gray-100'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    color: 'hover:text-blue-600'
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://twitter.com',
    color: 'hover:text-blue-400'
  }
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (result.success) {
        toast.success('Message sent successfully!');
        reset(); // Clear the form
      } else {
        toast.error(result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Let&apos;s <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I&apos;m here to help you create something amazing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="text-center hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-8 space-y-4">
                      <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-foreground">{method.title}</h3>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                        <p className="text-primary font-medium">{method.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-xl">
                <CardHeader className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                  </div>
                  <p className="text-muted-foreground">
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            placeholder="Your full name"
            {...register('name')}
            className={errors.name ? 'border-destructive' : ''}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            {...register('email')}
            className={errors.email ? 'border-destructive' : ''}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="subject">Subject *</Label>
        <Input
          id="subject"
          placeholder="What's this about?"
          {...register('subject')}
          className={errors.subject ? 'border-destructive' : ''}
        />
        {errors.subject && (
          <p className="text-sm text-destructive">{errors.subject.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          placeholder="Tell me about your project or what you'd like to discuss..."
          rows={6}
          {...register('message')}
          className={errors.message ? 'border-destructive' : ''}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>
      
      <Button
        type="submit"
        className="w-full group"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
          />
        ) : (
          <Send className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
        )}
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Get in Touch</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I&apos;m always open to discussing new opportunities, interesting projects, 
                    or just having a friendly chat about technology and development.
                  </p>
                  <p>
                    Whether you&apos;re looking to build a new application, need help with an existing project, 
                    or want to collaborate on something exciting, I&apos;d love to hear from you.
                  </p>
                  <p>
                    I typically respond to messages within 24 hours, so don&apos;t hesitate to reach out!
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Follow Me</h3>
                <div className="flex space-x-6">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-muted-foreground transition-colors ${social.color}`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                      >
                        <Icon size={24} />
                        <span className="sr-only">{social.label}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Response Times */}
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-medium text-foreground">Available for new projects</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Currently accepting new clients and exciting opportunities. 
                    Let&apos;s build something amazing together!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions about working together
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              {[
                {
                  question: "What's your typical response time?",
                  answer: "I usually respond to messages within 24 hours, often much sooner during business hours."
                },
                {
                  question: "Do you work with international clients?",
                  answer: "Absolutely! I work with clients worldwide and am comfortable with remote collaboration across different time zones."
                },
                {
                  question: "What technologies do you specialize in?",
                  answer: "I specialize in React, Next.js, React Native, Django, and Python, with experience in modern web and mobile development."
                },
                {
                  question: "How do you handle project timelines?",
                  answer: "I believe in clear communication and realistic timelines. We'll discuss your needs and set achievable milestones together."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <h3 className="font-semibold text-foreground">{faq.question}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}