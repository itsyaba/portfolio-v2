export const HeroOrbit = ({
  children,
  size,
  rotation,
}: {
  children: React.ReactNode;
  size: number;
  rotation: number;
}) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  size-[800px]">
      <div
        // className="animate-spin [animation-duration:30s] "
        style={{
          height: `${size}px`,
          width: `${size}px`,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <div className="inline-flex ">{children}</div>
      </div>
    </div>
  );
};
