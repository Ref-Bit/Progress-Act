import { connect } from 'react-redux';
import { size, toArray } from 'lodash';
import UploadItem from '../UploadItem';
import Styles from './UploadProgress.module.css';

const UploadProgress = ({ fileProgress }) => {
  const uploadedFileAmount = size(fileProgress);

  return uploadedFileAmount > 0 ? (
    <div className={Styles.wrapper}>
      <h4>Uploading File</h4>
      {size(fileProgress)
        ? toArray(fileProgress).map(file => (
            <UploadItem key={file.id} file={file} />
          ))
        : null}
    </div>
  ) : null;
};

const mapStateToProps = state => ({
  fileProgress: state.UploadFile.fileProgress,
});

export default connect(mapStateToProps)(UploadProgress);
