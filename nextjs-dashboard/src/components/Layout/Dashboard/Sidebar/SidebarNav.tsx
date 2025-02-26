import {
  faDroplet,
  faPencil,
  faCalculator,
  faChartPie,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import React, { PropsWithChildren } from 'react';
import SidebarNavGroup from '@/components/Layout/Dashboard/Sidebar/SidebarNavGroup';
import SidebarNavItem from '@/components/Layout/Dashboard/Sidebar/SidebarNavItem';
import { getDictionary } from '@/locales/dictionary';

const SidebarNavTitle = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <li className="nav-title px-3 py-2 mt-3 text-uppercase fw-bold">{children}</li>
  );
};

export default async function SidebarNav() {
  const dict = await getDictionary();
  return (
    <ul className="list-unstyled">
      <SidebarNavTitle>{dict.sidebar.items.dashboard}</SidebarNavTitle>
      <SidebarNavItem icon={faHome} href="/">Homepage</SidebarNavItem> {/* Link to the main page */}
      <SidebarNavItem icon={faDroplet} href="./Users">Survey Data</SidebarNavItem>
      <SidebarNavItem icon={faCalculator} href="./Analysis">Analysis</SidebarNavItem>

      <SidebarNavTitle>Solutions</SidebarNavTitle>
      <SidebarNavItem icon={faChartPie} href="./solution_1">Solution 1</SidebarNavItem>
      <SidebarNavItem icon={faChartPie} href="./solution_2">Solution 2</SidebarNavItem>
      <SidebarNavItem icon={faChartPie} href="./solution_3">Solution 3</SidebarNavItem>
    </ul>
  );
}
