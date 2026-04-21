export default function About() {
  return (
    <section
      id="sobre"
      className="bg-[#263f30] text-white min-h-screen flex items-center px-10"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* texto informativo sobre nos */}
        <div className="flex flex-col justify-center h-full max-w-md">
          <h2 
            className="text-5xl mb-10 tracking-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Sobre nós
          </h2>

          <p className="text-xl leading-relaxed mb-10">
            No Royal Nox Club, consideramos que cuidar do corpo e da mente vai além da prática esportiva — é um estilo de vida.
          </p>

          <p className="text-xl leading-relaxed">
            Oferecemos uma estrutura completa com quadras modernas, academia equipada, aulas especializadas e serviços pensados para proporcionar equilíbrio e qualidade de vida.
          </p>
        </div>

        {/* imagens */}
        <div className="flex gap-10 items-start">
          <img
            src="/spa1.jpg"
            className="w-[320px] h-[600px] object-cover rounded-lg"
          />

          <img
            src="/tenis1.jpg"
            className="w-[320px] h-[600px] object-cover rounded-lg mt-24"
          />
        </div>

      </div>
    </section>
  );
}