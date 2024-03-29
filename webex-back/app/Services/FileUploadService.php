<?php

namespace App\Services;

use Dotenv\Util\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class FileUploadService
{

    public static function upload(array|object $data, string $folder_path)
    {

        // $filename = md5(microtime()). '.' .$data->getClientOriginalExtension();
        $filename = $data->getClientOriginalName();
// dd( $data);
        $path = Storage::disk('local')->putFileAs(
          'public/' . $folder_path,
          $data,
          $filename
        );
// dd( $path );
        return $path;

    }

    public static function get_file(Request $request)
    {
        $path = $request['path'] ?? 'public/null_image.png';
        return response()->file(Storage::path($path));
    }
    public function videoUpload(Request $request ){
      if ($request->hasFile('video')) {
        $file = $request->file('video');
        dd($file);
        $fileName = time() . '.' . $file->getClientOriginalExtension();
        $file->storeAs('videos', $fileName, 'public');
      }
    }


}
