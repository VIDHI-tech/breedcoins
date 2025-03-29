import { useState, useEffect, useMemo } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useSectionNavigation } from "./scroll-to-hash";
import { useApiQuery } from "@/hooks/useApiQuery";
import endpoints from "@/api/endpoints";
import { cn } from "@/lib/utils";

interface Route {
  label: string;
  path: string;
}

interface NavGroup {
  type: "navgroup";
  link: string;
  label: string;
  isActivePath: string;
  routes: Route[];
}

interface NavLinkItem {
  type: "navlink";
  label: string;
  path: string;
}

type NavItem = NavGroup | NavLinkItem;

const config = {
  logoUrl: "/logo.png",
  schoolName: "AIR FORCE SCHOOL ASTE Banglore",
  navItems: [
    { type: "navlink", label: "Home", path: "/#top", isActivePath: "/" }, // page path on which active is "/"
    {
      type: "navgroup",
      label: "About", // page path on which active is "/about"
      link: "/about#about-hero",
      isActivePath: "/about",
      routes: [
        { label: "Our School", path: "/about#about-hero" },
        { label: "Our History", path: "/about#ourhistory" },
        { label: "Our Management", path: "/about#management" },
        { label: "Our Vision & Mission", path: "/about#visionmission" },
        { label: "Our Message Desk", path: "/about#messagedesk" },
        { label: "Staff", path: "/about#staff" },
        { label: "Student Council", path: "/about#student" },
      ],
    },
    {
      type: "navgroup",
      label: "Academics", // page path on which active is "/academics"
      link: "/academics#top",
      isActivePath: "/academics",
      routes: [
        {
          label: "Rules Regulations",
          path: "/academics#academics_rules_regulations",
        },
        {
          label: "School Uniform",
          path: "/academics#academics_school_uniform",
        },
        { label: "School Timing", path: "/academics#academics_school_timing" },
        {
          label: "School Calendar",
          path: "/academics#academics_school_calendar",
        },
        {
          label: "Class Time Table",
          path: "/academics#academics_class_time_table",
        },
        {
          label: "Exam Time Table",
          path: "/academics#academics_exam_time_table",
        },
        {
          label: "Holiday Homework",
          path: "/academics#academics_holiday_homework",
        },
        {
          label: "Book List Primary",
          path: "/academics#academics_primary_wing",
        },
        { label: "Book List Senior", path: "/academics#academics_senior_wing" },
        { label: "TC Issued", path: "/academics#academics_tc_issued" },
      ],
    },
    {
      type: "navlink",
      label: "Facilities",
      path: "/facilities#top",
      isActivePath: "/facilities",
    }, // page path on which active is "/facilities"
    {
      type: "navlink",
      label: "Gallery",
      path: "/gallery#top",
      isActivePath: "/gallery",
    }, // page path on which active is "/gallery"
    {
      type: "navgroup", // page path on which active is "/cbse"
      link: "/cbse#top",
      label: "CBSE",
      routes: [
        {
          label: "Circular",
          path: "/cbse#cbse_circular",
        },
        {
          label: "Mandatory Public Disclosure",
          path: "/cbse#cbse_mandatory_public_disclosure",
        },
        {
          label: "Teachers' Training Programme",
          path: "/cbse#cbse_teachers_training_programme",
        },
        {
          label: "Raj Basha Implementation",
          path: "/cbse#cbse_raj_basha_implementation",
        },
      ],
      isActivePath: "/cbse",
    }, // page path on which active is "/cbse"
    {
      type: "navgroup",
      label: "Admissions",
      link: "/admissions#top",
      isActivePath: "/admissions",
      routes: [
        {
          label: "Curricular",
          path: "/admissions#admissions_circular",
        },
        {
          label: "Fees Structure",
          path: "/admissions#admissions_fees_structure",
        },
        {
          label: "Admission Form",
          path: "/admissions#admissions_lkg_form",
        },
        {
          label: "Admission Guidelines",
          path: "/admissions#admissions_class_form",
        },
      ],
    }, // page path on which active is "/admissions"
    {
      type: "navlink",
      label: "Achievements",
      path: "/achievements#top",
      isActivePath: "/achievements",
    }, // page path on which active is "/achievements"
    {
      // page path on which active is "/miscellaneous"
      type: "navgroup",
      label: "Miscellaneous",
      link: "/miscellaneous#top",
      isActivePath: "/miscellaneous",
      routes: [
        { label: "Careers", path: "/miscellaneous#miscellaneous_careers" },
        {
          label: "School Committee",
          path: "/miscellaneous#miscellaneous_school_committee",
        },
        { label: "Tender", path: "/miscellaneous#miscellaneous_tender" },
        { label: "Alumni", path: "/miscellaneous#miscellaneous_alumni" },
        { label: "Blogs", path: "/miscellaneous#miscellaneous_blogs" },
      ],
    },
  ],
} as const;

