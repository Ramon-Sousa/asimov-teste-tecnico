import Image from "next/image";
import LinkButton from "@/components/ui/LinkButton";

const TEAM_MEMBERS = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    photo: "/social/profile-01.png",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    photo: "/social/profile-02.png",
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    photo: "/social/profile-03.png",
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    photo: "/social/profile-04.png",
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    photo: "/social/profile-05.png",
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    description:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    photo: "/social/profile-06.png",
  },
];

export default function Team() {
  return (
    <section className="px-5 md:px-container flex flex-col gap-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {TEAM_MEMBERS.map((member, i) => (
          <div
            key={i}
            className="group bg-white border border-dark rounded-card shadow-card px-9 py-10 flex flex-col relative transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0px_10px_0px_0px_var(--color-dark)]"
          >
            {/* Header */}
            <div className="flex flex-row items-start justify-between mb-7">
              <div className="flex items-end gap-5">
                <div className="relative w-24 h-24 shrink-0">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    unoptimized
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-xl leading-tight text-black">
                    {member.name}
                  </h4>
                  <span className="text-lg text-black">{member.role}</span>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                <Image
                  src="/icon-linkedin.png"
                  alt="LinkedIn"
                  width={34}
                  height={34}
                  unoptimized
                />
              </a>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-dark mb-7" />

            {/* Description */}
            <p className="text-base md:text-lg leading-snug text-black">
              {member.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <LinkButton href="#" variant="primary" className="w-full md:w-auto">
          See all team
        </LinkButton>
      </div>
    </section>
  );
}
