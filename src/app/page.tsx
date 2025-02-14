import Certifications from "./components/certifications";
import Education from "./components/education";
import Footer from "./components/footer";
import Header from "./components/header";
import Profile from "./components/profile";
import SectionSpacer from "./components/section-spacer";
import Skills from "./components/skills";
import Testimonials from "./components/testimonials";
import Work from "./components/work";

export default function Home() {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900">
      <Header />

      <main className="w-full max-w-2xl mx-auto pt-10 md:pt-16 px-4 sm:px-6 lg:px-8">
        <Profile />

        {/* <SectionSpacer id="projects" />
        <Projects /> */}

        <SectionSpacer id="skills" />
        <Skills />

        <SectionSpacer id="testimonials" />
        <Testimonials />

        <SectionSpacer id="work" />
        <Work />

        <SectionSpacer id="certifications" />
        <Certifications />

        <SectionSpacer id="education" />
        <Education />

        {/* <SectionSpacer id="articles" />
        <Articles />

        <SectionSpacer id="contact" />
        <Contact /> */}

        <SectionSpacer id="footer" />
      </main>

      <Footer />
    </div>
  );
}