const Navbar = ({ refElement }: { refElement: any }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const { data } = useApiQuery(endpoints.entities.schoolDetails.all);
  const dataFiltered = useMemo(() => data?.data?.data ?? [], [data]);
  console.log("DataFiltered hello", dataFiltered);

  return (
    <>
      <nav
        ref={refElement}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white shadow-md py-4`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and School Name */}
            <Link to="/">
              <div className="flex items-center space-x-3">
                <img
                  src={config.logoUrl}
                  alt="School Logo"
                  className="w-12 h-12 object-contain"
                />
                <span className="text-sm md:text-base font-bold leading-tight text-gray-900 max-w-[200px] md:max-w-xs">
                  {config.schoolName}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden 2xl:flex items-center space-x-8 bg-white">
              {config.navItems.map((item, index) => (
                <NavItem key={index} item={item} />
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <img
                src="/g20.png"
                alt="G20 Logo"
                className="h-10 w-auto object-contain"
              />
              <a href={dataFiltered?.payfee_link ?? "#"} target="_blank">
                <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 hidden sm:block">
                  Pay Fee
                </button>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="2xl:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <X className="h-6 w-6 text-gray-600" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 2xl:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-[72px] right-0 w-full sm:w-80 h-[calc(100vh-72px)] bg-white z-40 transform transition-transform duration-300 ease-in-out 2xl:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto">
          <div className="py-4 space-y-2">
            {config.navItems.map((item, index) => (
              <MobileNavItem
                key={index}
                item={item}
                onItemClick={() => setMenuOpen(false)}
              />
            ))}
            <div className="px-4 pt-4">
              <button className="w-full bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 sm:hidden">
                Pay Fee
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NavItem = ({ item }: { item: NavItem }) => {
  const { navigateToSection } = useSectionNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = useMemo(
    () => location.pathname === item.isActivePath,
    [item, location]
  );

  if (item.type === "navgroup") {
    return (
      <div
        className="relative bg-white"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button
          onClick={() => navigateToSection(item.link)}
          className={`flex items-center space-x-1 font-medium transition-colors ${
            isActive ? "text-primary" : "text-gray-700 hover:text-primary-hover"
          }`}
        >
          <span>{item.label}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          <div className="py-2 bg-white z-[999]">
            {item.routes.map((route, index) => (
              <span
                key={index}
                className="block px-4 py-2 text-sm z-[999] relative text-gray-700 hover:bg-blue-50 hover:text-primary-hover transition-colors cursor-pointer"
                onClick={() => {
                  navigateToSection(route.path);
                }}
              >
                {route.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <NavLink
      to={item.path}
      className={cn(
        "text-gray-700 hover:text-primary-hover font-medium transition-colors",
        {
          "text-primary": isActive,
        }
      )}
    >
      {item.label}
    </NavLink>
  );
};

const MobileNavItem = ({
  item,
  onItemClick,
}: {
  item: NavItem;
  onItemClick: () => void;
}) => {
  const { navigateToSection } = useSectionNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (item: NavItem) => {
    if (item.type === "navlink") {
      return item.path === "/"
        ? location.pathname === "/"
        : location.pathname.startsWith(item.path);
    } else {
      return item.routes.some((route) =>
        location.pathname.startsWith(route.path.split("#")[0])
      );
    }
  };

  if (item.type === "navgroup") {
    const active = isActive(item);
    return (
      <div className="space-y-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 transition-colors ${
            active ? "text-primary bg-blue-50" : "text-gray-700"
          }`}
        >
          <span className="font-medium">{item.label}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`transition-all duration-200 space-y-1 bg-gray-50 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {item.routes.map((route, index) => (
            <p
              key={index}
              className="block px-8 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-primary-hover transition-colors cursor-pointer"
              onClick={() => {
                navigateToSection(route.path);
                onItemClick();
              }}
            >
              {route.label}
            </p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <NavLink
      to={item.path}
      onClick={onItemClick}
      className={({ isActive: linkActive }) =>
        `block px-4 py-3 hover:bg-gray-50 transition-colors ${
          linkActive ||
          (item.path !== "/" && location.pathname.startsWith(item.path))
            ? "text-primary bg-blue-50"
            : "text-gray-700"
        }`
      }
    >
      {item.label}
    </NavLink>
  );
};

export default Navbar;
