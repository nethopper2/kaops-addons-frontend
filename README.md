# Creating Page for New Addons
Follow these steps to create a page for a new Addon
- Create a new subdirectory `docs/assets/[addon-name]` for Addon images
  - logo
  - hero image
  - feature images
- Create new markdown file `docs/[addon-name]`
  - duplicate the markdown file from an exisitng addon 
  - change all text and image references

## Installing VitePress
These are the steps I took to install VitePress and integrating Tailwind support. Here for historicaly purposes.

- create new directory
- follow general instructions here: https://vitepress.dev/guide/getting-started
  - `yarn add -D vitepress vue`
  - `yarn vitepress init`
- answer basic questions:
  - be sure to initialize the config in the ./docs directory
```bash
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Site title:
│  [new addon name]
│
◇  Site description:
│  [addon description]
│
◆  Theme:
│  ● Default Theme (Out of the box, good-looking docs)
│  ○ Default Theme + Customization
│  ○ Custom Theme
└
```

## Installing Tailwind
- follow general instructions here: https://tailwindcss.com/docs/installation/using-postcss
- `yarn add -D tailwindcss @tailwindcss/postcss postcss`
- Add Tailwind to your PostCSS configuration
  - create new file at root: `postcss.config.mjs`
  - insert the following text
  ``` mjs
  export default {
    plugins: {
      "@tailwindcss/postcss": {},
    }
  }
  ```

## Other Scaffolding
- create assets directory: `/docs/assets/`
- provide hero image: `/docs/hero.png`

## Repository
`kaops-addons-frontend`

## subdomain
`addons.kaops.net`