import { MainWrapper } from '../components/MainWrapper/MainWrapper'
import Badge from '../components/UI/Badge/Badge'
import Heading from '../components/UI/Heading/Heading'
import styles from './components.module.css'

export const Components = () => {
  return (
    <MainWrapper>
      <div className={styles.badges}>
        <Badge>Badge default</Badge>
        <Badge size="small">Badge small</Badge>
        <Badge size="medium">Badge medium</Badge>
        <Badge size="large">Badge large</Badge>
      </div>
      <div className={styles.heading}>
          <Heading type="h1">Heading 1</Heading>
          <Heading type="h2">Heading 2</Heading>
          <Heading type="h3">Heading 3</Heading>
          <Heading type="h4">Heading 4</Heading>
          <Heading type="h5">Heading 5</Heading>
          <Heading type="h6">Heading 6</Heading>
      </div>
    </MainWrapper>
  )
}

export default Components
