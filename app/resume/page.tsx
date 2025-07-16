'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Phone, MapPin, Calendar, Award, Briefcase, GraduationCap } from 'lucide-react'

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Resume</span>
          </h1>
          <a
            href="/resume.pdf"
            download
            className="btn-primary inline-flex items-center gap-2 px-6 py-3"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </a>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-card rounded-lg p-8 mb-8 shadow-lg"
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">Prince Kushwaha</h2>
            <p className="text-xl text-muted-foreground mb-4">Developer & Coordinator</p>
            <p className="text-lg text-muted-foreground">Blending Operations & Technology for Smart Solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm">prince@example.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm">+91 99999 99999</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">India</span>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card rounded-lg p-8 mb-8 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Professional Experience</h3>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-lg font-semibold">Senior Developer & Project Coordinator</h4>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  2022 - Present
                </span>
              </div>
              <p className="text-primary font-medium mb-2">Tech Solutions Inc.</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• Led development of Proclens.ai using Python, Streamlit, and FastAPI</li>
                <li>• Coordinated cross-functional teams for seamless project delivery</li>
                <li>• Implemented AI/ML solutions improving operational efficiency by 40%</li>
                <li>• Managed client relationships and technical requirements gathering</li>
              </ul>
            </div>
            
            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-lg font-semibold">Full Stack Developer</h4>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  2020 - 2022
                </span>
              </div>
              <p className="text-primary font-medium mb-2">RG Consultancy</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• Developed and deployed corporate website using React and Node.js</li>
                <li>• Implemented MongoDB database solutions and VPS deployment</li>
                <li>• Created responsive designs and optimized performance</li>
                <li>• Collaborated with design teams to deliver pixel-perfect interfaces</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-card rounded-lg p-8 mb-8 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Education</h3>
          </div>
          
          <div className="space-y-4">
            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-lg font-semibold">Bachelor of Technology in Computer Science</h4>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  2018 - 2022
                </span>
              </div>
              <p className="text-primary font-medium mb-1">XYZ University</p>
              <p className="text-muted-foreground">CGPA: 8.5/10</p>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-card rounded-lg p-8 mb-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6">Skills</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Technical Skills</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">JavaScript/TypeScript</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">React/Next.js</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Python</span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Node.js/Express</span>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Administrative Skills</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Project Management</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Team Coordination</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Client Communication</span>
                    <span className="text-sm text-muted-foreground">88%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Strategic Planning</span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-card rounded-lg p-8 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Certifications & Achievements</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-3">Certifications</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• AWS Certified Developer Associate</li>
                <li>• Google Cloud Professional Developer</li>
                <li>• MongoDB Certified Developer</li>
                <li>• Scrum Master Certified (PSM I)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3">Achievements</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Led team that increased client satisfaction by 35%</li>
                <li>• Reduced project delivery time by 25% through efficient coordination</li>
                <li>• Successfully deployed 15+ production applications</li>
                <li>• Mentored 5+ junior developers</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
