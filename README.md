This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Errors encountered:
- Uncaught Error: (0 , react__WEBPACK_IMPORTED_MODULE_0__.createContext) is not a function at eval (webpack-internal:///(rsc)/./node_modules/swiper/swiper-react.mjs:122:94) at (rsc)/./node_modules/swiper/swiper-react.mjs (file://C:\Users\Danskids\Desktop\ALL MY PROJECTS\KEVSSTORE\hyperlace\.next\server\vendor-chunks\swiper.js:400:1) at __webpack_require__ (file://C:\Users\Danskids\Desktop\ALL MY PROJECTS\KEVSSTORE\hyperlace\.next\server\webpack-runtime.js:33:42) at eval (webpack-internal:///(rsc)/./src/components/carousel.tsx:9:70) at (rsc)/./src/components/carousel.tsx (file://C:\Users\Danskids\Desktop\ALL MY PROJECTS\KEVSSTORE\hyperlace\.next\server\app\page.js:206:1) at __webpack_require__ (file://C:\Users\Danskids\Desktop\ALL MY PROJECTS\KEVSSTORE\hyperlace\.next\server\webpack-runtime.js:33:42) at eval (webpack-internal:///(rsc)/./src/app/page.tsx:7:78) at (rsc)/./src/app/page.tsx (file://C:\Users\Danskids\Desktop\ALL MY PROJECTS\KEVSSTORE\hyperlace\.next\server\app\page.js:195:1) at Function.__webpack_require__ (file://C:\Users\Danskids\Desktop\ALL MY PROJECTS\KEVSSTORE\hyperlace\.next\server\webpack-runtime.js:33:42) at async eq (file://C:\Users\Danskids\Desktop\ALL MY PROJECTS\KEVSSTORE\hyperlace\node_modules\next\dist\compiled\next-server\app-page.runtime.dev.js:35:402260) at async tr (file://C:\Users\Danskids\Desktop\ALL MY PROJECTS\KEVSSTORE\hyperlace\node_modules\next\dist\compiled\next-server\app-page.runtime.dev.js:35:405987) at async tn (file://C:\Users\Danskids\Desktop\ALL MY PROJECTS\KEVSSTORE\hyperlace\node_modules\next\dist\compiled\next-server\app-page.runtime.dev.js:35:406537) at async tn (file://C:\Users\Danskids\Desktop\ALL MY PROJECTS\KEVSSTORE\hyperlace\node_modules\next\dist\compiled\next-server\app-page.runtime.dev.js:35:406668) at async tu (file://C:\Users\Danskids\Desktop\ALL MY PROJECTS\KEVSSTORE\hyperlace\node_modules\next\dist\compiled\next-server\app-page.runtime.dev.js:36:2057) at async (file://C:\Users\Danskids\Desktop\ALL MY PROJECTS\KEVSSTORE\hyperlace\node_modules\next\dist\compiled\next-server\app-page.runtime.dev.js:36:2564)
SOLUTION:
https://stackoverflow.com/questions/54302725/react-createcontext-is-not-a-function-but-i-am-not-using-it
