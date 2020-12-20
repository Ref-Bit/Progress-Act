import Styles from './UploadItem.module.css';
import cx from 'classnames';

const UploadItem = ({ file: { file, progress } }) => {
  return (
    <div className={Styles.wrapperItem}>
      <div className={Styles.leftSide}>
        <div
          className={cx(
            Styles.progress,
            Styles.progress_striped,
            Styles.progress_animate
          )}
        >
          <span style={{ width: `${progress}%` }}></span>
        </div>
        <label>{file.name}</label>
      </div>
      <span className={Styles.percentage}>{progress}%</span>
    </div>
  );
};

export default UploadItem;
