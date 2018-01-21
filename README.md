# attribute-retriever
A library for safely retrieving nested attributes from an object in a single invocation.

## Motivation
Often as JavaScript developers we must obtain a nested value within an object. A happy path may look like this:

```javascript
const nestedAttribute = object.where.everything.exists; // Value of the nested 'exists' attribute

```

Following a non-happy path, we may see something like this:
```javascript
const nestAttribute = object.where.X.is.undefined;

/*
Uncaught TypeError: Cannot read property 'is' of undefined
    at <anonymous>:1:5
*/

```

If we do not do this safely, avoiding the TypeError, we can do something like this:

```javascript
const nestedAttribute = object && object.where && object.where.X && object.where.X.is && object.where.X.is.undefined; // undefined

```

This can get a little verbose.

## Use

What about something that reads simpler? How about?

```javascript
const getAttr = require('attribute-retriever');

const nestedAttribute_1 = getAttr('object.where.everything.exists'); // Value of the nested 'exists' attribute
const nestedAttribute_2 = getAttr('object.where.X.is.undefined'); // undefined

```

And _voila!_ Simpler.