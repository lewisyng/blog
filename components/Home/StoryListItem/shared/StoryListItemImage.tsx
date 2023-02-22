import Link from 'next/link'
import cn from 'classnames'
import { FunctionComponent, ReactNode } from 'react'

type StoryListItemImageProps = {
  id: string
  children: ReactNode
}

export const StoryListItemImage: FunctionComponent<StoryListItemImageProps> = ({
  id,
  children,
}) => {
  return (
    <div className="ml-2 flex">
      <Link
        href={{
          pathname: `/post/[id]`,
          query: { id },
        }}
        passHref
      >
        <div
          className={cn(
            'relative',
            'h-[60px]',
            'w-[60px]',
            'md:h-[112px]',
            'md:w-[112px]'
          )}
        >
          {children}
        </div>
      </Link>
    </div>
  )
}
