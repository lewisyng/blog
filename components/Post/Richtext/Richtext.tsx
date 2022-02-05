import { PortableText } from '@portabletext/react'
import React from 'react'

export const Richtext = ({ content }: { content: any }) => {
  return (
    <div className="prose mx-auto">
      <PortableText value={content[0].body} />
    </div>
  )
}
