import React from 'react';

import { DeviceSwitcher } from '@components/deviceSwitcher';

import { DesktopHeader } from './desktop';
import { MobileHeader } from './mobile';

export const Header: React.FC = () => {
	return <DeviceSwitcher desktop={<DesktopHeader />} tablet={<MobileHeader />} />;
};
