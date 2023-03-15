<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreClientRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required','string', 'max:50'],
            'description' => ['required','string', 'max:255'],
            'industry' => ['required', Rule::in([
                'Accommodation (NAICS 721)',
                'Accommodation and Food Services (NAICS 72)',
                'Administrative and Support Services (NAICS 561)',
                'Administrative and Support and Waste Management and Remediation Services (NAICS 56)',
                'Agriculture, Forestry, Fishing and Hunting (NAICS 11)',
                'Air Transportation (NAICS 481)',
                'Ambulatory Health Care Services (NAICS 621)',
                'Amusement, Gambling, and Recreation Industries (NAICS 713)',
                'Animal Production (NAICS 112)',
                'Apparel Manufacturing (NAICS 315)',
                'Arts, Entertainment, and Recreation (NAICS 71)',
                'Beverage and Tobacco Product Manufacturing (NAICS 312)',
                'Broadcasting (except Internet) (NAICS 515)',
                'Building Material and Garden Equipment and Supplies Dealers (NAICS 444)',
                'Chemical Manufacturing (NAICS 325)',
                'Clothing and Clothing Accessories Stores (NAICS 448)',
                'Computer and Electronic Product Manufacturing (NAICS 334)',
                'Construction (NAICS 23)',
                'Construction of Buildings (NAICS 236)',
                'Couriers and Messengers (NAICS 492)',
                'Credit Intermediation and Related Activities (NAICS 522)',
                'Crop Production (NAICS 111)',
                'Data Processing, Hosting, and Related Services (NAICS 518)',
                'Education and Health Services',
                'Educational Services (NAICS 61)',
                'Electrical Equipment, Appliance, and Component Manufacturing (NAICS 335)',
                'Electronics and Appliance Stores (NAICS 443)',
                'Fabricated Metal Product Manufacturing (NAICS 332)',
                'Finance and Insurance (NAICS 52)',
                'Financial Activities',
                'Fishing, Hunting and Trapping (NAICS 114)',
                'Food Manufacturing (NAICS 311)',
                'Food Services and Drinking Places (NAICS 722)',
                'Food and Beverage Stores (NAICS 445)',
                'Forestry and Logging (NAICS 113)',
                'Funds, Trusts, and Other Financial Vehicles (NAICS 525)',
                'Furniture and Home Furnishings Stores (NAICS 442)',
                'Furniture and Related Product Manufacturing (NAICS 337)',
                'Gasoline Stations (NAICS 447)',
                'General Merchandise Stores (NAICS 452)',
                'Goods-Producing Industries',
                'Health Care and Social Assistance (NAICS 62)',
                'Health and Personal Care Stores (NAICS 446)',
                'Heavy and Civil Engineering Construction (NAICS 237)',
                'Hospitals (NAICS 622)',
                'Information (NAICS 51)',
                'Insurance Carriers and Related Activities (NAICS 524)',
                'Internet Publishing and Broadcasting (NAICS 516)',
                'Leather and Allied Product Manufacturing (NAICS 316)',
                'Leisure and Hospitality',
                'Lessors of Nonfinancial Intangible Assets (except Copyrighted Works) (NAICS 533)',
                'Machinery Manufacturing (NAICS 333)',
                'Management of Companies and Enterprises (NAICS 55)',
                'Manufacturing (NAICS 31-33)',
                'Merchant Wholesalers, Durable Goods (NAICS 423)',
                'Merchant Wholesalers, Nondurable Goods (NAICS 424)',
                'Mining (except Oil and Gas) (NAICS 212)',
                'Mining, Quarrying, and Oil and Gas Extraction (NAICS 21)',
                'Miscellaneous Manufacturing (NAICS 339)',
                'Miscellaneous Store Retailers (NAICS 453)',
                'Monetary Authorities - Central Bank (NAICS 521)',
                'Motion Picture and Sound Recording Industries (NAICS 512)',
                'Motor Vehicle and Parts Dealers (NAICS 441)',
                'Museums, Historical Sites, and Similar Institutions (NAICS 712)',
                'Natural Resources and Mining',
                'Nonmetallic Mineral Product Manufacturing (NAICS 327)',
                'Nonstore Retailers (NAICS 454)',
                'Nursing and Residential Care Facilities (NAICS 623)',
                'Oil and Gas Extraction (NAICS 211)',
                'Other Information Services (NAICS 519)',
                'Other Services (except Public Administration) (NAICS 81)',
                'Paper Manufacturing (NAICS 322)',
                'Performing Arts, Spectator Sports, and Related Industries (NAICS 711)',
                'Personal and Laundry Services (NAICS 812)',
                'Petroleum and Coal Products Manufacturing (NAICS 324)',
                'Pipeline Transportation (NAICS 486)',
                'Plastics and Rubber Products Manufacturing (NAICS 326)',
                'Postal Service (NAICS 491)',
                'Primary Metal Manufacturing (NAICS 331)',
                'Printing and Related Support Activities (NAICS 323)',
                'Private Households (NAICS 814)',
                'Professional and Business Services',
                'Professional, Scientific, and Technical Services (NAICS 54)',
                'Publishing Industries (except Internet) (NAICS 511)',
                'Rail Transportation (NAICS 482)',
                'Real Estate (NAICS 531)',
                'Real Estate and Rental and Leasing (NAICS 53)',
                'Religious, Grantmaking, Civic, Professional, and Similar Organizations (NAICS 813)',
                'Rental and Leasing Services (NAICS 532)',
                'Repair and Maintenance (NAICS 811)',
                'Retail Trade (NAICS 44-45)',
                'Scenic and Sightseeing Transportation (NAICS 487)',
                'Securities, Commodity Contracts, and Other Financial Investments and Related Activities (NAICS 523)',
                'Service-Providing Industries',
                'Social Assistance (NAICS 624)',
                'Specialty Trade Contractors (NAICS 238)',
                'Sporting Goods, Hobby, Book, and Music Stores (NAICS 451)',
                'Support Activities for Agriculture and Forestry (NAICS 115)',
                'Support Activities for Mining (NAICS 213)',
                'Support Activities for Transportation (NAICS 488)',
                'Telecommunications (NAICS 517)',
                'Textile Mills (NAICS 313)',
                'Textile Product Mills (NAICS 314)',
                'Trade, Transportation, and Utilities',
                'Transit and Ground Passenger Transportation (NAICS 485)',
                'Transportation Equipment Manufacturing (NAICS 336)',
                'Transportation and Warehousing (NAICS 48-49)',
                'Truck Transportation (NAICS 484)',
                'Utilities (NAICS 22)',
                'Warehousing and Storage (NAICS 493)',
                'Waste Management and Remediation Services (NAICS 562)',
                'Water Transportation (NAICS 483)',
                'Wholesale Electronic Markets and Agents and Brokers (NAICS 425)',
                'Wholesale Trade (NAICS 42)',
                'Wood Product Manufacturing (NAICS 321)'
            ]),],
            'type' => ['required',Rule::in(['A', 'B','C'])],
        ];
    }
}
