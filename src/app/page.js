import Footers from "@/components/Footers";
import Link from "next/link";
import Headers from "@/components/Headers";


export default function Home() {
  const school = [
    {
      name: 'Binance Smart Chain',
      rating: 4.5,
      level: 'Expert',
      total: '17 Lessons',
      duration: '2 hours 16 mins',
      price: 'Rp99.000',
    },
    {
      name: 'Binance Smart Chain',
      rating: 4.5,
      level: 'Expert',
      total: '17 Lessons',
      duration: '2 hours 16 mins',
      price: 'Rp99.000',
    },
    {
      name: 'Binance Smart Chain',
      rating: 4.5,
      level: 'Expert',
      total: '17 Lessons',
      duration: '2 hours 16 mins',
      price: 'Rp99.000',
    },
    {
      name: 'Binance Smart Chain',
      rating: 4.5,
      level: 'Expert',
      total: '17 Lessons',
      duration: '2 hours 16 mins',
      price: 'Rp99.000',
    },
    {
      name: 'Binance Smart Chain',
      rating: 4.5,
      level: 'Expert',
      total: '17 Lessons',
      duration: '2 hours 16 mins',
      price: 'Rp99.000',
    },
    {
      name: 'Binance Smart Chain',
      rating: 4.5,
      level: 'Expert',
      total: '17 Lessons',
      duration: '2 hours 16 mins',
      price: 'Rp99.000',
    }
  ];

  const articles = [
    {
      name: 'Bitcoin Runes',
      price: 'Free',
      desc: 'Hype yang Belum Terwujud, Masih Terlalu Awal?',
      date: '15 April 2024',
      duration: '1 Menit'
    },
    {
      name: 'Bitcoin Runes',
      price: 'Free',
      desc: 'Hype yang Belum Terwujud, Masih Terlalu Awal?',
      date: '15 April 2024',
      duration: '1 Menit'
    },
    {
      name: 'Bitcoin Runes',
      price: 'Free',
      desc: 'Hype yang Belum Terwujud, Masih Terlalu Awal?',
      date: '15 April 2024',
      duration: '1 Menit'
    }]

  return (
    <div className="bg-black">
      <div style={styles.bg} className="relative">
        <div className="md:container md:mx-auto">
          {/* HEADER */}
          <Headers />
          {/* HEADER */}


          {/* HERO */}
          <div className="flex p-6 justify-center text-center py-10 md:py-20 ">
            <div>
              <div className="border w-max mx-auto border-gray-700 bg-gray-900 rounded-full px-6 py-1 mb-4">
                <p>#BelajarBareng</p>
              </div>
              <div>
                <div className=" text-[50px] font-[600] leading-0 mb-4 md:text-[96px] md:font-[600] md:leading-[112px] md:mb-[20px]">
                  <h1>Pelajari</h1>
                  <h1 style={styles.gradientText}>Cara Kerja Kripto &</h1>
                  <h1 style={styles.gradientText}>Blockchain</h1>
                </div>
                <div className="text-gray-500">
                  <p>Pelajari dasar-dasar Kripto dan Blockchain untuk meraih</p>
                  <p> peluang di masa depan kapanpun dan dimanapun.</p>
                </div>
              </div>
            </div>
          </div>
          {/* HERO */}
        </div>
        <div className="hidden md:block" style={styles.aksenBg}>
          <img src="/images/bg2.png" />
        </div>
      </div>
      <div className="md:container md:mx-auto p-4 md:p-0">
        {/*KONTEN KELAS KAMI */}
        <div>
          <div className="py-10 md:pt-32">
            <hr className="border border-gray-700 " />
          </div>
          <div className="md:flex justify-between items-center mb-10">
            <div className="mb-2 md:mb-0">
              <h1 className="md:text-2xl">Kelas Kami</h1>
              <p className="text-sm md:text-md text-gray-500">Menjelajahi Masa Depan Teknologi Blockchain dan Cryptocurrency</p>
            </div>
            <div>
              <Link href="/kelas-online" className="bg-primary px-6 py-2 flex justify-center rounded-full text-black text-xs md:text-sm">Lihat Semua</Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

            {school.map((item, index) => (
              <Link href='/kelas-online/binance-smart-chain' className="shadow-md bg-[#131313] p-2 rounded-2xl cursor-pointer opacity-65 hover:scale-110 duration-300 hover:opacity-100" key={index}>
                <img src="/images/Binance.png" className="rounded-2xl w-full object-cover" />
                <div className="flex justify-between my-2">
                  <p className="text-sm font-bold">{item.name}</p>
                  <p className="flex items-center gap-x-1 text-sm font-bold">{item.rating} <img src="/images/star.png" className="w-3" /> </p>
                </div>
                <div className="flex gap-2 my-2">
                  <p className="w-max rounded-full bg-red-100 text-red-500 px-4 py-1 text-xs border border-red-500">{item.level}</p>
                  <p className="w-max rounded-full bg-white text-black px-4 py-1 text-xs border border-black">{item.total}</p>
                  <p className="w-max rounded-full bg-white text-black px-4 py-1 text-xs border border-black">{item.duration}</p>
                </div>
                <div className="flex justify-between items-center my-2">
                  <p className="text-primary font-bold text-sm">{item.price}</p>
                  <button className="bg-primary px-2 border border-black py-2 px-3 rounded-full text-black text-xs">Beli Kelas</button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* KONTEN KELAS KAMI */}

        {/* KONTEN ARTIKEL */}
        <div>
          <div className="py-10 md:py-20">
            <hr className="border border-gray-700 " />
          </div>
          <div className="md:flex justify-between items-center mb-4">
            <div className="mb-2 md:mb-0">
              <h1 className="md:text-2xl">Artikel Terbaru</h1>
              <p className="text-gray-500" style={styles.text}>Informasi Terbaru tentang Industrik Kripto dan Blockchain</p>
            </div>
            <div>
              <button className="bg-primary px-6 py-2 rounded-full text-black text-sm">Lihat Semua</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {articles.map((item, index) => (
              <div className="shadow-md bg-[#131313] p-2 rounded-2xl" key={index}>
                <img src="/images/articles.png" className=" w-full object-cover" />
                <div className="flex justify-between my-2">
                  <p className="text-sm font-bold">{item.name}</p>
                  <p className="flex items-center gap-x-1 text-sm font-bold uppercase text-primary">{item.price}</p>
                </div>
                <p className="text-sm text-gray-500">{item.desc}</p>
                <div className="flex gap-2 my-2">
                  <p className="w-max rounded-full bg-white text-black px-4 py-1 text-xs border border-black">{item.date}</p>
                  <p className="w-max rounded-full bg-white text-black px-4 py-1 text-xs border border-black">{item.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* KONTEN ARTIKEL */}

        {/* KONTEN JELAJAHI  */}

        <div>
          <div style={styles.bgDown}>
            <div>
              <div className="flex justify-center items-center text-center py-10 md:py-20">
                <div>
                  <div className="text-[52px] font-[500] leading-[64px] mb-[20px]">
                    <h1 style={styles.gradientText}>Jelajahi Dunia</h1>
                    <h1 style={styles.gradientText}>Kripto & Blockchain</h1>
                  </div>
                  <div className="text-gray-500 py-4">
                    <p>Pelajari Tentang Kripto & Blockchain dan Dapatkan Hadiah</p>
                  </div>
                  <div className="my-4">
                    <button className="bg-primary px-2 border border-black py-2 px-3 rounded-full text-black">Mulai Sekarang</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* KONTEN JELAJAHI */}


      </div>
      <Footers />
    </div>
  );
}

const styles = {
  bg: {
    backgroundImage: 'url("/images/bg1.png")', // Path to the image in public folder
    backgroundSize: 'cover',  // Makes sure the image covers the entire area
    backgroundPosition: 'center',  // Centers the image
  },
  bgDown: {
    backgroundImage: 'url("/images/bgdown.png")', // Path to the image in public folder
    backgroundSize: 'cover',  // Makes sure the image covers the entire area
    // backgroundPosition: 'center',  // Centers the image
    maxHeight: '60vh',
  },
  aksenBg: {
    position: 'absolute',
    top: '60%',
  },
  gradientText: {
    background: 'linear-gradient(to right, #FFFFFF, #4D4D4D)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }
}
