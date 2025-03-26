"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  Server,
  Globe,
  Cloud,
  GitGraphIcon as Git,
  Layout,
  Terminal,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="h-6 w-6 text-primary" />,
    skills: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Context API",
      "Material UI",
      "Tailwind CSS",
      "Chakra UI",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6 text-primary" />,
    skills: [
      "Node.js",
      "Django",
      "Laravel",
      "Express.js",
      "Django REST Framework",
      "Python",
      "PHP",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6 text-primary" />,
    skills: [
      "AWS Route 53",
      "AWS EC2",
      "AWS S3",
      "Route 53",
      "CI/CD",
      "Load balancing (ALB/ELB)",
      "Scalable PixelStreaming",
      "SSL",
      "AMIs",
      "AWS Amplify",
      "Security Groups",
      "NGINX",
      "Docker",
    ],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Database Design",
      "SQL",
      "Supabase",
      "Amazon RDS",
    ],
  },
  {
    title: "Languages",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: ["JavaScript", "PHP", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Web Services",
    icon: <Globe className="h-6 w-6 text-primary" />,
    skills: ["RESTful APIs", "WebSockets", "Socket.io", "API Design", "WebRTC"],
  },
  {
    title: "Tools",
    icon: <Terminal className="h-6 w-6 text-primary" />,
    skills: ["Git", "VS Code", "Postman"],
  },
  {
    title: "Version Control",
    icon: <Git className="h-6 w-6 text-primary" />,
    skills: ["Git", "GitHub"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with, specializing in
            backend development while maintaining proficiency in frontend
            technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold ml-2">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
