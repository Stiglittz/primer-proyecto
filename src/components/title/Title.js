import classNames from "classnames"
import './Title.css'

function Title(props) {
  const styles = classNames(
    'title',
    { "title--secondary": props.secondary }
  )

  return(
    <h1 className={styles} >{props.children}</h1>
  )
}

export default Title