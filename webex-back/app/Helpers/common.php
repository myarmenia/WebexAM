<?php 

// function customUserResource($data)
// {
//     return [
//         'id' => $data->id,
//         'name' => $data->name,
//         'avatar' => $data->avatar,
//         'passport' => $data->passport,
//         'phone' => $data->phone,
//         'created_at' => $data->created_at,
//         'updated_at' => $data->updated_at,
//     ];
// }

function translateMessageApi($message, $lang=null)
{
    $lang = $lang ? $lang : session('languages', 'am');
    $translation = new Translation($lang);

    return $translation->get($message);
}