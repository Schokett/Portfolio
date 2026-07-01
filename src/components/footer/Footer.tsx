import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-6 mt-30 lg:mt-50">
      <div className="container mx-auto px-4 flex justify-center items-center gap-5 text-xs lg:text-md">
        <Link to="/impressum" className="">
          Impressum
        </Link>
        <p>&copy; Skrollan Elena Hyodo 2026</p>
      </div>
    </footer>
  );
}
export default Footer;
