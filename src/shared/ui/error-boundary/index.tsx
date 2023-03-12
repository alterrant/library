import styles from './error-boundary.module.css';

export const ErrorBoundary = ({text = 'Something went wrong'}) =>
    <div className={styles.errorBoundary}>{text}</div>
