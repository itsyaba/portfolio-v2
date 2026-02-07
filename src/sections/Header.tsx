import PillNav from "@/components/PillNav";
import React from "react";

const Header = () => {
  return (
    <div className="w-full  flex items-center justify-center">
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
        baseColor="#2B2E38"
        pillColor="#ECEFF4"
        hoveredPillTextColor="#000"
        pillTextColor="#2A2F3A"
        initialLoadAnimation
      />
    </div>
  );
};

export default Header;
