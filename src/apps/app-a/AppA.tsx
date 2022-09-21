import './AppA.css'
import { Button, Select } from "@chakra-ui/react";
import { Header } from "../../components/Header";

export function AppA() {
  return <div>
    <Header title={'App A'}></Header>

    <table className={'tbl'}>
      <tbody>
      <tr>
        <td width={'100px'}>
          Portfolio
        </td>
        <td>
          <Select style={{width: 150}}>
            <option>Pacifica</option>
            <option>Voyager</option>
            <option>Sienna</option>
            <option>Odyssey</option>
          </Select>
        </td>
      </tr>
      <tr>
        <td>Snapshot</td>
        <td>
          <Select style={{width: 150}}>
            <option>12:08</option>
            <option>14:00</option>
            <option>17:00</option>
            <option>23:59</option>
          </Select>
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <Button>Open B &gt;</Button>
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <Button>Duplicate A</Button>
        </td>
      </tr>
      <tr>
        <td>Notification</td>
        <td></td>
      </tr>
      </tbody>
    </table>
  </div>
}
