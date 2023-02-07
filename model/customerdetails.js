const mongoose = require('mongoose');

const customerdetails = new mongoose.Schema({
    userId: String,
    Time: Date,
    isAdmin: Boolean,
    Name: String,
    userName: {
      type: String
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    referenceId: {
      type: String
    },
    paymentLinkSentAt: {
      type: Date,
      default: Date.now
    },
    paymentDoneAt: {
      type: Date,
      default: Date.now
    }
})
module.exports = mongoose.model('CustomerDetails', customerdetails);