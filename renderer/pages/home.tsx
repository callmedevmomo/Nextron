import { signIn, signOut } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import React from "react";

function Home() {
	return (
		<React.Fragment>
			<Head>
				<title>타이틀입니다.</title>
			</Head>
			<button onClick={() => signIn("kakao")}>Sign in</button>
			<button onClick={() => signOut()}>Sign out</button>
			<div className="grid grid-col-1 text-2xl w-full text-center">
				<img className="ml-auto mr-auto" src="/images/logo.png" />
				<span>⚡ Electron ⚡</span>
				<span>+</span>
				<span>Next.js</span>
				<span>+</span>
				<span>tailwindcss</span>
				<span>=</span>
				<span>💕 </span>
			</div>
			<div className="mt-1 w-full flex-wrap flex justify-center">
				<Link href="/next">
					<a className="btn-blue">Go to next page</a>
				</Link>
			</div>
		</React.Fragment>
	);
}

export default Home;
