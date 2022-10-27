# Fancy console logger

A decorator for `console.log()` that adds extra functionalities:
- Adding a payload
- Text in color 
- Output the filename where the log is located

*This package was created for fun and study purposes, feel free to use it and give constructive criticism :)*

## Quick start

First, run `npm install fancy-console-logger`.
Then you can import the logger into your app as:

```js
import { fconsole } from 'fancy-console-logger';

fconsole.log('Some text');
```

The logger makes uses of the [decorator pattern](https://refactoring.guru/design-patterns/decorator) to add the extra funtionalities

### Usages
#### Log message
```js
fconsole.log('Some text');
```

#### Log message with payload
This will allow you to log a payload as an object for extra information
```js
fconsole.log('Some text', { another: 'text', anotherMore: 'text' });
```

#### Log message with color
This will allow you to log your data with any given color
```js
import { fconsole, TextColors } from 'fancy-console-logger';

fconsole.log('This text should be green', {}, TextColors.Green);
```

#### Log message with the name of the file where is located
If you want to know where the log was added, for debugging you can also pass a flag 
```js
fconsole.log('This will also ouput the name of the file', {}, null, true);
```

#### Use them all
Needless to say, you can combine all the previous options whichever way is more convenient for you
```js
import { fconsole, TextColors } from 'fancy-console-logger';

fconsole.log('This should show green, the payload and the filename', { test: 'test' }, TextColors.Green, true);
```