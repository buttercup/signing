# Buttercup Signing Tools
> Signing and verification tools for Buttercup archives

[![Build Status](https://travis-ci.org/buttercup/signing.svg?branch=master)](https://travis-ci.org/buttercup/signing)

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

## Installation
Run `npm install --save` to get started.
