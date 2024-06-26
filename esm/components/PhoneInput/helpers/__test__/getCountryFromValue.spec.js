import { getCountryFromValue } from '..';
var usa = {
    countryCode: '+1',
    country: 'United States',
    isoCode: 'us',
};
var countries = [
    {
        countryCode: '+44',
        country: 'United Kingdom',
        isoCode: 'gb',
    },
    {
        countryCode: '+598',
        country: 'Uruguay',
        isoCode: 'uy',
    },
    {
        countryCode: '+998',
        country: 'Uzbekistan',
        isoCode: 'uz',
    },
];
jest.mock('../../countries', function() {
    return [
        {
            countryCode: '+1',
            country: 'United States',
            isoCode: 'us',
        },
    ];
});
describe('findCountryByIsoCode', function() {
    it('should return a right country', function() {
        var uruguay = countries[1];
        expect(getCountryFromValue('uy', countries)).toEqual(uruguay);
    });
    it('should return United States country', function() {
        var isoCodes = ['es', false];
        isoCodes.forEach(function(isoCode) {
            return expect(getCountryFromValue(isoCode, [].concat(countries, [usa]))).toEqual(usa);
        });
    });
    it('should return United Kingdom country', function() {
        var unitedKingdom = countries[0];
        expect(getCountryFromValue('es', countries)).toEqual(unitedKingdom);
    });
    it('should return United States country when countries is empty array', function() {
        expect(getCountryFromValue('us', [])).toEqual(usa);
    });
});
