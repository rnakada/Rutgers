## Unit 12 - Intro to MySQL

### Overview

In this week, we are starting working with databases by introducing MySQL and SQL queries before connecting them to Node and user-input.

### Homework Activities

* [Bamazon](../../../homework-assignments/12-mysql/homework_instructions.md)

### Key Activities

* [Favorites DB](../01-Activities/02-FavoriteDB-NoData)
* [Books DB](../01-Activities/05-booksDB)
* [Programming DB](../01-Activities/04-programmingDB)
* [Playlist Read](../01-Activities/08-playlistRead)
* [Great Bay](../01-Activities/10-GreatBay)
* [Two Databases](../01-Activities/14-TwoTables)

### Helpful Links

* [Whiteboarding with Example Questions](https://coding-bootcamp-whiteboarding-algorithms.readthedocs-hosted.com/en/latest/)
* [MySQL - W3 Schools](http://www.w3schools.com/sql/)
* [MySQL Workbench Documentation](http://dev.mysql.com/doc/workbench/en/)
* [MySQL NPM Package](https://www.npmjs.com/package/mysql)


### Best Practices

#### `SELECT *` Usage

Throughout this and future units we commonly use `SELECT *` in our SQL queries. This is primarily for readability, debugging, and ease of comprehension purposes. However, it is **NOT** considered best practice to do so in production code.

Specifically, in production code it is typically best practice to only select the columns you need in the result. For example, instead of
```sql
SELECT * FROM characters;
```
you would write:
```sql
SELECT id, name, power FROM characters;
```

This would select the `id`, `name`, and `power` columns specifically, instead of all columns (`*`).

In short, in your homeworks, projects, and production code you should select only the columns you need.

For more information on why `SELECT *` is generally considered bad practice in many cases (and for tips on when it does make sense to use it), see <https://stackoverflow.com/a/3639964/1759514>. However, you can use it liberally for debugging issues as the underlying problem with a query may be in a hidden column.