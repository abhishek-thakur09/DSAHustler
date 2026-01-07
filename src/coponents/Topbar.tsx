export const Topbar = () => {
  return (
    <div className="place-items-center grid">
      <div className="max-w-screen-lg w-full bg-black align-center mb-2 p-5">
        {/* <img src="/logo.png" className="max-w-56"></img> */}
        <div className="text-8xl text-blue-600">DSAhustler</div>
        <NavBar />
      </div>
    </div>
  );
};

const topbarItems = [
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Activity",
    route: "/activity",
  },
  {
    title: "Problems",
    route: "/problems",
  },
  {
    title: "Leaderboard",
    route: "/leaderboard",
  },
];
function NavBar() {
  return (
    <div className="flex mt-4">
      {topbarItems.map((item) => (
        <NavbarItem route={item.route} title={item.title} />
      ))}
    </div>
  );
}

function NavbarItem({ title, route }: { title: string; route: string }) {
  return (
    <div
      className="
    mx-10 text-slate-500 text-lg cursor-pointer
      hover:text-white
      hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]
      transition-all duration-200"
    >
      {title}
    </div>
  );
}
