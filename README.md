# fdenv

print dotenv environmetns with format

## Installation

`npm install -g fdenv`

## Usage

```
$ fdenv --help

  Usage: fdenv [options]

  Options:

    -h, --help               output usage information
    -V, --version            output the version number
    -p, --prefix <string>    
    -s, --suffix <string>    
    -j, --joins <string>     set string joins each environments. defaults to " "
    -f, --filepath <string>  set env path. defaults to .env
```

## Example

`docker run $(fdenv -p "-e ") helloworld`
