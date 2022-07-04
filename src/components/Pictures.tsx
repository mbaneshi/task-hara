import React from "react";
import { Link } from "react-router-dom";

export default function Pictures() {
  return (
    <div>
      Pictures
      {invoices.map((invoice) => (
        <Link
          style={{ display: "block", margin: "1rem 0" }}
          to={`/invoices/${invoice.number}`}
          key={invoice.number}
        >
          {invoice.name}
        </Link>
      ))}
    </div>
  );
}
