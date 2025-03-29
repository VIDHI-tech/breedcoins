import endpoints from "@/api/endpoints";
import { useApiQuery } from "@/hooks/useApiQuery";
import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Youtube,
} from "lucide-react";
import { useMemo } from "react";

const Footer = () => {
  const { data } = useApiQuery(endpoints.entities.schoolDetails.all);
  const schoolDetails = useMemo(() => data?.data?.data ?? {}, [data]);
  console.log("schoolDetails", schoolDetails);

  const quickLinks = useMemo(() => {
    return [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      {
        name: "Download Brochure",
        href: schoolDetails?.brochure_pdf || "# ",
        isDownload: !!schoolDetails?.brochure_pdf,
      },
      { name: "Transport Policy", href: "/transport" },
      { name: "Careers", href: "/miscellaneous" },
      { name: "Admissions", href: "/admissions" },
      { name: "Blogs", href: "/blogs" },
      { name: "Locations", href: "/locations" },
    ];
  }, [schoolDetails]);

  // get in Touch
  const getInTouch = useMemo(() => {
    const block1 = [];
    const block2 = [];

    if (schoolDetails.contact_phone_1) {
      block1.push({
        icon: Phone,
        primaryText: schoolDetails?.contact_phone_1,
        href: `tel:${schoolDetails?.contact_phone_1}`,
      });
    }
    if (schoolDetails?.contact_email_2) {
      block1.push({
        icon: Mail,
        primaryText: schoolDetails?.contact_email_2,
        href: `mailto:${schoolDetails?.contact_email_2}`,
      });
    }

    block1.push({
      icon: MapPin,
      primaryText: "NAL WIND TUNNEL ROAD, BENGALURU – 560 017",
      href: "https://maps.google.com/?q=NAL+WIND+TUNNEL+ROAD+BENGALURU",
    });

    if (schoolDetails?.contact_phone_2) {
      block2.push({
        icon: Phone,
        primaryText: schoolDetails?.contact_phone_2,
        href: `tel:${schoolDetails?.contact_phone_2}`,
      });
    }
    // Static fallback location for block2.
    block2.push({
      icon: MapPin,
      primaryText: "AKASH VIHAR CAMP, OPP BRAND FACTORY, BENGALURU – 560 037",
      href: "https://maps.google.com/?q=AKASH+VIHAR+CAMP+BENGALURU",
    });
    if (schoolDetails?.contact_email_1) {
      block2.push({
        icon: Mail,
        primaryText: schoolDetails?.contact_email_1,
        href: `mailto:${schoolDetails?.contact_email_1}`,
      });
    }

    return { block1, block2 };
  }, [schoolDetails]);

  return (
    <footer className="bg-gray-100 px-10 md:px-4 xl:px-10 2xl:px-[5%] py-16 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Links Section */}
        <span>
          <h3 className="text-[#252B42] text-2xl font-bold mb-4 lg:mb-10">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-4 text-[#737373] font-bold text-lg">
            {/* First half of quick links */}
            <ul className="space-y-2">
              {quickLinks
                .slice(0, Math.ceil(quickLinks.length / 2))
                .map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      download={link.isDownload}
                      className="hover:text-primary transition duration-150 ease-in-out"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
            </ul>

            {/* Second half of quick links */}
            <ul className="space-y-2">
              {quickLinks
                .slice(Math.ceil(quickLinks.length / 2))
                .map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      download={link.isDownload}
                      className="hover:text-primary-hover transition duration-150 ease-in-out"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </span>

        {/* Get In Touch Section */}
        <span className="col-span-2">
          <h3 className="text-[#252B42] text-2xl font-bold mb-4 lg:mb-10">
            Get In Touch
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 font-bold text-lg text-[#737373]">
            {/* Block 1 */}
            <div className="space-y-4 max-w-xs">
              {getInTouch.block1.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <item.icon className="w-7 mt-1 flex-shrink-0 text-primary" />
                  <a
                    href={item.href}
                    className="hover:text-primary-hover transition duration-150 ease-in-out"
                  >
                    {item.primaryText}
                  </a>
                </div>
              ))}
            </div>

            {/* Block 2 */}
            <div className="space-y-4 max-w-md">
              {getInTouch.block2.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <item.icon className="w-7 mt-1 flex-shrink-0 text-primary" />
                  <a
                    href={item.href}
                    className="hover:text-primary-hover transition duration-150 ease-in-out"
                  >
                    <p>{item.primaryText}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </span>
      </div>

      <div className="px-4 sm:px-6 lg:px-0 flex flex-col md:flex-row md:items-end justify-between lg:text-lg pt-20 gap-7">
        <div className="text-center md:text-left mb-4 md:mb-0 hidden lg:block">
          <p className="text-[#737373] font-bold">Made With Love By Palnesto</p>
          <p className="text-[#737373]">
            @Copyright {new Date().getFullYear()}.
            <a href="/privacy" className="hover:text-primary-hover">
              {" "}
              Privacy Policy Terms & Conditions
            </a>
          </p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-primary font-bold">Number of Visits</p>
          <p className="text-[#737373]">{schoolDetails.totalVisitors || 0}</p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-primary font-bold">Last Update Date and time</p>
          <p className="text-[#737373]">
            {schoolDetails.updatedAt
              ? new Date(schoolDetails.updatedAt).toLocaleString()
              : "24-06-2025 | 23:00"}
          </p>
        </div>
        <div className="flex flex-col md:items-end items-center text-center pt-5 gap-5">
          <span className="flex space-x-4">
            <a
              href={schoolDetails.facebook_link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover transition duration-150 ease-in-out w-7 lg:w-8"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-full h-full" />
            </a>
            <a
              href={schoolDetails.instagram_link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover transition duration-150 ease-in-out w-7 lg:w-8"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-full h-full" />
            </a>
            <a
              href={schoolDetails.youtube_link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover transition duration-150 ease-in-out w-7 lg:w-8"
              aria-label="Follow us on Youtube"
            >
              <Youtube className="w-full h-full" />
            </a>
          </span>
          <b className="lg:text-xl">CBSE Affiliation Code:880009</b>
        </div>
      </div>
      <div className="text-center pt-16 xl:hidden">
        <p className="text-[#737373] font-bold">Made With Love By Palnesto</p>
        <p className="text-[#737373]">
          @Copyright {new Date().getFullYear()}.
          <a href="/privacy" className="hover:text-primary-hover">
            {" "}
            Privacy Policy Terms & Conditions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
