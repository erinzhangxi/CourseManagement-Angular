export class CourseServiceClient {

  COURSE_URL = 'http://localhost:8080/api/course';

  findAllCourses() {
    return fetch(this.COURSE_URL)
      .then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId)
      .then(response => response.json());
  }
  createCourse(course) {
    return fetch(this.COURSE_URL, {
      method: 'post',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  deleteCourse(courseId) {
    return fetch(this.COURSE_URL + "/" + courseId, {
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
