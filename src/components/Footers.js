
const Footers = () => {
  return (
    <div className="bg-black container mx-auto p-4 md:p-6 py-20">
      <div className="md:grid grid-cols-2 gap-6">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/logo.png" className="w-5" />
            <p className="text-sm font-bold">Sekolah Kripto Indonesia</p>
          </div>
          <div className="text-xs text-gray-400 mb-4">
            <p>Pelajari dasar-dasar Kripto dan Blockchain untuk meraih</p>
            <p>peluang di masa depan kapanpun dan dimanapun.</p>
          </div>
          <div className="flex gap-2">
            <img src="/images/Instagram.png" className="w-7" />
            <img src="/images/Twitter.png" className="w-7" />
            <img src="/images/Telegram.png" className="w-7" />
            <img src="/images/Tik Tok.png" className="w-7" />
            <img src="/images/Discord.png" className="w-7" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full mb-6 md:mb-0">
          <div>
            <p className="text-sm mb-6"> Produk</p>
            <ul className="text-sm text-gray-400">
              <li className="my-2">Kelas</li>
              <li className="my-2">Blog</li>
            </ul>
          </div>
          <div>
            <p className="text-sm mb-6"> Informasi</p>
            <ul className="text-sm text-gray-400">
              <li className="my-2">Hubungi Kami</li>
              <li className="my-2">FAQ</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};


export default Footers;
