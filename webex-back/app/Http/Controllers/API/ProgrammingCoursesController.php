<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProgrammingCoursesResource;
use App\Traits\Course\ProgrammingCoursesTrait;
use Illuminate\Http\Request;

class ProgrammingCoursesController extends BaseController
{
  use ProgrammingCoursesTrait;
  public function __invoke()
  {

    $programming_courses = $this->getAllProgrammingCourses();

    return $this->sendResponse(ProgrammingCoursesResource::collection($programming_courses), 'success');
  }
}
