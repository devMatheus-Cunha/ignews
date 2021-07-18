<h1 align="center">

<img src="https://raw.githubusercontent.com/khalleb/ignews/main/public/images/avatar.svg" alt="rocketshoes" width="100px"/>

</h1>

<p align="center">
  IGNEWS - News portal 📰🚀
  <br>
  <br>

  <img alt="Language count" src="https://img.shields.io/github/repo-size/khalleb/ignews"/>

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>

  <a href="https://www.linkedin.com/in/khalleb/">
    <img alt="Made by Khalleb" src="https://img.shields.io/badge/made%20by-khalleb-%237519C1">
  </a>

  <a href="https://github.com/khalleb/ignews/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/khalleb/ignews">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/khalleb/ignews">
</p>

---

<p align="center">
  <a href="#rocket-technologies">About</a> &#xa0; | &#xa0; 
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requests">Requests</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; &#xa0; | &#xa0;
  <a href="#framed_picture-images">Images</a> &#xa0; &#xa0;
</p>

<br>

## :dart: About ##

The ig.news project is a blog where users can access the content of each post according to their subscription status.<br>
The blog has a purchase system integrated with STRIPE, and after the user makes the payment, their subscription will be active and ready to view the full content
of the entire blog. If the user does not wish to opt for the subscription, he will have limited access to the content of the posts. And all the data needed to make checks
of subscriptions or user data, are saved in the FaunaDB database.
<br>
<br>
This is a Serverless application, meaning that all the process that would depend on a backend was integrated within the frontend and following the JAMStack standard.
<br>
Posting is done from the Prismic CMS dashboard and integrated directly from the front end.


## :rocket: Technologies ##

The following technologies were used in the project:

- [Next.js](https://nextjs.org/)
- [Prismic CMS](https://prismic.io/)
- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)

## :white_check_mark: Requirements ##

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)

## :checkered_flag: Getting started ##

```bash
# Clone this project
$ git clone https://github.com/khalleb/ignews

## Access
$ cd ignews

# Install dependencies
$ npm install

# Run the project
$ npm dev

# The server will initialize in the <http://localhost:3000>
