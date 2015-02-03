# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## robots
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
manufacturer| string    | not null
description | string    | not null
location    | string    | not null
image_url   | string    | not null
video_url   | string    | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
title       | string    | not null
body        | string    |

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
robot_id    | string    | not null, unique

## robot_likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references posts)
like_id     | integer   | not null, foreign key (references tags)
