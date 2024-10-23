import Image from "next/image"

import JaredImage from "@/assets/jared-zoom.jpg"

export const Avatar = () => {
  return (
    <div className="hidden md:block">
      <Image
        src={JaredImage}
        alt="Jared Moran"
        width={120}
        height={120}
        className="rounded-full"
      />
    </div>
  )
}
