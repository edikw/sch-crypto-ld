import Link from "next/link"

export default function Login() {
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
          <div className="lg:flex justify-around items-center">
            <div className="hidden lg:block">
              <img src="/images/imgAuth.png" className="h-[750px]" />
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="1000" className="bg-[#131313] mx-4 md:mx-0 rounded-xl p-8 h-max self-start md:mt-8 mb-6 md:mb-0 ">
              <div className="mb-8">
                <p className="text-[30px] md:text-[44px] font-[500] mb-0">Masuk Akun Kamu</p>
                <p className="text-sm text-gray-500">Masuk akun, mulai belajar dan kumpulkan reward</p>
              </div>
              <div className="mb-6">
                <p className="text-xs mb-1">Alamat Email</p>
                <input className="bg-white rounded-lg px-4 py-2 w-full focus:outline-none text-black" placeholder="Email Kamu?" />
              </div>
              <div className="mb-4">
                <p className="text-xs mb-1">Password</p>
                <input className="bg-white rounded-lg px-4 py-2 w-full focus:outline-none text-black" placeholder="***********" />
              </div>
              <div className="mb-6">
                <Link href="/" className="bg-primary px-6 py-2 flex justify-center rounded-full text-black text-xs md:text-sm w-full">Login</Link>
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
                <p className="text-sm text-gray-500">Belum punya akun? <Link href="/register" className="text-primary">Daftar Sekarang</Link></p>
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
    height: '100vh',
  },
}
