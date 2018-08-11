import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumbs from './../index';
import Breadcrumb from './../../Breadcrumb/index';

describe('<Breadcrumbs/>', () => {
    it('should have a aria-label attribute for accessibility', () => {
        const component = shallow(
           <Breadcrumbs>
                <Breadcrumb label="Parent entity" />
            </Breadcrumbs>,
        );

        expect(component.find('[aria-label="Breadcrumbs"]').exists()).toBe(true);
    });
});