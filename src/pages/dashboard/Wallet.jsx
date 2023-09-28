import { Outlet } from "react-router-dom";
import Walletlayout from "../../features/Wallet/Walletlayout";

const Wallet = () => {
  return (
    <>
      <Walletlayout>
        <Outlet />
      </Walletlayout>
    </>
  );
};

export default Wallet;
