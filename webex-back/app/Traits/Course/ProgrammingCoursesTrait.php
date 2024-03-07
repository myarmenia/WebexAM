<?php

namespace App\Traits\Course;

use App\Models\CourseLanguage;

trait ProgrammingCoursesTrait
{
  public function getAllProgrammingCourses()
  {
    return CourseLanguage::all();
  }
}
