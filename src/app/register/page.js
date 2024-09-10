import Link from 'next/link'
export default function Register() {
  return (
    <div className="bg-black">
      <div style={styles.bg}>
        <div className="md:container md:mx-auto">
          {/* HEADER */}

          <div className='flex justify-between p-6'>
            <div className='flex items-center gap-2'>
              <img src='/images/logo.png' alt='logo' className='h-5' />
              <p className='text-xs md:text-sm font-bold'>Sekolah Kripto Indonesia</p>
            </div>
          </div>
        </div>
        <div className="md:container md:mx-auto">
          <div className="md:flex justify-around">
            <div className="hidden md:block">
              <img src="/images/imgAuth.png" className="h-[750px]" />
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="1000" className="bg-[#131313] mx-4 md:mx-0 rounded-xl p-8 h-max self-start md:mt-8 mb-6 ">
              <div className="mb-8">
                <p className="text-[30px] md:text-[44px] font-[500] mb-0">Buat Akun Kamu</p>
                <p className="text-sm text-gray-500">Masuk akun, mulai belajar dan kumpulkan reward</p>
              </div>
              <div className="mb-6">
                <p className="text-xs mb-1">Username</p>
                <input className="bg-white rounded-lg px-4 py-2 w-full focus:outline-none text-black" placeholder="Username Kamu" />
              </div>
              <div className="mb-6">
                <p className="text-xs mb-1">Alamat Email</p>
                <input className="bg-white rounded-lg px-4 py-2 w-full focus:outline-none text-black" placeholder="Email Kamu?" />
              </div>
              <div className="mb-4">
                <p className="text-xs mb-1">Password</p>
                <input className="bg-white rounded-lg px-4 py-2 w-full focus:outline-none text-black" placeholder="***********" />
              </div>
              <div className="mb-4">
                <p className="text-xs mb-1">Konfirmasi Password</p>
                <input className="bg-white rounded-lg px-4 py-2 w-full focus:outline-none text-black" placeholder="***********" />
              </div>
              <div className="mb-6">
                <p className="text-xs mb-1">Negara</p>
                <input className="bg-white rounded-lg px-4 py-2 w-full focus:outline-none text-black" placeholder="Negara Kamu" />
              </div>
              <div className="mb-6">
                <p className="text-xs mb-1">Provinsi</p>
                <input className="bg-white rounded-lg px-4 py-2 w-full focus:outline-none text-black" placeholder="Provinsi Kamu" />
              </div>
              <div className="mb-6">
                <p className="text-xs mb-1">Kode Referral( Opsional ) <span className="text-primary">Get 10% off</span></p>
                <input className="bg-white rounded-lg px-4 py-2 w-full focus:outline-none text-black" placeholder="Kode Referral Kamu" />
              </div>
              <div className="mb-6 flex items-center gap-2">
                <input type="checkbox" />
                <p className="text-xs text-gray-500">Send me special offers, personalized, recomendation, and learning tips</p>
              </div>
              <div className="mb-6">
                <button className="bg-primary px-6 py-2 rounded-full text-black text-xs md:text-sm w-full">Daftar</button>
              </div>
              <div className="flex gap-3 items-center my-10">
                <hr className="border border-gray-700 w-full" />
                <p>or</p>
                <hr className="border border-gray-700 w-full" />
              </div>
              <div className="mb-10">
                <button className="border border-gray-400 px-6 py-3 rounded-xl text-white text-xs md:text-sm w-full flex items-center gap-2 text-center justify-center"><img src="/images/google.png" className="w-5" /> <p>Masuk Dengan Google</p></button>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">Sudah punya akun? <Link href="/login" className="text-primary">Login</Link></p>
              </div>
            </div>

          </div>
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
}
