import Footers from "@/components/Footers";
import Headers from "@/components/Headers";
import Link from "next/link";

export default function ClassOnline() {
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

  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="bg-black">
      <div style={styles.bg}>
        <div className="md:container md:mx-auto">
          {/* HEADER */}
          <Headers />
          {/* HEADER */}

          {/* HERO */}
          <div className="flex p-6 justify-center text-center py-10 md:py-20 ">
            <div data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" data-aos-duration="1000" className="lg:w-1/2">
              <div className="text-[24px] font-[600] leading-0 mb-4 md:text-[32px] md:font-[600] md:leading-[40px] md:mb-[20px]">
                <h1 style={styles.gradientText}>Apakah Anda tertarik untuk
                  belajar tentang Kripto dan Blockchain?
                  tapi tidak tahu harus mulai dari mana?</h1>
              </div>
            </div>
          </div>
          {/* HERO */}
        </div>
      </div>
      <div className="md:container md:mx-auto my-10 md:my-20 p-4 md:p-6">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {school.map((item, index) => (
              <Link data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-duration="1000" href='/kelas-online/binance-smart-chain' className="shadow-md opacity-65 bg-[#131313] p-2 rounded-2xl cursor-pointer hover:scale-110 hover:opacity-100 duration-300" key={index}>
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
        <div className="flex justify-center gap-4 items-center">
          <button className="bg-white rounded-full p-2"><img src="/images/arrowleft.png" className="w-3" /></button>
          <div className="flex gap-2">
            {numbers.map((number) => (
              <p className="text-gray-500" key={number}>{number}</p>
            ))}
          </div>
          <button className="bg-white rounded-full p-2"><img src="/images/arrowright.png" className="w-3" /></button>

        </div>
      </div>
      <Footers />
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
