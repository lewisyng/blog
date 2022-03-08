import Link from 'next/link'
import Badge from '../../../UI/Badge/Badge'
import Heading from '../../../UI/Heading/Heading'
import styles from './Recommended.module.css'

export const Recommended = ({ tags }: { tags: { value: string }[] }) => {
  return (
    <div>
      <Heading variant="h5" className={'mb-[1rem]'}>
        Recommended topics
      </Heading>

      {tags && (
        <div className={styles.recommended__topics}>
          {tags.map((tag) => (
            <Link key={tag.value} href={`/tag/${tag.value}`} passHref>
              <div>
                <Badge size="large" as="button">
                  {tag.value}
                </Badge>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Recommended
