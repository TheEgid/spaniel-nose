import React, { type ReactNode } from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";

interface Props {
    children: ReactNode
}

const Layout: React.FC<Props> = (props) => (
    <Container>
        <Header />
        {props.children}
    </Container>
);

export default Layout;
