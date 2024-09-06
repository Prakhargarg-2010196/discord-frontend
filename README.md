# Chat App Frontend

## MVP

1. Ability to send and recieve messages
2. Ability to see the messages sent and recieved
3. Able to login/signup for storing the user information
4. Able to see the presence on the frontend (online presence)

## Components required (as of now add more later)

-   Input elements for sending text
-   Buttons for attaching files and sending the message.
-   Sidebar where all the main navigation points will go.

## Step by Step what I did

-   Cleaned up the project by removing the unnecessary template code in app directory
-   Setup prettier for ease of formatting & [setup scripts in next js to format the code](https://gist.github.com/SatishB15/f4ed782130a7d6eb8064528025eec8c1)

```json
{
    "scripts": {
        "format-all": "prettier --write .", // for overwriting the files after formatting them
        "format-check": "prettier --check ." // for checking if all the files are formatted or not
    }
}
```

[How to use formatting on a single file](https://stackoverflow.com/a/29973358/15645824)

-   Learnt about editorconfig but not using it in this project
-   The `@layer` CSS at-rule is used to declare a cascade layer and can also be used to define the order of precedence in case of multiple cascade layers.

```css
@layer utilities {
    .text-balance {
        /* Keeps the text balanced i.e wraps it according to the browser calculations
            Advantage: Good for UX
        */
        text-wrap: balance;
    }
}
```

- Activate the extension from typescript in nextjs and learn about the Readonly option in typescript
- [To center a div using tailwind](https://daily-dev-tips.com/posts/center-elements-with-tailwind-css/) 

## Tech Stack
Nextjs : For Frontend
ShadCnUI : For Base Components
Tailwind : For CSS
Zod : For validation Schema
Redux : For Global State management