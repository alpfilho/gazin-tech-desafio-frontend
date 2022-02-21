import { useContext } from 'react';

import { ViewportContextStateI } from './context/viewport.types';
import { ViewportContext } from './context';

export const useViewport = (): ViewportContextStateI => {
	return useContext(ViewportContext);
};
