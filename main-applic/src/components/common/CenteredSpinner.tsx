import React from "react";
import { Spinner } from "react-bootstrap";

interface ICenteredSpinner {
    content?: string
}

const CenteredSpinner = ({ content = "Загрузка" }: ICenteredSpinner): React.JSX.Element => (
    <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status" variant="secondary"></Spinner>
        <div className="text-center">
            <span>&nbsp;</span>
            ...
            {content}
        </div>
    </div>
);

export default CenteredSpinner;
