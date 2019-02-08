// import { combineReducers } from "redux"
// import * as ActionTypes from "./actionTypes"
// import localStorage from "../util/storage"

// /**
//  * reducer就是一个纯函数，接收旧的state和action，返回新的state
//  */

// // 需要存储的初始状态数据
// const initialState = {
//   skin: localStorage.getSkin(),  // 皮肤
//   showStatus: false,  // 显示状态
//   song: localStorage.getCurrentSong(),  // 当前歌曲
//   songs: localStorage.getSongs()  // 歌曲列表
// };

// // 拆分Reducer

// // 设置皮肤
// function skin(skin = initialState.skin, action) {
//   switch (action.type) {
//     case ActionTypes.SET_SKIN:
//       return action.skin;
//     default:
//       return skin;
//   }
// }




// // 合并Reducer
// const reducer = combineReducers({
//   skin,
//   showStatus,
//   song,
//   songs
// });

// export default reducer
