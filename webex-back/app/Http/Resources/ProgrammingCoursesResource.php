<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProgrammingCoursesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
          'name' => $this->name,
          'description' => getCourseLanguagesDescription($this->translation),
          'lessons' => AllLessonsWithTasksNamesResource::collection($this->lessons),
        ];
    }
}
