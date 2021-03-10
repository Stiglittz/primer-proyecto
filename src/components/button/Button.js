import classNames from "classnames"
import './Button.css'

function Button(props) {
  const styles = classNames(
    'button',
    { "button--secondary": props.secondary }
  )

  return (
    <button className={styles}>{props.children}</button>
  )
}

export default Button