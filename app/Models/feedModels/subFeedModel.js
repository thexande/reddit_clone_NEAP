const db = require('../../config/db/knex/knexConfig')
const bcrypt = require('bcrypt')
module.exports = class subFeedModel {
  constructor() {}
  getAllSubFeeds() {
    return db.knex('feedz_sub_feeds')
  }
}