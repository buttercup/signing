# Buttercup Signing Tools
> Signing and verification tools for Buttercup archives

[![Build Status](https://travis-ci.org/buttercup/signing.svg?branch=master)](https://travis-ci.org/buttercup/signing)

## :warning: Deprecated

This repository is deprecated since [Buttercup core](https://github.com/buttercup/buttercup-core) version 4, as it is now included in the core library. It is no longer required to include this library as its functionality can be found in the [`buttercup`](https://www.npmjs.com/package/buttercup) dependency.

## About
This library provides tools for archive and resource signing and validation. It is responsible for the authoritative definition of the format of the **encrypted** vault structure.

### Encrypted Vault Strings
Vault strings form the following structure:

`{{BUTTERCUP_SIGNATURE}}{{ENCRYPTED_STRING}}`

The **signature** is made up of two parts: the signature prefix and the format. They currently look like `b~>buttercup/a` where `b~>` is the signature prefix and `buttercup/a` is the format. These must prepend the encrypted contents.

The **encrypted string** is encrypted output from [`iocane`](https://github.com/perry-mitchell/iocane). It contains encrypted contents and values concatenated using the `$` character.

Due to the complex nature of the string, the following characters are reserved and may not be implemented in any other feature within the encrypted structure:

| Char(s)   | Use                           | Description                               |
|-----------|-------------------------------|-------------------------------------------|
| `~`       | Signature prefix              | Used in the signature prefix at the beginning of the encrypted string. |
| `>`       | Signature prefix              | Used in the signature prefix.             |
| `$`       | Encryption separator          | Used to separate encryption portions.     |
| `=`       | Base64 encryption component   | Used in encrypted payloads.               |
| `+`       | Base64 encryption component   | Used in encrypted payloads.               |
| `/`       | Base64 encryption component   | Used in encrypted payloads.               |
| `[a-zA-Z0-9]`| Payload data               | Used in data payloads (generic)           |

#### Example
An encrypted vault string may look like the following:

`b~>buttercup/aEXitErfO7Re0Hzi2egKAJLjxbC0GdoOY8y+OvUfsVFyc+Kbxr3a9gcWc8fTdlv6oflML9h3sFWYAphpeJSHzDv0MLJTGbZZ90a2CRdjjv8vRBsY/SF0lIKCqKenwZicWgNO9eyvAzvRV3JmLjY6x7JA7gO6Z8v+cwpfwWtx/nbRdLMvWUB2tY7XHpi7VEcDw+H53gyj0qPmkFN2wXMOdctTJINbfwJ7PFqJ5fpZewx55YwzZG1YQJj9wGB9DbI4ht9owIwiB8BQUIbZF0DNO0TSA/CXSPc4fYbaseE66b2Ec8C7rrm9y2vaai1WsouPGGLj7PF5SeLXFowbtU/3ZpCWIKQRYEym7Cg6hwXEmAz0urObsQgRo5kjrGe7QAnptreY+KjtCr/52Smv+Sy3JpENlYupvKvrdqNSyA0hCnJaIWaxW4MwJQkCws6qSDF6amz6Tvoy2VxggooZEWhXf7Nj/oHTYMrOWxo2kRYB3GwFBdtrv4lHvlZ2VmYkM48AmEh71s4wveI9EEJ8pjQtKi7LYx+OP4ie0y5HjflzMofi33Ohy0pXchPHFkREkFxml+f983GAzuWwbjE1mF+QiXP4h+HRApRV7VJFzATQ1CNydU4tF/dyJ53mvt3DeufpQ2EHRpy6X0wpV2WeqfbaNgohaYByyqPDW2HLpwtPsozrc7pifqa6oopFgevz+MaUx67DHwFUqXXrWZrQTnPj1jQ==$0b4a4be1e42e7bdbb48300caf54ffe1e$54a9f1d1988a$4f42ad72c76894c62d59814e7e6a28eb03c67a24dd9e80167dd02a0a77f33426$6007`

## Installation
Run `npm install --save` to get started.
