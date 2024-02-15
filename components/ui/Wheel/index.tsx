import Image from "next/image";

const Wheel = () => {
  return (
    <div className="mt-8 flex items-center justify-center">
      <div className="relative active:scale-95 transition-transform">
        <Image
          src="https://indonesiacomiccon.com/_nuxt/img/icc-circular-text.561ce94.svg"
          width={100}
          height={100}
          alt="sub"
          className="w-32 animate-spin-slow pointer-events-none select-none"
        />
        <div className="absolute inset-0 scale-[70%]">
          <Image
            src="https://indonesiacomiccon.com/_nuxt/img/marble-gradient.979f33c.webp"
            width={400}
            height={400}
            alt="abstract"
            className="w-full animate-spin-slow-reverse pointer-events-none select-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Wheel;
