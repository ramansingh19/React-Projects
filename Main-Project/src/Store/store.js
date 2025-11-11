import {configureStore}  from '@reduxjs/toolkit'
import authservice from './slicestore';


const store = configureStore({
  reducer : {
        auth : authservice,
  }
})

export default store;