import React from "react";
import { Col, Row } from 'react-bootstrap';
import address from '../images/address.png';
import date from '../images/date.png';
import andre_russell from '../images/andre_russell.png';
import azam_khan from '../images/azam_khan.png';
import fidel_edwards from '../images/fidel_edwards.png';
import hayden_walsh from '../images/hayden_walsh.png';
import jason_holder from '../images/jason_holder.png';
import migael_pretorius from '../images/migael_pretorius.png';
import osshane_thomas from '../images/osshane_thomas.png';
import raymon_reifer from '../images/raymon_reifer.png';
import rovman_powell from '../images/rovman_powell.png';
import shamarh_brooks from '../images/shamarh_brooks.png';
import fidel_edwards_1 from '../images/fidel_edwards_1.png';
import andre_russell_2 from '../images/andre_russell_2.png';
import oshane_thomas_3 from '../images/oshane_thomas_3.png';

const leadersInfo = [
  {
    id: 1,
    rank: fidel_edwards_1,
    player: fidel_edwards,
    info: 'Fidel Edwards',
    bowled: '34',
    maxSpeed: '138.80km/h',
    avgSpeed: '115.79km/h',
    maxSpin: '1925.50RPM',
    avgSpin: '1,610.27RPM',
    maxPower: '110.30WATT',
    avgPower: '48.61WATT'
  },
  {
    id: 2,
    rank: andre_russell_2,
    player: andre_russell,
    info: 'Andre Russell',
    bowled: '23',
    maxSpeed: '135.70km/h',
    avgSpeed: '126.66km/h',
    maxSpin: '1938.50RPM',
    avgSpin: '1,728.03RPM',
    maxPower: '73.90WATT',
    avgPower: '57.19WATT'
  },
  {
    id: 3,
    rank: oshane_thomas_3,
    player: osshane_thomas,
    info: 'Oshane Thomas',
    bowled: '10',
    maxSpeed: '133.90km/h',
    avgSpeed: '123.34km/h',
    maxSpin: '1337.00RPM',
    avgSpin: '1,126.83RPM',
    maxPower: '62.40WATT',
    avgPower: '48.46WATT'
  },
  {
    id: 4,
    rank: 4,
    player: migael_pretorius,
    info: 'Migael Pretorius',
    bowled: '25',
    maxSpeed: '130.10km/h',
    avgSpeed: '124.64km/h',
    maxSpin: '1705.10RPM',
    avgSpin: '1,424.04RPM',
    maxPower: '57.80WATT',
    avgPower: '43.99WATT'
  },
  {
    id: 5,
    rank: 5,
    player: azam_khan,
    info: 'Azam Khan',
    bowled: '25',
    maxSpeed: '127.30km/h',
    avgSpeed: '112.98km/h',
    maxSpin: '1798.20RPM',
    avgSpin: '1,387.95RPM',
    maxPower: '52.70WATT',
    avgPower: '35.16WATT'
  },
  {
    id: 6,
    rank: 6,
    player: jason_holder,
    info: 'Jason Holder',
    bowled: '29',
    maxSpeed: '124.80km/h',
    avgSpeed: '111.40km/h',
    maxSpin: '2253.10RPM',
    avgSpin: '1,623.44RPM',
    maxPower: '45.90WATT',
    avgPower: '34.74WATT'
  },
  {
    id: 7,
    rank: 7,
    player: rovman_powell,
    info: 'Rovman Powell',
    bowled: '12',
    maxSpeed: '118.80km/h',
    avgSpeed: '115.81km/h',
    maxSpin: '1455.00RPM',
    avgSpin: '1282.05RPM',
    maxPower: '41.60WATT',
    avgPower: '33.50WATT'
  },
  {
    id: 8,
    rank: 8,
    player: raymon_reifer,
    info: 'Raymon Reifer',
    bowled: '24',
    maxSpeed: '117.30km/h',
    avgSpeed: '101.92km/h',
    maxSpin: '2789.60RPM',
    avgSpin: '1,629.91RPM',
    maxPower: '75.80WATT',
    avgPower: '29.56WATT'
  },
  {
    id: 9,
    rank: 9,
    player: hayden_walsh,
    info: 'Hayden Walsh',
    bowled: '6',
    maxSpeed: '115.00km/h',
    avgSpeed: '86.48km/h',
    maxSpin: '5020.00RPM',
    avgSpin: '2,834.17RPM',
    maxPower: '102.60WATT',
    avgPower: '36.73WATT'
  },
  {
    id: 10,
    rank: 10,
    player: shamarh_brooks,
    info: 'Shamarh Brooks',
    bowled: '1',
    maxSpeed: '102.20km/h',
    avgSpeed: '102.20km/h',
    maxSpin: '1567.50RPM',
    avgSpin: '1,567.50RPM',
    maxPower: '33.50WATT',
    avgPower: '33.50WATT'
  }
];


const LeadersInfoList = () => {
  return (
    <div className="leader-board">
      <div className="wrapper-container">
        <div className="leader-board-header">
          <div>
            <Row>
              <Col xs={12} sm={8}>
                  <div>
                    <h1>M10 - Barbados Royals v Jamaica Tallawahs [CPL]</h1>
                    <span><img src={address} alt="Address" />Warren Park, Saint Kitts and Nevis</span>
                    <span><img src={date} alt="Date" />31 Aug 21</span>
                  </div>
              </Col>
              <Col xs={12} sm={4}>
                  <div>
                    <span>Total Balls: 222</span>
                  </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="leader-board-table">
          <div>
              <div className="table-title color-white">Leaderboard</div>
              <table>
                <thead className="color-lightGrey">
                  <tr>
                    <td></td>
                    <td className="player-info-title">Player <span>Info</span></td>
                    <td>Bowled</td>
                    <td>Max Speed</td>
                    <td>Avg Speed</td>
                    <td>Max Spin</td>
                    <td>Avg Spin</td>
                    <td>Max Power</td>
                    <td>Avg Power</td>
                  </tr>
                </thead>
                <tbody className="color-white">
                  {leadersInfo.map(leader => 
                    <tr key={leader.id}>
                      <td data-column="">
                        {
                          leader.id == 1 || leader.id == 2 || leader.id == 3 ?
                          <img className="rank-img" src={leader.rank} alt={leader.info} />
                          :
                          leader.rank
                        }
                      </td>
                      <td data-column="Player Info" className="player-info-content"><img src={leader.player} alt={leader.info} /><span>{leader.info}</span></td>
                      <td data-column="bowled">{leader.bowled}</td>
                      <td data-column="Max Speed">{leader.maxSpeed}</td>
                      <td data-column="Avg Speed">{leader.avgSpeed}</td>
                      <td data-column="Max Spin">{leader.maxSpin}</td>
                      <td data-column="Avg Spin">{leader.avgSpin}</td>
                      <td data-column="Max Spin">{leader.maxPower}</td>
                      <td data-column="Avg Spin">{leader.avgPower}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
        </div>
      </div>
    </div>
  );
};

export default function LeaderBoard() {
  return (
    <div className="">
      <LeadersInfoList />
    </div>
  );
}