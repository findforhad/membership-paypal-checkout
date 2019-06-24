module.exports = ({ payerID, paymentID, paymentToken, address, email }) => {
  console.log("Document");
  console.log(address);
  const today = new Date();
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Invoice</title>
    </head>
    <style>
      .print-container {
        max-width: 800px;
        margin: auto;
        font-family: serif;
        border: 2px solid #e05d30;
        padding: 20px;
      }
      .print-container .header {
        margin-bottom: 20px;
        border-bottom: 1px solid #dbdbdb;
        padding-bottom: 20px;
      }
  
      .print-container .ft-18 {
        font-size: 20px;
        margin-bottom: 10px;
      }
      .print-container .adder {
        font-size: 16px;
        font-weight: 500;
        text-align: right;
        border-left: 0;
        border-right: 0;
        border-bottom: 0;
      }
      .print-container .total {
        font-size: 22px;
      }
      .print-container .mega {
        font-size: 33px;
        margin-bottom: 10px;
      }
  
      .invoice-logo {
        height: 200px;
        width: auto;
      }
  
      .other-rates {
        float: right;
      }
      .other-rates dl {
        width: 100%;
        margin-bottom: 5px;
      }
      .other-rates dl.total {
        border-top: 1px solid #dbdbdb;
        padding-top: 10px;
      }
      .other-rates dt {
        width: 50%;
        float: left;
      }
      .other-rates dd {
        width: 50%;
        float: left;
        padding-right: 10px;
        margin: 0;
      }
      .invoice-from {
        float: right;
      }
    </style>
    <body>
      <div class="print-container clearfix" style="margin-top: 50px;">
        <div class="header">
          <div class="content">
            <table style="width:100%">
              <tr style="width:80%" class="heading">
                <td colspan="3">
                  <img
                    class="invoice-logo"
                    src="https://upload.wikimedia.org/wikipedia/en/0/01/Filemobile-F-Logo-Hulford.png"
                    alt=""
                  />
                </td>
                <td class="text-right">
                  <div class="invoice-from" style="max-width:400px">
                    <h2 class="mega">INVOICE</h2>
                    <h3 class="grey">DevForhad.io</h3>
                    <p>Open Source Software Solution Center.</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="body">
          <h4 style="margin: 0">Summary</h4>
          <div class="summary-info">
            <p><strong>Recipient Name: ${address.recipient_name}</strong></p>
            <p>City: ${address.city}</p>
            <p>State: ${address.state}</p>
            <p>Postal Code: ${address.postal_code}</p>
            <small>Email: ${email}</small>
            <br />
            <small>Location: ${address.line1}</small>
          </div>
          <hr />
  
          <h4 style="margin: 0">Details</h4>
          </div>
          <div class="break-d">
            <p>
            <strong>Payer ID:</strong> ${payerID}
            <br />
              <strong>Payment ID:</strong> ${paymentID}
              <br />
              <strong>Invoice No:</strong> ${paymentToken}
              <br />
              <strong>Date : ${today}</strong>
            </p>
          </div>
        </div>
      </div>
    </body>
  </html>
  `;
};
