# Blog

## Setup
### Sanity
cd blog
sanity start
runs on localhost:3333
### Nextjs
npm run build
npm run dev
runs on localhost:3000

\

## Folder structure

## Component structure
- Every page contains
    - navbar (left)
    - main (middle)
    - sidebar (right)
- The sidebar is outsourced into own component, because it doesn't vary much between pages
    - Homepage (index.tsx) and bookmark page (bookmarked.tsx) share the same sidebar

\
\
\
### Next.js + Tailwind CSS Example
This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).
