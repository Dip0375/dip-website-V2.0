"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft, ChevronRight, Mail, Globe, Linkedin, Github,
  MapPin, Shield, Award, Briefcase, GraduationCap, Code, Cloud,
  Languages, Lock, Eye, Fingerprint, Zap,
} from "lucide-react";

const PageBorder = ({ children, pageNum, totalPages }: { children: React.ReactNode; pageNum: number; totalPages: number }) => (
  <div className="relative h-full">
    <div className="absolute inset-0 rounded-lg border border-[#64ffda]/8 pointer-events-none" />
    <div className="absolute inset-[3px] rounded-lg border border-[#64ffda]/15 pointer-events-none" />
    <div className="absolute inset-[6px] rounded-lg border border-[#64ffda]/5 pointer-events-none" />
    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#64ffda]/30 rounded-tl pointer-events-none" />
    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#64ffda]/30 rounded-tr pointer-events-none" />
    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#64ffda]/30 rounded-bl pointer-events-none" />
    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#64ffda]/30 rounded-br pointer-events-none" />
    <div className="relative h-full">{children}</div>
    <div className="absolute bottom-3 right-5 text-[9px] font-mono text-[#64ffda]/40 pointer-events-none z-20">
      {pageNum} / {totalPages}
    </div>
  </div>
);

