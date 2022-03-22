## How to use Boring Avatars service

*Forked from: [hihayk/boring-avatars-service](https://github.com/hihayk/boring-avatars-service)*

To generate a custom avatar *in development mode* just embed the following URL `http://localhost:3000/` and append a variant, size and a username to generate a custom avatar.

## For Arisanin Employee

For Arisanin employee, please refer to [this documentation](https://www.notion.so/arisanin/Avatars-653d90b1870940f9a3d75c14b66bf8d8) for the official company documentation.

### Variants
You can use one of the variants `marble`, `beam`, `pixel`, `sunset`, `ring` or `bauhaus`. 

```js
{{YOUR_BASE_URL}}/beam
```

![Avatar using marble variant](https://source.boringavatars.com/beam)

### Custom size

```js
{{YOUR_BASE_URL}}/marble/40

```

![Avatar of 120px](https://source.boringavatars.com/marble/40)


```js
{{YOUR_BASE_URL}}/marble/160

```

![Avatar of 120px](https://source.boringavatars.com/marble/120)


### Custom colors
You can pass an array of colors using the parameter `color` 

```js
{{YOUR_BASE_URL}}/marble/120/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51
```

![Avatar for Maria Mitchell](https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51)

### Square avatars
Use the parameter `square` to get square-shaped avatars. 

```js
{{YOUR_BASE_URL}}/marble/120/Maria%20Mitchell?square
```
![Square avatar for Maria Mitchell](https://source.boringavatars.com/marble/120/Maria%20Mitchell?square)


### Name

You can use a `username`, `email` or any random text to generate a unique `avatar`. 


```js
{{YOUR_BASE_URL}}/marble/120/Maria%20Mitchell
```

![Avatar for Maria Mitchell](https://source.boringavatars.com/marble/120/Maria%20Mitchell)


### Random avatar
If you just want to use random avatars without providing usernames, you can use the root endpoint. You will receive an `svg` image with a 80*80px size using the `marble` variant.

```js
{{YOUR_BASE_URL}}/
```

![Random avatar](https://source.boringavatars.com/)

