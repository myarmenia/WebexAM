<?php
namespace App\Repositories\Course;

use App\Interfaces\Course\LanguageInterface;
use App\Models\CourseLanguage;

class LanguageRepository implements LanguageInterface
{
  public function getAll(){
    dd(111);
    return CourseLanguage::all();
  }
}