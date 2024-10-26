import React, { useEffect, useState } from "react";
import { useUnit } from "effector-react";
import { Card, Pagination } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { $blogItemsWithPaginationStatus, fetchBlogItemsWithPaginationFx, type TRegisteredFieldsForCard } from "src/model/blog-pagination/state";
import { urlPathForFiles } from "src/services/api";
import { fullFormatDate } from "src/tools";
import CenteredSpinner from "./common/CenteredSpinner";

const ImageToLayout = ({ imgName, width }: { imgName: string, width?: number }): React.JSX.Element => {
    const [origin, setOrigin] = useState("");

    useEffect(() => {
        const currentOrigin = window.location.origin;

        setOrigin(currentOrigin);
    }, []);

    const fileUrl = origin.concat(urlPathForFiles);

    return <Image fluid key={imgName} width={width} src={fileUrl.concat(imgName)} alt={imgName} />;
};

const CardsPage = (props: { fieldsForCards: TRegisteredFieldsForCard[], indx: number }): React.JSX.Element => {
    const dataToOut = props.fieldsForCards;

    return dataToOut && (
        <>
            {dataToOut.map((contentUnit, counter) => (
                <div key={counter}>
                    <Card className="my-card box">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                            <h3>{contentUnit.noteHead}</h3>
                            <div style={{ display: "flex", alignItems: "baseline" }}>
                                <h6>
                                    {fullFormatDate(contentUnit.createdAt)}
                                </h6>
                            </div>
                        </div>
                        <ImageToLayout imgName={contentUnit.imageA1Name} />
                        <div style={{ display: "flex" }}>
                            <div style={{ marginTop: "25px" }}>
                                <ImageToLayout width={976} imgName={contentUnit.imageB1Name} />
                            </div>
                            <div style={{ marginTop: "25px", marginLeft: "12px" }}>
                                <ImageToLayout imgName={contentUnit.imageB2Name} />
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div style={{ marginTop: "25px" }}>
                                <ImageToLayout imgName={contentUnit.imageC1Name} />
                            </div>
                            <div style={{ marginTop: "25px", marginLeft: "12px" }}>
                                <ImageToLayout imgName={contentUnit.imageC2Name} />
                            </div>
                            <div style={{ marginTop: "25px", marginLeft: "12px" }}>
                                <ImageToLayout imgName={contentUnit.imageC3Name} />
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                marginBottom: "10px",
                            }}
                        >
                            <h5>{contentUnit.noteMain}</h5>
                            <h5>{contentUnit.noteBottom}</h5>
                        </div>
                    </Card>
                </div>
            ))}
        </>
    );
};

const BlogComponent = (): React.JSX.Element | undefined => {
    const [active, setActive] = useState(1);

    // const [isDeleteModalShow, setIsDeleteModalShow] = useState(false);
    // const [isNewBlog, setIsNewBlog] = useState(false);

    useEffect(() => {
        // fixActiveNavs("a.nav-link[href^=\"/\"]");
        void fetchBlogItemsWithPaginationFx({ page: active, limit: 5 });
    }, [active]);

    // useEffect(() => {
    //     const unsubscribe1 = $blogItemStorageApi.blogItemUpdateFx.watch((x) => {
    //         setIsDeleteModalShow(x.isShown);
    //     });
    //     const unsubscribe2 = $addBlogItemStore.watch((res) => {
    //         setIsNewBlog(!("id" in res));
    //     });

    //     return (): void => {
    //         unsubscribe1();
    //         unsubscribe2();
    //     };
    // }, []);

    const { data, error, loading } = useUnit($blogItemsWithPaginationStatus);
    const { blogItems } = data;

    const pageItems = blogItems && Array.from({ length: blogItems.totalPages }, (_, indx) => (
        <Pagination.Item
            key={indx + 1}
            active={indx + 1 === active}
            onClick={() => {
                setActive(indx + 1);
            }}
        >
            {indx + 1}
        </Pagination.Item>
    ));

    return blogItems && (
        <>
            {/* <AddNewBlog />
                <DeleteBlog id={data.blogId ?? ""} isShow={isDeleteModalShow} /> */}
            {loading
                ? (
                    <CenteredSpinner />
                )
                : (
                    <>
                        {error && <p>ошибка</p>}
                        <CardsPage fieldsForCards={blogItems.items} indx={active} />
                        <Pagination size="sm" className="d-flex justify-content-center">
                            {pageItems}
                        </Pagination>
                    </>
                )}
        </>
    );
};

export default BlogComponent;
