import { useContext } from "react";
import { SmartphoneView } from "../../App";
import Navbar from "../navbar/Navbar";
import PageRoute from "../pageRoute/PageRoute";
import Sidebar from "../sidebar/Sidebar";
import { SinglePageWrapper, UnderPartWrapper } from "./SinglePage.styles";

const SinglePage = () => {
  return (
    <SinglePageWrapper>
      <Navbar />
      <UnderPartWrapper>
        <Sidebar />
        <PageRoute />
      </UnderPartWrapper>
    </SinglePageWrapper>
  );
};
export default SinglePage;
