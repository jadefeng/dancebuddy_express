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

var entries = [{
      id: 0,
      lesson_id: 0,
      title: 'Intro and Ranks',
      note: 'About Intro and Ranks of ballet',
    }, {
      id: 1,
      lesson_id: 0;
      title: 'Corps',
      note: 'About the Corps de Ballet',
    }]

exports.getClassrooms = function() {
  console.log(classrooms);
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

exports.getClassroomLessons = function(classroom_id) {
  function matchLesson(classroom) {
    return lesson.classroom_id == classroom_id
  }
  var lesson = classrooms.filter(matchClassroom)[0];
  console.log(lesson);
  return lesson;
}

exports.getLessonEntry = function(lesson_id) {
  for(var i=0; i<lessons.length; i++) {
    if(lessons[i].id == id) {
      return lessons[i];
    }
  }  
}
