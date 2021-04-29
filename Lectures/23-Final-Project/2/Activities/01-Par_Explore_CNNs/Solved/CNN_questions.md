### CNN Questions

1. What is a Convolutional Neural Network (CNN)?

* A CNN is a type of deep learning neural network that is very effective at computer vision.

2. What is a CNN typically used for?

* Examples of CNN applications include image recognition and classification.

3. What is the difference between a CNN and Deep Neural Network?

* A deep learning network can be used to classify images as seen in the MNIST activity.  However, the network created by a deep learning model recognizes global patterns in the pixels.  For example, the matrix created in that application used each pixel as a feature but gave no consideration to the relationship between those pixels.  In a CNN, spatial features are also considered by using filters.  This allows features to be constructed from patterns in the image no matter where they occur in the image.  In the example seen earlier, the MNIST model might not have been effective if the image contained a number that was severely off-center or much smaller in relationship to the canvas than the images it was trained on.

* A CNN preserves the relationship between pixels by learning image features using small squares or filters of input data.  Each filter is responsible for identifying a different spatial feature like edge, color, or texture.  Imagine trying to detect a tiger in an image. One filter might highlight everything that is orange and another everything with stripes.
