"use client"

import { useState } from "react";
import Footers from "@/components/Footers";
import Headers from "@/components/Headers";
import Rating from "@/components/Rating";
import Tentang from "@/components/Tentang";
import Materi from "@/components/Materi";

export default function ClassOnline() {
  const [activeTab, setActiveTab] = useState('tentang'); // default adalah 'tentang'

  const renderContent = () => {
    switch (activeTab) {
      case 'tentang':
        return <Tentang />;
      case 'materi':
        return <Materi />;
      case 'rating':
        return <Rating />;
      default:
        return <Tentang />;
    }
  };

  return (
    <div className="bg-black">
      <div style={styles.bg}>
        <div className="md:container md:mx-auto">
          {/* HEADER */}
          <Headers />
          {/* HEADER */}

          {/* HERO */}
          <div className="py-6 px-6 md:pt-20 relative">
            <div className="mb-2">
              <h1
                style={styles.gradientText}
                className="text-[32px] font-[600] leading-0 mb-4 md:text-[32px] md:font-[600] md:leading-[40px] md:mb-[20px]"
              >
                Binance Smart Chain
              </h1>
              <p>BSC didesain untuk memproses transaksi dengan cepat,</p>
              <p>biaya rendah, dan mendukung smart contracts.</p>
            </div>
            <div className="md:flex gap-2 my-2">
              <p className="w-max rounded-full mb-2 md:mb-0 bg-red-100 text-red-500 px-4 py-1 text-xs border border-red-500">Expert</p>
              <p className="w-max rounded-full mb-2 md:mb-0 text-gray-400 px-4 py-1 text-xs border border-gray-400 flex items-center gap-1">
                <img src="/images/star.png" className="w-3" /> 4.8 (172 reviews)
              </p>
              <p className="w-max rounded-full text-gray-400 px-4 py-1 text-xs border border-gray-400 flex items-center gap-1">
                <img src="/images/students.png" className="w-3" /> 199 Students
              </p>
            </div>
            <div data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" data-aos-duration="1000" className="my-10">
              <img src="/images/Binance.png" className="rounded-xl md:w-[400px] lg:w-[600px] xl:w-[700px]" />
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="1000" className="bg-[#F6F6F6] rounded-xl p-6 md:w-[300px] xl:w-[412px] text-black md:absolute md:top-[260px] md:right-10">
              <div>
                <h2 className="text-lg mb-6">112 Materi (24 Jam)</h2>
                <div className="flex justify-between items-center text-sm mb-4">
                  <div>
                    <div className="flex gap-2 items-center mb-3 font-thin">
                      <p>01</p>
                      <p>Awal mula BSC</p>
                    </div>
                    <div className="flex gap-2 items-center mb-3 font-thin">
                      <p>02</p>
                      <p>Fitur flagship</p>
                    </div>
                    <div className="flex gap-2 items-center mb-3 font-thin">
                      <p>03</p>
                      <p>Ekosistem BSC</p>
                    </div>
                  </div>
                  <div className="font-thin">
                    <p className="mb-3">12 menit</p>
                    <p className="mb-3">12 menit</p>
                    <p className="mb-3">12 menit</p>
                  </div>
                </div>
                <p className="text-sm font-thin text-gray-500">99 lebih video</p>
                <div className="my-6">
                  <p className="text-sm font-thin text-gray-500">Siap untuk Terjun ke Dunia Crypto? Daftar Sekarang dan Mulailah Membangun Masa Depan Crypto Anda!</p>
                </div>
                <div className="my-4">
                  <h1 className="text-xl font-bold">Rp99.000</h1>
                </div>
                <div>
                  <button className="bg-primary w-full py-2 px-3 rounded-full text-black text-sm">Beli Kelas</button>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-lg mb-6">Skill Coverage</h2>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-200 text-center py-2 md:px-4 px-2 rounded-full text-gray-500 text-sm font-thin">Cryptocurrency</div>
                  <div className="bg-gray-200 text-center py-2 md:px-4 px-2 rounded-full text-gray-500 text-sm font-thin">Cryptocurrency</div>
                  <button className="bg-gray-200 text-center py-2 md:px-4 px-2 rounded-full text-gray-500 text-sm font-thin">Cryptocurrency</button>
                </div>
                <hr className="border my-6" />
                <div>
                  <h2 className="text-lg mb-6">Bagikan Kelas</h2>
                  <p className="text-sm text-gray-500">Raih peluang untuk memperoleh bonus dengan membagikan kelas melalui link atau tombol share dibawah ini. Pelajari lebih lanjut mengenai mekanisme referal ini.</p>
                </div>
                <div className="mt-6">
                  <button className="bg-black py-2 px-6 rounded-full text-white text-sm flex items-center justify-center gap-1">
                    <img src="/images/share.png" className="w-4" /> Share
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* HERO */}
        </div>
      </div>
      <div>
        <div className="bg-white">
          <div className="container mx-auto p-6">
            <div className="flex gap-4 font-thin">
              <button onClick={() => setActiveTab('tentang')} className={`text-xs px-3 py-2 rounded-full text-black ${activeTab === 'tentang' ? 'bg-orange-100 border border-orange-400' : 'bg-gray-100'}`}>
                Tentang
              </button>
              <button onClick={() => setActiveTab('materi')} className={`text-xs px-3 py-2 rounded-full text-black ${activeTab === 'materi' ? 'bg-orange-100 border border-orange-400' : 'bg-gray-100'}`}>
                Materi
              </button>
              <button onClick={() => setActiveTab('rating')} className={`text-xs px-3 py-2 rounded-full text-black ${activeTab === 'rating' ? 'bg-orange-100 border border-orange-400' : 'bg-gray-100'}`}>
                Rating & Ulasan
              </button>
            </div>

            {renderContent()}

          </div>
        </div>
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
  gradientText: {
    background: 'linear-gradient(to right, #FFFFFF, #4D4D4D)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }
};
