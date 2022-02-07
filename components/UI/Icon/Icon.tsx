import cn from 'classnames'

export const Icon = ({
  src,
  height,
  width,
  className,
  icon,
}: {
  src?: string
  height?: number
  width?: number
  className?: string
  icon?: React.ReactNode
}) => {
  if (src) {
    return (
      <img
        className={cn(className)}
        src={src}
        alt=""
        height={height}
        width={width}
      />
    )
  } else {
    return <div className={"ml-auto cursor-pointer"}>{icon}</div>
  }
}

export default Icon
