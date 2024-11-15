import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope, IconDefinition } from '@fortawesome/free-regular-svg-icons'
import {
  faBasketShopping,
  faChartBar,
  faGaugeHigh,
  faList,
  faUserMinus,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'
import {
  Badge,
  Dropdown, DropdownDivider,
  DropdownHeader,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  ProgressBar,
} from 'react-bootstrap'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import Image from 'next/image'
import HeaderLocale from '@/components/Layout/Dashboard/Header/HeaderLocale'
import { getDictionary, getLocale } from '@/locales/dictionary'
import HeaderTheme from '@/components/Layout/Dashboard/Header/HeaderTheme'
import { getPreferredTheme } from '@/themes/theme'

type ItemWithIconProps = {
  icon: IconDefinition;
} & PropsWithChildren

const ItemWithIcon = (props: ItemWithIconProps) => {
  const { icon, children } = props

  return (
    <>
      <FontAwesomeIcon className="me-2" icon={icon} fixedWidth />
      {children}
    </>
  )
}

export default async function HeaderNotificationNav() {
  const dict = await getDictionary()
  return (
    <Nav>
      <NavItem className="d-none d-sm-block">
        <Dropdown>
          <DropdownMenu className="pt-0" align="end">
            <DropdownHeader className="fw-bold rounded-top">{dict.messages.message.replace('{{total}}', '4')}</DropdownHeader>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <div className="message">
                  <div className="py-3 me-3 float-start">
                    <div className="avatar d-inline-flex position-relative">
                      <Image
                        fill
                        className="rounded-circle"
                        src="/assets/img/avatars/1.jpg"
                        alt="user@email.com"
                      />
                      <span
                        className="avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white"
                      />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted">{dict.messages.items.item1.user}</small>
                    <small className="text-muted float-end mt-1">{dict.messages.items.item1.time}</small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    <span className="text-danger">!</span>
                    {' '}
                    {dict.messages.items.item1.title}
                  </div>
                  <div className="small text-truncate text-muted">
                    {dict.messages.items.item1.description}
                  </div>
                </div>
              </DropdownItem>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <div className="message">
                  <div className="py-3 me-3 float-start">
                    <div className="avatar d-inline-flex position-relative">
                      <Image
                        fill
                        className="rounded-circle"
                        src="/assets/img/avatars/2.jpg"
                        alt="user@email.com"
                      />
                      <span
                        className="avatar-status position-absolute d-block bottom-0 end-0 bg-warning rounded-circle border border-white"
                      />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted">{dict.messages.items.item2.user}</small>
                    <small className="text-muted float-end mt-1">{dict.messages.items.item2.time}</small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    {dict.messages.items.item2.title}
                  </div>
                  <div className="small text-truncate text-muted">
                    {dict.messages.items.item2.description}
                  </div>
                </div>
              </DropdownItem>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <div className="message">
                  <div className="py-3 me-3 float-start">
                    <div className="avatar d-inline-flex position-relative">
                      <Image
                        fill
                        className="rounded-circle"
                        src="/assets/img/avatars/3.jpg"
                        alt="user@email.com"
                      />
                      <span
                        className="avatar-status position-absolute d-block bottom-0 end-0 bg-danger rounded-circle border border-white"
                      />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted">{dict.messages.items.item3.user}</small>
                    <small className="text-muted float-end mt-1">{dict.messages.items.item3.time}</small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    {dict.messages.items.item3.title}
                  </div>
                  <div className="small text-truncate text-muted">
                    {dict.messages.items.item3.description}
                  </div>
                </div>
              </DropdownItem>
            </Link>
            <Link href="#" passHref legacyBehavior>
              <DropdownItem>
                <div className="message">
                  <div className="py-3 me-3 float-start">
                    <div className="avatar d-inline-flex position-relative">
                      <Image
                        fill
                        className="rounded-circle"
                        src="/assets/img/avatars/4.jpg"
                        alt="user@email.com"
                      />
                      <span
                        className="avatar-status position-absolute d-block bottom-0 end-0 bg-primary rounded-circle border border-white"
                      />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted">{dict.messages.items.item4.user}</small>
                    <small className="text-muted float-end mt-1">{dict.messages.items.item4.time}</small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    {dict.messages.items.item4.title}
                  </div>
                  <div className="small text-truncate text-muted">
                    {dict.messages.items.item4.description}
                  </div>
                </div>
              </DropdownItem>
            </Link>
          </DropdownMenu>
        </Dropdown>
      </NavItem>
      <NavItem>
        <HeaderLocale currentLocale={getLocale()} />
      </NavItem>
      <NavItem>
        <HeaderTheme currentPreferredTheme={getPreferredTheme()} />
      </NavItem>
    </Nav>
  )
}
