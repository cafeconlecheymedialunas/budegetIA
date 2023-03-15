<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['string', 'max:255'],
            'email' => ['email', 'max:255', Rule::unique('users')->ignore($this->user_id)],
            'role' => ['string', 'max:255'],
            'area' => ['string', 'max:255'],
            "seniority" => ['string', 'max:255'],
            "error_estimations" => ['string', 'max:255'],
            "phone" => ['string', 'max:255'],
            "address_street" => ['string', 'max:255'],
            "address_number" => ['string', 'max:255'],
            "address_city" => ['string', 'max:255'],
            'name' => ['string', 'max:255'],
            "address_state" => ['string', 'max:255'],
            "address_country"=> ['string', 'max:255'],
            "address_postcode" => ['string', 'max:255'],
        
        ];
    }
}
