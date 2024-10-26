import React from "react";
import Head from "next/head";
import { Alert, Container } from "react-bootstrap";

export interface IRootComponentProps {
    pageName?: string,
    elem: React.JSX.Element
}

const RootComponent = (props: IRootComponentProps): React.JSX.Element => {
    const { pageName, elem } = props;
    const documentTitle = `TEMP_HESD Калькулятор | ${pageName || ""}`;

    return (
        <>
            <Head>
                <title>{documentTitle}</title>
            </Head>
            <Container>
                {pageName && (
                    <Alert className="alert-custom" variant="info">
                        {pageName}
                    </Alert>
                )}
                {elem}
            </Container>
        </>
    );
};

export default RootComponent;
