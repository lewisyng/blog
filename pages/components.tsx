import PageWrapper from '../components/PageWrapper/PageWrapper'
import Badge from '../components/UI/Badge/Badge'
import Heading from '../components/UI/Heading/Heading'
import styles from './components.module.css'

export const Components = () => {
  return (
    <PageWrapper>
      <div className={styles.badges}>
        <Badge>Badge default</Badge>
        <Badge size="small">Badge small</Badge>
        <Badge size="medium">Badge medium</Badge>
        <Badge size="large">Badge large</Badge>
      </div>
      <div className={styles.heading}>
        <Heading variant="h1">Heading 1</Heading>
        <Heading variant="h2">Heading 2</Heading>
        <Heading variant="h3">Heading 3</Heading>
        <Heading variant="h4">Heading 4</Heading>
        <Heading variant="h5">Heading 5</Heading>
        <Heading variant="h6">Heading 6</Heading>
      </div>
    </PageWrapper>
  )
}

export default Components
