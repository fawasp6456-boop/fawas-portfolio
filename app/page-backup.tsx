"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Clinical Decision Support System",
    description:
      "An intelligent diabetes risk prediction system combining Machine Learning, Explainable AI and Neuro-Symbolic AI.",
    technologies: [
      "Python",
      "Django",
      "Machine Learning",
      "XAI",
      "Neuro-Symbolic AI",
    ],
  },
  {
    title: "AI Data Analysis",
    description:
      "A data science project focused on data preprocessing, visualization, machine learning and model evaluation.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
  },
  {
    title: "Machine Learning Projects",
    description:
      "A collection of practical machine learning experiments covering classification, regression and clustering.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Matplotlib",
    ],
  },
];

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
  "Git & GitHub",
  "SQL",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="fixed inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -100, 80, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[5%] top-[10%] h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 100, 0],
            y: [0, 100, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[5%] top-[30%] h-80 w-80 rounded-full bg-cyan-500/20 blur-[130px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:50px_50px]" />

      </div>


      {/* ================= NAVBAR ================= */}

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">

        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          <a
            href="#"
            className="text-xl font-black tracking-widest"
          >
            FAWAS
            <span className="text-cyan-400">.</span>
          </a>

          <div className="hidden gap-8 text-sm text-gray-400 md:flex">

            <a
              href="#about"
              className="transition hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="transition hover:text-cyan-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="transition hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition hover:text-cyan-400"
            >
              Contact
            </a>

          </div>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            GH
          </a>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">

        <div className="mx-auto max-w-5xl text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 text-sm text-cyan-300">

              <span>✦</span>

              AI • ML • DATA SCIENCE

            </div>

          </motion.div>


          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl font-black leading-tight sm:text-7xl md:text-8xl"
          >

            Hi, I&apos;m{" "}

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

              Fawas

            </span>

          </motion.h1>


          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 1,
            }}
            className="mt-6 text-2xl font-semibold text-gray-300 md:text-4xl"
          >

            AI &amp; Machine Learning Engineer

          </motion.h2>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.8,
            }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg"
          >

            I build intelligent systems using Artificial Intelligence,
            Machine Learning and Data Science — turning data into
            meaningful solutions.

          </motion.p>


          {/* BUTTONS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.2,
              duration: 0.8,
            }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >

            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:scale-105"
            >

              View My Work

              <span className="transition group-hover:translate-y-1">
                ↓
              </span>

            </a>


            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >

              ↓ Resume

            </a>

          </motion.div>


          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-20 text-3xl text-gray-500"
          >

            ↓

          </motion.div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-32"
      >

        <SectionTitle
          number="01"
          title="About Me"
          subtitle="A little bit about who I am"
        />


        <div className="grid gap-8 md:grid-cols-2">

          <GlassCard>

            <div className="mb-5 text-5xl">
              🧠
            </div>

            <h3 className="mb-4 text-2xl font-bold">
              Building Intelligent Systems
            </h3>

            <p className="leading-8 text-gray-400">

              I&apos;m an AI, Machine Learning and Data Science
              engineering student passionate about developing
              intelligent applications that solve real-world problems.

            </p>

          </GlassCard>


          <GlassCard>

            <div className="mb-5 text-5xl">
              💻
            </div>

            <h3 className="mb-4 text-2xl font-bold">
              From Data to Solutions
            </h3>

            <p className="leading-8 text-gray-400">

              My interests include machine learning, deep learning,
              explainable AI, data analysis and intelligent
              decision-support systems.

            </p>

          </GlassCard>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="border-y border-white/5 bg-white/[0.02] py-32"
      >

        <div className="mx-auto max-w-6xl px-6">

          <SectionTitle
            number="02"
            title="Skills"
            subtitle="Technologies I work with"
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
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center text-sm text-gray-300 backdrop-blur-xl transition hover:border-cyan-400/40 hover:text-white"
              >

                {skill}

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-32"
      >

        <SectionTitle
          number="03"
          title="Featured Projects"
          subtitle="Things I&apos;ve built"
        />


        <div className="grid gap-6 md:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:border-cyan-400/30"
            >

              <div className="mb-7 flex items-center justify-between">

                <div className="text-4xl">
                  ⚡
                </div>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-3 py-2 text-sm text-gray-400 transition hover:text-white"
                >
                  ↗
                </a>

              </div>


              <h3 className="mb-4 text-xl font-bold">
                {project.title}
              </h3>


              <p className="mb-6 text-sm leading-7 text-gray-400">
                {project.description}
              </p>


              <div className="flex flex-wrap gap-2">

                {project.technologies.map((technology) => (

                  <span
                    key={technology}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400"
                  >
                    {technology}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </section>


      {/* ================= GITHUB ================= */}

      <section className="border-y border-white/5 bg-white/[0.02] py-32">

        <div className="mx-auto max-w-6xl px-6 text-center">

          <div className="mx-auto mb-6 text-5xl font-black text-cyan-400">
            GH
          </div>


          <h2 className="text-4xl font-bold">
            Find Me on GitHub
          </h2>


          <p className="mx-auto mt-4 max-w-xl text-gray-400">

            Explore my projects, experiments, source code
            and contributions.

          </p>


          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 transition hover:border-cyan-400 hover:text-cyan-400"
          >

            Visit GitHub ↗

          </a>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-32"
      >

        <SectionTitle
          number="04"
          title="Let&apos;s Connect"
          subtitle="Have an idea? Let&apos;s build something interesting."
        />


        <div className="flex flex-wrap justify-center gap-4">

          <ContactButton
            icon="GH"
            text="GitHub"
            href="https://github.com/"
          />

          <ContactButton
            icon="in"
            text="LinkedIn"
            href="https://www.linkedin.com/"
          />

          <ContactButton
            icon="@"
            text="Email"
            href="mailto:your@email.com"
          />

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">

        © {new Date().getFullYear()} Fawas P.
        Built with Next.js &amp; ❤️

      </footer>

    </main>
  );
}


/* ================= SECTION TITLE ================= */

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
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className="mb-14"
    >

      <span className="text-sm font-semibold text-cyan-400">
        {number} /
      </span>


      <h2 className="mt-2 text-4xl font-bold md:text-5xl">
        {title}
      </h2>


      <p className="mt-3 text-gray-500">
        {subtitle}
      </p>

    </motion.div>

  );
}


/* ================= GLASS CARD ================= */

function GlassCard({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <motion.div
      whileHover={{
        y: -8,
      }}
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
    >

      {children}

    </motion.div>

  );
}


/* ================= CONTACT BUTTON ================= */

function ContactButton({
  icon,
  text,
  href,
}: {
  icon: string;
  text: string;
  href: string;
}) {

  return (

    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-400"
    >

      <span className="font-bold">
        {icon}
      </span>

      {text}

    </a>

  );
}