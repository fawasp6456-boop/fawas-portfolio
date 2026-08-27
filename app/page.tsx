"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "Data Science",
  "Artificial Intelligence",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "TensorFlow",
  "Django",
  "SQL",
  "Git & GitHub",
];

const projects = [
  {
    number: "01",
    title: "Clinical Decision Support System",
    description:
      "An intelligent diabetes risk prediction system combining Machine Learning, Explainable AI and Neuro-Symbolic AI to support transparent and interpretable clinical decision-making.",
    tags: ["Python", "Django", "ML", "XAI", "Neuro-Symbolic AI"],
  },
  {
    number: "02",
    title: "AI & Data Science Projects",
    description:
      "Practical projects involving data preprocessing, exploratory data analysis, visualization, machine learning and model evaluation.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    number: "03",
    title: "Machine Learning Experiments",
    description:
      "Hands-on experiments with classification, regression, clustering and different machine learning workflows.",
    tags: ["Python", "ML", "Data Science"],
  },
];

const roles = [
  "AI & ML Engineer",
  "Data Science Enthusiast",
  "Machine Learning Developer",
  "B.Tech Engineering Student",
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    const speed = deleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, text.length + 1));

        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1300);
        }
      } else {
        setText(current.substring(0, text.length - 1));

        if (text.length === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">

      {/* BACKGROUND */}

      <div className="fixed inset-0 -z-10">

        <motion.div
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -80, 100, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[5%] top-[10%] h-80 w-80 rounded-full bg-cyan-500/15 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 80, 0],
            y: [0, 100, -60, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[5%] top-[25%] h-96 w-96 rounded-full bg-purple-600/15 blur-[130px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:55px_55px]" />

      </div>


      {/* NAVBAR */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a
            href="#"
            className="text-xl font-black tracking-[0.25em]"
          >
            FAWAS<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden gap-8 text-sm text-gray-400 md:flex">

            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>

            <a href="#education" className="transition hover:text-cyan-400">
              Education
            </a>

            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>

            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>

          </div>

          <a
            href="https://github.com/fawasp6456-boop"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cyan-400/30 px-4 py-2 text-sm font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
          >
            GitHub ↗
          </a>

        </div>

      </nav>


      {/* HERO */}

      <section className="relative flex min-h-screen items-center px-6 pb-20 pt-32">

        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          {/* HERO TEXT */}

          <div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 text-sm text-cyan-300"
            >
              <span className="animate-pulse">●</span>
              AVAILABLE FOR OPPORTUNITIES
            </motion.div>


            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500"
            >
              Hello, I&apos;m
            </motion.p>


            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl font-black leading-none sm:text-7xl md:text-8xl"
            >
              Fawas
              <span className="text-cyan-400">.</span>
            </motion.h1>


            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-7 min-h-[45px] text-2xl font-bold text-gray-300 md:text-4xl"
            >
              <span className="text-cyan-400">&gt; </span>
              {text}
              <span className="animate-pulse text-cyan-400">|</span>
            </motion.div>


            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-7 max-w-2xl text-base leading-8 text-gray-400 md:text-lg"
            >
              I&apos;m a 4th year B.Tech Engineering student at Vimal
              Jyothi Engineering College, Chemperi, passionate about
              Artificial Intelligence, Machine Learning and Data Science.
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-9 flex flex-wrap gap-4"
            >

              <a
                href="#projects"
                className="rounded-full bg-white px-7 py-3.5 font-bold text-black transition hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
              >
                Explore My Work ↓
              </a>

              <a
                href="/resume.pdf"
                download
                className="rounded-full border border-white/15 px-7 py-3.5 font-bold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                Download Resume
              </a>

            </motion.div>


            <div className="mt-12 flex gap-3">

              <SocialLink
                label="GH"
                href="https://github.com/fawasp6456-boop"
              />

              <SocialLink
                label="in"
                href="https://www.linkedin.com/in/fawas-p-9b2ba0417/"
              />

              <SocialLink
                label="WA"
                href="https://wa.me/9526868948"
              />

              <SocialLink
                label="@"
                href="mailto:fawasp6456@gmail.com"
              />

            </div>

          </div>


          {/* PROFILE PHOTO */}

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-end"
          >

            <div className="relative">

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-7 rounded-full border border-dashed border-cyan-400/30"
              />

              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -inset-4 rounded-full bg-cyan-400/10 blur-2xl"
              />

              <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-white/10 bg-white/5 shadow-[0_0_80px_rgba(34,211,238,0.18)] sm:h-80 sm:w-80">

                <img
                  src="/profile.jpg"
                  alt="Fawas"
                  className="h-full w-full object-cover"
                />

              </div>


              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -right-8 top-8 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 shadow-xl backdrop-blur-xl"
              >
                <span className="text-xs text-gray-500">
                  BUILDING
                </span>

                <p className="font-bold text-cyan-400">
                  AI SYSTEMS
                </p>
              </motion.div>


              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -left-8 bottom-10 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 shadow-xl backdrop-blur-xl"
              >
                <span className="text-xs text-gray-500">
                  FOCUS
                </span>

                <p className="font-bold text-purple-400">
                  AI × ML
                </p>
              </motion.div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* ABOUT */}

      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-32"
      >

        <SectionTitle
          number="01"
          title="About Me"
          subtitle="Who I am and what I enjoy building"
        />

        <div className="grid gap-6 lg:grid-cols-3">

          <InfoCard
            icon="🧠"
            title="AI & Machine Learning"
            text="Interested in building intelligent systems that learn from data and solve practical problems."
          />

          <InfoCard
            icon="📊"
            title="Data Science"
            text="Passionate about transforming raw data into useful insights through analysis and machine learning."
          />

          <InfoCard
            icon="🔬"
            title="Explainable AI"
            text="Exploring transparent and interpretable AI systems that can provide meaningful reasoning."
          />

        </div>

      </section>


      {/* EDUCATION */}

      <section
        id="education"
        className="border-y border-white/5 bg-white/[0.02] py-32"
      >

        <div className="mx-auto max-w-7xl px-6">

          <SectionTitle
            number="02"
            title="Education"
            subtitle="My academic journey"
          />


          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10"
          >

            <div className="absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-gradient-to-b from-cyan-400 to-purple-500" />

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div>

                <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                  Currently Pursuing
                </p>

                <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                  B.Tech Engineering
                </h3>

                <p className="mt-2 text-lg text-gray-300">
                  Vimal Jyothi Engineering College, Chemperi
                </p>

              </div>


              <div className="rounded-2xl border border-white/10 bg-black/30 px-6 py-4 text-center">

                <p className="text-3xl font-black text-white">
                  4th
                </p>

                <p className="text-sm text-gray-500">
                  YEAR
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* SKILLS */}

      <section
        id="skills"
        className="mx-auto max-w-7xl px-6 py-32"
      >

        <SectionTitle
          number="03"
          title="Skills"
          subtitle="Technologies and areas I'm exploring"
        />


        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">

          {skills.map((skill, index) => (

            <motion.div
              key={skill}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                y: -7,
                scale: 1.03,
              }}
              className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 text-center transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.04]"
            >

              <div className="mb-3 text-2xl">
                {getSkillSymbol(skill)}
              </div>

              <p className="text-sm font-semibold text-gray-300 group-hover:text-white">
                {skill}
              </p>

            </motion.div>

          ))}

        </div>

      </section>


      {/* PROJECTS */}

      <section
        id="projects"
        className="border-y border-white/5 bg-white/[0.02] py-32"
      >

        <div className="mx-auto max-w-7xl px-6">

          <SectionTitle
            number="04"
            title="Featured Projects"
            subtitle="Some of the things I'm building"
          />


          <div className="grid gap-6 lg:grid-cols-3">

            {projects.map((project, index) => (

              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-7 backdrop-blur-xl"
              >

                <div className="absolute right-5 top-5 text-5xl font-black text-white/[0.04]">
                  {project.number}
                </div>


                <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5 text-2xl">
                  {index === 0 ? "🧠" : index === 1 ? "📊" : "⚙️"}
                </div>


                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>


                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>


                <div className="mt-7 flex flex-wrap gap-2">

                  {project.tags.map((tag) => (

                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400"
                    >
                      {tag}
                    </span>

                  ))}

                </div>


                <a
                  href="https://github.com/fawasp6456-boop"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-block text-sm font-bold text-cyan-400 transition group-hover:translate-x-1"
                >
                  View on GitHub ↗
                </a>

              </motion.article>

            ))}

          </div>

        </div>

      </section>


      {/* GITHUB */}

      <section className="py-32">

        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.08] to-purple-500/[0.08] p-10 text-center md:p-16"
          >

            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              Open Source
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Explore My GitHub
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
              Check out my projects, experiments, source code and
              contributions.
            </p>

            <a
              href="https://github.com/fawasp6456-boop"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-bold text-black transition hover:scale-105"
            >
              github.com/fawasp6456-boop ↗
            </a>

          </motion.div>

        </div>

      </section>


      {/* CONTACT */}

      <section
        id="contact"
        className="border-t border-white/5 bg-white/[0.02] py-32"
      >

        <div className="mx-auto max-w-7xl px-6 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Let&apos;s Connect
          </p>

          <h2 className="mt-4 text-5xl font-black md:text-6xl">
            Let&apos;s build
            <span className="text-cyan-400"> something.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-gray-400">
            I&apos;m always interested in learning, collaborating and
            building meaningful technology projects.
          </p>


          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <ContactButton
              title="GitHub"
              value="@fawasp6456-boop"
              href="https://github.com/fawasp6456-boop"
              icon="GH"
            />

            <ContactButton
              title="LinkedIn"
              value="Fawas P."
              href="https://www.linkedin.com/in/fawas-p-9b2ba0417/"
              icon="in"
            />

            <ContactButton
              title="WhatsApp"
              value="Chat with me"
              href="https://wa.me/9526868948"
              icon="WA"
            />

            <ContactButton
              title="Email"
              value="fawasp6456@gmail.com"
              href="mailto:fawasp6456@gmail.com"
              icon="@"
            />

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="border-t border-white/10 px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Fawas P. All rights reserved.
          </p>

          <p>
            Built with <span className="text-cyan-400">Next.js</span> &
            passion for AI.
          </p>

        </div>

      </footer>

    </main>
  );
}


