[still in progress]

TODO:
- auto refresh each morning (so you could use this as a wall panel)
- check mobile
- fix line panel align bug
- finish readme
- add favicon

[composited sheet sample image goes here]

# perpetual-calendar

Dan Reisinger designed

Modern art

[MOMA Perpetual Wall Calendar][MOMA]

The original MoMA pitch for it is "A calendar that never goes out of date"...

- auto refresh each morning
- randomized colors with pleasant combos

## To run locally

### First install some stuff

```bash
$ npm install -g stylus
$ npm install -g autoprefixer-stylus
$ npm install -g http-server
```

### Then run these

Each of these get their own `terminal`

```bash
$ stylus -u autoprefixer-stylus --watch css/styles.styl
$ http-server -p 4040
```

### Good times ahead

Go to `http://localhost:4040`

🏩

[moma]:http://www.momastore.org/museum/moma/ProductDisplay?storeId=10001&catalogId=10451&langId=-1&categoryId=11526&parent_category_rn=26674&productId=164102&keyWord=Perpetual%20Wall%20Calendar&purpose=crawl
