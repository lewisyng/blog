import Link from 'next/link'
import Badge from '../../../UI/Badge/Badge'
import Heading from '../../../UI/Heading/Heading'
import styles from './Recommended.module.css'

export const Recommended = ({ tags }: { tags: { value: string }[] }) => {
  return (
    <div>
      <Heading type="h5" className={'mb-[1rem]'}>
        Recommended topics
      </Heading>

      {tags && (
        <Link href="/" passHref>
          <div className={styles.recommended__topics}>
            {tags.map((tag) => (
              <Badge key={tag.value} size="large" as="button">
                {tag.value}
              </Badge>
            ))}
          </div>
        </Link>
      )}
    </div>
  )
}

export default Recommended
