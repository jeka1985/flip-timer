# react-flip-counter

> React countdown timer,  like an 80-s flip clocks
May be useful for stuff like promos, sales, launch landings and so on.

## Install
```
npm i --save react-flip-counter
```

## Webpack configuation

As react-flip-counter contains JSX syntax and has CSS resources,
it must be parsed with babel and CSS loader.

You may have a list of such UI modules, so it might be useful
create array with such types of modules names and use it as
loader includes with main src folder

```
var uiModules = ['react-flip-counter'],
    includes = uiModules.reduce((res, name) => {
      res.push(path.resolve(root, 'node_modules/' + name));

      return res;
    }, [path.resolve(root, 'src/')]);
```

Then you need to update loaders configuration
and use include instead exclude property

```
rules: [
  {
    test: /\.js$/,
    include: includes,
    use: {
      loader: 'babel',
      ...
    }
  },
  {
    test: /\.css$/,
    include: includes,
    use: {
      loader: 'css',
      ...
    }
  }
  ...
]
```

## Usage
```
  <Counter
    onStop={() => alert('stopped')}
    stop={new Date('Wed Nov 15 2017 15:57:38 GMT+0300 (MSK)')}/>
```    

## Props
* `onStop`
Function to be called on time over

* `stop`
Time when counter shod stop and show all zeros. expect Date
