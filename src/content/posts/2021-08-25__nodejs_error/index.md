---
title: Fixing The Gyp Error For NPM  
subTitle: NodeJS
categories: ["package manager", "asdf", "mac", "nodejs"]
cover: ./cathedral-6539937_1280.jpg
date: 2021-08-25
---

![cover-image](./cathedral-6539937_1280.jpg)

This is going to be a short article. Not much of an educational post but
more of a straight to the point solution post.

For the previous article on installing asdf   
https://servingniches.org/posts/2021-08-14__the_greatest_package_manager/

![nodejs-error](./nodejs_error.png)

While installing the latest version of node into an existing repo using asdf, I ran 
into the gyp error when trying to run ```npm install```. 

The fix for it was simple. Delete existing ```node_modules``` and the ```package-lock.json``` file is what 
solved the problem. The package-lock.json file was generated with an older version of 
NodeJS. Ran ```npm install``` and everything worked perfectly this time.


### Appendix

[Pixabay Image Source](https://pixabay.com/photos/cathedral-london-architecture-6539937/)
