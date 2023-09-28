import dashboard from "../../assets/images/sidebar-icons/dashboard.png";
import switch_mode from "../../assets/images/sidebar-icons/switch_mode.png";
import upload_property from "../../assets/images/sidebar-icons/upload_property.png";
import saved_property from "../../assets/images/sidebar-icons/saved_property.png";
import transactions from "../../assets/images/sidebar-icons/transactions.png";
import receipts from "../../assets/images/sidebar-icons/receipts.png";
import drafts from "../../assets/images/sidebar-icons/drafts.png";
import property_data from "../../assets/images/sidebar-icons/property_data.png";
import service_provider from "../../assets/images/sidebar-icons/service_provider.png";
import edit_account from "../../assets/images/sidebar-icons/edit_account.png";
import referral from "../../assets/images/sidebar-icons/referral.png";
import wallet from "../../assets/images/sidebar-icons/wallet.png";
import logout from "../../assets/images/sidebar-icons/logout.png";

export const SideBarDataOne = [
  {
    id: 1,
    name: "Dashboard",
    link: "/dashboard",
    icon: dashboard,
  },
  {
    id: 2,
    name: "Switch Mode",
    link: "/dashboard/switch",
    icon: switch_mode,
  },
  {
    id: 3,
    name: "Upload Property",
    link: "/dashboard/upload",
    icon: upload_property,
  },
  {
    id: 4,
    name: "Saved Property",
    link: "/saved-property",
    icon: saved_property,
  },
  {
    id: 5,
    name: "Transactions",
    link: "/dashboard/transactions",
    icon: transactions,
  },
  {
    id: 6,
    name: "Receipts",
    link: "/dashboard/receipts",
    icon: receipts,
  },
  {
    id: 7,
    name: "Drafts",
    link: "/dashboard/drafts",
    icon: drafts,
  },
  {
    id: 8,
    name: "Property Data",
    link: "/dashboard/property-data",
    icon: property_data,
  },
];
export const SideBarDataTwo = [
  {
    id: 9,
    name: "Service Provider",
    link: "/dashboard/service-provider",
    icon: service_provider,
  },
  {
    id: 10,
    name: "Edit Account",
    link: "/dashboard/profile",
    icon: edit_account,
  },
  {
    id: 11,
    name: "Referral",
    link: "/dashboard/referral",
    icon: referral,
  },
  {
    id: 12,
    name: "Wallet",
    link: "/dashboard/wallet",
    icon: wallet,
  },
  // {
  //   id: 13,
  //   name: "Logout",
  //   link: "/dashboard/logout",
  //   icon: logout,
  // },
];
export const GetApp = [
  {
    id: 13,
    name: "Help & Support",
    link: "/dashboard/service-provider",
    icon: service_provider,
  },
  {
    id: 14,
    name: "Get the App",
    link: "/dashboard/edit-account",
    icon: edit_account,
  },
];
