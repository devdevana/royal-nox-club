export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen w-full relative"
      style={{
        background: "url(/noxclub.png) center/cover no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative h-full flex items-center justify-center">
        <div className="bg-green-950/60  px-12 py-10 text-center backdrop-blur-sm rounded-xl shadow-md w-[80%]">
        
          <h2 className="text-5xl text-white font-extralight leading-[1,1] tracking-tight" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Exclusividade, performance <br />
            e bem-estar em um só <br />
            lugar.
          </h2>
        </div>
      </div>
    </section>
  );
}