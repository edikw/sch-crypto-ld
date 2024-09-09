import Footers from "@/components/Footers";
import Headers from "@/components/Headers";

export default function ClassOnline() {
  return (
    <div className="bg-black">
      <div style={styles.bg}>
        <div className="md:container md:mx-auto">
          {/* HEADER */}
          <Headers />
          {/* HEADER */}

          {/* HERO */}
          <div className="py-10 px-6 md:py-20 relative">
            <div className="mb-2">
              <h1 style={styles.gradientText} className="text-[32px] font-[600] leading-0 mb-4 md:text-[32px] md:font-[600] md:leading-[40px] md:mb-[20px]">Binance Smart Chain</h1>
              <p>BSC didesain untuk memproses transaksi dengan cepat,</p>
              <p>biaya rendah, dan mendukung smart contracts.</p>
            </div>
            <div className="flex gap-2 my-2">
              <p className="w-max rounded-full bg-red-100 text-red-500 px-4 py-1 text-xs border border-red-500">Expert</p>
              <p className="w-max rounded-full text-gray-400 px-4 py-1 text-xs border border-gray-400 flex items-center gap-1"><img src="/images/star.png" className="w-3" /> 4.8 (172 reviews)</p>
              <p className="w-max rounded-full text-gray-400 px-4 py-1 text-xs border border-gray-400 flex items-center gap-1"><img src="/images/students.png" className="w-3" /> 199 Students</p>
            </div>
            <div className="my-10">
              <img src="/images/Binance.png" className="rounded-xl w-[700px]" />
            </div>
            <div className="bg-white rounded-xl p-6 w-[412px] text-black absolute top-[260px] right-0">
              <div>
                <h2>112 Materi (24 Jam)</h2>
                <div>
                </div>
              </div>
            </div>
          </div>
          {/* HERO */}
        </div>
      </div>
    </div>
  )
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
}



