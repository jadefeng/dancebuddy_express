var classrooms = [{
    id: 0,
    name: 'Ballet Class 1',
    secret: 'teapot',
  }, {
    id: 1,
    name: 'Ballet Class 2',
    secret: 'teapot',
  }, {
    id: 2,
    name: 'Ballet Class 3',
    secret: 'teapot',
  }, {
    id: 3,
    name: 'Ballet Class 4',
    secret: 'teapot',
  }, {
    id: 4,
    name: 'Ballet Class 5',
    secret: 'teapot',
  }];

var lessons = [ {
    id: 0, 
    classroom_id: 0,
    name: 'Intro Lesson',
  }, {
    id: 1, 
    classroom_id: 0,
    name: 'Second Lesson',
  }];

var videos = [{
      id: 0,
      lesson_id: 0,
      title: 'Intro and Ranks',
      note: 'About Intro and Ranks of ballet',
    }, {
      id: 1,
      lesson_id: 0,
      title: 'Corps',
      note: 'About the Corps de Ballet',
  }]

exports.getClassrooms = function() {
	return classrooms;
}

exports.getClassroomEntry = function(id) {
	for(var i=0; i<classrooms.length; i++) {
		if(classrooms[i].id == id) {
      return classrooms[i];
    }
	}
}

exports.addClassroomEntry = function(name, secret) {
  classrooms.push({
    "id": classrooms[classrooms.length - 1].id + 1,
    "name": name,
    "secret": secret
  });
};

exports.getLessons = function() {
  return lessons;
};

exports.getClassroomLessons = function(class_id) {
  function matchLesson(lesson) {
    return lesson.classroom_id == class_id
  }
  return lessons.filter(matchLesson);
}

exports.getLessonEntry = function(lesson_id) {
  for(var i=0; i<lessons.length; i++) {
    if(lessons[i].id == lesson_id) {
      return lessons[i];
    }
  }  
}

exports.getVideos = function() {
  return videos;
}

exports.getLessonVideos = function(lesson_id) {
  console.log("going to find videos")
  function matchVideo(video) {
    return video.lesson_id == lesson_id;
  };
  return videos.filter(matchVideo);
}
