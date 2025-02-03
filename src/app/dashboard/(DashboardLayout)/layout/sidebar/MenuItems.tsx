import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMessage,
  IconMoodHappy,
  IconPhone,
  IconTypography,
  IconUserPlus,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/dashboard",
  },
  {
    id: uniqueId(),
    title: "Live Chat",
    icon: IconMessage,
    href: "/dashboard/live-chat",
  },
  {
    id: uniqueId(),
    title: "Call",
    icon: IconPhone,
    href: "/dashboard/call",
  },
  // {
  //   navlabel: true,
  //   subheader: "Utilities",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Typography",
  //   icon: IconTypography,
  //   href: "/dashboard/utilities/typography",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Shadow",
  //   icon: IconCopy,
  //   href: "/dashboard/utilities/shadow",
  // },
  // {
  //   navlabel: true,
  //   subheader: "Auth",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Login",
  //   icon: IconLogin,
  //   href: "/authentication/login",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Register",
  //   icon: IconUserPlus,
  //   href: "/authentication/register",
  // },
  // {
  //   navlabel: true,
  //   subheader: "Extra",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Icons",
  //   icon: IconMoodHappy,
  //   href: "/dashboard/icons",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Sample Page",
  //   icon: IconAperture,
  //   href: "/dashboard/sample-page",
  // },
];

export default Menuitems;
