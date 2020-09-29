# vite-scale-test

to create and trust self-signed certs

```
yarn certs
```

to test vite:

```
yarn dev
# now open https://localhost:3000/
```

to test webpack-dev-server

```
yarn wds
# now open https://localhost:8080/index.wd.html
```

to test snowpack

```
yarn sp
# now open http://localhost:8080/
```

## quick results on a dev box

|                                           | server ready | browser initial load | refresh | innerloop (change 1 file in leaf, save, dev   server) | HMR |
|-------------------------------------------|--------------|----------------------|---------|-------------------------------------------------------|-----|
| vite + https/2 + trusted self-signed cert | <1s          | 20s                  | 5.5s    | <1s                                                   | 2s  |
| vite + http/1.1                           | <1s          | 21s                  | 6.2s    | <1s                                                   | 2s  |
| snowpack                                  | 3-5s         | 22s                  | 7.7s    | <1s                                                   | <1s   |
| webpack 4 + tsloader transpileOnly        | 11s          | 1-2s                 | 1-2s    | 1s                                                    | -   |