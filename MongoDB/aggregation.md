Aggregation in MongoDB is a robust process designed for data analysis and transformation within collections. 


 This capability is essential for transforming document-shaped data structures into a summarized form, making it easier to understand trends, patterns, and anomalies in your data.

The aggregation framework in MongoDB operates through a pipeline mechanism, where data passes through multiple stages of transformation. Each stage in the pipeline processes the data as it flows through, performing operations such as filtering, grouping, sorting, and combining data, as well as other sophisticated calculations and data transformations.

Why Aggregation is Useful:

**Data Summarization:** Aggregation is invaluable for summarizing data, such as calculating sums, averages, and other statistical measures across large datasets.

**Transforming Data:** It allows for the transformation of data into a structure that is more conducive to the specific requirements of an application or analysis. This could involve reshaping data, enriching documents with computed fields, or filtering out unnecessary data.

**Complex Analytics:** The aggregation framework enables complex analytical operations that can rival those of traditional relational databases. This includes the ability to join documents, perform cross-collection queries, and create complex hierarchical data structures.

**Performance Optimization:** By leveraging the aggregation pipeline, MongoDB can optimize query performance, especially when operating on indexes and when processing is distributed across multiple nodes in a cluster. This makes aggregation an efficient choice even for data-intensive operations.




## 1. $match — Filtering documents (like WHERE in SQL)
### 🔎 Example: Find all users from city "Jaipur".

```js
    db.users.aggregate([
    { $match: { city: "Jaipur" } }
    ])
```


## 2. $group — Grouping documents and performing aggregation
### 🔎 Example: Count how many users are there in each city:

```js
    db.users.aggregate([
    { $group: { _id: "$city", totalUsers: { $sum: 1 } } }
    ])
```


## 3. $project — Select or reshape fields
### 🔎 Example: Show only user name and email:

```js
    db.users.aggregate([
    { $project: { 
        _id: 0, 
        name: 1, 
        email: 1 
        } }
    ])
```

### 🔎 Example with computed fields: Add full name by concatenation:

```js
    db.users.aggregate([
    { 
        $project: { 
        fullName: { $concat: ["$firstName", " ", "$lastName"] },
        email: 1 
        }
    }
    ])
```

## 4. $sort — Sorting documents
### 🔎 Example: Sort users by age in descending order:

```js
    db.users.aggregate([
    { $sort: { age: -1 } }
    ])
```


## 5. $limit — Limit the number of results
### 🔎 Example: Get top 5 oldest users:

```js
    db.users.aggregate([
    { $sort: { age: -1 } },
    { $limit: 5 }
    ])
```



## 7. $lookup — Join collections (like SQL JOIN)
### 🔎 Example: Join orders collection with users collection on userId:

```js
    db.orders.aggregate([
    { 
        $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "userDetails"
        }
    }
    ])
```

## 8. $unwind — Flatten array fields
### 🔎 Example: Flatten an array of items in each order:

```js
    db.orders.aggregate([
    { $unwind: "$items" }
    ])
```

## 10. $count — Count documents
### 🔎 Example: Count the number of users older than 30:

```js
    db.users.aggregate([
        {$match: {age: {$ge: 45, }}},
        {$sum: 'totalOlderThan45'}
    ])
```

```js
db.user.aggregate([
    {$match: {salary: {$ge: 10000}}}
    {$sum: 'userMoreThan10KSalary'}
])
```

## ✅ Pro Tip:
    Use **.explain("executionStats")**


## ✅ Complex Example Combining Multiple Stages
### Find top 3 cities with the highest number of users:

```js
db.users.aggregate([
    { $group: { _id: '$city', userCount: { $sum: 1 } }}
    { $sort: { userCount: 1 }}
    { $limit: 3}
])
```
