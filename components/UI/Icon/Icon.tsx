export const Icon = ({
  src,
  height,
  width,
}: {
  src: string
  height?: number
  width?: number
}) => {
  return <img src={src} alt="" height={height} width={width} />
}

export default Icon
