import styles from './Loader.module.css'

export default function Loader({ size = 100 }) {
  return (
    <>
      <div
        className={styles.hloader}
        style={{
          width: `${size}px`,
          height: `${size}px`
        }}>
        <svg viewBox="22.857142857142858 22.857142857142858 45.714285714285715 45.714285714285715">
          <circle
            cx="45.714285714285715"
            cy="45.714285714285715"
            r="20"
            strokeWidth="5.714285714285714"
            strokeDasharray="125.664"
            strokeDashoffset="125.66370614359172px"></circle>
        </svg>
      </div>
    </>
  )
}
