# Life-pictures

Turborepo의 `with-react-native-web`템플릿을 사용한 사진 관리 서비스 프로젝트

### Apps and Packages

This Turborepo includes the following packages/apps:

- `backend`: a [express](https://expressjs.com/) app with [prisma](https://prisma.io/)
- `native`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/)
- `web`: a [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `@repo/ui`: a stub [react-native](https://reactnative.dev/) component library shared by both `web` and `native` applications
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/shared`: shared hooks

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### additional libraries

- [`@emotion`](https://emotion.sh/)
- [`@tanstack/react-query`](https://tanstack.com/query/v5/docs/framework/react/overview)
- [`dotenv`](https://github.com/motdotla/dotenv#readme)
- [`zustand`](https://zustand-demo.pmnd.rs/): global state management for mobile and web

### Utilities

This Turborepo has some additional tools already setup for you:

- [Expo](https://docs.expo.dev/) for native development
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Prettier](https://prettier.io) for code formatting
