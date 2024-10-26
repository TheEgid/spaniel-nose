import React from "react";
import { type AppProps } from "next/app";
import Layout from "src/components/common/Layout";

import "../globals.scss";

const App = ({ Component, ...rest }: AppProps): React.JSX.Element => {

    // return isConditions
    // ?
    return (
        <Layout>
            {/* <ToastContainer /> */}
            <Component {...rest.pageProps} />
        </Layout>
    );
    // : <CenteredSpinner />;
};

export default App;
