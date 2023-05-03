import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

import { ReactElement } from "react";
import "../styles/globals.css";

interface NextronProps extends AppProps {
	pageProps: {
		session?: Session;
	};
}

const config = require("dotenv").config();

const NextronWithTailWind = ({ Component, pageProps }: NextronProps): ReactElement => {
	const { session, ...rest } = pageProps;
	return (
		<SessionProvider session={session}>
			<Component {...rest} />
		</SessionProvider>
	);
};

export default NextronWithTailWind;
