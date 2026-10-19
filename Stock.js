// Week 9: Mongoose schema and model for stock market records.
const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  symbol: { type: String, required: true, unique: true, trim: true, uppercase: true },
  price: { type: Number, required: true, min: 0 },
  change: { type: Number, default: 0 },
  volume: { type: String, default: 'N/A' },
  sector: { type: String, default: 'Unknown' },
  lastUpdated: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.models.Stock || mongoose.model('Stock', stockSchema);
