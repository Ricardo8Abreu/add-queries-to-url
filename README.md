# add-queries-to-url

A utility to add queries to a URL using objects.

## Installation

```sh
npm install add-queries-to-url
```

## Usage

### Basic Example

```typescript
import addQueriesToUrl from 'add-queries-to-url';

const url = 'https://example.com';
const queries = { foo: 'bar', baz: 'qux' };

const newUrl = addQueriesToUrl({ url, queries });
console.log(newUrl); // https://example.com?foo=bar&baz=qux
```
