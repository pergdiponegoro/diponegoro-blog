import Link from "next/link";
import { Footer } from "../components/Footer";

const VisiMisiPage = () => {
   
  return (
    <>
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Visi & Misi
      </h1>

      {/* Vision Section */}
      <div className="mb-12 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Visi</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
        &quot;Unggul dalam Mutu, Disiplin dalam Belajar, Berbudi Bawa Laksana&quot;
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-12 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Misi</h2>
        <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
          <li>Menyelenggarakan pendidikan yang berkualitas dan relevan.</li>
          <li>Melakukan penelitian yang inovatif dan bermanfaat bagi masyarakat.</li>
          <li>Memberdayakan masyarakat melalui pengabdian dan kerja sama.</li>
          <li>Membangun karakter dan etika yang baik pada setiap peserta didik.</li>
          <li>Menjalin kerjasama dengan berbagai pihak dalam dan luar negeri.</li>
        </ul>
      </div>

      {/* Back Link */}
      <div className="mt-10 text-center">
        <Link href="/" className="text-primary hover:underline text-lg font-medium">
          Kembali ke Beranda
        </Link>
      </div>
    </section>
    <div className="w-full bg-gray-900"> {/* Ensure background matches your footer */}
        <Footer />
      </div>
    </>
  );
};

export default VisiMisiPage;
