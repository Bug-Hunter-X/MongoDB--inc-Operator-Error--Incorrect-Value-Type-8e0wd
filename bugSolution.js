```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("6500a79d4d986722f4e56789")}, {"$inc": {"count": 10}});
```