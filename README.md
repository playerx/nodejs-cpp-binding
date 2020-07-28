## Goals

This demo project had multiple goals:

1. Demonstrate how to write custom C++ Binding for Nodejs using Napi and call it from Javascript
2. See how much performance overhead it takes to call pure empty function in C++ and return the result back to Javascript

## Requirements

- [Nodejs](https://nodejs.org/en/download/)

## How to run

1. `npm i`
2. `npm start`

## Performance

Hardware:

```
MacBook Pro (Retina, 15-inch, Mid 2014)
2.2 GHz Quad-Core Intel Core i7
16 GB 1600 MHz DDR3
```

```
100000 Iterations
```

**Result:**
1 custom (sync) op call duration

| Avg   | Fastest |
| ----- | ------- |
| 341ns | 246ns   |

## Related

[deno-rust-plugin](https://github.com/playerx/deno-rust-plugin)
