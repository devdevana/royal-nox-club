export default function Atividades() {
  const atividades = [
    { img: "/golfe.jpg", nome: "GOLFE" },
    { img: "/futevolei.jpg", nome: "FUTEVÔLEI" },
    { img: "/beachtenis.jpg", nome: "BEACH TENNIS" },
    { img: "/spa.jpg", nome: "SPA" },
    { img: "/academia.jpg", nome: "ACADEMIA" },
    { img: "/pilates.jpg", nome: "PILATES" },
  ];

  return (
    <section id="atividades" className="relative py-28 text-white ">

      {/* teste de fundo */}
      <div className="absolute inset-0">
        <img
          src="/textura.png" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#263f30]/90" />
      </div>

      {/* container atividades */}
      <div className="relative container mx-auto px-6 bg-[#263f30]/40 border border-white/20 rounded-3xl p-12 backdrop-blur-md, shadow-[0_20px_60px_rgba(0,0,0,0.4)]">

        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4">O que oferecemos?</h2>
          <p className="opacity-80">
            Descubra as experiências que cultivamos para o seu bem-estar.
          </p>
        </div>

        {/* grid (as mini fotos) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 justify-items-center">
          
          {atividades.map((item, index) => (
            
            <div
              key={index}
              className="relative w-full max-w-[260px] aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer border border-white/20"
            >
              
              {/* imagem */}
              <img
                src={item.img}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* overlay escuro */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

              {/* conteúdo */}
              <div className="absolute inset-0 flex flex-col justify-end items-center pb-6">
                
                <h3 className="text-lg tracking-widest mb-2">
                  {item.nome}
                </h3>

                <button className="text-sm border border-white/70 px-4 py-1 rounded-full hover:bg-white hover:text-black transition">
                  SAIBA MAIS
                </button>

              </div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
}