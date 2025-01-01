import { Card, CardContent } from "@/components/ui/card";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";
import Image from "next/image";
import Link from "next/link";

export function MeetTheTeamSection() {
  const teamMembers = [
    {
      name: "DAOUDI Elhassan",
      role: "President",
      imgSrc: "/pictures/DAOUDI.jpg",
      github: "https://github.com/Daoudielhassan/",
      linkedin: "https://www.linkedin.com/in/elhassan-daoudi/",
      mail: "daoudiha6@gmail.com",
    },
    {
      name: "BOUROU Hamza",
      role: "Vice president",
      imgSrc: "/pictures/bourou.jpg",
      github: "https://github.com/Hamza-br",
      linkedin: "https://www.linkedin.com/in/hamza-bourou-64689322b/",
      mail: "bourouhamza9@gmail.com",
    },
    {
      name: "BERNICHI Fatima Zahra",
      role: "Treasurer",
      imgSrc: "/pictures/bernichi.jpg",
      github: "#",
      linkedin: "http://www.linkedin.com/in/fatima-zahra-bernichi-2634402a5",
      mail: "Bernichifatimazahra@gmail.com",
    },
    {
      name: "HLIAL Laila",
      role: "Project Manager",
      imgSrc: "/pictures/Laila.jpg",
      github: "https://github.com/lailahlial",
      linkedin: "https://www.linkedin.com/in/laila-hlial",
      mail: "lailahlial564@gmail.com",
    },
    {
      name: "MOHADDIB Imane",
      role: "Events Manager",
      imgSrc: "/pictures/Mohaddib_Imane.jpg",
      github: "#",
      linkedin: "https://www.linkedin.com/in/imane-mohaddib-2048b2299/",
      mail: "adamel12337@gmail.com",
    },
    {
      name: "ELGHABI Imane",
      role: "UI/UX Designer",
      imgSrc: "/pictures/elghabi.jpg",
      github: "#",
      linkedin: "https://www.linkedin.com/in/imane-elghabi/",
      mail: "imaneelghabipro@gmail.com",
    },
    {
      name: "RYAHI Ikhlass",
      role: "Media Manager",
      imgSrc: "/pictures/ikhlass.jpg",
      github: "#",
      linkedin: "https://www.linkedin.com/in/ikhlass-ryahi-0b1592295/",
      mail: "ikhlassryahi@gmail.com",
    },

    {
      name: "ATIR Ayoub",
      role: "dev cell chief",
      imgSrc: "/pictures/ayoub.png",
      github: "https://github.com/Ayoubater23",
      linkedin: "https://www.linkedin.com/in/ayoub-atir-978a2b255/",
      mail: "Atir.ayoub2003@gmail.com",
    },
    {
      name: "CHARKI Safouane",
      role: "dev cell chief",
      imgSrc: "/pictures/charki.jpg",
      github: "https://github.com/SafouaneCh",
      linkedin: "https://www.linkedin.com/in/safouane-charki/",
      mail: "Safouanecharki3@gmail.com",
    },
    {
      name: "EL MEZIANE Adam",
      role: "CP cell chief",
      imgSrc: "/pictures/adam.jpg",
      github: "#",
      linkedin: "https://www.linkedin.com/in/adam-el-meziane-53b12a19a/",
      mail: "adamel12337@gmail.com",
    },
    {
      name: "HACHAMI Lahbib",
      role: "Game Cell Lead",
      imgSrc: "/pictures/hachami.jpg",
      github: "#",
      linkedin: "https://www.linkedin.com/in/lahbib-hachami-9788b0202/",
      mail: "Hachami.lahbib@hotmail.com",
    },
    {
      name: "RAGHIBI Faycal",
      role: "Data Cell Chief",
      imgSrc: "/pictures/raghibi.png",
      github: "#",
      linkedin: "http://www.linkedin.com/in/faycal-raghibi-50607a2bb",
      mail: "faycalraghibi0@gmail.com",
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
                      <div className="flex justify-center gap-4">
                        <Link
                          href={member.github}
                          className="text-muted-foreground hover:text-primary"
                          prefetch={false}
                        >
                          <GithubIcon className="size-4" />
                        </Link>
                        <Link
                          href={member.linkedin}
                          className="text-muted-foreground hover:text-primary"
                          prefetch={false}
                        >
                          <LinkedinIcon className="size-4" />
                        </Link>
                        <Link
                          href={`mailto:${member.mail}`}
                          className="text-muted-foreground hover:text-primary"
                          prefetch={false}
                        >
                          <MailIcon className="size-4" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      }
    </div>
  );
}
