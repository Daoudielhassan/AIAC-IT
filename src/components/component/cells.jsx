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
    icon: <GamepadIcon />,
    title: "Game Development",
    description:
      "Explore the world of game development and create engaging experiences.",
  },
  {
    icon: <GlobeIcon />,
    title: "Web Development",
    description: "Build modern, responsive websites and web applications.",
  },
  {
    icon: <CodeIcon />,
    title: "Competitive Programming",
    description:
      "Sharpen your problem-solving skills and compete in coding challenges.",
  },
  {
    icon: <DatabaseIcon />,
    title: "Data",
    description:
      "Explore the world of data analysis and gain insights from information.",
  },
];
const CellItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 p-6  bg-sky-900 animate__animated animate__backInLeft">
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

