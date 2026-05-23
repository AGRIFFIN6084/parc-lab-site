export default function PARCLabMockup() {
  const pathways = [
    {
      title: "AP Computer Science Principles",
      subtitle: "Computational Thinking + Creativity",
      tools: "Code.org • App Lab • AI Tools",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "AP Computer Science A",
      subtitle: "Java + Object-Oriented Thinking",
      tools: "Java • Software Engineering • Algorithms",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "AP Cybersecurity",
      subtitle: "Defense • Investigation • Simulation",
      tools: "SOC Concepts • Threat Analysis • Ethical Hacking",
      image:
        "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Graphic Design",
      subtitle: "Photoshop + Illustrator",
      tools: "Branding • Typography • Visual Communication",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Mass Media",
      subtitle: "Storytelling + Production",
      tools: "Premiere Pro • Editing • Motion Media",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  const highlights = [
    "AP + Dual Credit Opportunities",
    "Industry Certifications",
    "Adobe Creative Cloud",
    "AI-Integrated Learning",
    "Hands-On Cybersecurity Simulations",
    "FTC Robotics Collaboration",
    "Portfolio-Based Projects",
    "Real-World Problem Solving",
  ];

  return (
    <div className="bg-[#0B1220] text-white min-h-screen font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800&auto=format&fit=crop')",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-block bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full px-4 py-2 text-sm tracking-wide mb-6 text-[#F3D56A]">
              Rockford Christian School
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Computer Science +
              <br />
              Digital Media Arts
            </h1>

            <div className="text-2xl lg:text-3xl font-light text-[#D4AF37] mb-8">
              Powered by the PARC Innovation Lab
            </div>

            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mb-10">
              AP courses, dual credit opportunities, creative media, cybersecurity,
              programming, and robotics collaboration — all in a shared
              environment where students learn through hands-on projects, problem
              solving, and real-world tools.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#D4AF37] hover:bg-[#e6c24a] text-black font-bold px-6 py-4 rounded-2xl text-lg transition-all">
                Explore Pathways
              </button>

              <button className="border border-white/30 hover:border-white/60 bg-white/5 backdrop-blur px-6 py-4 rounded-2xl text-lg transition-all">
                Tour the PARC LAB
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="bg-[#111827] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-6">
          {[
            ["AP Courses", "Three"],
            ["RVC Dual Credit Courses", "Two"],
            ["Creative + Technical", "Integrated"],
            ["Adobe • Java • Python • AI", "Tools"],
          ].map(([title, value]) => (
            <div
              key={title}
              className="bg-white/5 rounded-3xl p-6 border border-white/10"
            >
              <div className="text-4xl font-black text-[#D4AF37] mb-2">
                {value}
              </div>
              <div className="text-slate-300 text-lg">{title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm mb-4">
              What Makes This Different
            </div>

            <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
              A Shared Space for Creative and Technical Learning
            </h2>

            <div className="space-y-5 text-lg text-slate-300 leading-relaxed">
              <p>
                The PARC Innovation Lab combines programming, cybersecurity,
                media production, design, AI, and systems thinking into a
                highly visual, hands-on environment designed to prepare students
                for a world being reshaped by technology and AI.
              </p>

              <p>
                Students create software, produce media, design brands,
                investigate cybersecurity scenarios, collaborate with robotics,
                and learn to communicate ideas clearly and creatively.
              </p>

              <p>
                Students are challenged to
                think deeply, solve problems strategically, and develop the
                discipline and adaptability required in modern technical and
                creative fields.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="bg-gradient-to-br from-[#1E293B] to-[#111827] border border-white/10 rounded-3xl p-6 text-lg font-medium hover:border-[#D4AF37]/40 transition-all"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PATHWAYS */}
      <section className="bg-[#111827] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm mb-4">
              Learning Pathways
            </div>

            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Technical. Creative. Interconnected.
            </h2>

            <p className="text-slate-300 text-lg max-w-4xl leading-relaxed">
              Courses are intentionally designed to overlap and reinforce one
              another. Students learn to think across disciplines — combining
              communication, engineering, creativity, strategy, and systems
              thinking.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pathways.map((course) => (
              <div
                key={course.title}
                className="overflow-hidden rounded-[2rem] bg-[#0F172A] border border-white/10 hover:border-[#D4AF37]/40 transition-all group"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                <div className="p-8">
                  <div className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] mb-3">
                    Pathway
                  </div>

                  <h3 className="text-2xl font-bold mb-3 leading-tight">
                    {course.title}
                  </h3>

                  <div className="text-lg text-slate-300 mb-4">
                    {course.subtitle}
                  </div>

                  <div className="text-slate-400 leading-relaxed">
                    {course.tools}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARC LAB */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-5xl mb-16">
          <div className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm mb-4">
            The PARC Innovation Lab
          </div>

          <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
            More Than a Classroom.
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed max-w-4xl">
            The PARC LAB is a shared innovation space supporting computer
            science, digital media arts, cybersecurity, and the FTC robotics
            program.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1800&auto=format&fit=crop"
              alt="Innovation Lab"
              className="rounded-[2rem] shadow-2xl border border-white/10 w-full"
            />
          </div>

          <div>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                The environment encourages overlap between programming,
                engineering, media production, design, communication, and
                collaborative problem solving.
              </p>

              <p>
                Features include cybersecurity dashboards, collaborative work
                zones, creative production areas, robotics integration,
                large-format displays, and flexible spaces designed for focused
                work and creative projects.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {[
                "Classroom Zones",
                "Cybersecurity Stations",
                "Immersive Environment",
                "Media Production",
                "Robotics Collaboration",
                "Collaboration Spaces",
              ].map((zone) => (
                <div
                  key={zone}
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4"
                >
                  {zone}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROBOTICS */}
      <section className="bg-gradient-to-b from-[#111827] to-[#0B1220] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-14">
            <div className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm mb-4">
              FTC Robotics
            </div>

            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
              Robotics and the PARC LAB
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              While robotics is not a formal course pathway, the FTC robotics
              program shares the PARC LAB environment and creates natural overlap
              with programming, engineering, cybersecurity, media production,
              systems thinking, teamwork, and strategic problem solving.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Programming + Engineering",
                text: "Students apply coding and systems thinking to real-world mechanical and strategic challenges.",
              },
              {
                title: "Creative Communication",
                text: "Media, branding, documentation, and visual communication support team storytelling and outreach.",
              },
              {
                title: "Collaboration + Strategy",
                text: "Students learn teamwork, iteration, leadership, troubleshooting, and high-pressure problem solving.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-8"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-5xl">
          <div className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm mb-4">
            Philosophy
          </div>

          <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-10">
            Preparing Students to Think Deeply in a World of Increasing Complexity.
          </h2>

          <div className="space-y-8 text-lg text-slate-300 leading-relaxed">
            <p>
              Students are taught
              to think critically, communicate clearly, solve problems
              creatively, and use technology responsibly.
            </p>

            <p>
              The program emphasizes systems thinking, object-oriented thinking,
              ethical discernment, collaboration, and the ability
              to transfer understanding across disciplines.
            </p>

            <p>
              In the age of AI, students must learn 
              how to demonstrate understanding, verify information,
              communicate ideas, and create meaningful work with integrity.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="border-t border-white/10 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm mb-4">
            Learn More
          </div>

          <h2 className="text-4xl lg:text-5xl font-black mb-8">
            Explore the Future of Learning at Rockford Christian.
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#D4AF37] text-black px-6 py-4 rounded-2xl font-bold text-lg">
              Schedule a Tour
            </button>

            <button className="border border-white/20 px-6 py-4 rounded-2xl text-lg bg-white/5">
              Contact Mr. Griffin
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
