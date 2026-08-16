"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Shield } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const knowledgeBase = {
  name: "Dipnarayan Nandi",
  nickname: "Infinite",
  title: "Cloud Security Engineer",
  email: "dipnarayan.cse@gmail.com",
  phone: "",
  website: "www.dipnarayan.in",
  location: "Kolkata, India",
  linkedin: "linkedin.com/in/dipnarayannandi",
  github: "github.com/Dip0375",
  experience: "5+ years",
  summary:
    "Cloud Security Engineer with 5+ years of hands-on experience hardening AWS environments through threat detection, automated incident response, and compliance-driven security architecture.",
  skills: {
    cloud: ["AWS (Advanced)", "Azure (Intermediate)"],
    security: [
      "AWS WAF",
      "GuardDuty",
      "Security Hub",
      "Shield Advanced",
      "Inspector",
      "Amazon Macie",
      "IAM",
      "KMS",
      "AWS Config",
      "CloudTrail",
      "Barracuda WAF",
    ],
    siem: ["Wazuh", "IBM QRadar", "Seceon", "Amazon Detective", "CloudWatch"],
    devsecops: ["Checkov", "Trivy", "SonarQube", "Terraform", "CloudFormation", "Jenkins"],
    networking: ["AWS Network Firewall", "TLS Inspection", "ACM CA", "NACLs", "Security Groups", "VPC", "VNet"],
    compliance: ["PCI DSS", "CIS Benchmarks", "NIST"],
    scripting: ["Python (Boto3)", "Ubuntu", "Windows Server"],
  },
  certifications: [
    "AWS Certified Security - Specialty (SCS-C02) | April 2025",
    "AWS Certified Solutions Architect - Associate | December 2023",
    "WAF-as-a-Service Certified Product Specialist | Barracuda Networks | June 2025",
  ],
  experience_detail: [
    {
      role: "Cloud Security Engineer",
      company: "Workmates Core2Cloud Solution Ltd",
      location: "Bhubaneswar, India",
      duration: "Jun 2025 - Present",
      highlights: [
        "Deployed custom AWS WAF rule sets across 3 production apps",
        "Embedded Checkov static analysis into CI/CD pipeline",
        "Architected AWS Network Firewall with TLS inspection via ACM Private CA",
        "Built DevSecOps pipeline with Trivy & SonarQube",
        "Eliminated $116/month (97% reduction) in AWS Config overspend",
        "Integrated Wazuh SIEM with CloudTrail and VPC Flow Logs",
      ],
    },
    {
      role: "Junior Cloud Engineer",
      company: "Workmates Core2Cloud Solution Ltd",
      location: "Kolkata, India",
      duration: "Aug 2023 - May 2025",
      highlights: [
        "Improved AWS Security Hub score from 56% to 83% (+27 points)",
        "Configured Security Hub to EventBridge to SIEM integration pipeline",
        "Built automated resource change alerting using AWS Config + EventBridge + SNS",
      ],
    },
    {
      role: "Trainee Cloud Engineer",
      company: "Workmates Core2Cloud Solution Ltd",
      location: "Kolkata, India",
      duration: "Dec 2022 - Jul 2023",
      highlights: [
        "Deployed 3-tier AWS architectures, LAMP stacks, and Amazon WorkSpaces",
        "Configured SSL certificates for Apache and IIS-hosted websites",
      ],
    },
    {
      role: "Cloud Engineer",
      company: "DevOps Monk",
      location: "Remote",
      duration: "Sep 2021 - Dec 2022",
      highlights: [
        "Delivered AWS infrastructure using IAM, EC2, S3, CloudTrail, CloudFormation, Lambda",
        "Built CI/CD pipelines using Jenkins and automated infrastructure with Terraform",
      ],
    },
  ],
  education: "B.Tech in Computer Science & Engineering from College of Engineering & Management, Kolaghat (2017-2021) with CGPA 8.50",
  languages: ["Bengali (Native)", "English (Professional)", "Hindi", "Odia"],
  awards: ["Rising Star - Security Team (2025)", "Long Service Award - 3 Years (2026)"],
  projects: [
    "AWS WAF Custom Rule Implementation & Threat Detection",
    "DevSecOps Pipeline: IaC Security Scanning with Checkov",
    "AWS Network Firewall with TLS Inspection via ACM Private CA",
    "Automated Cloud Security Incident Response Pipeline",
    "CSPM & Security Hub Remediation - Posture Uplift (56% to 83%)",
  ],
};

