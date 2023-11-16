const API = 'https://chat-2865.onrender.com'

/**post */
//export const SIGNIN_URL = API + '/user/sign-in' //sign-in url
export const SIGNUP_URL = API +'/user/create' //create account
export const SENT_REQUEST_URL = API + '/friend/{user_id}/request' //gui loi moi ket ban
export const CREATE_CHATROOM_URL = API + '/friend/{user_id}/request'

/**get */
export const DETAIL_URL = API + '/user/detail' /** ? */ //tìm user = username/email
export const LIST_URL = API + '/friend/{user_id}/list' //lấy danh sách bạn + lời mời
export const LIST_CHATROOM_URL = API + '/chat-room/{user_id}/list' //lấy danh sách chatroom
export const LIST_MESSAGES_URL = API + '/chat-room/{user_id}/list'
