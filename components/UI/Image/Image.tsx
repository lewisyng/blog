export const Image = ({
  src,
  height,
  width,
  className,
}: {
  src: string
  height?: number
  width?: number
  className?: string
}) => {
  return (
    <img src={src} alt="" height={height} width={width} className={className} />
  )
}

export default Image
