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

function Home() {
  const navMenuData = [
    { url: "/counter", title: "Counter" },
    { url: "/prop-rerender", title: "Myth: Prop changes Rerender" },
    { url: "/moving-state-down", title: "Moving State Down" },
  ];
  return (
    <div className="p-12">
      <main className="p-12  w-full relative border h-auto border-zinc-300 rounded-lg flex flex-col gap-8">
        <h1 className="text-center text-2xl underline">Topics</h1>
        <div className="flex flex-col items-center gap-2">
          {navMenuData.map((nav, idx) => (
            <NavLink
              key={nav.url}
              navUrl={nav.url}
              title={idx + 1 + ". " + nav.title}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
