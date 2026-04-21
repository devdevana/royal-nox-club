export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 text-white z-50">
      <h1 className="text-5xl font-semibold">
        Royal Nox Club
      </h1>

      <nav className="flex gap-10 text-xl">
        <a href="#home">Home</a>
        <a href="#sobre">Sobre nós</a>
        <a href="#atividades">Atividades</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}