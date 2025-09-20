import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";
import Image from "next/image";
import Link from "next/link";

export function MeetTheTeamSection() {
  const teamMembers = [
    {
      name: "EL HAJOUI mariam",
      role: "President",
      imgSrc: "/pictures/elhajoui.jpg",
      github: "https://github.com/Mariaam24",
      linkedin: "https://www.linkedin.com/in/mariam-el-hajoui-87465b32b/",
      mail: "mariamelhajoui04@gmail.com",
    },
    {
      name: "ABOUZAID abdelmajid",
      role: "Vice president",
      imgSrc: "/pictures/majid.jpg",
      github: "https://github.com/Majid5775",
      linkedin: "https://www.linkedin.com/in/majid-abouzaid-84a57b330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
      mail: "abouzaidmajid57@gmail.com",
    },
 
    {
      name: "BISSANE mariem",
      role: "Project Manager",
      imgSrc: "/pictures/mariem.jpg",
      github: "#",
      linkedin: "https://www.linkedin.com/in/mariem-bissane-061a13338/",
      mail: "mariembissane123@gmail.com",
    },
    {
      name: "OUARRADI assiya ",
      role: "Events Manager",
      imgSrc: "/pictures/assiya.jpg",
      github: "#",
      linkedin: "https://www.linkedin.com/in/assiya-ouarradi-%F0%9F%87%B5%F0%9F%87%B8%F0%9F%87%B5%F0%9F%87%B8-992a541a0/",
      mail: "Ouarradiassiya24@gmail.com",
    },
    
    {
      name: "EL MAIMOUNI Hajar ",
      role: "Media & design Manager",
      imgSrc: "/pictures/hajar.jpg",
      github: "https://github.com/hajarelmaimouni",
      linkedin: "https://www.linkedin.com/in/hajar-el-maimouni-a1744722b/",
      mail: "Hajarelmaimouni12@gmail.com",
    },

    {
      name: "ZOUKENI ismail",
      role: "dev cell chief",
      imgSrc: "/pictures/ismail.JPG",
      github: "#",
      linkedin: "https://www.linkedin.com/in/ismail-zoukeni-22b82832a",
      mail: "zoukeni.ismail04@gmail.com",
    },
    {
      name: "HARBOULI Hajar",
      role: "dev cell chief",
      imgSrc: "/pictures/harbouli.jpg",
      github: "https://github.com/hajarharbouli/IT-CLUB",
      linkedin: "https://www.linkedin.com/in/hajar-harbouli-567462330/",
      mail: "Hajarharbouli60c@gmail.com",
    },
    {
      name: "AMJAOUCHE younes",
      role: "CP cell chief",
      imgSrc: "/pictures/younes.jpg",
      github: "#",
      linkedin: "https://www.linkedin.com/in/younes-amjaouche-8a7199333/",
      mail: "younesamjaouche@gmail.com",
    },
    {
      name: "EL GHAICH abdelali",
      role: "Game Cell Lead",
      imgSrc: "/pictures/abdelali.jpg",
      github: "#",
      linkedin: "https://www.linkedin.com/in/abdelali-elghaich-542a44330/",
      mail: "itsabdelali@gmail.com",
    },
    {
      name: "SAIDI anass",
      role: "Data Cell Chief",
      imgSrc: "/pictures/saidi.jpg",
      github: "#",
      linkedin: "https://www.linkedin.com/in/anass-saidi/",
      mail: "anass.saidi02@gmail.com",
    },
      {
      name: "CHAOUQI AYMAN",
      role: "security cell chief",
      imgSrc: "/pictures/aymane.jpg",
      github: "https://github.com/aymane2004-2004 ",
      linkedin: "https://www.linkedin.com/in/aymane-chaouqi/",
      mail: "chaouqi.aymane23@gmail.com",
    },
  ];

  return (
    <div id="Team">
      {
        <section className="w-full py-6 md:py-12 lg:py-16">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Meet the Team
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get to know the talented individuals behind our projects and
                  initiatives.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {teamMembers.map((member) => (
                <Card key={member.name}>
                  <CardContent className="flex flex-col items-center justify-center space-y-4 p-6">
                    <Image
                      src={member.imgSrc}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="aspect-square overflow-hidden rounded-full object-cover"
                    />
                    <div className="space-y-2 text-center">
                      <h3 className="text-lg font-bold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {member.role}
                      </p>
                    </div>
                  </CardContent>

                  {/* Move CardFooter outside of CardContent */}
                  <CardFooter className="flex justify-center gap-4 p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-lg">
                    <Link
                      href={member.github}
                      className="text-muted-foreground hover:text-primary"
                    >
                      <GithubIcon className="size-4" />
                    </Link>
                    <Link
                      href={member.linkedin}
                      className="text-muted-foreground hover:text-primary"
                    >
                      <LinkedinIcon className="size-4" />
                    </Link>
                    <Link
                      href={`mailto:${member.mail}`}
                      className="text-muted-foreground hover:text-primary"
                    >
                      <MailIcon className="size-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      }
    </div>
  );
}
