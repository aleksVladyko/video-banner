import { useEffect, useRef, useState } from 'react'
import video from '../assets/Van_Damme.mp4'
import BannerQr from '../components/BannerQr'

import PhonePopover from '../components/popup/PhonePopover'
import PopupPhone from '../components/popup/PopupPhone'
import ButtonCloseBanner from '../components/ui/ButtonCloseBanner'

const Banner = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [showComponent, setShowComponent] = useState<boolean>(false)
  const refVideo = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const videoElement = refVideo.current
    if (videoElement) {
      videoElement.play()
    }
    const timeout = setTimeout(() => {
      setShowComponent(true)
    }, 5000)

    return () => clearTimeout(timeout)
  }, [])

  function closeModal() {
    setIsOpened(false)
    const videoElement = refVideo.current
    if (videoElement) {
      videoElement.play()
    }
  }
  function openModal() {
    const videoElement = refVideo.current
    if (videoElement) {
      videoElement.pause()
    }
    setIsOpened(true)
  }

  // оставил данный функционал может пересмотрю логику
  // const goToPagePhone = () => {
  //   const videoElement = refVideo.current
  //   if (videoElement) {
  //     videoElement.paused ? videoElement.play() : videoElement.pause()
  //   }
  //   sessionStorage.setItem('videoPaused', String(refVideo.current?.currentTime))
  //   navigate('/phone')
  // }
  return (
    <aside className="relative w-[1280px] h-[720px]">
      <video
        ref={refVideo}
        src={video}
        width={1280}
        height={720}
        preload="auto"
        muted
        loop
      />
      {isOpened && (
        <PopupPhone isOpened={isOpened}>
          <PhonePopover onClose={closeModal} isOpened={isOpened} />
        </PopupPhone>
      )}
      {showComponent && (
        <>
          <ButtonCloseBanner />
          <BannerQr openModal={openModal} />
        </>
      )}
    </aside>
  )
}

export { Banner }
