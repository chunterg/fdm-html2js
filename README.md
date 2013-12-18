# fdm-html2js

> Convert html to javascript string

##配置说明

```js
grunt.initConfig({
  html2js: {
    options: {
      encoding:"utf8", //文件编码，默认为utf8
      compress:true   //是否压缩输出
    },
    files: {
      'dest/': 'src/**/*.html',
    },
  },
})
```

```html
输出的变量名，默认为源文件名，不支持中文
<!--varname:aftervar-->

输出的文件名，默认为源文件名，不支持中文
<!--filename:after-->

html code...
```


## Getting Started
This plugin requires Grunt ``

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install fdm-html2js --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('fdm-html2js');
```

## The "fdm-html2js" task

### Overview
In your project's Gruntfile, add a section named `fdm-html2js` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  html2js: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### encoding
Type: `String`
Default value: 'utf8'

#### compress
Type: `Boolean`
Default value: true


### Usage Examples

#### Default Options


```js
grunt.initConfig({
  html2js: {
    options: {
      encoding:"gbk"
    },
    files: {
      'dest/': 'src/**/*.html',
    },
  },
})
```