function getResponse(input: string, userName: string = ""): string {
  const lower = input.toLowerCase().trim();
  const greeting = userName ? `${userName}, ` : "";

  // Greetings
  if (/\b(hi|hello|hey|howdy|hola|good morning|good evening|good afternoon)\b/.test(lower)) {
    const greetings = [
      `Hey${greeting}great to see you! I can tell you about Dipnarayan's skills, experience, certifications, and more. What would you like to know?`,
      `Hello${greeting}welcome! What else would you like to know about Dipnarayan?`,
      `Hi${greeting}feel free to ask me anything about Dipnarayan's work as a Cloud Security Engineer!`,
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  // Who are you / about bot
  if (/\b(who are you|what are you|tell me about yourself|what do you do)\b/.test(lower)) {
    return `I'm an AI assistant for this portfolio. I can answer questions about Dipnarayan's skills, work experience, certifications, projects, education, and contact information. Just ask!`;
  }

  // Who is Dipnarayan / about
  if (/\b(who is|about|tell me about|who's|介绍)\b.*\b(dipnarayan|infinite|he|him|this person|the owner)\b/.test(lower) || lower === "about" || lower === "about him" || lower === "about dip") {
    return `${knowledgeBase.name} (aka "${knowledgeBase.nickname}") is a ${knowledgeBase.title} with ${knowledgeBase.experience} of hands-on experience. He specializes in AWS security, threat detection, automated incident response, and compliance-driven security architecture. He's based in ${knowledgeBase.location}.`;
  }

  // Name
  if (/\b(your name|his name|name|what's your name|称呼)\b/.test(lower)) {
    return `His name is ${knowledgeBase.name}, but he goes by "${knowledgeBase.nickname}". He's a ${knowledgeBase.title}.`;
  }

  // Skills / technologies
  if (/\b(skills?|technologies?|tech stack|tools?|what can he|what does he know|expertise|proficient)\b/.test(lower)) {
    return `Dipnarayan's key skills:\n\nCloud: ${knowledgeBase.skills.cloud.join(", ")}\nSecurity: ${knowledgeBase.skills.security.slice(0, 8).join(", ")}\nSIEM: ${knowledgeBase.skills.siem.join(", ")}\nDevSecOps: ${knowledgeBase.skills.devsecops.join(", ")}\nNetworking: ${knowledgeBase.skills.networking.slice(0, 5).join(", ")}\nCompliance: ${knowledgeBase.skills.compliance.join(", ")}\nScripting: ${knowledgeBase.skills.scripting.join(", ")}`;
  }

  // AWS skills
  if (/\b(aws|amazon web services|cloud)\b/.test(lower)) {
    return `Dipnarayan is AWS Advanced certified. His AWS expertise includes: ${knowledgeBase.skills.cloud.join(", ")}. He also works with AWS security services like ${knowledgeBase.skills.security.slice(0, 6).join(", ")} and networking with ${knowledgeBase.skills.networking.slice(0, 4).join(", ")}.`;
  }

  // Security
  if (/\b(security|cyber|infosec|information security|penetration|vulnerability|threat)\b/.test(lower)) {
    return `Security is Dipnarayan's core expertise. He works with: ${knowledgeBase.skills.security.join(", ")}. He also has strong knowledge of compliance frameworks: ${knowledgeBase.skills.compliance.join(", ")} and SIEM tools: ${knowledgeBase.skills.siem.join(", ")}.`;
  }

  // Experience / work / job
  if (/\b(experience|work|job|career|employment|position|role|working)\b/.test(lower)) {
    const latest = knowledgeBase.experience_detail[0];
    return `Dipnarayan has ${knowledgeBase.experience} of experience. Currently he's a ${latest.role} at ${latest.company} (${latest.duration}). Before that he was a Junior Cloud Engineer and Trainee at the same company, plus a Cloud Engineer at DevOps Monk. Would you like details about any specific role?`;
  }

  // Current role / current job
  if (/\b(current|now|present|currently|latest)\b.*\b(role|job|position|work|where)\b/.test(lower) || /\bwhere does he work\b/.test(lower)) {
    const latest = knowledgeBase.experience_detail[0];
    return `Currently, Dipnarayan is a ${latest.role} at ${latest.company} in ${latest.location} (${latest.duration}). Key achievements include deploying custom AWS WAF rules, building DevSecOps pipelines with Trivy & SonarQube, and eliminating 97% of AWS Config overspend.`;
  }

  // Certifications / certified
  if (/\b(certifications?|certified|cert|aws certified|credentials?|qualifications?)\b/.test(lower)) {
    return `Dipnarayan holds these certifications:\n\n${knowledgeBase.certifications.map((c) => "• " + c).join("\n")}`;
  }

  // Education / degree / university
  if (/\b(education|degree|university|college|study|studied|b\.?tech|academic|cgpa)\b/.test(lower)) {
    return knowledgeBase.education;
  }

  // Projects
  if (/\b(projects?|portfolio|work samples|what has he built|key projects)\b/.test(lower)) {
    return `Dipnarayan's key projects include:\n\n${knowledgeBase.projects.map((p) => "• " + p).join("\n")}`;
  }

  // WAF
  if (/\b(waf|web application firewall|barracuda)\b/.test(lower)) {
    return `Dipnarayan is a WAF-as-a-Service Certified Product Specialist from Barracuda Networks. He deployed custom AWS WAF rule sets across 3 production applications including rate limiting, regex-based payload filtering, geo-restrictions, and XSS detection. He also integrated WAF logs with Wazuh and IBM QRadar for real-time threat correlation.`;
  }

  // DevSecOps / CI/CD
  if (/\b(devsecops|ci\/cd|pipeline|checkov|trivy|sonarqube|terraform|infrastructure as code|iac)\b/.test(lower)) {
    return `Dipnarayan specializes in DevSecOps. He embedded Checkov static analysis into CI/CD pipelines, built scanning with Trivy for container CVEs and SonarQube for SAST. He also works with Terraform and CloudFormation for infrastructure as code security.`;
  }

  // SIEM / monitoring
  if (/\b(siem|wazuh|qradar|seceon|monitoring|log management|detection)\b/.test(lower)) {
    return `Dipnarayan has strong SIEM experience with ${knowledgeBase.skills.siem.join(", ")}. He integrated Wazuh SIEM with CloudTrail and VPC Flow Logs for real-time correlation across API and network-level events, and configured end-to-end Security Hub to EventBridge to SIEM pipelines.`;
  }

  // Compliance
  if (/\b(compliance|pci|nist|cis|regulations?|standards?|governance)\b/.test(lower)) {
    return `Dipnarayan is experienced in compliance frameworks: ${knowledgeBase.skills.compliance.join(", ")}. He led CSPM-driven remediation campaigns improving AWS Security Hub scores by +27 points across CIS, PCI DSS, and NIST findings.`;
  }

  // Contact / email / phone / reach
  if (/\b(contact|email|phone|reach|get in touch|call|mail|how to contact|dipnarayan\.cse)\b/.test(lower)) {
    return `You can reach Dipnarayan through:\n\nEmail: ${knowledgeBase.email}\nWebsite: ${knowledgeBase.website}\nLinkedIn: ${knowledgeBase.linkedin}\nGitHub: ${knowledgeBase.github}`;
  }

  // LinkedIn
  if (/\b(linkedin|linkdin|professional network)\b/.test(lower)) {
    return `Dipnarayan's LinkedIn: ${knowledgeBase.linkedin}`;
  }

  // GitHub
  if (/\b(github|git|repositories?|code)\b/.test(lower)) {
    return `Dipnarayan's GitHub: ${knowledgeBase.github}`;
  }

  // Location / where
  if (/\b(location|where|live|based|city|country|from)\b/.test(lower)) {
    return `Dipnarayan is based in ${knowledgeBase.location}, India.`;
  }

  // Languages
  if (/\b(languages?|speak|speaking)\b/.test(lower)) {
    return `Dipnarayan speaks: ${knowledgeBase.languages.join(", ")}.`;
  }

  // Awards
  if (/\b(awards?|achievements?|recognition|honors?|prizes?)\b/.test(lower)) {
    return `Dipnarayan's awards:\n\n${knowledgeBase.awards.map((a) => "• " + a).join("\n")}`;
  }

  // Summary
  if (/\b(summary|overview|resume|cv|tell me everything|introduction|bio)\b/.test(lower)) {
    return `**${knowledgeBase.name}** (${knowledgeBase.nickname})\n${knowledgeBase.title}\n\n${knowledgeBase.summary}\n\nHe has ${knowledgeBase.experience} of experience, holds 3 certifications (AWS Security Specialty, AWS Solutions Architect, Barracuda WAF), and is based in ${knowledgeBase.location}. Visit ${knowledgeBase.website} for more!`;
  }

  // Price / salary / cost
  if (/\b(salary|price|cost|charge|rate|hire|freelance|available)\b/.test(lower)) {
    return `For hiring or collaboration inquiries, please reach out to Dipnarayan directly at ${knowledgeBase.email} or visit his website at ${knowledgeBase.website}. You can also connect on LinkedIn: ${knowledgeBase.linkedin}`;
  }

  // Thanks
  if (/\b(thanks?|thank you|thx|appreciate|helpful)\b/.test(lower)) {
    return `You're welcome! Glad I could help. If you have more questions about Dipnarayan, feel free to ask. You can also visit his website at ${knowledgeBase.website} or download his resume from the button above!`;
  }

  // Help
  if (/\b(help|what can you|options|commands?|menu)\b/.test(lower)) {
    return `I can help you with:\n\n- Skills & Technologies\n- Work Experience\n- Certifications\n- Projects\n- Education\n- Contact Information\n- Resume/Summary\n- Location & Languages\n- Awards\n\nJust ask anything about Dipnarayan!`;
  }

  // Default fallback
  const fallbacks = [
    `I'm not sure I understand. I can tell you about Dipnarayan's skills, experience, certifications, projects, education, or contact info. Try asking something like "What are his skills?" or "Tell me about his experience."`,
    `Hmm, I don't have an answer for that. But I know a lot about Dipnarayan! Ask me about his Cloud Security skills, work experience, certifications, or how to contact him.`,
    `I'm designed to answer questions about Dipnarayan's professional profile. Try asking about his skills, experience, projects, certifications, or contact details!`,
  ];
  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: `Hello! Welcome to the portfolio. I'm here to help you know better about Dipnarayan.\n\nAsk me about Skills, Experience, Certifications, Projects, Education, or Contact info.\n\nCould you tell me your good name?`,
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState("");
  const [step, setStep] = useState<"ask_name" | "ready">("ask_name");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setShowSuggestions(false);
    setIsTyping(true);

    // Handle name collection step
    if (step === "ask_name") {
      const raw = input.trim().replace(/[!?.]/g, "");
      const lowerRaw = raw.toLowerCase();

      // Check if input is a greeting or common non-name word
      const notName = /^(hi|hey|hello|howdy|hola|yo|sup|yo|ok|okay|yes|no|nah|yeah|nah|good|fine|great|cool|nice|sure|test|lol|haha|thanks|help|what|who|how|why|when|where|can|do|is|are|am|my|i'm|i am|not sure|nothing|anything|something)$/i.test(lowerRaw);

      if (notName || raw.length < 2) {
        setMessages((prev) => [...prev, {
          id: Date.now() + 10,
          text: `That looks like a greeting, not a name! Could you please tell me your actual name?`,
          sender: "bot",
          timestamp: new Date(),
        }]);
        setIsTyping(false);
        return;
      }

      setUserName(raw);
      setStep("ready");

      const delay = 600 + Math.random() * 800;
      setTimeout(() => {
        const greetings = [
          `Nice to meet you, ${raw}! I can tell you all about Dipnarayan's skills, experience, certifications, projects, and more. What would you like to know?`,
          `Great to meet you, ${raw}! Feel free to ask me anything about Dipnarayan — his AWS expertise, security certifications, DevSecOps work, or how to get in touch.`,
          `Hey ${raw}! Happy to have you here. What interests you about Dipnarayan's work as a Cloud Security Engineer?`,
        ];
        const botResponse: Message = {
          id: Date.now() + 1,
          text: greetings[Math.floor(Math.random() * greetings.length)],
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
        setShowSuggestions(true);
        setIsTyping(false);
      }, delay);
      return;
    }

    // Normal conversation
    const delay = 500 + Math.random() * 1000;
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getResponse(userMessage.text, userName),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setShowSuggestions(true);
      setIsTyping(false);
    }, delay);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 w-12 h-12 rounded-full bg-cyber-accent flex items-center justify-center shadow-lg shadow-cyber-accent/30 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: isOpen
            ? "0 0 20px rgba(100, 255, 218, 0.3)"
            : [
                "0 0 20px rgba(100, 255, 218, 0.2)",
                "0 0 30px rgba(100, 255, 218, 0.4)",
                "0 0 20px rgba(100, 255, 218, 0.2)",
              ],
        }}
        transition={{ duration: 2, repeat: isOpen ? 0 : Infinity }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-cyber-dark" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 text-cyber-dark" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[300px] max-w-[340px] h-[60vh] sm:h-[380px] max-h-[calc(100vh-120px)] rounded-2xl overflow-hidden border border-cyber-accent/20 shadow-2xl shadow-black/40 flex flex-col"
            style={{
              background: "linear-gradient(180deg, #112240 0%, #0a192f 100%)",
            }}
          >
            {/* Header */}
            <div className="bg-cyber-secondary/80 border-b border-cyber-accent/10 px-4 py-3 flex items-center gap-3 shrink-0">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-cyber-accent/10 border border-cyber-accent/30 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-cyber-accent" />
                </div>
                <motion.div
                  className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-cyber-secondary"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-foreground">AI Assistant</h3>
                <p className="text-[10px] text-green-500 font-mono">Online</p>
              </div>
              <motion.div
                className="flex gap-1"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-cyber-accent" />
                ))}
              </motion.div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-cyber-accent/10 border border-cyber-accent/20 flex items-center justify-center shrink-0 mt-1">
                      <Bot className="w-3.5 h-3.5 text-cyber-accent" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-cyber-accent text-cyber-dark rounded-br-md"
                        : "bg-cyber-secondary/80 text-foreground border border-border/30 rounded-bl-md"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                  </div>
                  {msg.sender === "user" && (
                    <div className="w-7 h-7 rounded-full bg-cyber-accent/20 flex items-center justify-center shrink-0 mt-1">
                      <User className="w-3.5 h-3.5 text-cyber-accent" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2"
                >
                  <div className="w-7 h-7 rounded-full bg-cyber-accent/10 border border-cyber-accent/20 flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5 text-cyber-accent" />
                  </div>
                  <div className="bg-cyber-secondary/80 border border-border/30 rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 rounded-full bg-cyber-accent/50"
                          animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: i * 0.15,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick suggestion chips */}
              {showSuggestions && !isTyping && step === "ready" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex flex-wrap gap-1.5 pl-9"
                >
                  {["Skills", "Experience", "Certifications", "Projects", "Contact"].map((chip) => (
                    <button
                      key={chip}
                      onClick={() => {
                        setInput(chip);
                        setShowSuggestions(false);
                        setTimeout(() => handleSend(), 50);
                      }}
                      className="text-[10px] font-mono bg-cyber-accent/10 text-cyber-accent border border-cyber-accent/20 rounded-full px-3 py-1 hover:bg-cyber-accent/20 transition-colors cursor-pointer"
                    >
                      {chip}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-cyber-accent/10 px-4 py-3 bg-cyber-secondary/50 shrink-0">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => { setInput(e.target.value); setShowSuggestions(false); }}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-cyber-dark/50 border border-border/30 rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyber-accent/40 transition-colors"
                />
                <motion.button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-cyber-accent flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-opacity cursor-pointer"
                >
                  <Send className="w-4 h-4 text-cyber-dark" />
                </motion.button>
              </div>
              <p className="text-[9px] text-muted-foreground/40 mt-2 text-center font-mono">
                Powered by AI Knowledge Base
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
