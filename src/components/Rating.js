"use client"

import { useState } from "react";

const Rating = () => {
  const [activeTab, setActiveTab] = useState('all');
  const rate = [720, 120, 21, 12, 16];
  const maxRate = Math.max(...rate) + 100;

  const reviews = [
    {
      name: 'Agus Santoso',
      rating: 5,
      review: 'Bagus bangut ni, rekomended deh pokoknya',
      date: '26 Agustus 2024',
    },
    {
      name: 'Agus Santoso',
      rating: 5,
      review: 'Bagus bangut ni, rekomended deh pokoknya',
      date: '26 Agustus 2024',
    },
    {
      name: 'Agus Santoso',
      rating: 5,
      review: 'Bagus bangut ni, rekomended deh pokoknya',
      date: '26 Agustus 2024',
    },
    {
      name: 'Agus Santoso',
      rating: 5,
      review: 'Bagus bangut ni, rekomended deh pokoknya',
      date: '26 Agustus 2024',
    }
  ]

  const star = [1, 2, 3, 4, 5];
  return (
    <div data-aos="fade-up"
      data-aos-anchor-placement="top-bottom" data-aos-duration="1000" className="text-black md:w-1/2 my-10" >
      <h1 className="mb-6 text-sm font-bold">Apa Kata Pembelajar</h1>
      <p className="text-sm font-thin text-gray-600 mb-6">Temukan apa yang peserta didik kami katakan mengenai pengalaman mereka dengan 'Binance Smart Chain (BSC).' Baca ulasan dan penilaian dari individu yang telah memulai perjalanan transformatif dalam menguasai pembuatan dunia crypto.</p>
      <div style={styles.bg} className="p-6 rounded-xl mb-6">
        <div className="flex gap-6">
          <div className="border border-gray-500 rounded-xl flex items-center p-4 text-center text-white">
            <div>
              <p className="font-thin text-sm">Ratings</p>
              <p className="font-bold">4.7</p>
            </div>
          </div>
          <div className="w-full">
            {rate.map((number) => (
              <div key={number} className="flex items-center gap-4 text-sm">
                <div className="bg-white rounded-full w-2/3 h-2 relative">
                  <div
                    className="bg-yellow-500 h-full rounded-full"
                    style={{ width: `${(number / maxRate) * 100}%` }}
                  ></div>
                </div>
                <div className="flex ">
                  {star.map((number) => (
                    <div key={number}>
                      <img src="/images/star.png" />
                    </div>))}
                  <div className="" >
                    <p className="text-gray-500 px-2" >{number}</p>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="mb-6 text-sm font-bold">Individual Reviews:</h1>
        <div className="grid grid-cols-3 lg:flex gap-4 font-thin mb-6">
          <button onClick={() => setActiveTab('all')} className={`text-xs px-4 py-2 rounded-full text-black flex justify-center text-center items-center gap-1 ${activeTab === 'all' ? 'bg-orange-100 border border-orange-400' : 'bg-gray-100'}`}>
            All rating
          </button>
          <button onClick={() => setActiveTab('5')} className={`text-xs px-4 py-2 rounded-full text-black flex items-center justify-center text-center gap-1 ${activeTab === '5' ? 'bg-orange-100 border border-orange-400' : 'bg-gray-100'}`}>
            <img src="/images/star.png" className="w-3" />
            <p>5</p>
          </button>
          <button onClick={() => setActiveTab('4')} className={`text-xs px-4 py-2 rounded-full text-black flex justify-center text-center items-center gap-1 ${activeTab === '4' ? 'bg-orange-100 border border-orange-400' : 'bg-gray-100'}`}>
            <img src="/images/star.png" className="w-3" /> <p>4</p>
          </button>
          <button onClick={() => setActiveTab('3')} className={`text-xs px-4 py-2 rounded-full text-black flex justify-center text-center items-center gap-1 ${activeTab === '3' ? 'bg-orange-100 border border-orange-400' : 'bg-gray-100'}`}>
            <img src="/images/star.png" className="w-3" /> <p>3</p>
          </button>
          <button onClick={() => setActiveTab('2')} className={`text-xs px-4 py-2 rounded-full text-black flex justify-center text-center items-center gap-1 ${activeTab === '2' ? 'bg-orange-100 border border-orange-400' : 'bg-gray-100'}`}>
            <img src="/images/star.png" className="w-3" /> <p>2</p>
          </button>
          <button onClick={() => setActiveTab('1')} className={`text-xs px-4 py-2 rounded-full text-black flex justify-center text-center items-center gap-1 ${activeTab === '1' ? 'bg-orange-100 border border-orange-400' : 'bg-gray-100'}`}>
            <img src="/images/star.png" className="w-3" /> <p>1</p>
          </button>
        </div>
        <div>
          {reviews.map((review) => (
            <div key={review.name} className="bg-gray-100 p-6 rounded-2xl mb-4">
              <div>
                <div className="flex justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <img src="https://i.pravatar.cc/300" className="rounded-full object-cover" />
                    </div>
                    <div>
                      <p className="font-bold">{review.name}</p>
                      <p className="text-xs text-gray-600 font-thin">Lorem Ipsum</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-thin text-gray-600">{review.date}</p>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2">
                    {star.map((number) => (
                      <div key={number}>
                        <img src="/images/star.png" className="w-4" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm font-thin text-gray-600 mt-4">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Rating;

const styles = {
  bg: {
    backgroundImage: 'url("/images/bg1.png")', // Path to the image in public folder
    backgroundSize: 'cover',  // Makes sure the image covers the entire area
    backgroundPosition: 'center',  // Centers the image
  },
};

