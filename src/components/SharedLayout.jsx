import { Outlet } from "react-router-dom";
import StyledNavbar from "./StyledNavbar";

export default function SharedLayout() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <StyledNavbar></StyledNavbar>

      <Outlet></Outlet>
    </div>
  );
}
