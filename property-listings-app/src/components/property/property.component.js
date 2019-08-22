import React from "react";

import "./property.component.scss";

const Property = (props) => (
	<table className="property">
		<thead>
			<tr>
				<th>Owner</th>
				<th>Address</th>
				<th>Income Generated</th>
				<th>Servicing</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td className="capitalize">{props.details.owner}</td>
				<td className="address">
					<p>{props.details.address.line1}</p>
					{props.details.address.line2 ? <p>{props.details.address.line2}</p> : null}
					{props.details.address.line3 ? <p>{props.details.address.line3}</p> : null}
					<p>{props.details.line4}</p>
					<p>{props.details.address.postCode}</p>
					<p>{props.details.address.city}</p>
					<p>{props.details.address.country}</p>
				</td>
				<td>&#163;{props.details.incomeGenerated}</td>
				<td>
					<span className={`circle ${props.details.isServicing ? "green" : "red"}`}></span>
					{props.details.isServicing ? "YES" : "NO"}
				</td>
			</tr>
		</tbody>
	</table>
)

export default Property;