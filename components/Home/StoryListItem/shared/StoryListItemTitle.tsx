import Heading from '../../../UI/Heading/Heading'
import Link from 'next/link'
import { FunctionComponent, ReactNode } from 'react'

type StoryListItemTitleProps = {
  id: string
  children: ReactNode
}

export const StoryListItemTitle: FunctionComponent<StoryListItemTitleProps> = ({
  id,
  children,
}) => {
  return (
    <Link
      href={{
        pathname: `/post/[id]`,
        query: { id },
      }}
      passHref
    >
      <Heading variant="h2" className="inline-block cursor-pointer pb-[8px]">
        {children}
      </Heading>
    </Link>
  )
}
