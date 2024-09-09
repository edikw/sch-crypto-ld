import Link from "next/link"
const Headers = () => {
  return (

    < div className='flex justify-between p-6' >
      <Link href="/" className='flex items-center gap-2'>
        <img src='/images/logo.png' alt='logo' className='h-5' />
        <p className='text-xs md:text-sm font-bold'>Sekolah Kripto Indonesia</p>
      </Link>
      <div className='hidden md:flex items-center gap-2'>
        <p className='text-sm'>Kelas Online</p>
      </div>
      <div className="flex items-center gap-2 md:gap-6">
        <Link href="/login" className='text-xs md:text-sm'>Login</Link>
        <Link href="/register" className='bg-primary rounded-full px-3 md:px-6 py-1 md:py-2 text-black text-xs md:text-sm flex justify-center'>Daftar</Link>
      </div>
    </div >
  )
}
export default Headers;

