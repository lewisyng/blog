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
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  )
}

export default CustomImage
