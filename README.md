This repository serves as start point when creating a new React project.

## Packages 

The initial config includes:

- [Material-UI](https://material-ui.com/)
- [React-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) with [connected-react-router](https://github.com/supasate/connected-react-router)
- [Notistack](https://github.com/iamhosseindhv/notistack)
- [React-redux](https://github.com/reduxjs/react-redux) with [redux-persist](https://github.com/rt2zz/redux-persist), [redux-devtools](https://github.com/zalmoxisus/redux-devtools-extension) and [redux-thunk](https://github.com/reduxjs/redux-thunk)

## How to use

Clone this repository

```git
git clone https://github.com/JohnBidwellB/react-proyect.git NameOfYourProject
```

Enter to folder

```
cd NameOfYourProject
```

Remove remote 

```
git remote rm origin
```

Add new remote

```
git remote add origin LinkOfYourRepository
```

Update `package.json` with the name of your project:

```json
{
  "name": "Name of your project",
  ...
}
```

Install packages:

```
yarn install
```

Start

```
yarn start
```

