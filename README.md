This is a [Next.js](https://nextjs.org/) project configured to pull data from a Sanity.io dataset, and publish to a Cloudflare Pages project.

# Project Dependencies & `package.json` scripts

## Project creation

The project was created using the `create-next-app` tool.  On install, the following options were selected:

- NO: Typescript
- YES: TailwindCSS
- YES: eslint

## Additional Dependencies in `package.json`

In addition, the following packages have been added to help with Sanity and Cloudflare:

- [@heroicons/react](https://github.com/tailwindlabs/heroicons#readme) - library of SVGs created by the Tailwind folks
- [@portabletext/react](https://github.com/portabletext/react-portabletext#readme) - converts a portable text object into formatted content with a react component
- [@sanity/client](https://github.com/sanity-io/client) - connects to a sanity project and dataset, and provides GROQ tools for grabbing data from Sanity
- [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography#readme) - formats a block of HTML (in this case, portable text) to prevent parsing portable text block by block
- [@cloudflare/next-on-pages](https://www.npmjs.com/package/@cloudflare/next-on-pages) - tools that cloudlare uses to build a static site for Pages, but also can be used with `wrangler` to set up a local dev environment to confirm the site builds on Cloudflare without having to deploy to Cloudflare.

## Additional Scripts in `package.json`

The `create-next-app` adds four scripts to `package.json`:

- `dev` runs a vite-based server with reload, allowing developers to watch progress made on an app in real-time.
- `build` creates output that can be used on a static host. This project will not use this step
- `start` will run a "production" server, which is also not used by this project
- `lint` runs eslint over the project to be sure style and quality rules are followed

## Cloudflare Scripts in `package.json`

Cloudflare runs a Vercel-based build script, which is dependent on the NextJS build script. Thus, the original `create-next-app` scripts should be left in place (and `dev` is useful) as the Cloudflare or Vercel scripts may call one or more of them in the future.

Cloudflare uses `@cloudclare/next-on-pages` to generate the site, and that script then calls Vercel (and Next) build steps. To make it easier for developers to check the Cloudflare-build steps, the following scripts help simplify things:

- `cfbuild` - calls the same commands used by Cloudflare to create a static build of the site.
- `cfdev` - runs a local version of Pages, using Cloudflare's `wrangler` tool. this lets a developer see how the site will look once built.
- `cfpreview` - a convenience script that calls `cfbuild` then `cfdev` so that a developer can quickly build and view changes to a project

## Setting up as a developer, using this project

1. Hopefully obvious: clone this project
2. run `npm install` in your project directory so the project is ready to go
3. WAIT!  You need to have the latest version of `wrangler` installed.
    - Check if `wrangler` is already installed with `npm ls -g`.
    - If wrangler is installed but is less than version 3.0.1, uninstall that version as it will *not* work with the latest Cloudflare tools.
    - If wrangler is NOT installed, `npm i wrangler@latest -g` will install
4. To access Sanity, you need to set up your environment variables
    - `SANITY_STUDIO_EXAMPLE_PROJECT_ID` set to the project **ID** for the Sanity.io project that hosts your datasets
    - `SANITY_STUDIO_EXAMPLE_DATASET` set to the dataset that will be used for this example.  *IMPORTANT* - this project assumes it will be connecting to the example dataset created in [this example project](https://github.com/mbakaitis/san-next-flare-cms). Obviously, you can make changes later but some of the GROQ queries that are used are coupled to the schema in that peer-project.
    - `SANITY_STUDIO_EXAMPLE_TOKEN` will be needed to access a dataset that's not public.  We will assume your dataset is not public.  In this case, you will need to follow the instructions to generate a token in the API section of your project.  In there, you will pick the same dataset (as above) and then generate a token.  Don't lose it or you'll have to regenerate it.
    - You can edit the environment variable names **but** if you are building this on the same system that will also be used to manage the Sanity Studio in the peer project, the Sanity Studio project will fail if it environment variables don't have the prefix `SANITY_STUDIO_`.  If it's easier to use the same environment variables for both projects, then maintain that prefix.
5. Once installs and environment variables are done:
    - Test the basic setup with `npm run dev` and open `https://localhost:3000` to view the root page for the site.  The root page will show an indicator that the sanity connection is working at the bottom.
    - Test the Cloudflare dev environment with `npm run cfpreview`.  Most often, things will fail during the Vercel build so watch the console for messages and info about what failed.  If the build works, focus on the terminal and hit `b` to launch a browser and view the home page (or open `https://localhost:3333`).
  
If both tests work, the dev environment is ready to go.

## Change to the default `next.config.js`

One change was made to allow Vercel/Cloudflare builds to run.  In the `next.config.js` file, a webpack config section was added to allow `topLevelAwait`.  It is possible that this will be part of the core webpack build at some point.  Thus, while this is needed today, if this project is used to start a new site, this config may need to be changed or removed at some point.  If it is added to the core webpack setup, future versions of this example project will be updated accordingly.