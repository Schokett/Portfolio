import Footer from "../components/footer/Footer";

function Impressum() {
  return (
    <div className="bg-slate-950">
      <a href="./" className="text-slate-50 text-sm mb-10 p-5 flex flex-row gap-3 lg:text-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        Zurück
      </a>
      <div className="font-sans min-h-screen text-slate-50 flex flex-col justify-center text-center items-center p-5 lg:p-20">
        <h1 className="text-3xl font-bold lg:text-5xl mb-10">Impressum</h1>
        <h2 className="text-2xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>

        <p>
          Skrollan Elena Hyodo
          <br />
          Sonnenblumering 14a
          <br />
          25779 Hennstedt
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Kontakt</h2>
        <p className="text-slate-400">Telefon: +49 1515 6856198</p>
        <p className="text-slate-400">E-Mail: skrollanelenazimmermann@gmail.com</p>
      </div>
      <Footer />
    </div>
  );
}

export default Impressum;
