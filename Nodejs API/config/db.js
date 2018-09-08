	/*
* Real time private chatting app using Angular 2, Nodejs, mongodb and Socket.io
* @author Shashank Tiwari
*/
 
"use strict";
/*requiring mongodb node modules */
const mongodb = require('mongodb');
const assert = require('assert');

class Db{

	constructor(){
		console.log("hello")
		this.mongoClient = mongodb.MongoClient;
		this.ObjectID = mongodb.ObjectID;
	}

	onConnect(){
	
		const mongoURL = process.env.DB_URL;
		console.log(mongoURL);
		return new Promise( (resolve, reject) => {
			this.mongoClient.connect(mongoURL, (err, db) => {
				if (err) {
					reject(err);
				} else {
					assert.equal(null, err);
					resolve([db,this.ObjectID]);
				}
			});
		});
	}
}
module.exports = new Db();