View me live [here](https://nsars19.github.io/shrinkifier-ui/).

This is a user interface for an application that compresses image files. It was built because I kept hitting the filesize limit when compressing images on TinyPNG & TinyJPEG, and because I had large batches of photos to compress, and did not want to do so manually. Who would?

There are two implementations of this application that both exist within this repository. The main branch contains the original app (v1.0), which communicates with the Express app mentioned below. The client-side-implementation branch contains the updated app (v2.0), which handles all image processing client-side. The live site uses v2.0 of the application.

To run this application locally:
1) Clone this repository <code>git clone git@github.com:nsars19/shrinkifier-ui.git</code>
2) Select which version of the applocation you wish to use.
  <br />a. <code>main</code> branch contains v1.0
  <br />b. <code>git checkout client-side-implementation</code> to use v2.0
3) Start the development server <code>npm start</code>
4) Have fun!


The UI sends the images to an Express app that handles the processing. The Express app was initially a node app I built to process large batches of images used in my other projects. The initial project that this was based upon can be found [here](https://github.com/nsars19/image-compressor), and the Express app can be found [here](https://github.com/nsars19/shrinkifier-api).

Further features that could be added to this app include:

1. A loading bar/indicator to display progress for each file. Similar to how tinyjpeg/tinypng indicates progress.
2. The option to download a single file at a time instead of the whole zip file. Again similar to tinyjpeg/tinypng.