const resumePages = [
  {
    id: 0,
    front: (
      <PageBorder pageNum={1} totalPages={4}>
        <div className="h-full bg-gradient-to-br from-[#0a192f] via-[#0d1f3c] to-[#0a192f] p-8 md:p-10 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 hero-circuit-lines opacity-20" />
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#64ffda]/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#64ffda]/3 rounded-full blur-[100px]" />
          {[
            { Icon: Shield, x: "10%", y: "15%", delay: 0 },
            { Icon: Lock, x: "85%", y: "20%", delay: 0.5 },
            { Icon: Eye, x: "15%", y: "75%", delay: 1 },
            { Icon: Fingerprint, x: "80%", y: "70%", delay: 1.5 },
            { Icon: Zap, x: "50%", y: "10%", delay: 2 },
          ].map(({ Icon, x, y, delay }, i) => (
            <motion.div key={i} className="absolute" style={{ left: x, top: y }}
              animate={{ y: [0, -10, 0], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}>
              <Icon className="w-6 h-6 text-[#64ffda]/20" />
            </motion.div>
          ))}
          <div className="relative z-10 text-center">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#64ffda]/50 to-transparent mx-auto mb-6" />
            <p className="text-xs font-mono text-[#64ffda]/60 tracking-[0.3em] uppercase mb-4">Hey Folks!</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Explore My</h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ textShadow: "0 0 20px rgba(100, 255, 218, 0.3)" }}>
              <span className="text-[#64ffda]">Professional Journey</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#64ffda]/30" />
              <div className="w-2 h-2 rotate-45 border border-[#64ffda]/40" />
              <div className="w-12 h-px bg-[#64ffda]/30" />
            </div>
            <div>
              <p className="text-sm text-[#8892b0] mb-1">Portfolio Resume of</p>
              <h3 className="text-xl font-bold text-white">DIPNARAYAN NANDI</h3>
              <p className="text-sm text-[#64ffda] font-mono mt-1">Cloud Security Engineer</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {["AWS", "Security", "DevSecOps", "SIEM", "WAF"].map((tag) => (
                <span key={tag} className="text-[9px] font-mono bg-[#64ffda]/5 text-[#64ffda]/70 px-2.5 py-1 rounded-full border border-[#64ffda]/15">{tag}</span>
              ))}
            </div>
            <p className="text-[9px] text-[#8892b0]/50 mt-8 font-mono tracking-wider">
              By <span className="text-[#64ffda]/60">InfiniteX</span> © {new Date().getFullYear()}
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#64ffda]/50 to-transparent mx-auto mt-4" />
          </div>
        </div>
      </PageBorder>
    ),
    back: null,
  },
  {
    id: 1,
    front: (
      <PageBorder pageNum={2} totalPages={4}>
        <div className="h-full bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] p-6 md:p-8 flex flex-col relative overflow-hidden">
          <div className="absolute inset-0 hero-circuit-lines opacity-15" />
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#64ffda]/5 rounded-full blur-[60px]" />
          <div className="relative z-10 mb-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#64ffda]/10 border border-[#64ffda]/30 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#64ffda]" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">DIPNARAYAN NANDI</h1>
                <p className="text-sm text-[#64ffda] font-mono">Cloud Security Engineer</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-[#8892b0]">
              <span className="flex items-center gap-1 bg-[#64ffda]/5 px-2 py-0.5 rounded border border-[#64ffda]/10"><MapPin className="w-3 h-3 text-[#64ffda]" /> Kolkata, IN</span>
              <span className="flex items-center gap-1 bg-[#64ffda]/5 px-2 py-0.5 rounded border border-[#64ffda]/10"><Mail className="w-3 h-3 text-[#64ffda]" /> dipnarayan.cse@gmail.com</span>
              <span className="flex items-center gap-1 bg-[#64ffda]/5 px-2 py-0.5 rounded border border-[#64ffda]/10"><Globe className="w-3 h-3 text-[#64ffda]" /> www.dipnarayan.in</span>
              <span className="flex items-center gap-1 bg-[#64ffda]/5 px-2 py-0.5 rounded border border-[#64ffda]/10"><Github className="w-3 h-3 text-[#64ffda]" /> Dip0375</span>
              <span className="flex items-center gap-1 bg-[#64ffda]/5 px-2 py-0.5 rounded border border-[#64ffda]/10"><Linkedin className="w-3 h-3 text-[#64ffda]" /> dipnarayan-nandi</span>
            </div>
          </div>
          <div className="relative z-10 border-t border-[#64ffda]/10 pt-2 mb-3">
            <h3 className="text-sm font-bold text-[#64ffda] mb-1.5 flex items-center gap-1.5"><Award className="w-4 h-4" /> Professional Summary</h3>
            <p className="text-[13px] leading-relaxed text-[#8892b0]">
              Cloud Security Engineer with 5+ years of hands-on experience hardening AWS environments through threat detection, automated incident response, and compliance-driven security architecture. Expert in GuardDuty, Amazon Detective, SIEM integration (Wazuh, Seceon, IBM QRadar), WAF (AWS, Barracuda), IaC security (Terraform, CloudFormation), and CSPM-based risk mitigation aligned to PCI DSS, CIS, and NIST.
            </p>
          </div>
          <div className="relative z-10 border-t border-[#64ffda]/10 pt-2 mb-2">
            <h3 className="text-sm font-bold text-[#64ffda] mb-1.5 flex items-center gap-1.5"><Cloud className="w-4 h-4" /> Certifications</h3>
            <div className="space-y-1">
              {["AWS Certified Security – Specialty (SCS-C02) | April 2025", "AWS Certified Solutions Architect – Associate | December 2023", "WAF-as-a-Service Certified Product Specialist | Barracuda Networks | June 2025"].map((cert, i) => (
                <div key={i} className="text-[11px] text-[#8892b0] flex items-start gap-1.5"><span className="text-[#64ffda] mt-0.5">✦</span><span>{cert}</span></div>
              ))}
            </div>
          </div>
          <div className="relative z-10 border-t border-[#64ffda]/10 pt-2">
            <h3 className="text-sm font-bold text-[#64ffda] mb-1.5 flex items-center gap-1.5"><Award className="w-4 h-4" /> Awards</h3>
            <div className="space-y-0.5">
              <div className="text-[11px] text-[#8892b0] flex items-start gap-1.5"><span className="text-[#64ffda]">★</span><span>Long Service Award – 3 Years – 2026</span></div>
              <div className="text-[11px] text-[#8892b0] flex items-start gap-1.5"><span className="text-[#64ffda]">★</span><span>Rising Star – Security Team – 2025</span></div>
            </div>
          </div>
        </div>
      </PageBorder>
    ),
    back: (
      <PageBorder pageNum={2} totalPages={4}>
        <div className="h-full bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] p-6 md:p-8 flex flex-col relative overflow-hidden">
          <div className="absolute inset-0 hero-circuit-lines opacity-15" />
          <div className="relative z-10">
            <h3 className="text-sm font-bold text-[#64ffda] mb-2 flex items-center gap-1.5"><Shield className="w-4 h-4" /> Technical Skills</h3>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2.5">
              {[
                { title: "Cloud Platforms", items: ["AWS (Advanced)", "Azure (Intermediate)"] },
                { title: "Security Services", items: ["AWS WAF, GuardDuty", "Security Hub, Shield Adv.", "Inspector, Amazon Macie", "IAM, KMS, AWS Config", "CloudTrail, Barracuda WAF"] },
                { title: "Threat Detection & SIEM", items: ["Wazuh, IBM QRadar", "Seceon, Amazon Detective", "CloudWatch"] },
                { title: "DevSecOps & IaC", items: ["Checkov, Trivy, SonarQube", "Terraform, CloudFormation", "Jenkins"] },
                { title: "Networking & Firewall", items: ["AWS Network Firewall", "TLS Inspection, ACM CA", "NACLs, Security Groups", "VPC, VNet"] },
                { title: "Incident Response", items: ["Lambda, EventBridge, SNS", "Systems Manager", "OpenSearch"] },
                { title: "Compliance", items: ["PCI DSS", "CIS Benchmarks", "NIST"] },
                { title: "Scripting & OS", items: ["Python (Boto3)", "Ubuntu, Windows Server"] },
              ].map((skill, i) => (
                <div key={i}>
                  <h4 className="text-[11px] font-bold text-[#64ffda]/90 mb-0.5">{skill.title}</h4>
                  <ul className="space-y-0">
                    {skill.items.map((item, j) => (
                      <li key={j} className="text-[10px] text-[#8892b0] flex items-start gap-1"><span className="text-[#64ffda]/50">•</span> {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageBorder>
    ),
  },
  {
    id: 2,
    front: (
      <PageBorder pageNum={3} totalPages={4}>
        <div className="h-full bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] p-6 md:p-8 flex flex-col relative overflow-hidden">
          <div className="absolute inset-0 hero-circuit-lines opacity-15" />
          <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-sm font-bold text-[#64ffda] mb-2 flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> Professional Experience</h3>
            <div className="space-y-2.5 flex-1 overflow-y-auto">
              {[
                { role: "Cloud Security Engineer", company: "Workmates Core2Cloud Solution Ltd", location: "Bhubaneswar, India", duration: "Jun 2025 – Present",
                  bullets: ["Deployed custom AWS WAF rule sets across 3 production apps — rate limiting, regex filtering, geo-restrictions, XSS detection — reducing injection attempts measurably within 30 days.", "Embedded Checkov static analysis into CI/CD pipeline, catching misconfigured IAM policies, open S3 buckets, and insecure SGs before reaching AWS environments.", "Architected AWS Network Firewall with TLS inspection via ACM Private CA, enabling deep packet inspection on encrypted traffic across production VPCs.", "Contributed to MSSP Level 1 Competency attainment via documentation, evidence collection, and process standardisation.", "Built DevSecOps pipeline with Trivy & SonarQube — scanning container images and IaC templates, blocking high-severity CVEs at commit stage.", "Eliminated $116/month (97% reduction) in AWS Config overspend by scoping recording to required resource types with zero compliance coverage loss.", "Integrated Wazuh SIEM with CloudTrail and VPC Flow Logs for real-time correlation across API and network-level events."] },
                { role: "Junior Cloud Engineer", company: "Workmates Core2Cloud Solution Ltd", location: "Kolkata, India", duration: "Aug 2023 – May 2025",
                  bullets: ["Improved a customer's AWS Security Hub score from 56% to 83% (+27 points) through systematic triage and remediation of failed findings.", "Configured end-to-end Security Hub → EventBridge → SIEM integration pipeline, eliminating manual log forwarding and reducing detection lag.", "Built automated resource change alerting using AWS Config + EventBridge + SNS for proactive governance without manual overhead.", "Automated OS patch management for hybrid Ubuntu/Windows fleets using AWS Systems Manager Patch Manager."] },
                { role: "Trainee Cloud Engineer", company: "Workmates Core2Cloud Solution Ltd", location: "Kolkata, India", duration: "Dec 2022 – Jul 2023",
                  bullets: ["Deployed 3-tier AWS architectures, LAMP stacks, and Amazon WorkSpaces for Windows clients across Linux and Windows environments.", "Configured SSL certificates for Apache and IIS-hosted websites, eliminating certificate-related downtime."] },
                { role: "Cloud Engineer", company: "DevOps Monk", location: "Remote", duration: "Sep 2021 – Dec 2022",
                  bullets: ["Delivered AWS infrastructure solutions using IAM, EC2, S3, CloudTrail, CloudFormation, Lambda, AWS Organizations, and CloudWatch for multiple clients.", "Built CI/CD pipelines using Jenkins and automated infrastructure provisioning with Terraform; visualized health via Grafana dashboards."] },
              ].map((exp, i) => (
                <div key={i} className="border-l-2 border-[#64ffda]/30 pl-2.5">
                  <h4 className="text-[13px] font-bold text-white">{exp.role}</h4>
                  <p className="text-[11px] text-[#64ffda] font-mono">{exp.company} | {exp.location} | {exp.duration}</p>
                  <ul className="mt-1 space-y-0.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-[11px] text-[#8892b0] flex items-start gap-1"><span className="text-[#64ffda]/50 mt-0.5">▸</span> {b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageBorder>
    ),
    back: (
      <PageBorder pageNum={3} totalPages={4}>
        <div className="h-full bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] p-6 md:p-8 flex flex-col relative overflow-hidden">
          <div className="absolute inset-0 hero-circuit-lines opacity-15" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="mb-3">
              <h3 className="text-sm font-bold text-[#64ffda] mb-1.5 flex items-center gap-1.5"><GraduationCap className="w-4 h-4" /> Education</h3>
              <div className="border-l-2 border-[#64ffda]/30 pl-3">
                <h4 className="text-[13px] font-bold text-white">B.Tech — Computer Science & Engineering</h4>
                <p className="text-[11px] text-[#64ffda] font-mono">College of Engineering & Management, Kolaghat | 2017 – 2021 | CGPA: 8.50</p>
              </div>
            </div>
            <div className="border-t border-[#64ffda]/10 pt-2">
              <h3 className="text-sm font-bold text-[#64ffda] mb-1.5 flex items-center gap-1.5"><Languages className="w-4 h-4" /> Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Bengali (Native)", "English (Professional)", "Hindi (Professional)", "Odia (Professional)"].map((lang) => (
                  <span key={lang} className="text-[11px] text-[#8892b0] bg-[#64ffda]/5 px-3 py-1.5 rounded border border-[#64ffda]/10">{lang}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageBorder>
    ),
  },
  {
    id: 3,
    front: (
      <PageBorder pageNum={4} totalPages={4}>
        <div className="h-full bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] p-6 md:p-8 flex flex-col relative overflow-hidden">
          <div className="absolute inset-0 hero-circuit-lines opacity-15" />
          <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-sm font-bold text-[#64ffda] mb-2 flex items-center gap-1.5"><Code className="w-4 h-4" /> Projects</h3>
            <div className="space-y-2.5 flex-1">
              <div className="border-l-2 border-[#64ffda]/30 pl-2.5">
                <h4 className="text-[13px] font-bold text-white">AWS Well-Architected Review Automation</h4>
                <p className="text-[11px] text-[#64ffda] font-mono">Python, AWS Lambda, Well-Architected Tool API</p>
                <p className="text-[11px] text-[#8892b0] mt-1">Automated Well-Architected reviews across 10 accounts; Lambda function runs daily, queries pillar scores via API, and emails CSV reports to management.</p>
              </div>
              <div className="border-l-2 border-[#64ffda]/30 pl-2.5">
                <h4 className="text-[13px] font-bold text-white">Barracuda WAF-as-a-Service Migration Framework</h4>
                <p className="text-[11px] text-[#64ffda] font-mono">Barracuda WAF, AWS CloudFormation, Lambda, Python</p>
                <p className="text-[11px] text-[#8892b0] mt-1">Designed and packaged a WAF migration framework (20+ documents) accelerating partner-led deployments; reduced initial deployment to under 2 hours via automated CloudFormation + Lambda workflows.</p>
              </div>
              <div className="border-l-2 border-[#64ffda]/30 pl-2.5">
                <h4 className="text-[13px] font-bold text-white">Network Firewall with TLS Inspection</h4>
                <p className="text-[11px] text-[#64ffda] font-mono">AWS Network Firewall, ACM Private CA, Lambda, Python</p>
                <p className="text-[11px] text-[#8892b0] mt-1">Architected deep packet inspection for encrypted traffic in production VPCs; deployed firewall endpoints across subnets with automated rule management via Lambda.</p>
              </div>
              <div className="border-l-2 border-[#64ffda]/30 pl-2.5">
                <h4 className="text-[13px] font-bold text-white">SecurityHub + Wazuh SIEM Integration</h4>
                <p className="text-[11px] text-[#64ffda] font-mono">AWS Security Hub, Wazuh, EventBridge, Lambda, CloudWatch</p>
                <p className="text-[11px] text-[#8892b0] mt-1">Integrated Security Hub findings with Wazuh SIEM using EventBridge + Lambda for real-time correlation; built dashboards for cross-account visibility.</p>
              </div>
              <div className="border-l-2 border-[#64ffda]/30 pl-2.5">
                <h4 className="text-[13px] font-bold text-white">WAF Automation with Terraform</h4>
                <p className="text-[11px] text-[#64ffda] font-mono">Terraform, AWS WAF v2, GitHub Actions</p>
                <p className="text-[11px] text-[#8892b0] mt-1">Automated WAF deployment across 10+ AWS accounts using reusable Terraform modules with CI/CD pipeline; reduced deployment time from 30 minutes to under 5 minutes.</p>
              </div>
            </div>
            <div className="mt-3 border-t border-[#64ffda]/10 pt-3">
              <p className="text-[12px] text-[#8892b0] italic text-center">
                References available upon request
              </p>
            </div>
          </div>
        </div>
      </PageBorder>
    ),
    back: null,
  },
];

export default function FlipbookResume() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");
  const [flipKey, setFlipKey] = useState(0);

  const goToPage = useCallback(
    (newPage: number) => {
      if (newPage < 0 || newPage >= resumePages.length || isFlipping) return;
      setFlipDirection(newPage > currentPage ? "next" : "prev");
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(newPage);
        setFlipKey((k) => k + 1);
        setTimeout(() => setIsFlipping(false), 600);
      }, 50);
    },
    [currentPage, isFlipping]
  );

  const nextPage = useCallback(() => goToPage(currentPage + 1), [currentPage, goToPage]);
  const prevPage = useCallback(() => goToPage(currentPage - 1), [currentPage, goToPage]);

  const page = resumePages[currentPage];

  return (
    <section id="resume" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-xs font-mono text-[#64ffda]/70 bg-[#64ffda]/5 px-4 py-1.5 rounded-full border border-[#64ffda]/15">
              RESUME
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Professional <span className="text-[#64ffda]">Resume</span>
          </h2>
          <p className="text-[#8892b0] text-sm">Click through pages to explore my journey</p>
        </div>

        <div className="flex justify-center mb-6 gap-2">
          {resumePages.map((_, i) => (
            <button key={i} onClick={() => goToPage(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 border ${
                i === currentPage
                  ? "bg-[#64ffda] border-[#64ffda] shadow-[0_0_12px_rgba(100,255,218,0.5)] scale-110"
                  : "bg-transparent border-[#64ffda]/30 hover:border-[#64ffda]/60 hover:bg-[#64ffda]/10"
              }`} aria-label={`Go to page ${i + 1}`} />
          ))}
        </div>

        <div className="relative mx-auto" style={{ maxWidth: "800px", aspectRatio: "4 / 3" }}>
          <div className="absolute inset-0 bg-[#64ffda]/5 rounded-2xl blur-3xl" />
          <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden"
            style={{ perspective: "1200px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={flipKey}
                initial={{
                  rotateY: flipDirection === "next" ? -90 : 90,
                  opacity: 0.3,
                  scale: 0.92,
                }}
                animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                exit={{ rotateY: flipDirection === "next" ? 90 : -90, opacity: 0.3, scale: 0.92 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                style={{ transformStyle: "preserve-3d" }}
                className="absolute inset-0 rounded-2xl"
              >
                {page.front}
              </motion.div>
            </AnimatePresence>
            <motion.div className="absolute -inset-px rounded-2xl pointer-events-none"
              animate={{ boxShadow: ["0 0 15px rgba(100,255,218,0.15)", "0 0 30px rgba(100,255,218,0.25)", "0 0 15px rgba(100,255,218,0.15)"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-6">
          <motion.button onClick={prevPage} disabled={currentPage === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#112240] border border-[#64ffda]/30 text-[#64ffda] text-sm font-medium hover:bg-[#64ffda]/10 hover:border-[#64ffda]/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            whileHover={{ scale: currentPage > 0 ? 1.05 : 1 }} whileTap={{ scale: currentPage > 0 ? 0.95 : 1 }}>
            <ChevronLeft className="w-4 h-4" /> Prev
          </motion.button>
          <span className="text-xs font-mono text-[#8892b0]">
            Page {currentPage + 1} of {resumePages.length}
          </span>
          <motion.button onClick={nextPage} disabled={currentPage === resumePages.length - 1}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#64ffda] text-[#0a192f] text-sm font-bold hover:bg-[#45e0b8] transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-[#64ffda]/20"
            whileHover={{ scale: currentPage < resumePages.length - 1 ? 1.05 : 1 }} whileTap={{ scale: currentPage < resumePages.length - 1 ? 0.95 : 1 }}>
            Next <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
