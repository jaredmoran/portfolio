import Image from "next/image"

export const Avatar = () => {
  return (
    <div className="hidden md:block">
      <Image
        src="/jared-zoom.jpg"
        alt="Jared Moran"
        width={120}
        height={120}
        className="rounded-full"
      />
    </div>
  )
}
