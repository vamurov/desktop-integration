import { Header } from "../../components/Header";

export function AppB() {
  return <div>
    <Header title={'App B'}></Header>
    <table className={'tbl'}>
      <tbody>
      <tr>
        <td width={'100px'}>
          Portfolio
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <td>Snapshot</td>
        <td>
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <button>Notification</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
}
