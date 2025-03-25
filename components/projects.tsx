"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Bizzscribe",
    description: "A multi-tenant ecommerce and CRM platform",
    year: "2024",
    image: "/logo.png",
    points: [
      "Architected and built core backend and front-end functionalities, ensuring a seamless user experience.",
      "Developed partner-specific modules for CRM, analytics, and product/service management.",
      "Built custom analytics for storefronts, providing partners with insights into sales, customer trends, and performance metrics.",
      "Designed and implemented APIs for mobile app integration, enabling seamless access to core eCommerce and CRM functionalities.",
    ],
    technologies: [
      "Node.js",
      "Next.js",
      "ReactJS",
      "TypeScript",
      "Prisma",
      "MaterialUI",
      "Postgres",
      "Razorpay",
    ],
    github: "https://github.com/bizzscribe/bizzscribe",
    demo: "https://bizzscribe.com",
  },
  {
    title: "Hany Bakery",
    description: "Modern Storefront",
    year: "2025",
    image: "/hanybakery.jpg",
    points: [
      " Built the entire responsive storefront of this bakery from menu browsing to cart management to checkout.",
      "Integrated the Bizzscribe backend APIs to handle order processing. Implemented PayTabs for payment integration.",
      // "Next.js, React, TypeScript, TailwindCSS, REST APIs, Custom Authentication utilizing Bizzscribe API, PayTabs.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "REST APIs",
      "Custom Authentication",
      "PayTabs",
      "Bizzscribe APIs",
    ],
    github: "https://github.com/svmirshvh/hanyBakery",
    demo: "https://hanybakery.com",
  },
  {
    title: "Medical AI Chatbot",
    description: "AI-powered medical assistant",
    year: "2024",
    image: "/avalonlogo.png",
    points: [
      "Developed an AI chatbot using OpenAI APIs to provide helpful information and answer basic medical questions.",
      "Focused on creating a user-friendly interface for patients to interact with the AI and get quick responses.",
    ],
    technologies: ["Node.js", "ReactJS", "Chakra UI", "OpenAI API"],
    github: "https://github.com/svmirshvh/medical-chatbot",
    demo: "https://app.aimedis.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    objectFit={
                      project.title === "Hany Bakery" ? "cover" : "contain"
                    }
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary">{project.year}</Badge>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {project.points.map((point, i) => (
                      <li key={i} className="text-sm">
                        • {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {/* Demo */}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
