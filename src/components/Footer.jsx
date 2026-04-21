

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#263f30] text-white py-5">
      

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">

        {/* esquerda */}
        <div className="w-full md:w-[25%]">
          <h2
            className="text-5xl leading-tight mb-6 opacity-90"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Royal<br />Nox Club
          </h2>
          <div className="w-10 h-[1px] bg-white/30 mt-4"></div>
        </div>


        {/* centro */}
        <div className="w-full md:w-[40%] bg-[#2f5a3f]/70 backdrop-blur-xl p-2 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">

          <h3 className="text-xl mb-6 border-b border-white/30 pb-2">
            Entre em contato
          </h3>

          <form className="flex flex-col gap-6">

            <input
              type="text"
              placeholder="Nome"
              className="bg-transparent border-b border-white/30 focus:border-white transition py-2 placeholder-white/50 outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border-b border-white/30 focus:border-white transition py-2 placeholder-white/50 outline-none"
            />

            <input
              type="text"
              placeholder="Telefone"
              className="bg-transparent border-b border-white/30 focus:border-white transition py-2 placeholder-white/50 outline-none"
            />

            {/* botão */}
            <button className="mt-4 border border-white/60 py-2 rounded-full hover:bg-white hover:text-black transition">
              Enviar
            </button>

          </form>
        </div>

        {/* direita */}
        <div className="w-full md:w-[25%] text-center md:text-right space-y-8">

          <div>
            <p className="text-sm opacity-60">Contato</p>
            <p className="text-base font-medium">royalnox@gmail.com</p>
          </div>

          <div>
            <p className="text-sm opacity-60">Localização</p>
            <p className="text-base font-medium">
              Brasil, Minas Gerais
            </p>
          </div>

        </div>

      </div>

      {/* linha final */}
      <div className="mt-20 text-center text-sm opacity-60">
        © 2026 Royal Nox Club. Todos os direitos reservados.
      </div>

    </footer>
  );
}