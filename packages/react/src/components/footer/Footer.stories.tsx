import React from 'react';
import { storiesOf } from '@storybook/react';

import Footer from './Footer';

(Footer as React.FC).displayName = 'Footer';

storiesOf('Footer', module).add('Footer', () => <Footer>Footer</Footer>);
