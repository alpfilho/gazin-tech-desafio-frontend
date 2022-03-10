import React, { Dispatch, SetStateAction, useCallback, useEffect, useRef } from 'react';

import { ItemContainer } from './item.styles';

interface ItemI {
	isFirstItem: boolean;
	setItemWidth: Dispatch<SetStateAction<number>>;
}

export const Item: React.FC<ItemI> = ({ children, isFirstItem, setItemWidth }) => {
	const itemRef = useRef<HTMLDivElement>(null);

	const getItemWidth = useCallback(() => {
		if (itemRef.current) {
			return itemRef.current.getBoundingClientRect().width;
		}
		return 0;
	}, []);

	useEffect(() => {
		if (isFirstItem) {
			setItemWidth(getItemWidth());
		}
	}, [isFirstItem, getItemWidth, setItemWidth]);

	return <ItemContainer ref={itemRef}>{children}</ItemContainer>;
};
