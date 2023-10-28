import qr from '../assets/banner.svg'
import { Props } from '../types/types'

const BannerQr = ({ openModal }: Props) => {
  return (
    <div className="absolute transition-all duration-1000 cursor-pointer shadow-sm shadow-black end-1 top-1/4 ">
      <img src={qr} className="h-72 object-contain" onClick={openModal} />
    </div>
  )
}
export default BannerQr