/* SECTION TITLE */

function SectionTitle({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      className="mb-14"
    >

      <span className="text-sm font-bold tracking-widest text-cyan-400">
        {number} /
      </span>

      <h2 className="mt-2 text-4xl font-black md:text-5xl">
        {title}
      </h2>

      <p className="mt-3 text-gray-500">
        {subtitle}
      </p>

    </motion.div>
  );
}


/* INFO CARD */

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="rounded-3xl border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl"
    >

      <div className="mb-6 text-4xl">
        {icon}
      </div>

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-gray-400">
        {text}
      </p>

    </motion.div>
  );
}


/* SOCIAL LINK */

function SocialLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-xs font-black text-gray-400 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
    >
      {label}
    </a>
  );
}


/* CONTACT BUTTON */

function ContactButton({
  title,
  value,
  href,
  icon,
}: {
  title: string;
  value: string;
  href: string;
  icon: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex min-w-[230px] items-center gap-4 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-left transition hover:-translate-y-1 hover:border-cyan-400/40"
    >

      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 font-black text-cyan-400">
        {icon}
      </span>

      <span>

        <span className="block text-xs uppercase tracking-widest text-gray-600">
          {title}
        </span>

        <span className="mt-1 block text-sm font-semibold text-gray-300 group-hover:text-white">
          {value}
        </span>

      </span>

    </a>
  );
}


/* SKILL SYMBOL */

function getSkillSymbol(skill: string) {
  if (skill === "Python") return "🐍";
  if (skill.includes("Machine")) return "🤖";
  if (skill.includes("Deep")) return "🧠";
  if (skill.includes("Data")) return "📊";
  if (skill.includes("Artificial")) return "✨";
  if (skill === "TensorFlow") return "🔥";
  if (skill === "Django") return "🌐";
  if (skill === "SQL") return "🗄️";
  if (skill.includes("Git")) return "⚡";
  return "◆";
}