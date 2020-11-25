import sh from '../../shared/style.module.css'

const Button = ( {children} ) => {
  return (
    <div className={sh.card}>
      {children}
    </div>
  )
}

export default Button