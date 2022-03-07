import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { SinglePageWrapper } from "./SinglePage.styles";

const SinglePage = () => {
  return (
    <SinglePageWrapper>
      <Sidebar />
      <Navbar />
    </SinglePageWrapper>
  );
};
export default SinglePage;
