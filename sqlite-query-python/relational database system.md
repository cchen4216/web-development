# 关系数据库 relational database system

## 什么是数据库，以及数据库软件
**数据库**，可以理解为编程语言中的数据结构（如 list, dictionary），具有数据的存储，管理，查询等功能。关系型数据库 (relational database) 中数据是以表格 (table) 的形式存储的。

不同的公司推出了不同的数据库管理软件，比如 MySQL, SQLite, MS SQL, ORACLE 等，他们都是实现了同样的数据库功能，但是性能有差别。

## 关系数据库的组成
关系型数据库包含了很多张表格 (table)，如 student table, class table。每张表格包含一些行和列，列也称为表结构，每一列是一个 field，如 student ID, name, gender。而每一行是一条记录 (record or entry)，代表一个学生。一般每个 table 要有一个 primary key (column)，类似于 index of list or key of dict，用来唯一地确定 records。

关系型数据库的关系，是指两个 table 如果包含同一个 feature，那么两个 table 就有逻辑联系了。这样很多个 table 相互联系就组成了巨大的数据库。

## 数据库的基本操作
和基本的数据结构一样，数据库最基本的功能要求包括：添加，查找，删除等。关系型数据库常用的命令集合称为 SQL (structural querying language)，但其实不能算 language。主要包含了命令有：`select`, `insert`, `drop`, `delete`。

## SQL cheat sheet
这里摘抄了几个常见的 SQL 命令。更详细的可以网上查找。

### Basic Queries
— filter your columns
	`SELECT col1, col2, col3, ... FROM table1`
— filter the rows
	`WHERE col4=1 AND col5=2`
— aggregate the data
	`GROUP by ....`
— limit aggregated data
	`HAVING count(*)>1`
— order of the results
	`ORDER BY col2`

Useful keywords for `SELECTS`:
- `DISTINCT` - return unique results
- `BETWEEN a AND b` - limit the range, the values can be numbers, text, or dates
- `LIKE` - pattern search within the column text
- `IN (a, b, c)` - check if the value if contained among given.

### Data Modification
— update specific data with the WHERE clause
	`UPDATE table1 SET col1=1 WHERE col2=2`
— insert values manually
	`INSERT INTO table1 (ID, FIRST_NAME, LAST_NAME) VALUES (1, 'Rbel', 'Labes');`
— insert by using the results of a query
	`INSERT INTO table1 (ID, FIRST_NAME, LAST_NAME) SELECT id, last_name, first_name FROM table2`