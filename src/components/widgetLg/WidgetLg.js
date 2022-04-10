import "./widgetLg.css";

export default function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={"lw-button " + type}>{type}</button>;
      };
  return (
    <div className="largeWidget">
        <h3 className="lw-title">Latest Transactions</h3>
        <table className="lw-table">
            <tr className="lw-tr">
            <th className="lw-th">Customer</th>
            <th className="lw-th">Date</th>
            <th className="lw-th">Amount</th>
            <th className="lw-th">Status</th>
            </tr>
            <tr className="lw-tr">
            <td className="lw-user">
                <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="lw-img"
                />
                <span className="lw-name">Susan Carol</span>
            </td>
            <td className="lw-date">2 Jun 2021</td>
            <td className="lw-amount">$122.00</td>
            <td className="lw-status">
                <Button type="Approved" />
            </td>
            </tr>
            <tr className="lw-tr">
            <td className="lw-user">
                <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="lw-img"
                />
                <span className="lw-name">Susan Carol</span>
            </td>
            <td className="lw-date">2 Jun 2021</td>
            <td className="lw-amount">$122.00</td>
            <td className="lw-status">
                <Button type="Declined" />
            </td>
            </tr>
            <tr className="lw-tr">
            <td className="lw-user">
                <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="lw-img"
                />
                <span className="lw-name">Susan Carol</span>
            </td>
            <td className="lw-date">2 Jun 2021</td>
            <td className="lw-amount">$122.00</td>
            <td className="lw-status">
                <Button type="Pending" />
            </td>
            </tr>
            <tr className="lw-tr">
            <td className="lw-user">
                <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="lw-img"
                />
                <span className="lw-name">Susan Carol</span>
            </td>
            <td className="lw-date">2 Jun 2021</td>
            <td className="lw-amount">$122.00</td>
            <td className="lw-status">
                <Button type="Approved" />
            </td>
            </tr>
        </table>
    </div>
  )
}
