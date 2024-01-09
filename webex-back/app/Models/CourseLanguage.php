<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseLanguage extends Model
{
    use HasFactory;
    protected $guarded=[];
    
    public function lessons(){
      return  $this->hasMany(Lesson::class);
    }
}
