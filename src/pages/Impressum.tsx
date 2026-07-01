import { Link } from "react-router-dom";

function Impressum() {
  return (
    <div className="">
      <div className="font-sans bg-slate-950 min-h-screen text-slate-50 p-5 lg:p-20">
        <h1 className="text-3xl font-bold lg:text-5xl mb-10">Impressum</h1>

        <div className="text-slate-300 space-y-2 max-w-prose">
          <p>Angaben gemäß § 5 TMG</p>
          <p>Skrollan Elena Zimmermann</p>
          <p>
            E-Mail:{" "}
            <a href="mailto:skrollanelenazimmermann@gmail.com" className="text-blue-500">
              skrollanelenazimmermann@gmail.com
            </a>
          </p>
        </div>

        <Link to="/" className="text-blue-500 font-semibold mt-10 inline-block">
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}

export default Impressum;
