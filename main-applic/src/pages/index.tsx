import React from "react";
import { type NextPage } from "next";
import BlogComponent from "src/components/BlogComponent";
import RootComponent from "src/components/common/RootComponent";

const MainPage: NextPage = () => <RootComponent pageName="First" elem={<BlogComponent />} />;

export default MainPage;
