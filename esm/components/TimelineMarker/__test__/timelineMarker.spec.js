import React from 'react';
import { mount } from 'enzyme';
import ActivityTimeline from '../../ActivityTimeline';
import TimelineMarker from '../index';
import BasicTimelineMarker from '../basicMarker';
import AccordionTimelineMarker from '../accordionMarker';
describe('<TimelineMarker/>', function() {
    it('should render a basic marker', function() {
        var component = mount(
            React.createElement(ActivityTimeline, null, React.createElement(TimelineMarker, null)),
        );
        expect(component.find(BasicTimelineMarker).exists()).toBe(true);
        expect(component.find(AccordionTimelineMarker).exists()).toBe(false);
    });
    it('should render an accordion marker when variant is accordion', function() {
        var component = mount(
            React.createElement(
                ActivityTimeline,
                {
                    variant: 'accordion',
                },
                React.createElement(TimelineMarker, {
                    isLoading: true,
                }),
            ),
        );
        expect(component.find(BasicTimelineMarker).exists()).toBe(false);
        expect(component.find(AccordionTimelineMarker).exists()).toBe(true);
    });
});
