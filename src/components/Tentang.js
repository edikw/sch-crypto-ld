const Tentang = () => {
  const numbers = [1, 2, 3, 4];

  return (

    <div className="text-black md:w-1/2 my-10" >
      <h1 className="mb-6 font-bold text-sm">Description</h1>
      <p className="text-sm font-thin text-gray-600 mb-6">Binance Smart Chain (BSC) adalah blockchain yang dikembangkan oleh Binance, salah satu exchange cryptocurrency terbesar. BSC didesain untuk memproses transaksi dengan cepat, biaya rendah, dan mendukung smart contracts. Arsitekturnya yang kompatibel dengan Ethereum Virtual Machine (EVM) memudahkan para pengembang untuk memindahkan dApps yang ada dari Ethereum ke BSC. Kombinasi faktor tersebut, ditambah dengan dukungan besar dari Binance, telah membuat BSC sangat populer untuk proyek-proyek DeFi, NFT, dan game yang menginginkan alternatif dari Ethereum yang lebih cepat dan terjangkau.</p>
      <h1 className="mb-6 font-bold text-sm">Sneak Peak</h1>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {numbers.map((number) => (
          <img src="/images/Rectangle.png" />
        ))}
      </div>
      <h1 className="mb-6 font-bold text-sm">Apa yang akan dipelajari?</h1>
      <ul className="text-gray-500 font-thin text-sm">
        <li className="flex items-center gap-1 mb-1"><img src="/images/check.png" className="w-4" /> Awal mula BSC</li>
        <li className="flex items-center gap-1 mb-1"><img src="/images/check.png" className="w-4" /> Fitur flagship</li>
        <li className="flex items-center gap-1 mb-1"><img src="/images/check.png" className="w-4" />Ekosistem BSC</li>

      </ul>

    </div >
  )
}
export default Tentang;

