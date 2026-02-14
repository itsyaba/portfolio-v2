import PillNav from "@/components/PillNav";
import React from "react";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-center px-4">
      <PillNav
        logo={"https://www.svgrepo.com/show/474334/coding.svg"}
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "#about" },
          { label: "Experience", href: "#experience" },
          { label: "Projects", href: "#projects" },
          { label: "Contact", href: "#contact" },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="rgba(7, 12, 24, 0.7)"
        pillColor="rgba(255, 255, 255, 0.14)"
        hoveredPillTextColor="#ffffff"
        pillTextColor="rgba(255, 255, 255, 0.85)"
        initialLoadAnimation
      />
    </div>
  );
};

export default Header;
