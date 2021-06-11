View me live [here](https://nsars19.github.io/shrinkifier-ui/).

This is a user interface for an application that compresses image files. It was built because I kept hitting the filesize limit when compressing images on TinyPNG & TinyJPEG, and because I had large batches of photos to compress, and did not want to do so manually. Who would?

The UI sends the images to an Express app that handles the processing. The Express app was initially a node app I built to process large batches of images used in my other projects. The initial project that this was based upon can be found [here](https://github.com/nsars19/image-compressor), and the Express app can be found [here](https://github.com/nsars19/shrinkifier-api).

Further features that could be added to this app include: 
1) A loading bar/indicator to display progress for each file. Similar to how tinyjpeg/tinypng indicates progress.
2) The option to download a single file at a time instead of the whole zip file. Again similar to tinyjpeg/tinypng.
3) The ability to remove individual files from those that have already been added. This is likely to be added in the next version.
4) Utilize Promises (specifically Promise.all) to send each image file to the api individually to minimize the the processing time.
