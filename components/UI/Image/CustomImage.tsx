import Image from 'next/image'

export const CustomImage = ({
  src,
  height,
  width,
  className,
  alt,
}: {
  src: string
  height?: number
  width?: number
  className?: string
  alt: string
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={112}
      height={112}
      className={className}
    />
  )
}

export default CustomImage
