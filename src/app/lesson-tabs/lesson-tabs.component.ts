import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LessonServiceClient} from "../services/lesson.service.client";
import {Lesson} from "../models/lesson.model.client";
import {Module} from "../models/module.model.client";

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: LessonServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  courseId;
  moduleId;
  module: Module = new Module();
  lessonId;
  lessons: Lesson[] = [];

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.loadLessons(this.courseId, this.moduleId);
  }

  loadLessons(courseId, moduleId) {
    this.moduleId = moduleId;
    console.log(moduleId);
    this.service.findLessonsForModule(courseId, moduleId)
      .then(lessons => this.lessons = lessons);
  }

  ngOnInit() {
  }

}
