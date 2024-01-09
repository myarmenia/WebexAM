<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SingupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        dd(333);
        return [        
            'name' => 'required',
            'email' => 'required|unique:users|max:255',
            'password' => 'required',
            'password_confirmation' => 'same:password',
            'phone' => 'required',
        ];
    }
}
