# Welcome to your GPT Engineer project

## Project info

**Project**: d2-weapon-wizard 

**URL**: https://run.gptengineer.app/projects/REPLACE_WITH_PROJECT_ID/improve

**Description**: 
I want a web application that will read the following DB: # Database connection parameters DB_PARAMS = {     "dbname": "DIMAnalyzer",     "user": "postgres",     "password": "Aiden$41",     "host": "localhost",     "port": "5432" } and provide a beautiful view of working with destiny 2 weapons in a variety of ways.  The user will be able to view all weapons and other details related to these weapons using the data from table alld2weapons which has following fields: hash, name, rarity, weapon_type, ammo_type, damage_type, is_craftable, intrinsic, scopes, magazines, traits_left, traits_right, mods, masterwork, catalyst, screenshot, impact, range, stability, handling, reload, mag, rof, recoil, aa, airborne_effectiveness, zoom, blast_radius, velocity, charge_time, shield_duration, guard_efficiency, guard_resistance, charge_rate, guard_endurance, accuracy, draw_time, swing_speed.  We should provide as many nice ways to filter, sort and work with these weapons as possible. 

## Who is the owner of this repository?
By default, GPT Engineer projects are created with public GitHub repositories.

However, you can easily transfer the repository to your own GitHub account by navigating to your [GPT Engineer project](https://run.gptengineer.app/projects/REPLACE_WITH_PROJECT_ID/improve) and selecting Settings -> GitHub. 

## How can I edit this code?
There are several ways of editing your application.

**Use GPT Engineer**

Simply visit the GPT Engineer project at [GPT Engineer](https://run.gptengineer.app/projects/REPLACE_WITH_PROJECT_ID/improve) and start prompting.

Changes made via gptengineer.app will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in the GPT Engineer UI.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps: 

```sh
git clone https://github.com/GPT-Engineer-App/d2-weapon-wizard.git
cd d2-weapon-wizard
npm i

# This will run a dev server with auto reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

All GPT Engineer projects can be deployed directly via the GPT Engineer app. 

Simply visit your project at [GPT Engineer](https://run.gptengineer.app/projects/REPLACE_WITH_PROJECT_ID/improve) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain, then we recommend GitHub Pages.

To use GitHub Pages you will need to follow these steps: 
- Deploy your project using GitHub Pages - instructions [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)
- Configure a custom domain for your GitHub Pages site - instructions [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)