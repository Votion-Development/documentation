---
sidebar_position: 5
---

# Common Errors

This is a list of common errors you might come across when using Dashactyl.


## Arch Error:

![arch_error](/img/arch_error.png)

This error sometimes appears when you try and install the NPM packages. A workaround is to do `npm i -f` instead.

## MongoClient error

If you are getting the error: `MongoClient must be connected`, a simple workaround is by using the non srv connection uri which you can get by choosing an older driver version like `2.2.12` on MongoDB Atlas, or just converting it yourself.


Thank you to Acktar#6724 on discord for these answers.