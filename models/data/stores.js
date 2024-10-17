import "dotenv/config.js"
import "../../config/database.js"
import Store from "../Store.js"

const stores = [
    {
      name: "Tech Haven",
      address: "1234 Technology Ave, Silicon Valley, CA",
      phone: 5551234567,
      email: "info@techhaven.com"
    },
    {
      name: "Gadget World",
      address: "5678 Gadget Blvd, New York, NY",
      phone: 5559876543,
      email: "support@gadgetworld.com"
    },
    {
      name: "Device Hub",
      address: "4321 Device St, Austin, TX",
      phone: 5552468102,
      email: "sales@devicehub.com"
    },
    {
      name: "Future Tech",
      address: "7890 Future Rd, San Francisco, CA",
      phone: 5551357913,
      email: "contact@futuretech.com"
    },
    {
      name: "Smart Shop",
      address: "2468 Smart Lane, Miami, FL",
      phone: 5558642093,
      email: "hello@smartshop.com"
    }
];

Store.insertMany(stores) 