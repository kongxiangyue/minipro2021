const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
 
    return await db.collection('db1').where({
      name:event.name
    }).remove({
    })
  
}