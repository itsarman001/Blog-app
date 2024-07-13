# React Blog App - Walkthrough

### What are we gonna use and learn about in this project.

1. appwrite as a backend
2. tinymce for writing form
3. react-hook-forms for easy planing
4. hiding envs in react

### ENV

- ENV stands for **enviromental veriables** <br>
- The .env file is used in projects to store configuration settings, environment variables, and sensitive information securely
- env value always shoyld be a string
- env files only run one time when server is started so when ever there is a change in a env file we shold always restart the server

### Methods to create and access .env files

> Note: there are different methods to use .env files in react depend on what provider you use

in create-react-app we need to add a prefix "REACT_APP" and to access it

```
process.env.REACT_APP_APPWRITE_URL
```

in vite we need to add a prefix "VITE" to create and to access it

```
import.meta.env.VITE_APPWRITE_URL
```

## Chalenges

### Vendor Lock-In

Vendor lock-in is when someone is essentially forced to continue using a product or service regardless of quality, because switching away from that product or service is not practical.<br>
To avoid **Vendor Lock-In** this we create a _**class of services**_

### Constructor & Class

### Redux Setup
setup redux

## Components

### Container:
- a components where which will accepts some children and used for styling
