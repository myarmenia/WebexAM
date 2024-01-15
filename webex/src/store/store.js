import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./slices/LoginSlice/LoginSlice";
import { registerReducer } from "./slices/RegisterSlice/RegisterSlice";
import { resetPasswordReducer } from "./slices/ResetEmailSlice/ResetEmailSlice";
import { resetPasswordPageReducer } from "./slices/PasswordResetPageSlice/PasswordResetPageSlice";
import { newPasswordReducer } from "./slices/NewPasswordeSlise/NewPasswordeSlise";
const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer,
        resetPassword: resetPasswordReducer,
        resetPasswordPage: resetPasswordPageReducer,
        newPassword: newPasswordReducer
    },
    // middleware: (getDefaultMiddlware)=>[
    //     ...getDefaultMiddlware(),
        
    // ]
})


export default store