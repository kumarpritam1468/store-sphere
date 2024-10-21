"use client"

import { useWixClient } from '@/hooks/useWixClient';
import { LoginState } from '@wix/sdk';
import React, { useState } from 'react'
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  VERIFY_EMAIL = "VERIFY_EMAIL"
}

const LoginPage = () => {
  const [mode, setMode] = useState(MODE.LOGIN);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const formTitle = MODE.LOGIN === mode ? "Login" : MODE.REGISTER === mode ? "Register" : MODE.RESET_PASSWORD === mode ? "Reset Password" : "Verify Email";

  const buttonTitle = MODE.LOGIN === mode ? "Login" : MODE.REGISTER === mode ? "Register" : MODE.RESET_PASSWORD === mode ? "Reset" : "Verify";

  const wixClient = useWixClient();

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      let res;
      switch (mode) {
        case MODE.LOGIN: {
          res = await wixClient.auth.login({
            email,
            password
          });
          break;
        }
        case MODE.REGISTER: {
          res = await wixClient.auth.register({
            profile: { nickname: username },
            email,
            password
          });
          break;
        }
        case MODE.RESET_PASSWORD: {
          res = await wixClient.auth.sendPasswordResetEmail(
            email,
            window.location.href
          );
          setMessage("Password reset E-mail sent");
          break;
        }
        case MODE.VERIFY_EMAIL: {
          res = await wixClient.auth.processVerification({
            verificationCode: emailCode
          });
          break;
        }
        default:
          break;
      }

      console.log(res);

      switch (res?.loginState) {
        case LoginState.SUCCESS: {
          setMessage("Successful! You are being redirected.");
          router.push("/");
          const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
            res.data.sessionToken!
          );

          Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
            expires: 2,
          });
          wixClient.auth.setTokens(tokens);
          break;
        }
        case LoginState.FAILURE:
          if (
            res.errorCode === "invalidEmail" ||
            res.errorCode === "invalidPassword"
          ) {
            setError("Invalid email or password!");
          } else if (res.errorCode === "emailAlreadyExists") {
            setError("Email already exists!");
          } else if (res.errorCode === "resetPassword") {
            setError("You need to reset your password!");
          } else {
            setError("Something went wrong!");
          }
          break;
        case LoginState.EMAIL_VERIFICATION_REQUIRED:
          setMode(MODE.VERIFY_EMAIL);
          break;
        case LoginState.OWNER_APPROVAL_REQUIRED:
          setMessage("Your account is pending approval");
          break;
        default: break;
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setError("Something went wrong");
    }
  }

  return (
    <div className='h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-12 2xl:px-32 flex items-center justify-center'>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold">{formTitle}</h1>
        {mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              placeholder="john"
              className="ring-2 ring-gray-300 rounded-md p-4"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        ) : null}
        {mode !== MODE.VERIFY_EMAIL ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="john@gmail.com"
              className="ring-2 ring-gray-300 rounded-md p-4"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Verification Code</label>
            <input
              type="text"
              name="emailCode"
              placeholder="Code"
              className="ring-2 ring-gray-300 rounded-md p-4"
              onChange={(e) => setEmailCode(e.target.value)}
            />
          </div>
        )}
        {mode === MODE.LOGIN || mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="ring-2 ring-gray-300 rounded-md p-4"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        ) : null}
        {mode === MODE.LOGIN && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.RESET_PASSWORD)}
          >
            Forgot Password?
          </div>
        )}
        <button
          className="bg-main-red text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : buttonTitle}
        </button>
        {error && <div className="text-red-600">{error}</div>}
        {mode === MODE.LOGIN && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.REGISTER)}
          >
            {"Don't"} have an account?
          </div>
        )}
        {mode === MODE.REGISTER && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Have an account?
          </div>
        )}
        {mode === MODE.RESET_PASSWORD && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Go back to Login
          </div>
        )}
        {message && <div className="text-green-600 text-sm">{message}</div>}
      </form>
    </div>
  )
}

export default LoginPage