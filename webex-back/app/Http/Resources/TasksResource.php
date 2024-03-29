<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TasksResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        return [
          'id' => $this->id,
          'lesson_id' => $this->lesson_id,
          'duration' => $this->duration,
          'video' => route('get-file', ['path' => $this->video ]),
          'description'=>$this->translation(session('languages'))->description,
        ];
    }
}
