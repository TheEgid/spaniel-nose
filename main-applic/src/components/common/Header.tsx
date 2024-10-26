import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Nav, Navbar } from "react-bootstrap";
// import { $userStatus, logoutClickedEvent } from "src/models/user-state";
import { Delimiter } from "./Delimiter";

const Header = (): React.JSX.Element => {
    const router = useRouter();
    // const { visitor } = useUnit($userStatus);
    // const isLogin = !!visitor;

    // useEffect(() => {
    //     if (visitor instanceof Error) {
    //         logoutClickedEvent();
    //         void router.push("/");
    //     }
    // }, [router, visitor]);

    // const email = isLogin && (visitor as IUser).email;

    // const getLinkClassName = (path: string): string => router?.pathname === path ? "nav-link-active nav-link active" : "nav-link";

    const left = <></>;
    // let right = <p>Validating...</p>;

    // if (!isLogin) {
    const right = (
        <Nav>
            {/* <Link className={getLinkClassName("/geo")} href="/geo">
        Сервис
            </Link> */}
            <Link
                className="nav-link"
                href="#"
                onClick={async () => {
                    // await router.push("/auth-pages/login");
                    await router.push("#");
                }}
            >
                Вход администратора
            </Link>
        </Nav>
    );

    // if (isLogin) {
    //     left = (
    //         <Navbar bg="light" expand="xl">
    //             <Nav>
    //                 <Link className={getLinkClassName("/")} href="/">
    //                     Главная
    //                 </Link>
    //             </Nav>
    //         </Navbar>
    //     );
    //     right = (
    //         <Navbar bg="light" expand="lg">
    //             <Nav>
    //                 <Link className={getLinkClassName("/geo") + " nav-link-geo"} href="/geo">
    //                     Гео Сервис
    //                 </Link>
    //                 <Link
    //                     className="nav-link"
    //                     href="#"
    //                     onClick={() => {
    //                         logoutClickedEvent();
    //                         void router.push("/");
    //                     }}
    //                 >
    //                     Выйти
    //                 </Link>
    //             </Nav>
    //         </Navbar>
    //     );
    // }

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Navbar bg="light" expand="lg">
                <Link style={{ textDecoration: "none" }} href="/">
                    <Navbar.Brand>Наш спаниель</Navbar.Brand>
                </Link>
            </Navbar>
            {left}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    {/* <span className="user-header">
                        На се вы&nbsp;
                        {isLogin ? <span className="top-user">{email}</span> : <span>Гость</span>}
                    </span> */}
                    <Delimiter />
                    {right}
                </div>
            </div>
        </div>
    );
};

export default Header;
