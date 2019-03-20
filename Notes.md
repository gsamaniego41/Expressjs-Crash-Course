## Basic Route Handling

- access to params, query strings, url parts, etc
- `express.Router()` can store routes in separate files and export
- parse incoming data w/ Body Parser

## Middleware

- they're just functions that have access to `req` and `res`
- Express has built in MW. MW also comes from 3rd part pkgs. Custom MW.
- What they can do:
  - Execute any code
  - Make changes to the req/res obj
  - End response cycle
  - Call next MW in the stack
