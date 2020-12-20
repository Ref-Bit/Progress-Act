import uploadFileTypes from './uploadFile.types'
import { modifyFiles } from './uploadFile.utils'

const INITIAL_STATE = {
  fileProgress: {
    // format will be like below
    // 1: {  --> this interpreted as uploaded file #1
    //   id: 1,
    //   file,
    //   progress: 0,
    // },
  },
}

const fileProgressReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case uploadFileTypes.SET_UPLOAD_FILE:
      return {
        ...state,
        fileProgress: {
        ...state.fileProgress,
        ...modifyFiles(state.fileProgress, action.payload),
      },
    }

    default:
      return state
    }
}

export default fileProgressReducer