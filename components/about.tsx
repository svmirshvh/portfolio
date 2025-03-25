"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary bg-muted">
              {/* Using an avatar illustration from DiceBear API */}
              <Image
                src="/pp.jpg"
                objectFit="cover"
                alt="Sameer Alam Avatar"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Software Engineer</h3>
                <p className="text-muted-foreground mb-4">
                  I'm a passionate Software Engineer with 5 years of experience,
                  specializing in FullStack development. Currently working at
                  Aimedis in Dubai, known for my strong proficiency in ReactJS,
                  NextJS, NodeJS, and various web technologies. I have
                  successfully delivered innovative solutions in a fast-paced
                  metaverse company.
                </p>
                <p className="text-muted-foreground mb-4">
                  My core expertise includes designing and developing modern
                  webapps using MERN Stack utlising RESTful APIs, optimizing
                  database performance, and architecting scalable systems. I
                  complement these skills With a solid foundation in AWS
                  services and a knack for problem solving, I thrive in
                  challenging environments, collaborating with cross-functional
                  teams to create exceptional user experiences.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div>
                    <p className="font-medium">Name:</p>
                    <p className="text-muted-foreground">Sameer Alam</p>
                  </div>
                  <div>
                    <p className="font-medium">Location:</p>
                    <p className="text-muted-foreground">Dubai, UAE</p>
                  </div>
                  <div>
                    <p className="font-medium">Phone:</p>
                    <p className="text-muted-foreground">+971545808765</p>
                    <p className="text-muted-foreground">+918092130650</p>
                  </div>
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-muted-foreground break-all">
                      sameeralam65700@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
