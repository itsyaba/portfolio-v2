import Link from "next/link";
import ArrowUpRightIcon from "../../public/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/itsyaba",
  },
  {
    title: "Telegram",
    href: "https://t.me/itsyaba",
  },
  {
    title: "Phone",
    href: "tel:+251900305289",
  },
  {
    title: "Email",
    href: "mailto:yabahane@gmail.com",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/itsyaba/",
  },
  {
    title: "Twitter",
    href: "https://x.com/itsyaba",
  },
];

export const Footer = () => {
  return (
    <footer className="relative  overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10" />
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">
            &copy; {new Date().getFullYear()} Yeabsira Tarekegn. All rights
            reserved.
          </div>
          <nav className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {footerLinks.map((link) => (
              <Link
                target="_blank"
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5 cursor-pointer hover:underline hover:text-white/80 transition-all"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
