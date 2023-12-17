notes:https://hendrixer.github.io/API-design-v4/lessons/

Why does api call not show under xhr in dev tools??
An xhr request is typical where in client side js makes a fetch/axios call to an api, but here that is not the case

How the createServer get the req and res


This is like an event driven architecture: when u make a request to a server, its like an event,
 * which when triggered , runs the callback.The response object is scoped to the incoming request, such that 
 * the response is tied to its own request, when a server might receive many requests. 


 IP address helps traffic go to and from a specific device whereas the port allows targetting of specific services or apps on that device.SO when u navigate to google.com, underneeth there is an ip address , also there is a port:443(for https requests) and port:80 for http requests
 localhost has ip address of 127.0.0.1

 res.json,
 express.urlencoded vs express.json

 Sending back an html file that a browser can render
 const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

app.use(express.static("static"));

/**
 * app.[method]([route], [route handler])
 */
app.get("/", (req, res) => {
  // sending back an HTML file that a browser can render on the screen.
  res.sendFile(path.resolve("pages/index.html"));
});

// creates and starts a server for our API on a defined port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

Q.What does body-parser module do in express v4 and below?
To handle HTTP POST requests in Express.js version 4 , you need to install the middleware module called body-parser.
body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.
As of now for v4.16 and above, u dont need body-parser, but instead express.json or express.url encoded and there underneath use body-parser

QDo app.use(bodyParser.urlencoded({ extended: true })) and app.use(bodyParser.json()) automatically invoke next()
A: Yes.urlencoded() and json() are actually middleware factories that return a middleware function which invokes next()

Q what is URL Encoding (Percent Encoding) and what is the url encoded format
A URL is composed from a limited set of characters belonging to the US-ASCII character set. These characters include digits (0-9), letters(A-Z, a-z), and a few special characters ("-", ".", "_", "~").

ASCII control characters (e.g. backspace, vertical tab, horizontal tab, line feed etc), unsafe characters like space, \, <, >, {, } etc, and any character outside the ASCII charset is not allowed to be placed directly within URLs.Moreover, there are some characters that have special meaning within URLs. These characters are called reserved characters. Some examples of reserved characters are ?, /, #, : etc. Any data transmitted as part of the URL, whether in query string or path segment, must not contain these characters.

So what do we do when we need to transmit any data in the URL that contain these disallowed characters? Well, we encode them!
URL Encoding converts reserved, unsafe, and non-ASCII characters in URLs to a format that is universally accepted and understood by all web browsers and servers. It first converts the character to one or more bytes. Then each byte is represented by two hexadecimal digits preceded by a percent sign (%) - (e.g. %xy). The percent sign is used as an escape character.

URL encoding is also called percent encoding since it uses percent sign (%) as an escape character.

## URL encoded format:
A format of text that follows the rules of url encoding, ie in this data format,  reserved, unsafe, and non-ASCII characters are encoded ,while rest are as it is .URL encoding is a technique used to make data safe for inclusion in a URL, but the data itself is not typically included in the URL when submitting a form using the POST method. Instead, it's included in the request body.
x-www-form-urlencoded
The URL-encoded data sends encoded data to the server, and uses the same encoding as that of the URL parameters. To use it, we need to select the x-www-form-urlencoded tab in the body of the request in postman.

URL-encoded form data is a simple and widely supported way to send data from web forms to a server, and it is commonly used for tasks like user registration, search queries, and more in web applications.

To access the form data in your Express.js API, you'll need to use a body parser middleware  (such as Express's express.urlencoded() middleware) , such as express.urlencoded() for URL-encoded form data or express.json() for JSON data, to parse and extract the data from the request body. Once parsed, you can access the form data in your server-side code and process it as needed.



Here is the explanation that should clear doubts on express.json() and express.urlencoded() and the use of body-parser. It took me some time to figure this out.

What is Middleware? It is those methods/functions/operations that are called BETWEEN processing the Request and sending the Response in your application method.

When talking about express.json() and express.urlencoded() think specifically about POST requests (i.e. the .post request object) and PUT Requests (i.e. the .put request object)

You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests.

You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both these requests you are sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request

Express provides you with middleware to deal with the (incoming) data (object) in the body of the request.

a. express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());

b. express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app.use(express.urlencoded());

WHat is ORM(Object Relation Mapper): SDK for the db.It allows you to interact with db based off an object oriented approach
https://hendrixer.github.io/API-design-v4/lessons/intro-to-prisma/what-is-prisma

npm i typescript ts-node @types/node prisma --save-dev -- we use typescript because that enables prisma's typecheck sdk
Why we do npx prisma init
Prisma is a cli, a weird thing about node clis is that if u dont install clis globally, u can't refer to them in the terminal like> prisma. That's because they dont exist globally and may be u will have to cd to node_modules/.bin/prisma

So either install prisma globally or run it via npx

//app is the entire api, while route is just a sub part of it
//and so the sub part(route mounts on a path defined in app)

