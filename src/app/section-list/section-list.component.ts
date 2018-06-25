import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import {CourseServiceClient} from "../services/course.service.client";

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private courseService: CourseServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']));
  }

  sectionName = '';
  seats = '';
  courseId = '';
  sections = [];

  loadSections(courseId) {
    this.courseId = courseId;
    this
      .service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  createSection(sectionName, seats) {
    this
      .service
      .createSection(this.courseId, sectionName, seats)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

  enroll(courseId, section) {
    alert(courseId);

    this.courseService
      .enrollStudentInCourse(courseId)
      .then(() => (
        this.service
          .enrollStudentInSection(section._id)
          .then(() => {
            this.router.navigate(['profile']);
          })));
  }
  remove(section) {
    this.service
      .deleteSection(section)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

  ngOnInit() {
  }

}
