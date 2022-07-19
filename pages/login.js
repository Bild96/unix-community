import React, { useEffect } from 'react';
import { checkNetwork, connectWeb3 } from '../utils/connect-extension';
import Head from 'next/head';
import { useRouter } from 'next/router';

function Login() {
  const router = useRouter();
  // On mount
  console.log('Login loaded');
  useEffect(() => {
    console.log('login useEffect loaded');
    login();
  });

  async function login() {
    //connectExtension();
    if ((await connectWeb3()) && (await checkNetwork())) {
      router.push('/dashboard');
    }
  }

  // IF the user clicks the LOGIN BUTTON
  async function loginExtension() {
    // Request an account
    await window.ethereum
      .request({
        method: 'eth_requestAccounts',
      })
      .then(function (accounts) {
        // check if any number of accounts was returned
        // IF go to the dashboard
        if (accounts.length) {
          router.push('/dashboard');
          console.log('navigate refreshed from Login jsx');
        } else console.log('User denied access');
      });
  }

  return (
    <div className="App">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.2.3/milligram.min.css"
        ></link>
        <meta charset="UTF-8"></meta>
      </Head>
      <h2>Example Forum dApp</h2>
      <h3>create, comment, and vote on posts and their comments.</h3>

      <br />

      <button onClick={loginExtension}>Log in to your browser extension</button>
    </div>
  );
}

export default Login;