Q What if in ur server.js, u have two entries as below:
app.get("/",(req,res)=>{
   res.status(200).json({message:"hello"});
   res.end();
})
app.get("/",(req,res)=>{
   res.status(200).json({message:"hello"});
   res.end();
})
Which one do u think will be called/fired?
A.An important thing about routes is that order  in which the routes are registered,does matter.SO the one written first actually gets fired while the second one would never get executed.The order in which u register a listener matters


Q.How can u compose middleware?
https://www.npmjs.com/package/compose-middleware

cors?
Cross origin resource sharing
You can put a config in ur server that will tell a browser, who or what can access the api.It is a 
preflight check, where browser sends off an API call to ur server ahead of time 

why we need authn
Our db is multi-tenant.ie , we dont have separate db for each user, theres only one db for all users, so we need to be careful that we dont let some users see someone elses data, how do we do that: Authn

Q.Where do we store the jwt on client->localstorage or https cookies?
A.better in cookies so that they are auto-send in header
On server, they should be part of authorization header

Q. Where would you do rate limiting for an api..should it be done in middleware?
A.Yes, it can be done in middleware, where the request does not reach the handler(where request to db is being made)
but for more performant approach,u would not that request to even reach ur server.So typically , rate-limiting for a sophisiticated api would be added before the server(middleware on the network layer and not on the code layer) and that would like a proxy or API gateway , which is another server that sits in front of your server,and that server does things like rate limiting and access control


//Difference between findFirst and findUniqu?
There are some  fields where u cant index, for instance whhen u are doing faceting or filtering, like u need to find combination of certain things that aren't indexed and u have 100 products that match the name, u want too find the 1st that matches
FindUnique: one product only that matches criteria

How you query for multiple things that could be the same versus how you query forsomething that's guaranteed to be unique is gonna be different.Because databases treat unique things differently than they treat non-unique things.So ultimately, it's probably gonna come down to speed.But the way you should think about it is,because we don't have a unique index on this, technically the database isconvinced that there might be more than one instance of this combination.So we're saying find the first one of it.But if we index these, this would actually be unique and we could probably just do findUnique and get that optimization from the database.

Upsert : find something that matches a criteria. if it does, then update or else insert

Express can catch synchronous errors
If an error is not caught on our server, it will crash and our API will non functional. To avoid this, we want to make sure we catch any and all potential errors. We also want to do right by the requester and inform them on any errors, especially if it's their fault. Express uses its middleware system to ship a default error handler that does a good job at catching any syncronous errors that throw inside middleware and handlers. Let's test that:

app.get("/", () => {
  throw new Error("oops");
});
If you were to run this, you will see an error in your terminal, however, the server will not crash. Express is adding a default error handler to the bottom of our router stack. Error handling middleware is just like all middleware except they don't run before a handler, they only run after an error has been thrown.

app.use((err, req, res, next) => {
  // handle error
});
As long as your error handler is registered, it wull catch errors.

## Now, what about async errors? Well, we have to tell Express about our async errors. Inside our handlers and middleware:
Async stuff is happening at a different position, so express cant handle

You can pass next inside a handler. so that it can pass the error to a custom error handler that u have in ur code.and anything u pass to next in a handler, is treated like an error
const handler = async (req, res, next) = {
  // ....
  try {
    const user = await prisma.user.create({})
  } catch(e) {
    next(e)
  }
}

What if you have an error outside of Express but in node, not in handler.Well, it'll just break so you can try catch it, if you just throw an error .You can just try catch that but for an asynchronous error that happens somewherelater in your app that's not an express.How do you handle that? well, you can get away with,you can use something called process.


environment:set of conditions in which ur code operates
Environment variables get injected into the app, while ur app is running
NODE_ENV is not set by default, we set it

/Can we run test by simply writing jest command in terminal?
/*If you go to your terminal and type in jest, you'll probably get an error,because-
If you install a CLI into your application,just like we did, jest is a CLI. But we installed it locally into our project.We didn't install it globally onto our computer,
 so we can't actually just type in jest like this, because we didn't globally install it.
 We locally installed it, 
so we'd have to go into like node_modules, right and then will we be able to run that command
But when we mention jest as a script in package.json, npm is smart enough to check if package.json has jest
as an entry, it knows that local jest is to be used Whereas the terminal is not that smart, your terminal is not gonnaknow that you have something called jest installed in this project.It's actually looking on the root of your computer for it, in the bin folder.So it won't work here, unless you install it globally.*/
Fun fact, test and start are the only commands in npm that you don't have toput the word run in front of.

Regarding script "build": "tsc -p tsconfig.json",
The way tsc works is, if you do -p which I think stands for project, and point it to a file, a configuration file(tscconfig).It doesn't know what TypeScript files you want it to compile to unless u tell it explicitly and here in our tsconfig , we mention includes key, which tells just that.The alternative is you don't point it to a tsconfig and you just say, Yeah,just go here, source index.ts and go compile that like "build": "tsc src/index.ts".But then you don't get to customize the compiler to do all different things mentioned in tsconfig,because it'll just ignore that whole file.So either you can use this file and use include,or you can't use this file at all and you can just point to a file.