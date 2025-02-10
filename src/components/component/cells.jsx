import { CodeIcon, DatabaseIcon, GamepadIcon, GlobeIcon } from "./Icons";


export function Cell() {
  return (
    <div id="cells">
      {
        <section className="w-full py-6 md:py-24 lg:py-16">
          <div className="container px-4 md:px-6">
            <Header />
            <Grid />
          </div>
        </section>
      }
    </div>
  );
}

const Header = () => {
  return (
    <div className="space-y-4 text-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Our Cells
      </h2>
    </div>
  );
};

const Grid = () => {
  return (
    <div className="mx-auto grid max-w-5xl gap-8 py-10 md:grid-cols-2 lg:grid-cols-4">
      {cells.map((cell, index) => (
        <CellItem key={index} {...cell} />
      ))}
    </div>
  );
};

const cells = [
  {
    image: "https://media.wired.com/photos/61f48f02d0e55ccbebd52d15/3:2/w_2400,h_1600,c_limit/Gear-Rant-Game-Family-Plans-1334436001.jpg",

    icon: <GamepadIcon />,
    title: "Game Development",
    description:
      "Explore the world of game development and create engaging experiences.",
  },
  {
    image: "https://i.pinimg.com/474x/22/bc/8e/22bc8ebef610eb881071e1a7007a7a80.jpg",
    icon: <GlobeIcon />,
    title: "Web Development",
    description: "Build modern, responsive websites and web applications.",
  },
  {
    image: "https://miro.medium.com/v2/resize:fit:1200/1*Qjv1_r-qM36cGDy1EEkiuw.png",

    icon: <CodeIcon />,
    title: "Competitive Programming",
    description:
      "Sharpen your problem-solving skills and compete in coding challenges.",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt8hktHHl2jPlOX-938tKjifIuLuxYDwUSnA&s",
    icon: <DatabaseIcon />,
    title: "Data",
    description:
      "Explore the world of data analysis and gain insights from information.",
  },
];
const CellItem = ({ image, icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 p-6  bg-sky-900 animate__animated animate__backInLeft">
      {image && (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-40 object-cover rounded-t-lg"
        />
      )}
      <div className="bg-sky-700 rounded-md p-3 flex items-center justify-end ">
        {icon}
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 p-2">
        <div className="space-y-2 text-center">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

