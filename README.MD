![Covid19 Italy](https://github.com/marinimau/covid19_dashboard/blob/master/repository-open-graph-template.png)



A cross-platform (Web, Android, iOS) dashboard to represent the trend of the Covid-19 vax distribution and administration in Italy.

## PWA URL

[https://marinimau.github.io/covid19_dashboard_vaccini/](https://marinimau.github.io/covid19_dashboard_vaccini/)

## Features

* Show trend (with different intervals)
* Full data representation for each region
* Show notes of the last 24h
* Dark-mode based on system theme
* Full responsive
* iOS and Android apps rendered with native optimizations

## Issues

* Transparent text in select region picker when runned on web from iOS - it depends from library, we have found the solution but it requires to edit the library code after "npm install" - edit: library is updated on GitHub but not on npm, please install it from the first one
* Sometimes the line chart background is black on Safari or there isn't line shadow on Firefox

## Instructions

#### 1. Install Expo globally

```npm install -g expo-cli```

if the command above generates errors try with sudo. 

After installing it's common to see:

```zsh: command not found: expo``` 

when you try to run expo-cli.

To avoid this problem just launch this command:

```export PATH=$PATH:~/.npm-global/bin```


#### 2. Launch expo-cli

Simply go to the project path and write:

```npm install```

and after

```expo start```

The Metro Bundler web page should appear in seconds.


#### 3. Launch the web app

Simply click on **'run in web browser'** from the Metro Boundler web page.


#### 3. Try the mobile app (without building the standalone)

If you have the iOS simulator installed, just click on **'run on iOS simulator'**, otherwise:

 1. download Expo on your mobile
    phone (from App Store or Play Store);
    
 2. connect the phone to the same network of the computer where you launched the Expo;
 
 3. Scan the QR code (using the Expo app integrated scanner on Android; for iOS use the system integrated scanner). 


## Technologies

* [React-Native](https://reactnative.dev)
* [D3.js](http://d3js.org)
* [Expo](https://expo.io)


## Data

Source:

```https://github.com/italia/covid19-opendata-vaccini/```

realtime updated.


## Authors

 * [Mauro Marini](https://github.com/marinimau)
