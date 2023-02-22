import { FunctionComponent, ReactNode } from 'react'
import Text from '../../../UI/Text/Text'
import Link from 'next/link'

type StoryListItemDescriptionProps = {
  id: string
  children: ReactNode
}

export const StoryListItemDescription: FunctionComponent<
  StoryListItemDescriptionProps
> = ({ id, children }) => {
  return (
    <Link
      href={{
        pathname: `/post/[id]`,
        query: { id },
      }}
      passHref
    >
      <div className="hidden md:block">{children}</div>
    </Link>
  )
}
