

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDown,
  faArrowUp,
  faCarAlt,
  faCarBattery,
  faCarOn,
  faChargingStation,
  faDownload,
  faEllipsisVertical,
  faGasPump,
  faGaugeSimple,
  faHouseChimneyMedical,
  faMars,
  faRecycle,
  faSearch,
  faUsers,
  faVenus,
} from '@fortawesome/free-solid-svg-icons'
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  ProgressBar,
} from 'react-bootstrap'
import {
  faCcAmex,
  faCcApplePay,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import UserChart from '@/components/Page/Dashboard/UserChart'
import IncomeChart from '@/components/Page/Dashboard/IncomeChart'
import ConversionChart from '@/components/Page/Dashboard/ConversionChart'
import SessionChart from '@/components/Page/Dashboard/SessionChart'
import TrafficChart from '@/components/Page/Dashboard/TrafficChart'
import { getDictionary } from '@/locales/dictionary'

export default async function Page() {
  const dict = await getDictionary()

  return (
    <div>
      <div className="row">
        <div className="col-sm-6 col-lg-3">
          <Card bg="primary" text="white" className="mb-4">
            <CardBody className="pb-0 d-flex justify-content-between align-items-start">
              <div>
                <div className="fs-4 fw-semibold">
                  Toyota
                  <span className="fs-6 ms-2 fw-normal">
                    (-12.4%
                    <FontAwesomeIcon icon={faArrowDown} fixedWidth />
                    )
                  </span>
                </div>
                <div><p>Petrol,Deisel & EV</p></div>
              </div>
              <Dropdown align="end">
                <DropdownToggle
                  as="button"
                  bsPrefix="btn"
                  className="btn-link rounded-0 text-white shadow-none p-0"
                  id="dropdown-chart1"
                >
                  <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                </DropdownToggle>

              </Dropdown>
            </CardBody>
            <div className="mt-3 mx-3" style={{ height: '70px' }}>
              <UserChart />
            </div>
          </Card>
        </div>

        <div className="col-sm-6 col-lg-3">
          <Card bg="info" text="white" className="mb-4">
            <CardBody className="pb-0 d-flex justify-content-between align-items-start">
              <div>
                <div className="fs-4 fw-semibold">
                  Honda
                  <span className="fs-6 ms-2 fw-normal">
                    (40.9%
                    <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                    )
                  </span>
                </div>
                <div><p>Petrol,Deisel & EV</p></div>
              </div>
              <Dropdown align="end">
                <DropdownToggle
                  as="button"
                  bsPrefix="btn"
                  className="btn-link rounded-0 text-white shadow-none p-0"
                  id="dropdown-chart2"
                >
                  <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                </DropdownToggle>
              </Dropdown>
            </CardBody>
            <div className="mt-3 mx-3" style={{ height: '70px' }}>
              <IncomeChart />
            </div>
          </Card>
        </div>

        <div className="col-sm-6 col-lg-3">
          <Card bg="warning" text="white" className="mb-4">
            <CardBody className="pb-0 d-flex justify-content-between align-items-start">
              <div>
                <div className="fs-4 fw-semibold">
                  Mahindra
                  <span className="fs-6 ms-2 fw-normal">
                    (84.7%
                    <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                    )
                  </span>
                </div>
                <div><p>Specially Ev and Hybrid </p></div>
              </div>
              <Dropdown align="end">
                <DropdownToggle
                  as="button"
                  bsPrefix="btn"
                  className="btn-link rounded-0 text-white shadow-none p-0"
                  id="dropdown-chart3"
                >
                  <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                </DropdownToggle>
              </Dropdown>
            </CardBody>
            <div className="mt-3 mx-3" style={{ height: '70px' }}>
              <ConversionChart />
            </div>
          </Card>
        </div>

        <div className="col-sm-6 col-lg-3">
          <Card bg="danger" text="white" className="mb-4">
            <CardBody className="pb-0 d-flex justify-content-between align-items-start">
              <div>
                <div className="fs-4 fw-semibold">
                  Tata
                  <span className="fs-6 ms-2 fw-normal">
                    (-23.6%
                    <FontAwesomeIcon icon={faArrowDown} fixedWidth />
                    )
                  </span>
                </div>
                <div><p>Petrol,Deisel & EV</p></div>
              </div>
              <Dropdown align="end">
                <DropdownToggle
                  as="button"
                  bsPrefix="btn"
                  className="btn-link rounded-0 text-white shadow-none p-0"
                  id="dropdown-chart4"
                >
                  <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                </DropdownToggle>
              </Dropdown>
            </CardBody>
            <div className="mt-3 mx-3" style={{ height: '70px' }}>
              <SessionChart />
            </div>
          </Card>
        </div>
      </div>

      <Card className="mb-4">
        <CardBody>
          <div className="d-flex justify-content-between">
            <div>
              <h4 className="mb-0">{dict.dashboard.traffic.title}</h4>
              <div className="small text-black-50 dark:text-gray-500">{dict.dashboard.traffic.duration}</div>
            </div>
            <div className="d-none d-md-block">
              <ButtonGroup aria-label="Toolbar with buttons" className="mx-3">
                <input
                  className="btn-check"
                  id="option1"
                  type="radio"
                  name="options"
                  autoComplete="off"
                />
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="option1"
                >
                  {dict.dashboard.traffic.option.day}
                </label>
                <input
                  className="btn-check"
                  id="option2"
                  type="radio"
                  name="options"
                  autoComplete="off"
                  defaultChecked
                />
                <label
                  className="btn btn-outline-secondary active"
                  htmlFor="option2"
                >
                  {dict.dashboard.traffic.option.month}
                </label>
                <input
                  className="btn-check"
                  id="option3"
                  type="radio"
                  name="options"
                  autoComplete="off"
                />
                <label
                  className="btn btn-outline-secondary"
                  htmlFor="option3"
                >
                  {dict.dashboard.traffic.option.year}
                </label>
              </ButtonGroup>
              <Button variant="primary">
                <FontAwesomeIcon icon={faDownload} fixedWidth />
              </Button>
            </div>
          </div>
          <div
            style={{
              height: '300px',
              marginTop: '40px',
            }}
          >
            <TrafficChart />
          </div>
        </CardBody>
        <CardFooter>
          <div className="row row-cols-1 row-cols-md-5 text-center">
            <div className="col mb-sm-2 mb-0">
              <div className="text-black-50 dark:text-gray-500">{dict.dashboard.traffic.category1}</div>
              <div className="fw-semibold">
                29.703
                {dict.dashboard.traffic.users}
              </div>
              <ProgressBar
                className="progress-thin mt-2"
                variant="success"
                now={80}
              />
            </div>
            <div className="col mb-sm-2 mb-0">
              <div className="text-black-50 dark:text-gray-500">{dict.dashboard.traffic.category2}</div>
              <div className="fw-semibold">
                24.093
                {dict.dashboard.traffic.users}

              </div>
              <ProgressBar
                className="progress-thin mt-2"
                variant="info"
                now={40}
              />
            </div>
            <div className="col mb-sm-2 mb-0">
              <div className="text-black-50 dark:text-gray-500">{dict.dashboard.traffic.category4}</div>
              <div className="fw-semibold">
                22.123
                {dict.dashboard.traffic.users}
                
              </div>
              <ProgressBar
                className="progress-thin mt-2"
                variant="danger"
                now={20}
              />
            </div>
          </div>
        </CardFooter>
      </Card>
      </div>
  )
}
