<?php

namespace App\Models\Project;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectPhoto extends Model
{
    use HasFactory;

    protected $table = 'project_photos';
    
    protected $fillable = [
        'project_id',
        'path',
        'name'
    ];


    
}
