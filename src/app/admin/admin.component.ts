import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from "../services/course.service.client";
import {Course} from "../models/course.model.client";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: CourseServiceClient) {
    this.loadCourses();
  }
  newCourse;

  courses: Course[] = [];

  loadCourses() {
    this.service
      .findAllCourses()
      .then(courses => this.courses = courses);
  }

  add() {
    const courseName = { title: this.newCourse };
    this.service
      .createCourse(courseName)
      .then(() => { this.loadCourses(); });
    this.newCourse = '';
  }

  // TODO
  update() {

  }

  delete(courseId) {
    console.log("delete course" + courseId);
    this.service
      .deleteCourse(courseId)
      .then(() => { this.loadCourses(); });
  }

  ngOnInit() {

  }

}
