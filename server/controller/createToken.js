const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const token = crypto.randomBytes(64).toString('hex');

module.exports = token;
