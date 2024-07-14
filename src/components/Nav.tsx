function Nav() {
  return (
    <nav
      aria-label="menu nav"
      className="fixed top-0 z-20 w-full h-auto px-1 pt-2 pb-1 mt-0 bg-gray-800 md:pt-1"
    >
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex justify-center flex-shrink text-white md:w-1/3 md:justify-start">
          <a href="#" aria-label="Home">
            <span className="pl-2 text-xl">
              <i className="em em-grinning"></i>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
