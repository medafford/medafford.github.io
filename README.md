### Test

Run the development server:

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run export
```

The generated site will be built in the `out/` folder.

### Deploy

```bash
git add .
git commit -m "<description of changes>"
git push
git subtree push --prefix out origin gh-pages
```
