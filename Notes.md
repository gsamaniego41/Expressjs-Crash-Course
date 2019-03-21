## Basic Route Handling

- access to params, query strings, url parts, etc
- `express.Router()` can store routes in separate files and export
- parse incoming data w/ Body Parser

## Middleware

3 types:

1. Express has built in MW. `server.use(express.json())`
2. MW also comes from 3rd part pkgs.
3. Custom MW.

- they're just functions that have access to `req` and `res`
- A stack of functions that executes whenever a request is made to the server.
- What they can do:
  - Execute any code
  - Make changes to the req/res obj
  - End response cycle
  - Call next MW in the stack

## Middleware from TK

- Functions that extend software
- Use to add features to Express
- The biggest feature of Express
- Most code we write, including route handlers, is MW
- Can be considered an array of functions that get executed in the order they are introduced into the server code

## Custom MW

- write a function that receives 3 or 4 args
  - 3 args = regular MW
  - 4 args = error handling MW
- Add that function to the MW queue
- `next()` is a fn that tells Express your MW is ready to move on into the next MW in the queue.
- CAN modify req/res but doesn't have to
- MW can stop req's by sending res back to the client

# Random Notes:

- `npm init -y` -y so I don't have to answer any questions
- ALL endpoints on our server will be affected by`.use()`
- order of route handlers and `server.use()` matters in Express
