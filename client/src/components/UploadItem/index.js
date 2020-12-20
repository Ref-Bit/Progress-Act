import Styles from './UploadItem.module.css';

const UploadItem = ({ file: { file, progress } }) => {
  return (
    <div className={Styles.wrapperItem}>
      <div className={Styles.leftSide}>
        <div className={Styles.progressBar}>
          <div style={{ width: `${progress}%` }} />
        </div>
        <label>{file.name}</label>
      </div>
      <span className={Styles.percentage}>{progress}%</span>
    </div>
  );
};

export default UploadItem;
