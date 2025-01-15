import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarBattery,
  faChargingStation,
  faDownload,
  faGasPump,
  faMars,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  ProgressBar,
} from "react-bootstrap";
import React from "react";
import { getDictionary } from "@/locales/dictionary";
import Image from "next/image";
import mahindraLogo from "./mahindra-logo.webp";
import marutisuzukiLogo from "./maruti-suzuki-logo.jpg";
import tataLogo from "./tata-logo.jpeg";
export default async function Page() {
  const dict = await getDictionary();
  return (
    <div>
      <Card className="mb-4">
        <CardBody>
          <div className="d-flex justify-content-between">
            <div>
              <h4 className="mb-0">Analysis</h4>
              <div className="small text-black-50 dark:text-gray-500">
                {dict.dashboard.traffic.duration}
              </div>
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
                <label className="btn btn-outline-secondary" htmlFor="option1">
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
                <label className="btn btn-outline-secondary" htmlFor="option3">
                  {dict.dashboard.traffic.option.year}
                </label>
              </ButtonGroup>
              <Button variant="primary">
                <FontAwesomeIcon icon={faDownload} fixedWidth />
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <Card
            className="mb-4"
            style={{ "--bs-card-cap-bg": "#3b5998" } as React.CSSProperties}
          >
            <CardHeader className="d-flex justify-content-center align-items-center">
              <Image
                src={mahindraLogo}
                alt="Mahindra Logo"
                className="my-4"
                width={100}
                height={100}
              />
            </CardHeader>
            <CardBody>
              <div className="row text-center">
                <div className="col">
                  <div className="fs-5 fw-semibold">15</div>
                  <div className="text-uppercase text-black-50 dark:text-gray-500 small">
                    {dict.dashboard.social.facebook.label1}
                  </div>
                </div>
                <div className="vr p-0" />
                <div className="col">
                  <div className="fs-5 fw-semibold">12</div>
                  <div className="text-uppercase text-black-50 dark:text-gray-500 small">
                    {dict.dashboard.social.facebook.label2}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-sm-6 col-lg-4">
          <Card
            className="mb-4"
            style={{ "--bs-card-cap-bg": "#00aced" } as React.CSSProperties}
          >
            <CardHeader className="d-flex justify-content-center align-items-center">
              <Image
                src={marutisuzukiLogo}
                alt="Maruti Suzuki Logo"
                className="my-4"
                width={100}
                height={100}
              />
            </CardHeader>
            <CardBody>
              <div className="row text-center">
                <div className="col">
                  <div className="fs-5 fw-semibold">12</div>
                  <div className="text-uppercase text-black-50 dark:text-gray-500 small">
                    {dict.dashboard.social.twitter.label1}
                  </div>
                </div>
                <div className="vr p-0" />
                <div className="col">
                  <div className="fs-5 fw-semibold">10</div>
                  <div className="text-uppercase text-black-50 dark:text-gray-500 small">
                    {dict.dashboard.social.twitter.label2}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-sm-6 col-lg-4">
          <Card
            className="mb-4"
            style={{ "--bs-card-cap-bg": "#4875b4" } as React.CSSProperties}
          >
            <CardHeader className="d-flex justify-content-center align-items-center">
              <Image
                src={tataLogo}
                alt="Tata Logo"
                className="my-4"
                width={100}
                height={100}
              />
            </CardHeader>
            <CardBody>
              <div className="row text-center">
                <div className="col">
                  <div className="fs-5 fw-semibold">10</div>
                  <div className="text-uppercase text-black-50 dark:text-gray-500 small">
                    {dict.dashboard.social.instagram.label1}
                  </div>
                </div>
                <div className="vr p-0" />
                <div className="col">
                  <div className="fs-5 fw-semibold">6</div>
                  <div className="text-uppercase text-black-50 dark:text-gray-500 small">
                    {dict.dashboard.social.instagram.label2}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Card>
            <CardHeader>{dict.dashboard.sales.title}</CardHeader>
            <CardBody>
              <div className="row">
                <div className="col-sm-6">
                  <div className="row">
                    <div className="col-6">
                      <div className="border-start border-4 border-info px-3 mb-3">
                        <small className="text-black-50 dark:text-gray-500">
                          {dict.dashboard.sales.stats.stat1}
                        </small>
                        <div className="fs-5 fw-semibold">9 HR</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="border-start border-4 border-danger px-3 mb-3">
                        <small className="text-black-50 dark:text-gray-500">
                          {dict.dashboard.sales.stats.stat2}
                        </small>
                        <div className="fs-5 fw-semibold">22 HR</div>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-0" />
                  <div className="row mb-4 align-items-center">
                    <div className="col-3">
                      <span className="text-black-50 dark:text-gray-500 small">
                        {dict.dashboard.sales.monday}
                      </span>
                    </div>
                    <div className="col">
                      <ProgressBar
                        className="progress-thin mb-1"
                        variant="primary"
                        now={34}
                      />
                      <ProgressBar
                        className="progress-thin"
                        variant="danger"
                        now={78}
                      />
                    </div>
                  </div>
                  <div className="row mb-4 align-items-center">
                    <div className="col-3">
                      <span className="text-black-50 dark:text-gray-500 small">
                        {dict.dashboard.sales.tuesday}
                      </span>
                    </div>
                    <div className="col">
                      <ProgressBar
                        className="progress-thin mb-1"
                        variant="primary"
                        now={56}
                      />
                      <ProgressBar
                        className="progress-thin"
                        variant="danger"
                        now={94}
                      />
                    </div>
                  </div>
                  <div className="row mb-4 align-items-center">
                    <div className="col-3">
                      <span className="text-black-50 dark:text-gray-500 small">
                        {dict.dashboard.sales.wednesday}
                      </span>
                    </div>
                    <div className="col">
                      <ProgressBar
                        className="progress-thin mb-1"
                        variant="primary"
                        now={12}
                      />
                      <ProgressBar
                        className="progress-thin"
                        variant="danger"
                        now={67}
                      />
                    </div>
                  </div>
                  <div className="row mb-4 align-items-center">
                    <div className="col-3">
                      <span className="text-black-50 dark:text-gray-500 small">
                        {dict.dashboard.sales.thursday}
                      </span>
                    </div>
                    <div className="col">
                      <ProgressBar
                        className="progress-thin mb-1"
                        variant="primary"
                        now={43}
                      />
                      <ProgressBar
                        className="progress-thin"
                        variant="danger"
                        now={91}
                      />
                    </div>
                  </div>
                  <div className="row mb-4 align-items-center">
                    <div className="col-3">
                      <span className="text-black-50 dark:text-gray-500 small">
                        {dict.dashboard.sales.friday}
                      </span>
                    </div>
                    <div className="col">
                      <ProgressBar
                        className="progress-thin mb-1"
                        variant="primary"
                        now={22}
                      />
                      <ProgressBar
                        className="progress-thin"
                        variant="danger"
                        now={73}
                      />
                    </div>
                  </div>
                  <div className="row mb-4 align-items-center">
                    <div className="col-3">
                      <span className="text-black-50 dark:text-gray-500 small">
                        {dict.dashboard.sales.saturday}
                      </span>
                    </div>
                    <div className="col">
                      <ProgressBar
                        className="progress-thin mb-1"
                        variant="primary"
                        now={53}
                      />
                      <ProgressBar
                        className="progress-thin"
                        variant="danger"
                        now={82}
                      />
                    </div>
                  </div>
                  <div className="row mb-4 align-items-center">
                    <div className="col-3">
                      <span className="text-black-50 dark:text-gray-500 small">
                        {dict.dashboard.sales.sunday}
                      </span>
                    </div>
                    <div className="col">
                      <ProgressBar
                        className="progress-thin mb-1"
                        variant="primary"
                        now={9}
                      />
                      <ProgressBar
                        className="progress-thin"
                        variant="danger"
                        now={69}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="row">
                    <div className="col-6">
                      <div className="border-start border-4 border-warning px-3 mb-3">
                        <small className="text-black-50 dark:text-gray-500">
                          {dict.dashboard.sales.stats.stat3}
                        </small>
                        <div className="fs-5 fw-semibold">150</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="border-start border-4 border-success px-3 mb-3">
                        <small className="text-black-50 dark:text-gray-500">
                          {dict.dashboard.sales.stats.stat4}
                        </small>
                        <div className="fs-5 fw-semibold">4</div>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-0" />
                  <div className="mb-5">
                    <div className="mb-3">
                      <div className="d-flex mb-1">
                        <div>
                          <FontAwesomeIcon
                            className="me-2"
                            icon={faMars}
                            fixedWidth
                          />
                          {dict.dashboard.sales.male}
                        </div>
                        <div className="ms-auto fw-semibold">43%</div>
                      </div>
                      <ProgressBar
                        className="progress-thin"
                        variant="warning"
                        now={43}
                      />
                    </div>
                    <div className="mb-3">
                      <div className="d-flex mb-1">
                        <div>
                          <FontAwesomeIcon
                            className="me-2"
                            icon={faVenus}
                            fixedWidth
                          />
                          {dict.dashboard.sales.female}
                        </div>
                        <div className="ms-auto fw-semibold">37%</div>
                      </div>
                      <ProgressBar
                        className="progress-thin"
                        variant="warning"
                        now={37}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex mb-1">
                      <div>
                        <FontAwesomeIcon
                          className="me-2"
                          icon={faCarBattery}
                          fixedWidth
                        />
                        {dict.dashboard.sales.organic}
                      </div>
                      <div className="ms-auto fw-semibold me-2">63</div>
                      <div className="text-black-50 dark:text-gray-500 small">
                        (42%)
                      </div>
                    </div>
                    <ProgressBar
                      className="progress-thin"
                      variant="success"
                      now={42}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="d-flex mb-1">
                      <div>
                        <FontAwesomeIcon
                          className="me-2"
                          icon={faGasPump}
                          fixedWidth
                        />
                        {dict.dashboard.sales.facebook}
                      </div>
                      <div className="ms-auto fw-semibold me-2">52.5</div>
                      <div className="text-black-50 dark:text-gray-500 small">
                        (35%)
                      </div>
                    </div>
                    <ProgressBar
                      className="progress-thin"
                      variant="success"
                      now={35}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="d-flex mb-1">
                      <div>
                        <FontAwesomeIcon
                          className="me-2"
                          icon={faGasPump}
                          fixedWidth
                        />
                        {dict.dashboard.sales.twitter}
                      </div>
                      <div className="ms-auto fw-semibold me-2">22.5</div>
                      <div className="text-black-50 dark:text-gray-500 small">
                        (15%)
                      </div>
                    </div>
                    <ProgressBar
                      className="progress-thin"
                      variant="success"
                      now={15}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="d-flex mb-1">
                      <div>
                        <FontAwesomeIcon
                          className="me-2"
                          icon={faChargingStation}
                          fixedWidth
                        />
                        {dict.dashboard.sales.linkedin}
                      </div>
                      <div className="ms-auto fw-semibold me-2">12</div>
                      <div className="text-black-50 dark:text-gray-500 small">
                        (8%)
                      </div>
                    </div>
                    <ProgressBar
                      className="progress-thin"
                      variant="success"
                      now={8}
                    />
                  </div>
                </div>
              </div>
              <br />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
