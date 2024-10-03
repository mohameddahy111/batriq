import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({ width  , height }: LogoProps) {
  return (
    <div className="">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={width || 150}
        height={height || 150}
        priority={true}
      />
    </div>
  );
}
