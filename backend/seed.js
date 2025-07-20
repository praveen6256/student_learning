const mongoose = require('mongoose');
const Course = require('./models/Course');

mongoose.connect('mongodb://127.0.0.1:27017/studentlearning');

const sampleCourse = new Course({
  title: 'HTML',
  description: 'Learn the basics of HTML.',
  topics: ['Introduction', 'Tags', 'Forms', 'Tables', 'Media'],
  youtubeLinks: [
    'https://www.youtube.com/embed/pQN-pnXPaVg',
    'https://www.youtube.com/embed/UB1O30fR-EE',
    'https://www.youtube.com/embed/kUMe1FH4CHE',
    'https://www.youtube.com/embed/ok-plXXHlWw',
    'https://www.youtube.com/embed/PlxWf493en4'
  ],
  jobs: ['Web Designer', 'Frontend Developer']
});

sampleCourse.save().then(() => {
  console.log("Course inserted");
  mongoose.disconnect();
});
