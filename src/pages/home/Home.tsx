import { Link } from "react-router-dom";

const NavLink = ({ navUrl, title }: { navUrl: string; title: string }) => {
  return (
    <Link
      to={navUrl}
      className=" text-lg font-normal text-gray-300 hover:text-blue-400 rounded-md hover:underline"
    >
      {title}
    </Link>
  );
};

const navMenuData = [
  {
    chapter: 1,
    title: "Intro to re-renders",
    rootRoute: "ch-1",
    topics: [
      { url: "/counter", title: "Danger of custom Hooks" },
      { url: "/prop-rerender", title: "Myth: Prop changes cause Rerender" },
      { url: "/moving-state-down", title: "Perf: Moving State Down" },
    ],
  },
  {
    chapter: 2,
    title: `Elements, children as props, and re-renders`,
    rootRoute: "ch-2",
    topics: [
      { url: "/react-element", title: "React Element" },
      { url: "/react-component", title: "React Component" },
      { url: "/component-as-props", title: "Component as Props" },
      { url: "/component-as-props-fix", title: "Component as Props Fix" },
    ],
  },
];

function Home() {
  return (
    <div className="pt-12 px-12">
      <main className="  w-full relative h-auto flex flex-col gap-8">
        <h1 className="text-left text-3xl ">Chapters</h1>
        <div className="flex flex-col gap-2">
          {navMenuData.map((navMenu, idx) => (
            <div
              key={navMenu.chapter + idx}
              className="flex flex-col gap-2 border border-gray-600 rounded-md p-4"
            >
              <p className="text-lg font-medium">
                {navMenu.chapter}. {navMenu.title}
              </p>
              <div className="px-8 py-2 flex flex-col">
                {navMenu.topics.map((nav, i) => (
                  <NavLink
                    key={nav.url}
                    navUrl={navMenu.rootRoute + nav.url}
                    title={i + 1 + ". " + nav.title}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
