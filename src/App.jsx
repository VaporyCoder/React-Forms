import { useState } from 'react'
import './App.css'
import Authenticate from "./Components/Authenitcate";
import SignUpForm from "./Components/SignUpForm";
export default function App() {
  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  );
}

