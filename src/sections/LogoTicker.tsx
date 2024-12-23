import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import echoLogo from "@/assets/logo-echo.png";
import quantumLogo from "@/assets/logo-quantum.png";
import Image from "next/image";

export const LogoTicker = () => {
  const logos = [acmeLogo, apexLogo, celestialLogo, quantumLogo, echoLogo];
  return (
    <section className="py-20 md:py-24 overflow-hidden">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className="flex-1 [mask-image:linear-gradient(to_right,transparent,black_60%,transparent)]">
            <div className="flex flex-none gap-14 items-center">
              {logos.map((logo) => (
                <Image
                  width={125}
                  height={125}
                  src={logo.src}
                  key={logo.src}
                  alt="logo"
                  className="h-6 w-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
