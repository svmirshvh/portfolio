"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-16 md:pt-40 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Sameer Alam</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Dedicated and dynamic FullStack developer having strong expertise
              in MERN Stack and MVC Architecture with a passion for exploring
              and implementing cutting-edge technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button asChild size="lg">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex space-x-4"
          >
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/svmirshvh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://linkedin.com/in/svmirshvh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:sameeralam65700@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-8"
        >
          <Button variant="ghost" size="sm" asChild>
            <Link href="#about" className="flex items-center gap-2">
              <span>Scroll Down</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
