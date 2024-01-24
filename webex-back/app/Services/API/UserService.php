<?php
namespace App\Services\API;

use App\Services\FileUploadService;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Hash;

class UserService
{
    
    public function edit($data)
    {
        $user = JWTAuth::parseToken()->authenticate();
        $updateData = $data['data'];

        if (array_key_exists('avatar', $data)) {
            $path = FileUploadService::upload($data['avatar'], 'user/'.$user->id);
            $updateData['avatar'] = $path;
        }

        $user->update($updateData);

        return $user;
    }

    public function editPassword($data)
    {
        $hashedPassword = auth('api')->user()->password;

        if(Hash::check($data['old_password'], $hashedPassword)){
            auth('api')->user()->update([
                'password' => Hash::make($data['password'])
            ]);
            return true;
        }
        return false;

    }
}
