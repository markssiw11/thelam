import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const register = async (email, password) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    console.log('%c register Success:', 'color: #4CAF50; font-weight: bold');
  } catch (e) {
    console.log('err=====', e);
  }
};
export const login = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (e) {
    console.log(e);
  }
};
export const logout = async () => {
  try {
    await auth().signOut();
  } catch (e) {
    console.log(e);
  }
};
