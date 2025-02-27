// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.
import ReactComponents from "../react-components";
import React from "react";
import {mount} from 'enzyme';

describe('Badges', () => {
  it('renders a list of badges', () => {
    const el = mount(
      <ReactComponents.BadgeList elements={['foo', 'bar']} removeBadge={() => {}} />
    );

    expect(el.find('.badge').length).toBe(2);
  });

  it('supports custom label formatters', () => {
    const el = mount(
      <ReactComponents.BadgeList elements={['foo', 'bar']} removeBadge={() => {}} getLabel={(el) => { return el + 'foo'; }} />
    );

    expect(el.find('.badge').first().text()).toBe('foofoo×');
    expect(el.find('.badge').last().text()).toBe('barfoo×');
  });

});
