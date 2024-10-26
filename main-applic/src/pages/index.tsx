import React from "react";
import { type NextPage } from "next";
import RootComponent from "src/components/common/RootComponent";
import NewOrderComponent from "src/components/NewOrderComponent";

const MainPage: NextPage = () => <RootComponent pageName="Главная" elem={<NewOrderComponent />} />;

export default MainPage;
