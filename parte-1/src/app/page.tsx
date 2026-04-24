import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogotypesBar from "@/components/LogotypesBar";
import SectionHeading from "@/components/SectionHeading";
import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";
import CaseStudies from "@/components/CaseStudies";
import WorkingProcess from "@/components/WorkingProcess";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Viewport block: Navbar + Hero + LogotypesBar = 100vh */}
      <div className="flex flex-col min-h-screen">
        <div className="relative shrink-0">
          <Navbar />
        </div>
        <div className="flex-1 flex flex-col justify-center mt-1 md:mt-0 pb-18 md:pb-0">
          <Hero />
        </div>
        <div className="shrink-0">
          <LogotypesBar />
        </div>
      </div>

      {/* Services */}
      <section className="mt-20 md:mt-36 flex flex-col gap-12 md:gap-20">
        <SectionHeading
          title="Services"
          description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />
        <Services />
      </section>

      {/* CTA Banner */}
      <section className="mt-18 md:mt-32">
        <CTABanner />
      </section>

      {/* Case Studies */}
      <section className="mt-18 md:mt-36 flex flex-col gap-12 md:gap-20">
        <SectionHeading
          title="Case Studies"
          description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />
        <CaseStudies />
      </section>

      {/* Working Process */}
      <section className="mt-18 md:mt-36 flex flex-col gap-12 md:gap-20">
        <SectionHeading
          title="Our Working Process"
          description="Step-by-Step Guide to Achieving Your Business Goals"
        />
        <WorkingProcess />
      </section>

      {/* Team */}
      <section className="mt-18 md:mt-36 flex flex-col gap-12 md:gap-20">
        <SectionHeading
          title="Team"
          description="Meet the skilled and experienced team behind our successful digital marketing strategies"
        />
        <Team />
      </section>

      {/* Testimonials */}
      <section className="mt-18 md:mt-36 flex flex-col gap-12 md:gap-20">
        <SectionHeading
          title="Testimonials"
          description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        />
        <Testimonials />
      </section>

      {/* Contact */}
      <section className="mt-18 md:mt-36 flex flex-col gap-12 md:gap-20">
        <SectionHeading
          title="Contact Us"
          description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        />
        <ContactUs />
      </section>

      {/* Footer */}
      <div className="mt-18 md:mt-32">
        <Footer />
      </div>
    </main>
  );
}
