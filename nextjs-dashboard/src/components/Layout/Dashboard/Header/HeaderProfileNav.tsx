import { 
  Badge, 
  Dropdown, 
  DropdownDivider, 
  DropdownHeader, 
  DropdownItem, 
  DropdownMenu, 
  DropdownToggle, 
  Nav, 
  NavItem 
} from 'react-bootstrap';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCreditCard, faEnvelopeOpen, faFile, faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import { PropsWithChildren } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGear, faListCheck, faLock, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import HeaderLogout from '@/components/Layout/Dashboard/Header/HeaderLogout';
import { authOptions } from '@/app/api/auth/option';
import { getServerSession } from 'next-auth';
import { getDictionary } from '@/locales/dictionary';
import profile from './profile.jpeg'; // Corrected path

type ItemWithIconProps = {
  icon: IconDefinition;
} & PropsWithChildren;

const ItemWithIcon = (props: ItemWithIconProps) => {
  const { icon, children } = props;

  return (
    <>
      <FontAwesomeIcon className="me-2" icon={icon} fixedWidth />
      {children}
    </>
  );
};

export default async function HeaderProfileNav() {
  const session = await getServerSession(authOptions);
  const dict = await getDictionary();

  return (
    <Nav>
      <Dropdown as={NavItem}>
        <DropdownToggle variant="link" bsPrefix="hide-caret" className="py-0 px-2 rounded-0" id="dropdown-profile">
          <div className="avatar position-relative">
            {session && (
              <Image
                fill
                sizes="32px"
                className="rounded-circle"
                src={profile}
                alt="Profile Image" // Add an alt attribute for accessibility
              />
            )}
          </div>
        </DropdownToggle>
        <DropdownMenu className="pt-0">
          <DropdownHeader className="fw-bold">{dict.profile.settings.title}</DropdownHeader>
          <Link href="#" passHref legacyBehavior>
            <DropdownItem>
              <ItemWithIcon icon={faUser}>{dict.profile.settings.items.profile}</ItemWithIcon>
            </DropdownItem>
          </Link>
          <Link href="#" passHref legacyBehavior>
            <DropdownItem>
              <ItemWithIcon icon={faGear}>{dict.profile.settings.items.settings}</ItemWithIcon>
            </DropdownItem>
          </Link>
          <Link href="#" passHref legacyBehavior>
            <DropdownItem>
              <ItemWithIcon icon={faCreditCard}>
                {dict.profile.settings.items.payments}
              </ItemWithIcon>
            </DropdownItem>
          </Link>
          <Link href="#" passHref legacyBehavior>
            <DropdownItem>
              <ItemWithIcon icon={faFile}>{dict.profile.settings.items.profile}</ItemWithIcon>
            </DropdownItem>
          </Link>
          <DropdownDivider />
          <Link href="#" passHref legacyBehavior>
            <DropdownItem>
              <ItemWithIcon icon={faLock}>{dict.profile.lock_account}</ItemWithIcon>
            </DropdownItem>
          </Link>
          <HeaderLogout>
            <DropdownItem>
              <ItemWithIcon icon={faPowerOff}>{dict.profile.logout}</ItemWithIcon>
            </DropdownItem>
          </HeaderLogout>
        </DropdownMenu>
      </Dropdown>
    </Nav>
  );
}
